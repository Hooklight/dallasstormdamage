import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface LeadNotificationData {
  name:         string;
  phone:        string;
  damage_type:  string;
  is_emergency: boolean;
  source_page:  string;
  address:      string;
}

export async function sendLeadNotification(
  leadId: string,
  data:   LeadNotificationData
): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) {
    console.warn("[email] ADMIN_EMAIL not set — skipping notification");
    return;
  }

  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping notification");
    return;
  }

  const emergencyLabel = data.is_emergency ? "🚨 EMERGENCY — " : "";
  const subject        = `${emergencyLabel}New Lead: ${data.name} — ${data.damage_type} — ${new Date().toLocaleDateString("en-US", { timeZone: "America/Chicago" })}`;

  const html = `
    <h2 style="color:#1d4ed8;">New Storm Damage Lead</h2>
    ${data.is_emergency ? '<p style="color:#dc2626;font-weight:bold;font-size:16px;">🚨 EMERGENCY</p>' : ""}
    <table style="border-collapse:collapse;width:100%;max-width:500px;">
      <tr><td style="padding:6px 12px;font-weight:bold;background:#f1f5f9;">Name</td><td style="padding:6px 12px;">${data.name}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;background:#f1f5f9;">Phone</td><td style="padding:6px 12px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;background:#f1f5f9;">Address</td><td style="padding:6px 12px;">${data.address}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;background:#f1f5f9;">Damage Type</td><td style="padding:6px 12px;">${data.damage_type}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;background:#f1f5f9;">Source Page</td><td style="padding:6px 12px;">${data.source_page}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;background:#f1f5f9;">Lead ID</td><td style="padding:6px 12px;font-family:monospace;">${leadId}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;background:#f1f5f9;">Time</td><td style="padding:6px 12px;">${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT</td></tr>
    </table>
    <p style="margin-top:16px;"><a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "https://dallasstormdamage.com"}/admin/leads/${leadId}" style="background:#2563eb;color:white;padding:8px 16px;border-radius:6px;text-decoration:none;font-weight:bold;">View Lead in Admin →</a></p>
  `;

  await resend.emails.send({
    from:    `${process.env.ADMIN_FROM_EMAIL ?? "leads@dallasstormdamage.com"}`,
    to:      adminEmail,
    subject,
    html,
  });

  console.log(`[email] Notification sent for lead ${leadId}`);
}
