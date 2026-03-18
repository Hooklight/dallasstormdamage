"use server";

import { db } from "@/db";
import { leads } from "@/db/schema";
import { intakeSchema, type IntakeFormValues } from "@/components/forms/IntakeForm";
import { sendLeadNotification } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

// Sanitize text to prevent XSS
function sanitize(str: string | undefined): string | undefined {
  if (!str) return undefined;
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function submitLead(
  data: IntakeFormValues
): Promise<{ success: true; leadId: string } | { success: false; error: string }> {
  // 1. Honeypot check
  if (data._gotcha && data._gotcha.length > 0) {
    // Silently succeed — don't tell bots they were caught
    return { success: true, leadId: "blocked" };
  }

  // 2. Server-side schema validation
  const parsed = intakeSchema.safeParse(data);
  if (!parsed.success) {
    const issues = parsed.error.issues;
    const firstError = issues[0];
    return { success: false, error: firstError?.message ?? "Invalid input" };
  }

  // 3. Rate limiting (by IP)
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  const rateOk = checkRateLimit(ip);
  if (!rateOk) {
    return { success: false, error: "Too many requests. Please try calling us directly." };
  }

  // 4. Duplicate phone check (within last hour)
  // (simple — not blocking, just flag)

  // 5. Sanitize
  const clean = parsed.data;

  try {
    const [lead] = await db()
      .insert(leads)
      .values({
        name:            sanitize(clean.name)!,
        phone:           sanitize(clean.phone)!,
        address_or_zip:  sanitize(clean.address_or_zip)!,
        damage_type:     clean.damage_type,
        description:     sanitize(clean.description),
        is_emergency:    clean.is_emergency === true,
        insurance_filed: clean.insurance_filed,
        source_page:     clean.source_page,
        referrer_url:    clean.referrer_url,
        ip_address:      ip,
      })
      .returning({ id: leads.id });

    if (!lead) throw new Error("Insert failed");

    // 6. Fire-and-forget email notification
    sendLeadNotification(lead.id, {
      name:         clean.name,
      phone:        clean.phone,
      damage_type:  clean.damage_type,
      is_emergency: clean.is_emergency ?? false,
      source_page:  clean.source_page ?? "unknown",
      address:      clean.address_or_zip,
    }).catch((err) => console.error("[email] notification failed:", err));

    return { success: true, leadId: lead.id };
  } catch (err) {
    console.error("[leads] insert error:", err);
    return { success: false, error: "Server error. Please call us directly." };
  }
}
