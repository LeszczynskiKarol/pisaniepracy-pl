---
# ─────────────────────────────────────────────────────────────────────
# FORMAT ARTYKUŁU — pisaniepracy.pl
# Ten plik (z prefiksem "_") NIE jest budowany — to wzorzec do kopiowania.
# Skopiuj go pod nazwą <slug>.md (slug = URL: /blog/<slug>/), zdejmij draft.
# Walidacja pól: src/content.config.ts (zod rzuci błędem przy złym formacie).
# ─────────────────────────────────────────────────────────────────────

# WYMAGANE
title: "Tytuł ≤ 70 znaków — to też SEO <title>"
description: "Meta description ≤ 165 znaków. Konkret, korzyść, fraza. Bez clickbaitu."
pubDate: 2026-06-02            # data publikacji (YYYY-MM-DD)
cluster: "decyzja"            # proces | decyzja | wsparcie  (klaster A/B/C z briefu)

# OPCJONALNE
# updatedDate: 2026-07-01
author: "Redakcja pisaniepracy.pl"
tags: ["koszt", "licencjat", "magisterka"]
# heroImage: "/blog/slug/hero.webp"
# heroImageAlt: "Opis obrazka"

# Które polecane zasoby są naturalne dla tego artykułu.
# Klucze: licencjat | magisterka | ai  (src/config/targets.ts).
# Steruje rozdzielaczem na końcu (pokazuje tylko wybrane karty).
decisionTargets: ["licencjat", "magisterka", "ai"]
# showSplitter: true          # nadpisuje domyślną wartość klastra
featured: false
draft: true                   # true = widoczny tylko w `astro dev`, NIE na produkcji
---

Pierwszy akapit (lead): 2–3 zdania, wchodzą od razu w problem czytelnika.
Bez „w dzisiejszych czasach", bez triady przymiotników, bez retorycznych pytań.
Pisz „ty", konkretnie, jak człowiek do człowieka.

## Śródtytuł H2 — jeden wątek na sekcję

Treść. Listy, gdy to porządkuje:

- punkt pierwszy,
- punkt drugi,
- punkt trzeci.

### H3 dla detali w obrębie sekcji

Odnośniki **polecające** wstawiaj kontekstowo i OSZCZĘDNIE — max 1–2 w treści artykułu.
Dobieraj anchor wg zasad różnorodności (≈60% brand/URL, ≈30% generic, ≈10% dopasowany),
warianty są w `src/config/targets.ts`. Przykład naturalnego linku brandowego:
[poradnik na licencjackie.pl](https://licencjackie.pl/ebook).

> Cytat / wyróżnienie, gdy potrzebny akcent.

## Podsumowanie

Zbierz wnioski w 2–3 zdaniach. Rozdzielacz decyzyjny (trzy ścieżki) renderuje się
AUTOMATYCZNIE na końcu artykułów z klastra `decyzja` i `wsparcie` — nie wstawiaj go
ręcznie w treści.
