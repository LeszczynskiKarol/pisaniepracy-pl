---
title: "Analiza statystyczna w pracy dyplomowej: korelacja i test istotności"
description: "Korelacja Pearsona i Spearmana, hipoteza zerowa, poziom istotności p i test t. Jak zmierzyć zależność między zmiennymi i nie pomylić istotności z przyczyną."
pubDate: 2026-08-21
cluster: "proces"
author: "Redakcja pisaniepracy.pl"
tags: ["statystyka", "analiza danych", "korelacja", "badania", "proces", "magisterka", "licencjat"]
decisionTargets: ["licencjat", "magisterka"]
showSplitter: true
draft: false
---

Masz arkusz pełen odpowiedzi z ankiety i podejrzenie, że jedna rzecz wiąże się z drugą: im dłuższy staż, tym niższe zaangażowanie, im wyższe zarobki, tym rzadsze myśli o odejściu. Procenty tego nie rozstrzygną. Recenzent nie pyta, ile osób odpowiedziało „tak", tylko czy zauważona zależność jest realna, czy to przypadek, który przy innej próbie by zniknął. Na to pytanie odpowiada analiza statystyczna. Poniżej rozkładamy ją na części, które musisz opisać i zrozumieć: jak skala pomiaru decyduje o dobranym teście, czym jest korelacja i jak czytać jej siłę, dlaczego związek to jeszcze nie przyczyna, jak działa hipoteza zerowa z poziomem istotności i czym różni się wynik istotny statystycznie od wyniku, który naprawdę coś znaczy.

## Od procentów do zależności

Rozkład odpowiedzi, czyli ile osób wybrało każdą opcję, to dopiero opis. Statystyka zaczyna się tam, gdzie chcesz powiedzieć coś o relacji między dwiema cechami. Marcin Zajenkowski w rozdziale o korelacji definiuje ją prosto: to miara tego, w jakim stopniu dwie zmienne są ze sobą powiązane, opisująca siłę i kierunek tego powiązania (Zajenkowski, 2021, s. 8). Zamiast dwóch osobnych rozkładów dostajesz jedną liczbę, która mówi, czy wartości jednej cechy układają się względem drugiej.

Ta liczba robi w pracy coś, czego procent nie potrafi. Pozwala przejść od zdania „62% badanych deklaruje wysoką satysfakcję" do zdania „satysfakcja rośnie wraz ze stażem pracy". Pierwsze opisuje grupę, drugie stawia tezę o zależności, którą można sprawdzić i albo potwierdzić, albo obalić. Dlatego rozdział ze statystyką zaczyna się nie od liczb, tylko od hipotez postawionych wcześniej. Jeśli nie masz ich jeszcze dopracowanych, wróć do tekstu o tym, jak formułować [cel, pytania badawcze i hipotezy](/blog/cel-pytania-badawcze-i-hipotezy-w-pracy-dyplomowej/), bo to one wyznaczają, co z czym w ogóle warto korelować.

## Skala pomiaru decyduje o teście

Zanim policzysz cokolwiek, sprawdź, w jakiej skali masz dane. To nie formalność. Iwona Jażdżewska w podręczniku *Statystyka* ostrzega, że część metod statystycznych wolno stosować jedynie dla danych w określonej skali, a bezmyślne puszczenie programu na danych w złej skali prowadzi do błędnych wniosków i nierzetelnych analiz (Jażdżewska, 2019, s. 16). Innymi słowy, poprawny wzór policzony na niewłaściwym typie danych daje wynik, który wygląda naukowo i nie znaczy nic.

Skale dzielą się na cztery poziomy. Cechy jakościowe mierzy się skalami słabymi, nominalną i porządkową, a cechy ilościowe skalami mocnymi, interwałową i ilorazową (Jażdżewska, 2019, s. 16). Płeć albo kierunek studiów to skala nominalna, bo kategorii nie da się uszeregować. Poziom wykształcenia albo ocena w rankingu to skala porządkowa, można je ustawić w kolejności, ale odstępy nie są równe. Wiek w latach albo dochód w złotych to skale mocne, gdzie odległości mają sens. Od tego, w której skali jest Twoja zmienna, zależy dobór narzędzia.

