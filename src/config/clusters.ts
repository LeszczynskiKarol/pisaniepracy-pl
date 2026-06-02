// Klastry treści (kategorie bloga) — architektura z briefu (pillar + clustery).
//   A → "proces"   : informacyjny, buduje topical authority
//   B → "decyzja"  : komercyjny, konwertuje (koszt / sam vs zlecenie vs AI)
//   C → "wsparcie" : long tail, miękkie, buduje zaufanie
//
// Każdy klaster ma slug (URL: /blog/kategoria/<slug>), etykietę, opis i ikonę
// z własnego zestawu (src/icons/set.ts).

export type ClusterKey = "proces" | "decyzja" | "wsparcie";

export interface Cluster {
  key: ClusterKey;
  label: string;
  short: string;
  description: string;
  icon: string;
  /** czy artykuły z tego klastra domyślnie pokazują rozdzielacz decyzyjny */
  splitterByDefault: boolean;
}

export const CLUSTERS: Record<ClusterKey, Cluster> = {
  proces: {
    key: "proces",
    label: "Proces pisania",
    short: "Proces",
    description:
      "Jak napisać pracę krok po kroku — od pustej kartki i tematu, przez metodologię i harmonogram, po redakcję i obronę.",
    icon: "compass",
    splitterByDefault: false,
  },
  decyzja: {
    key: "decyzja",
    label: "Koszty i decyzje",
    short: "Decyzja",
    description:
      "Ile kosztuje napisanie pracy, ile zajmuje czasu i którą drogę wybrać: napisać samemu, zlecić czy wygenerować AI.",
    icon: "wallet",
    splitterByDefault: true,
  },
  wsparcie: {
    key: "wsparcie",
    label: "Motywacja i wsparcie",
    short: "Wsparcie",
    description:
      "Jak ruszyć z miejsca, dogadać się z promotorem i przejść przez stres przed obroną — miękka strona pisania pracy.",
    icon: "lightbulb",
    splitterByDefault: true,
  },
};

export const CLUSTER_ORDER: ClusterKey[] = ["proces", "decyzja", "wsparcie"];
