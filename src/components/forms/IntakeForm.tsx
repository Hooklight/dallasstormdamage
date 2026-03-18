"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { TrackedPhone } from "@/components/ui/TrackedPhone";
import { PHONE_NUMBER } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { submitLead } from "@/app/actions/leads";

// ── Schema ──────────────────────────────────────────────────────────────
const damageTypes     = ["hail", "wind", "leak", "other"] as const;
const insuranceValues = ["yes", "no", "not_sure"] as const;

export const intakeSchema = z.object({
  name:            z.string().min(2, "Name is required"),
  phone:           z.string().regex(/^\D*(\d\D*){10}$/, "Please enter a valid 10-digit US phone number"),
  address_or_zip:  z.string().min(3, "Address or ZIP is required"),
  damage_type:     z.enum(damageTypes, { error: "Please select damage type" }),
  description:     z.string().max(500).optional(),
  insurance_filed: z.enum(insuranceValues).optional(),
  is_emergency:    z.boolean().optional(),
  source_page:     z.string().optional(),
  referrer_url:    z.string().optional(),
  // Honeypot
  _gotcha:         z.string().max(0).optional(),
});

export type IntakeFormValues = z.infer<typeof intakeSchema>;

// ── Props ────────────────────────────────────────────────────────────────
interface IntakeFormProps {
  sourcePage?:       string;
  presetEmergency?:  boolean;
  className?:        string;
  compact?:          boolean;
}

// ── Field wrapper ────────────────────────────────────────────────────────
function Field({
  id, label, required, error, children, className,
}: {
  id: string; label: string; required?: boolean;
  error?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}{required && <span className="text-danger-600 ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-danger-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// ── Input styles ─────────────────────────────────────────────────────────
const inputClass = (error?: string) =>
  cn(
    "w-full rounded-lg border px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400",
    "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary-600",
    error
      ? "border-danger-600 bg-danger-50"
      : "border-slate-300 bg-white hover:border-slate-400",
  );

// ── Form ─────────────────────────────────────────────────────────────────
export function IntakeForm({ sourcePage = "unknown", presetEmergency = false, className, compact = false }: IntakeFormProps) {
  const [submitted, setSubmitted]   = useState(false);
  const [serverError, setServerErr] = useState<string | null>(null);

  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      source_page:  sourcePage,
      is_emergency: presetEmergency,
      referrer_url: typeof window !== "undefined" ? document.referrer : "",
    },
  });

  async function onSubmit(data: IntakeFormValues) {
    setServerErr(null);
    try {
      const result = await submitLead(data);
      if (result.success) {
        setSubmitted(true);
        if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
          (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
            event:       "lead_submitted",
            damage_type:  data.damage_type,
            is_emergency: data.is_emergency,
            source_page:  sourcePage,
          });
        }
      } else {
        setServerErr(result.error ?? "Something went wrong. Please call us directly.");
      }
    } catch {
      setServerErr("Unable to submit. Please call us directly.");
    }
  }

  // ── Success state ───────────────────────────────────────────────────
  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "rounded-xl bg-success-50 border border-success-600/30 p-6 text-center",
          className,
        )}
      >
        <div className="text-3xl mb-2">✅</div>
        <h3 className="text-lg font-bold text-success-700">We got your request!</h3>
        <p className="mt-1 text-sm text-slate-600">
          A local specialist will be in touch shortly.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Can&apos;t wait?{" "}
          <TrackedPhone className="font-semibold text-primary-700 underline">
            Call us now at {PHONE_NUMBER}
          </TrackedPhone>
        </p>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("flex flex-col gap-4", className)}
      aria-label="Request storm damage help"
    >
      {/* Honeypot (hidden from humans, filled by bots) */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="sr-only"
        {...register("_gotcha")}
      />
      <input type="hidden" {...register("source_page")} />
      <input type="hidden" {...register("referrer_url")} />

      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <Field id="name" label="Your Name" required error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(errors.name?.message)}
            {...register("name")}
          />
        </Field>

        <Field id="phone" label="Phone Number" required error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(214) 555-0100"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(errors.phone?.message)}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field id="address_or_zip" label="Address or ZIP Code" required error={errors.address_or_zip?.message}>
        <input
          id="address_or_zip"
          type="text"
          autoComplete="address-line1"
          placeholder="1234 Main St, Dallas TX 75201"
          aria-describedby={errors.address_or_zip ? "address_or_zip-error" : undefined}
          className={inputClass(errors.address_or_zip?.message)}
          {...register("address_or_zip")}
        />
      </Field>

      <Field id="damage_type" label="Type of Damage" required error={errors.damage_type?.message}>
        <select
          id="damage_type"
          aria-describedby={errors.damage_type ? "damage_type-error" : undefined}
          className={inputClass(errors.damage_type?.message)}
          {...register("damage_type")}
        >
          <option value="">Select damage type…</option>
          <option value="hail">Hail Damage</option>
          <option value="wind">Wind / Storm Damage</option>
          <option value="leak">Roof Leak (Emergency)</option>
          <option value="other">Other</option>
        </select>
      </Field>

      <Field id="description" label="Brief Description" error={errors.description?.message}>
        <textarea
          id="description"
          rows={3}
          placeholder="Tell us what happened — when the storm hit, what you see, how urgent it is…"
          aria-describedby={errors.description ? "description-error" : undefined}
          className={inputClass(errors.description?.message)}
          {...register("description")}
        />
      </Field>

      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <fieldset>
            <legend className="text-sm font-medium text-slate-700 mb-1">
              Insurance Claim Filed?
            </legend>
            <div className="flex gap-4">
              {(["yes", "no", "not_sure"] as const).map((v) => (
                <label key={v} className="flex items-center gap-1.5 text-sm text-slate-600 cursor-pointer">
                  <input type="radio" value={v} className="accent-primary-600" {...register("insurance_filed")} />
                  {v === "yes" ? "Yes" : v === "no" ? "No" : "Not Sure"}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex items-center gap-2">
            <input
              id="is_emergency"
              type="checkbox"
              className="h-4 w-4 rounded accent-danger-600"
              {...register("is_emergency")}
            />
            <label htmlFor="is_emergency" className="text-sm font-medium text-slate-700">
              🚨 This is an emergency (active leak / structural damage)
            </label>
          </div>
        </div>
      )}

      {serverError && (
        <p role="alert" className="text-sm text-danger-600 bg-danger-50 rounded-lg px-3 py-2">
          {serverError}{" "}
          <TrackedPhone className="font-semibold underline">
            Call us: {PHONE_NUMBER}
          </TrackedPhone>
        </p>
      )}

      <Button type="submit" size="lg" loading={isSubmitting} className="w-full mt-1">
        Get Help Now →
      </Button>

      <p className="text-xs text-center text-slate-400">
        No spam. We never share your information.
      </p>
    </form>
  );
}