| Skala danych | Przykład zmiennej | Właściwa miara związku |
| --- | --- | --- |
| Nominalna (jakościowa) | płeć, kierunek studiów | współczynnik Φ (phi), test chi-kwadrat |
| Porządkowa (jakościowa) | wykształcenie, miejsce w rankingu | korelacja rangowa Spearmana |
| Interwałowa lub ilorazowa (ilościowa) | wiek, dochód, wynik testu | korelacja liniowa Pearsona |

Zależność między dwiema cechami mierzalnymi liczy się współczynnikiem korelacji liniowej Pearsona; dla danych porządkowych sięga się po współczynnik rangowy Spearmana, a dla cech nominalnych po miary oparte na tablicach, takie jak współczynnik Φ Yule'a (Jażdżewska, 2019, s. 156, 160, 162). Wybór nie jest kwestią gustu. Puszczenie Pearsona na skali porządkowej to dokładnie ten błąd, przed którym ostrzega cytat powyżej.

## Korelacja: siła i kierunek

Współczynnik korelacji przyjmuje wartości od minus jeden do plus jeden. Znak mówi o kierunku, a wartość bezwzględna o sile. Jażdżewska opisuje to na najprostszej procedurze: gdy wraz ze wzrostem jednej cechy rosną wartości drugiej, mamy korelację dodatnią, gdy jedna rośnie, a druga maleje, korelację ujemną, a brak wyraźnej zależności oznacza, że korelacji nie ma (Jażdżewska, 2019, s. 146). Bywa też, że zależność zmienia kierunek w połowie zakresu i wtedy mówimy o korelacji krzywoliniowej, której współczynnik liniowy Pearsona nie wychwyci.

Sam znak i wartość to jednak za mało, trzeba je jeszcze zinterpretować. W naukach społecznych stosuje się orientacyjną klasyfikację siły związku, którą warto podać w pracy jako punkt odniesienia.

<div class="stat-row">
  <div class="stat-card"><span class="stat-value">|r| do 0,2</span><span class="stat-label">brak korelacji albo związek pomijalny</span></div>
  <div class="stat-card"><span class="stat-value">0,2–0,4</span><span class="stat-label">korelacja słaba</span></div>
  <div class="stat-card"><span class="stat-value">0,4–0,7</span><span class="stat-label">korelacja umiarkowana (średnia)</span></div>
  <div class="stat-card"><span class="stat-value">0,7–0,9</span><span class="stat-label">korelacja silna</span></div>
  <div class="stat-card"><span class="stat-value">powyżej 0,9</span><span class="stat-label">korelacja bardzo silna</span></div>
</div>

Te progi nie są prawem natury i tu tkwi pułapka. Jacob Cohen, który spopularyzował ocenę wielkości efektu, przestrzegał, żeby nie traktować takich granic sztywno, bo to samo 0,9 socjolog nazwie związkiem bardzo silnym, a fizyk pracujący na precyzyjnych pomiarach uzna za słaby. Sens liczby zależy od dziedziny i tego, co się w niej zwykle uzyskuje. Dobrze widać to na realnych danych. Badania nad związkiem inteligencji z ocenami szkolnymi dają korelacje od 0,40 do 0,70, czyli od umiarkowanej do silnej, i w psychologii uchodzi to za związek mocny (Zajenkowski, 2021, s. 19). W badaniach nad skutecznością metod selekcji pracowników test inteligencji korelował z jakością pracy na poziomie 0,51, ustrukturyzowana rozmowa kwalifikacyjna tak samo, sprawdzenie referencji już tylko 0,26, a analiza grafologiczna praktycznie zero (Zajenkowski, 2021, s. 22). Współczynnik około 0,5 okazuje się tu jednym z najlepszych dostępnych predyktorów, choć w innej dziedzinie brzmiałby skromnie.

## Związek to jeszcze nie przyczyna

To najczęstsze nadużycie w rozdziałach empirycznych i najłatwiejszy cel dla recenzenta. Jażdżewska formułuje zasadę wprost: każde narzędzie korelacji określa związek między zmiennymi, ale istnienie związku nie oznacza przyczynowości (Jażdżewska, 2019, s. 146). Współczynnik pokazuje, że dwie cechy zmieniają się razem. Nie mówi, że jedna wywołuje drugą.

