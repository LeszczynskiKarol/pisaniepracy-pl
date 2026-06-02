# Design system — pisaniepracy.pl

**Preset**: editorial + nowoczesny twist (wybór Karola w wywiadzie launchowym)
**Mood**: dojrzały przewodnik doradczy z produktowym sznytem — spokojny, ale konkretny;
buduje zaufanie na wrażliwym temacie, nie jest „gazetą".

## Typografia
- **Sans (UI + nagłówki)**: Inter (400, 500, 600, 700, 800). Nagłówki bold/extrabold,
  tracking ujemny (−0.02em), gradient akcentu na hero H1.
- **Serif (prose artykułów)**: Source Serif 4 (400, 600, 400 italic) — ciepłe, czytelne
  long-form w blogu (`.prose`). Reszta strony pozostaje w sans (nowoczesny twist).
- Skala: 1.250 (major third). Base 17px.
- `--text-fs-display` clamp do 5.25rem na hero.

## Paleta — light
- bg: #fafafb · bg-elevated: #ffffff · bg-subtle: #f2f2f7
- text: #1a1a2e · text-muted: #55556a · text-faint: #9a9aae · border: #e6e6ee
- accent (indigo): #4f46e5 · accent-hover: #4338ca · accent-secondary (violet): #7c3aed
- accent-fg: #ffffff

## Paleta — dark
- bg: #0b0b14 · bg-elevated: #14141f · bg-subtle: #1c1c2a
- text: #f4f4fa · text-muted: #a6a6bc · text-faint: #6e6e85 · border: #262636
- accent (indigo-400): #818cf8 · accent-hover: #a5b4fc · accent-secondary: #c4b5fd
- accent-fg: #0b0b14 (ciemny tekst na jasnym przycisku akcentu)

Gradient hero/znak: indigo → violet (`from-accent to-accent-secondary`).

## Ikony
Własny zestaw SVG `src/icons/set.ts` (24×24, stroke=currentColor) — temat edukacja/pisanie:
book-open, file-text, cpu, sparkles, pen, compass, wallet, calendar, list-checks,
lightbulb, scale, message, graduation, git-branch + prymitywy UI. ZERO lucide/iconify.

## Komponenty kluczowe
- **Hero**: `HeroIllustration` (przeprojektowany) — manuskrypt z piórem → trzy węzły
  (poradnik / dokument / chip AI). Wizualizuje lejek „jeden proces → trzy drogi".
- **Logo**: wordmark „pisaniepracy.pl" (.pl w akcencie) + znak dokument-z-piórem w gradiencie.
- **DecisionSplitter**: rozdzielacz decyzyjny — 3 karty (DIY lic / DIY mgr / AI), CTA
  dofollow `target=_blank rel=noopener`. Reused na home (`#sciezki`) i na końcu artykułów
  klastra decyzja/wsparcie.
- **FeatureCard / StatBlock / IconBadge**: sekcja „co tu znajdziesz" + orientacyjne staty.
- **ArticleCard**: lista bloga (badge klastra + czas czytania + data PL).
- Karty: border + bg-elevated, hover unosi (-translate-y-0.5) + akcentowy border.

## Motion
Subtelnie (200–400ms). IntersectionObserver fade-in (klasa `.animate-on-scroll`).
`prefers-reduced-motion` wyłącza. Bez parallax. Hover linków bez underline poza prose.

## Rytm sekcji (anty-monotonia, anty-AI-slop)
hero (bg + mesh) → staty (bg-elevated) → przewodnik (bg) → proces (bg-subtle + dots) →
rozdzielacz (bg) → blog teaser (bg-elevated) → faq (bg) → footer (bg-elevated).
Dekory tła: tylko 2 (mesh hero + dots proces) — zgodnie z `feedback-no-glow-no-underline`.

## Inspirations
- Stripe / Linear (clean product-editorial chrome, gradient akcentu)
- Dojrzałe portale doradcze (whitespace, serif w long-formie)

## Co celowo pomijam
- Blur/poświata w każdej sekcji (max 1 mesh + 1 dots na stronę).
- Underline na wszystkich linkach (tylko w `.prose`).
- Parallax, lottie, smooth-scroll całostronicowy.
- Stat blocki z wymyślonymi liczbami (tylko faktyczne deskryptory: 3 ścieżki, od 29 zł…).
