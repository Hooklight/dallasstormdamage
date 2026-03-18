export const colors = {
  primary: {
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
  },
  accent: {
    500: "#f97316",
    600: "#ea580c",
  },
  storm: {
    dark:  "#0f172a",
    steel: "#334155",
    mist:  "#94a3b8",
    light: "#f1f5f9",
  },
} as const;

export const PHONE_NUMBER      = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "(214) 555-0100";
export const PHONE_NUMBER_RAW  = process.env.NEXT_PUBLIC_PHONE_NUMBER_RAW ?? "2145550100";
export const BUSINESS_NAME     = "DallasStormDamage.com";
export const BUSINESS_TAGLINE  = "Fast local help after hail, wind, and roof leaks.";
export const BUSINESS_AREA     = "Dallas–Fort Worth, TX";
export const DISCLOSURE        = "We are not a licensed contractor. We help Dallas homeowners document damage and connect with vetted local specialists.";