Klasyczne przykłady tłumaczą to lepiej niż definicja. Sprzedaż lodów koreluje dodatnio z liczbą utonięć, bo obie rzeczy rosną latem, a nie dlatego, że lody topią pływaków. Liczba bocianów w regionie bywa skorelowana z liczbą urodzeń, choć trzecia zmienna, wiejski charakter okolicy, tłumaczy jedno i drugie. W pracy dyplomowej ten błąd wygląda niewinnie: „wykazana korelacja dowodzi, że praca zdalna obniża zaangażowanie". Nie dowodzi. Pokazuje współwystępowanie, którego przyczyną może być zmienna, o którą nikt nie pytał. Bezpieczne sformułowanie brzmi „odnotowano ujemną zależność między X a Y", a nie „X powoduje spadek Y". Rozstrzygnięcie kierunku przyczynowego wymaga innego planu badania, najczęściej [eksperymentu](/blog/eksperyment-jako-metoda-badawcza-w-pracy-dyplomowej/), a nie samej korelacji z ankiety.

## Hipoteza zerowa i poziom istotności

Załóżmy, że policzyłeś korelację na próbie stu osób i wyszło Ci minus 0,3. Skąd wiesz, że to prawdziwa zależność w całej populacji, a nie efekt tego, że akurat te sto osób trafiło się nietypowe? Do tego służy test istotności. Punktem wyjścia jest hipoteza zerowa, oznaczana H0, która zakłada, że w populacji zależności nie ma, czyli że współczynnik korelacji równa się zeru. Badanie ma dać podstawę albo do jej odrzucenia, albo do stwierdzenia, że takiej podstawy brak.

Kluczowe jest pojęcie poziomu istotności, oznaczanego grecką literą alfa. To z góry przyjęte ryzyko, że odrzucimy hipotezę zerową, choć była prawdziwa. Przy alfa równym 0,05 godzimy się na pomyłkę średnio w pięciu przypadkach na sto, przy 0,01 w jednym na sto (Jażdżewska, 2019, s. 164). Wnioski oparte na pewności co najmniej 95%, czyli przy prawdopodobieństwie błędu p poniżej 0,05, nazywa się istotnymi, a gdy prawdopodobieństwo błędu spada poniżej jednego promila, wysoce istotnymi (Jażdżewska, 2019, s. 165). W praktyce badawczej stosuje się najczęściej progi 0,05 i 0,01. Cała procedura ma cztery etapy, które warto opisać w pracy właśnie w tej kolejności.

<ul class="timeline">
  <li><span class="timeline-year">Etap 1</span> Sformułowanie hipotezy zerowej (i hipotezy alternatywnej do niej).</li>
  <li><span class="timeline-year">Etap 2</span> Wybór testu, czyli reguły weryfikacji hipotezy zerowej.</li>
  <li><span class="timeline-year">Etap 3</span> Ustalenie poziomu istotności i wyznaczenie obszaru krytycznego.</li>
  <li><span class="timeline-year">Etap 4</span> Wniosek: odrzucić hipotezę zerową albo uznać, że brak podstaw do jej odrzucenia.</li>
</ul>

Ten szkielet, opisany przez Jażdżewską (2019, s. 165), działa niezależnie od tego, jaki test wybierzesz. Dla istotności korelacji będzie to zwykle test t, dla różnicy między grupami test t albo analiza wariancji, dla cech nominalnych test chi-kwadrat. Zmienia się wzór, nie logika. Zawsze pytasz, czy wynik z próby jest na tyle wyraźny, żeby przy przyjętym ryzyku odrzucić założenie o braku zależności.

## Test istotności w praktyce

Warto zobaczyć, jak to wygląda na konkretnym badaniu, bo dopiero wtedy widać, że próg alfa nie jest formalnością. Piotr Adamczyk badał związek między stopą bezrobocia a współczynnikiem aktywności zawodowej ludności wiejskiej w polskich województwach. Do oceny siły i kierunku zależności użył korelacji liniowej Pearsona, a istotność sprawdzał testem t o rozkładzie t-Studenta, przy hipotezie zerowej mówiącej o braku korelacji (Adamczyk, 2011, s. 12). Wynik pokazuje, dlaczego wybór poziomu istotności bywa rozstrzygający.

