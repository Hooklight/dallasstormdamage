import {
  pgTable, pgEnum, uuid, text, timestamp, boolean,
  decimal, integer,
} from "drizzle-orm/pg-core";

// ── Enums ──────────────────────────────────────────────────────────────
export const damageTypeEnum = pgEnum("damage_type", ["hail", "wind", "leak", "other"]);

export const leadStatusEnum = pgEnum("lead_status", [
  "new",
  "contacted",
  "inspection_scheduled",
  "inspection_completed",
  "estimate_delivered",
  "closed_won",
  "closed_lost",
  "spam",
]);

export const insuranceFiledEnum = pgEnum("insurance_filed", ["yes", "no", "not_sure"]);

export const partnerStatusEnum = pgEnum("partner_status", ["active", "inactive"]);

// ── Partners ───────────────────────────────────────────────────────────
export const partners = pgTable("partners", {
  id:                   uuid("id").primaryKey().defaultRandom(),
  name:                 text("name").notNull(),
  company:              text("company").notNull(),
  phone:                text("phone").notNull(),
  email:                text("email").notNull(),
  status:               partnerStatusEnum("status").notNull().default("active"),
  is_primary:           boolean("is_primary").notNull().default(false),
  sla_response_minutes: integer("sla_response_minutes").notNull().default(60),
  notes:                text("notes"),
  created_at:           timestamp("created_at").notNull().defaultNow(),
});

// ── Leads ──────────────────────────────────────────────────────────────
export const leads = pgTable("leads", {
  id:              uuid("id").primaryKey().defaultRandom(),
  created_at:      timestamp("created_at").notNull().defaultNow(),

  // Contact info
  name:            text("name").notNull(),
  phone:           text("phone").notNull(),
  address_or_zip:  text("address_or_zip").notNull(),

  // Damage info
  damage_type:     damageTypeEnum("damage_type").notNull(),
  description:     text("description"),
  is_emergency:    boolean("is_emergency").notNull().default(false),
  insurance_filed: insuranceFiledEnum("insurance_filed"),

  // Attribution
  source_page:     text("source_page"),
  source_slug:     text("source_slug"),
  referrer_url:    text("referrer_url"),
  utm_source:      text("utm_source"),
  utm_medium:      text("utm_medium"),
  utm_campaign:    text("utm_campaign"),

  // Workflow
  status:          leadStatusEnum("status").notNull().default("new"),
  partner_id:      uuid("partner_id").references(() => partners.id),
  forwarded_at:    timestamp("forwarded_at"),

  // Outcomes
  reached:            boolean("reached"),
  first_contact_at:   timestamp("first_contact_at"),
  partner_notified_at:timestamp("partner_notified_at"),
  partner_responded_at:timestamp("partner_responded_at"),
  outcome_notes:      text("outcome_notes"),
  job_value:          decimal("job_value", { precision: 10, scale: 2 }),

  // Spam
  ip_address:      text("ip_address"),
  is_spam:         boolean("is_spam").notNull().default(false),
  spam_reason:     text("spam_reason"),
});

export type Lead    = typeof leads.$inferSelect;
export type Partner = typeof partners.$inferSelect;
