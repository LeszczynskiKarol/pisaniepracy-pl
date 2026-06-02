// Central per-project site config for pisaniepracy.pl.
// Components and layouts read from here — NO hardcoded domain/brand values elsewhere.
//
// pisaniepracy.pl = przewodnik/baza wiedzy o pisaniu pracy dyplomowej. Nie sprzedaje
// niczego bezpośrednio — poleca dopasowane zasoby (src/config/targets.ts).
// Stąd: brak sklepu, brak /regulamin, brak formularza. Blog ON (to content hub).

export const siteConfig = {
  // Brand
  name: "Pisaniepracy.pl",
  shortName: "pisaniepracy.pl",
  url: "https://www.pisaniepracy.pl",
  locale: "pl_PL",
  lang: "pl",

  // Krótki opis używany w meta/JSON-LD
  tagline: "Przewodnik po pisaniu pracy dyplomowej",
  description:
    "Przewodnik po pisaniu pracy licencjackiej i magisterskiej: proces krok po kroku, realne koszty i porównanie ścieżek — samemu, na zlecenie czy z AI.",

  // Legal — UZUPEŁNIJ NIP / adres / nazwę administratora przed pełnym ruchem.
  // (Placeholdery oznaczone w LAUNCH-REPORT.md jako TODO Karola.)
  legal: {
    adminName: "ADMIN_NAME_PLACEHOLDER",
    adminAddress: "ADMIN_ADDRESS_PLACEHOLDER",
    adminNip: "NIP_PLACEHOLDER",
    adminEmail: "kontakt@pisaniepracy.pl",
  },

  // Feature flags
  features: {
    // GA4 measurement ID — auto-provisioned (property properties/540022491).
    ga4: "G-E56ZCHW36R" as string | null,

    // Hub nie ma formularza — przekierowuje ruch dalej.
    contactForm: false,
    contactFormAttachments: false,

    // Nic nie sprzedaje na tej domenie → brak /regulamin.
    hasShop: false,

    // Content hub → blog WŁĄCZONY.
    hasBlog: true,
  },

  // Contact (footer / structured data)
  contact: {
    email: "kontakt@pisaniepracy.pl",
    phone: null as string | null,
  },
} as const;

export type SiteConfig = typeof siteConfig;