Na poziomie istotności 0,05 wartość statystyki t przekroczyła wartość krytyczną tylko w dwóch latach z badanego okresu, co dało podstawę do odrzucenia hipotezy zerowej; w pozostałych latach takiej podstawy nie było. Gdyby jednak przyjąć łagodniejszy próg 0,1, korelacja okazałaby się statystycznie istotna w całym okresie (Adamczyk, 2011, s. 13). Ostateczny wniosek autora brzmiał ostrożnie: między stopą bezrobocia a aktywnością zawodową występuje umiarkowana korelacja ujemna, przy czym w kilku przypadkach, przy założonym poziomie istotności, okazała się nieistotna statystycznie (Adamczyk, 2011, s. 14). Ta uczciwość jest wzorem do naśladowania. Ten sam zbiór danych daje różne rozstrzygnięcia w zależności od tego, jakie ryzyko błędu przyjmiesz z góry, i dlatego próg alfa deklaruje się przed analizą, a nie dobiera po niej pod wynik.

## Istotność statystyczna to nie to samo co waga wyniku

Studenci mylą dwa różne pytania. „Czy zależność jest istotna statystycznie?" znaczy tylko tyle, że raczej nie wynika z przypadku. „Czy zależność jest ważna?" to pytanie o jej siłę i praktyczne znaczenie. Odpowiedzi bywają rozbieżne. Przy dużej próbie istotny statystycznie potrafi być związek tak słaby, że w praktyce nic z niego nie wynika, bo wartość p zależy nie tylko od siły efektu, ale też od liczebności próby. Zwiększając N, można dopchnąć do istotności korelację rzędu 0,08, która nie ma żadnego znaczenia merytorycznego.

Dlatego coraz częściej wymaga się, żeby obok wyniku testu podawać wielkość efektu, na przykład sam współczynnik korelacji jako miarę siły związku, a nie poprzestawać na samym „p poniżej 0,05". Warto też raportować przedział ufności, który pokazuje, w jakich granicach mieści się prawdziwa wartość w populacji. W pracy dyplomowej dobra praktyka wygląda tak: podaj współczynnik, podaj poziom istotności i dopiero na tej podstawie oceń, czy zależność jest zarazem realna i warta uwagi. Samo gwiazdkowanie wyników istotnych bez interpretacji siły to połowa analizy.

## Rzetelność narzędzia, zanim policzysz cokolwiek

Analiza statystyczna jest tak dobra, jak dane, które do niej wchodzą. Jeśli kwestionariusz mierzy niespójnie, żaden test tego nie naprawi. Dlatego przy skalach złożonych z wielu pytań sprawdza się ich rzetelność, najczęściej współczynnikiem alfa Cronbacha, który ocenia wewnętrzną spójność skali. Przyjmuje wartości od zera do jedności; za akceptowalny uznaje się zwykle wynik od 0,6 lub 0,7 w górę, a wartości bliskie 0,9 świadczą o wysokiej spójności.

Rzetelność to jednak nie wszystko, bo narzędzie może mierzyć spójnie rzecz, której wcale nie chcieliśmy zmierzyć. Drugim kryterium jest trafność, czyli to, czy narzędzie mierzy naprawdę to, co ma mierzyć. Widać to na przykładzie kwestionariusza przesiewowego wykrywającego niedosłuch u dzieci: uzyskał czułość 79% i swoistość 96%, a jego rzetelność, sprawdzona przy powtórzeniach, wyniosła r równe 0,89 (Dube, 2003, s. 2). Te trzy liczby razem mówią, że narzędzie działa spójnie i celnie. W pracy dyplomowej opartej na własnej ankiecie warto policzyć przynajmniej rzetelność skal, zanim przejdziesz do korelacji, a sam sposób budowy narzędzia opisaliśmy w tekście o [kwestionariuszu ankiety](/blog/kwestionariusz-ankiety-w-pracy-dyplomowej/).

## Czym to policzyć

