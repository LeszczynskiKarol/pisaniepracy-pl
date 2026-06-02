// ─────────────────────────────────────────────────────────────────────────
// Polecane zasoby — pisaniepracy.pl rekomenduje konkretne narzędzia/poradniki
// dopasowane do TYPU pracy i intencji czytelnika:
//
//   • licencjat (sam)   → licencjackie.pl/ebook        (poradnik 29 zł)
//   • magisterka (sam)  → praca-magisterska.pl/sklep   (poradnik 39 zł)
//   • z pomocą AI        → smart-edu.ai                 (narzędzie AI)
//
// Zasady linkowania w treści (naturalna różnorodność anchorów):
//   ~60% brandowe / URL, ~30% generyczne, ~10% dopasowane do frazy — oszczędnie.
//   Bez powtarzania identycznego anchora w wielu miejscach.
//   Linki: target=_blank + rel="noopener" (czytelnik zostaje na stronie).
//   W treści artykułu maksymalnie 1–2 odnośniki polecające.
// ─────────────────────────────────────────────────────────────────────────

export type TargetKey = "licencjat" | "magisterka" | "ai";

export interface MoneyTarget {
  key: TargetKey;
  /** intencja użytkownika, którą ten cel obsługuje */
  intent: string;
  /** nagłówek karty w rozdzielaczu decyzyjnym */
  cardTitle: string;
  /** 1–2 zdania pod nagłówkiem karty */
  cardDesc: string;
  /** etykieta CTA na karcie */
  ctaLabel: string;
  /** docelowy URL (pełny) */
  url: string;
  /** marka docelowa — do anchorów brandowych */
  brand: string;
  /** cena (jeśli produkt) */
  price?: string;
  /** ikona z src/icons/set.ts */
  icon: string;
  /** czy to ścieżka "zrób sam" (DIY) czy "zrób za mnie" (AI) */
  mode: "diy" | "ai";
  /**
   * Pula anchorów wg polityki. Artykuły wybierają wariant, żeby nie powtarzać
   * tego samego tekstu kotwicy. Proporcja użycia: brand ~60% / generic ~30% / exact ~10%.
   */
  anchors: {
    brand: string[];
    generic: string[];
    exact: string[];
  };
}

export const MONEY_TARGETS: Record<TargetKey, MoneyTarget> = {
  licencjat: {
    key: "licencjat",
    intent: "Chcę napisać pracę licencjacką samodzielnie",
    cardTitle: "Piszę licencjat sam",
    cardDesc:
      "Poradnik PDF krok po kroku: od tematu i planu, przez metodologię, po obronę. Konkretnie, bez lania wody.",
    ctaLabel: "Zobacz poradnik (29 zł)",
    url: "https://licencjackie.pl/ebook",
    brand: "licencjackie.pl",
    price: "29 zł",
    icon: "book-open",
    mode: "diy",
    anchors: {
      brand: [
        "poradnik na licencjackie.pl",
        "ebook na licencjackie.pl",
        "licencjackie.pl/ebook",
        "przewodnik z licencjackie.pl",
      ],
      generic: [
        "gotowy poradnik PDF",
        "ten poradnik",
        "kompletny przewodnik krok po kroku",
      ],
      exact: ["jak napisać pracę licencjacką"],
    },
  },
  magisterka: {
    key: "magisterka",
    intent: "Chcę napisać pracę magisterską samodzielnie",
    cardTitle: "Piszę magisterkę sam",
    cardDesc:
      "Poradnik PDF dla pracy magisterskiej — większa skala, głębsza metodologia, wyższe wymagania promotora.",
    ctaLabel: "Zobacz poradnik (39 zł)",
    url: "https://praca-magisterska.pl/sklep",
    brand: "praca-magisterska.pl",
    price: "39 zł",
    icon: "file-text",
    mode: "diy",
    anchors: {
      brand: [
        "poradnik na praca-magisterska.pl",
        "ebook na praca-magisterska.pl",
        "praca-magisterska.pl/sklep",
        "przewodnik z praca-magisterska.pl",
      ],
      generic: [
        "gotowy poradnik PDF dla magistrantów",
        "ten poradnik",
        "przewodnik po pracy magisterskiej",
      ],
      exact: ["jak napisać pracę magisterską"],
    },
  },
  ai: {
    key: "ai",
    intent: "Chcę, żeby pracę przygotowało za mnie narzędzie AI",
    cardTitle: "Generuję z pomocą AI",
    cardDesc:
      "Narzędzie, które tworzy szkic i rozdziały pracy na podstawie tematu i wytycznych. Dla tych, którym goni czas.",
    ctaLabel: "Sprawdź Smart-Edu.ai",
    url: "https://smart-edu.ai",
    brand: "Smart-Edu.ai",
    price: undefined,
    icon: "cpu",
    mode: "ai",
    anchors: {
      brand: [
        "sprawdź Smart-Edu.ai",
        "Smart-Edu.ai",
        "narzędzie Smart-Edu.ai",
      ],
      generic: ["to narzędzie", "generator pracy oparty na AI", "tutaj"],
      exact: ["generator prac AI"],
    },
  },
};

/** Kolejność wyświetlania w rozdzielaczu: dwie ścieżki DIY, potem AI. */
export const DECISION_ORDER: TargetKey[] = ["licencjat", "magisterka", "ai"];

/** Wspólne atrybuty linku wychodzącego do celu $. */
export const TARGET_LINK_ATTRS = {
  target: "_blank",
  rel: "noopener",
} as const;
