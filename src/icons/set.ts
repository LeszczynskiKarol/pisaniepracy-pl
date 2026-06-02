// ─────────────────────────────────────────────────────────────────────────
// WŁASNY ZESTAW IKON — pisaniepracy.pl. Temat: edukacja / pisanie pracy dyplomowej.
// ZERO lucide/heroicons/iconify. Ręcznie rysowane, siatka 24×24, stroke=currentColor.
// ─────────────────────────────────────────────────────────────────────────
//
// Spójność: jedna grubość kreski (1.75 z Icon.astro), zaokrąglone końce/łączenia,
// ten sam poziom uproszczenia. Prymitywy UI są neutralne; ikony tematyczne
// (book-open, file-text, cpu, pen, compass, wallet, scale…) są zaprojektowane
// pod proces pisania pracy i lejek DIY / AI.
//
// Brakującą ikonę DODAJ tutaj (nowy klucz) — <Icon> rzuca błędem na nieznaną nazwę.

export const icons = {
  // ── Prymitywy UI ────────────────────────────────────────────────────────
  "arrow-right": `<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>`,
  "arrow-left": `<path d="M20 12H5"/><path d="m11 6-6 6 6 6"/>`,
  "arrow-up-right": `<path d="M7 17 17 7"/><path d="M8 7h9v9"/>`,
  "chevron-down": `<path d="m6 9 6 6 6-6"/>`,
  "chevron-right": `<path d="m9 6 6 6-6 6"/>`,
  "x": `<path d="M6 6 18 18"/><path d="M18 6 6 18"/>`,
  "menu": `<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>`,
  "check": `<path d="m5 12 4 4 10-10"/>`,
  "minus": `<path d="M5 12h14"/>`,
  "check-circle": `<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>`,
  "external-link": `<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>`,
  "mail": `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`,
  "search": `<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>`,
  "rss": `<circle cx="6" cy="18" r="1.4"/><path d="M5 11a8 8 0 0 1 8 8"/><path d="M5 5a14 14 0 0 1 14 14"/>`,

  // ── Tematyczne — proces pisania pracy / lejek ────────────────────────────

  // Otwarta książka — poradnik DIY, "jak napisać".
  "book-open": `<path d="M12 6.5C10.5 5.5 8 5 5.5 5H3v13h2.5c2.5 0 5 .5 6.5 1.5"/><path d="M12 6.5C13.5 5.5 16 5 18.5 5H21v13h-2.5c-2.5 0-5 .5-6.5 1.5"/><path d="M12 6.5v13"/>`,

  // Dokument z linijkami — sama praca dyplomowa (dłuższy tekst, magisterka).
  "file-text": `<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 16.5h4"/>`,

  // Chip — generator AI.
  "cpu": `<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5v2.5"/><path d="M15 2.5v2.5"/><path d="M9 19v2.5"/><path d="M15 19v2.5"/><path d="M2.5 9H5"/><path d="M2.5 15H5"/><path d="M19 9h2.5"/><path d="M19 15h2.5"/>`,

  // Iskry — AI / "zrób za mnie", wyróżnienie.
  "sparkles": `<path d="M12 3.5 13.8 8 18 9.5 13.8 11 12 15.5 10.2 11 6 9.5 10.2 8z"/><path d="M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"/>`,

  // Pióro — pisanie / redakcja.
  "pen": `<path d="M16.5 4.2a2 2 0 0 1 2.9 2.9L8 18.5l-4 1.2 1.2-4z"/><path d="M14 6.7 17.3 10"/>`,

  // Kompas — przewodnik / nawigacja po procesie.
  "compass": `<circle cx="12" cy="12" r="9"/><path d="m16.2 7.8-2.4 6-6 2.4 2.4-6z"/>`,

  // Portfel — koszty.
  "wallet": `<path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2"/><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M16 12.5h3"/><circle cx="16.5" cy="12.5" r=".4"/>`,

  // Kalendarz — harmonogram / czas.
  "calendar": `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9.5h18"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M7.5 13.5h3v3h-3z"/>`,

  // Lista z odhaczeniami — błędy / checklista.
  "list-checks": `<path d="m3 7 1.5 1.5L7.5 5"/><path d="m3 14 1.5 1.5L7.5 12"/><path d="M11 6.5h9"/><path d="M11 13.5h9"/><path d="M11 19.5h9"/>`,

  // Żarówka — od czego zacząć / motywacja / pomysł.
  "lightbulb": `<path d="M9.5 18h5"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.8 10.6c.8.7 1.3 1.4 1.3 2.4h5c0-1 .5-1.7 1.3-2.4A6 6 0 0 0 12 3z"/>`,

  // Waga — legalność / etyka.
  "scale": `<path d="M12 4v17"/><path d="M7 21h10"/><path d="M4.5 8h15"/><path d="M12 4 7 8M12 4l5 4"/><path d="m4.5 8-2.3 4.6a2.8 2.8 0 0 0 4.6 0z"/><path d="m19.5 8-2.3 4.6a2.8 2.8 0 0 0 4.6 0z"/>`,

  // Dymek — rozmowa z promotorem.
  "message": `<path d="M21 11.5a8 8 0 0 1-11.5 7.2L4 20.5l1.8-4.7A8 8 0 1 1 21 11.5z"/>`,

  // Czapka studencka — obrona / dyplom / brand.
  "graduation": `<path d="M2.5 9 12 5l9.5 4-9.5 4z"/><path d="M7 11.2V15c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2v-3.8"/><path d="M21.5 9v5"/>`,

  // Zegar — czas / "ile zajmuje".
  "clock": `<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>`,

  // Warstwy — architektura treści / klastry.
  "layers": `<path d="M12 3 3 8l9 5 9-5z"/><path d="M3 13l9 5 9-5"/>`,

  // Rozgałęzienie — porównanie ścieżek / rozdzielacz decyzyjny.
  "git-branch": `<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7"/><path d="M18 10.5a6 6 0 0 1-6 6H8.5"/>`,

  // Tarcza — wiarygodność / zaufanie.
  "shield-check": `<path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6z"/><path d="m9 12 2 2 4-4"/>`,
} as const;

export type IconName = keyof typeof icons;