Ręczne liczenie ze wzorów jest dziś potrzebne głównie po to, żeby rozumieć, co robi program. Sama analiza toczy się w oprogramowaniu, a wybór zależy od skali badania i tego, do czego masz dostęp na uczelni. W polskich pracach dyplomowych z nauk społecznych, psychologii i medycyny dominuje SPSS, ceniony za czytelny interfejs i brak konieczności programowania. Obok niego używa się Statistiki o podobnym profilu. Rośnie popularność darmowych, otwartych środowisk JASP i jamovi, które zaczynają wypierać komercyjne pakiety w pracach studenckich, bo są bezpłatne i mają przejrzysty układ. Kto potrzebuje zaawansowanych modeli albo pełnej powtarzalności analizy, sięga po język R lub Python, gdzie cała procedura zapisuje się w skrypcie. Excel wystarczy do prostej korelacji i statystyk opisowych, ale przy testach i modelach szybko pokazuje granice. Na poziomie magisterskim, gdzie rozdział empiryczny bywa najobszerniejszą częścią pracy, gotowe wzory opisu analiz statystycznych znajdziesz w [poradniku na praca-magisterska.pl](https://praca-magisterska.pl/sklep).

## Najczęstsze błędy w analizie statystycznej

Wracają te same potknięcia, niezależnie od kierunku. Warto je znać, zanim wytknie je recenzent.

- **Test dobrany do złej skali.** Korelacja Pearsona policzona na danych porządkowych albo nominalnych daje liczbę bez sensu. Najpierw skala, potem wzór.
- **Mylenie związku z przyczyną.** „Korelacja dowodzi, że X wywołuje Y" to zdanie, którego w pracy być nie powinno. Korelacja pokazuje współwystępowanie, nie kierunek przyczynowy.
- **Poziom istotności dobrany pod wynik.** Alfa deklaruje się przed analizą. Przesuwanie progu z 0,05 na 0,1, żeby wynik „wyszedł istotny", to naginanie procedury.
- **Zatrzymanie się na p.** Podanie samego „p poniżej 0,05" bez współczynnika i bez oceny siły związku to połowa roboty. Istotny statystycznie nie znaczy ważny.
- **Analiza bez sprawdzenia narzędzia.** Liczenie korelacji na skali o niskiej rzetelności to budowanie na piasku, choćby same testy były policzone poprawnie.

Gotowe wyniki trzeba jeszcze czytelnie przedstawić, a to osobna umiejętność. Jak zbudować tabelę, kiedy sięgnąć po wykres i jak nie zniekształcić danych uciętą osią, rozpisaliśmy w tekście o [analizie i prezentacji wyników badań](/blog/analiza-wynikow-badan-w-pracy-dyplomowej/).

## Najczęstsze pytania

**Czy w pracy licencjackiej trzeba robić testy istotności?** Nie zawsze. Na poziomie licencjatu często wystarcza statystyka opisowa, czyli rozkłady, średnie i proste korelacje. Testy istotności bywają wymagane dopiero w magisterce albo tam, gdzie promotor oczekuje wnioskowania na populację. Sprawdź wymagania swojej katedry.

**Jaki poziom istotności wybrać?** Standardowo 0,05, czyli 5-procentowe ryzyko błędu. Przy bardziej rygorystycznych badaniach stosuje się 0,01. Ważne, żeby wybrać go przed analizą i podać w rozdziale metodologicznym, a nie dobierać po zobaczeniu wyników.

**Czym różni się korelacja Pearsona od Spearmana?** Pearson mierzy zależność liniową między cechami ilościowymi w skali mocnej. Spearman opiera się na rangach i nadaje się do danych porządkowych albo tam, gdzie zależność nie jest liniowa. Wybór zależy od skali Twoich zmiennych.

**Co znaczy, że wynik jest istotny statystycznie, ale słaby?** Że zależność raczej nie wynika z przypadku, ale jest na tyle mała, że praktycznie nic z niej nie wynika. Przy dużej próbie da się osiągnąć istotność nawet dla znikomych związków, dlatego zawsze patrz też na wielkość współczynnika.

## Podsumowanie

Analiza statystyczna nie jest ozdobnikiem doklejanym do rozdziału z wynikami, tylko narzędziem, które odpowiada na pytanie, czy zauważona zależność jest realna. Zacznij od skali pomiaru, bo ona decyduje o dobranym teście, i nie licz Pearsona na danych, które na to nie pozwalają. Korelację czytaj przez pryzmat kierunku i siły, pamiętając, że progi interpretacji zależą od dziedziny i że współwystępowanie nigdy samo nie dowodzi przyczyny. Test istotności z hipotezą zerową i poziomem alfa mówi, na ile możesz zaufać wynikowi z próby, ale istotność statystyczna to nie to samo co waga wyniku, więc podawaj też siłę efektu. Zadbaj o rzetelność narzędzia, zanim cokolwiek policzysz, a gotowe liczby przedstaw uczciwie. Cała reszta warsztatu, od doboru [zmiennych i wskaźników](/blog/zmienne-i-wskazniki-w-pracy-dyplomowej/) po [metodologię badań](/blog/metodologia-badan-w-pracy-dyplomowej/), składa się w całość w naszym [przewodniku po pracy licencjackiej](/blog/jak-napisac-prace-licencjacka/).
</content>
</invoke>
