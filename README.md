# 🌸 WIOSNA – Generator liczb

**Autorzy:** Maciej Strzelec, Filip Ryguła  
**Wersja:** 1.0.1  

Prosta aplikacja webowa umożliwiająca losowanie **unikalnych liczb z zakresu 1–49**.  
Użytkownik może wygenerować zestaw **6 liczb** za pomocą przycisku oraz wyczyścić losowanie i rozpocząć od nowa.

---

# 📖 User Story

Jako użytkownik aplikacji chcę móc losować określoną liczbę unikalnych liczb za pomocą przycisku **„Dodaj liczbę”**, aby w prosty sposób wygenerować zestaw wylosowanych wartości oraz mieć możliwość wyczyszczenia i rozpoczęcia losowania od nowa.

---

# ✅ Kryteria akceptacji

1. Na stronie widoczny jest nagłówek **„WIOSNA”** oraz grafika w motywie wiosennym.

2. Widoczna jest informacja:

```
Pozostało do wylosowania liczb: X
```

gdzie **X** oznacza liczbę pozostałych do wylosowania wartości.

3. Po kliknięciu przycisku **„Dodaj liczbę”**:
- losowana jest jedna liczba
- liczba nie powtarza się w ramach jednej sesji losowania
- licznik pozostałych liczb zmniejsza się o 1

4. Po wylosowaniu wszystkich liczb:
- licznik pokazuje **0**
- przycisk **„Dodaj liczbę”** zostaje zablokowany

5. Po kliknięciu przycisku **„Wyczyść”**:
- wszystkie wylosowane liczby zostają usunięte
- licznik wraca do wartości początkowej **(6)**
- możliwe jest ponowne rozpoczęcie losowania

---

# 📏 Reguły biznesowe

- zakres losowanych liczb: **1–49**
- liczba losowanych wartości: **6**
- liczby w jednym losowaniu muszą być **unikalne**
- po wylosowaniu **6 liczb** przycisk losowania zostaje zablokowany
- przycisk **„Wyczyść”** resetuje stan aplikacji

---

# ⚙️ Specyfikacja techniczna

## Architektura

Aplikacja jest prostą aplikacją frontendową typu **Single Page Application (SPA)**.

Cała logika aplikacji działa po stronie przeglądarki użytkownika i **nie wymaga backendu**.

---

# 🧰 Technologie wykorzystane w projekcie

- **HTML5** – struktura strony  
- **CSS3** – stylowanie i responsywność  
- **JavaScript (ES6)** – logika aplikacji i mechanizm losowania  

---

# 📂 Struktura projektu

```
projekt-wiosna/
│
├── index.html
├── style.css
├── app.js
└── wiosna.jpg
```

---

# 📄 Opis plików

### index.html
Zawiera strukturę strony oraz elementy interfejsu użytkownika.

### style.css
Odpowiada za wygląd strony, układ elementów oraz responsywność.

### app.js
Zawiera logikę aplikacji, funkcję losowania liczb oraz obsługę interakcji użytkownika.

### wiosna.jpg
Grafika wykorzystywana jako tło strony.

---

# 🧠 Moduły aplikacji

## Logika losowania

Mechanizm losowania wykorzystuje funkcję:

```javascript
Math.random()
```

Liczba generowana jest z zakresu **1–49**.

Przed dodaniem do listy sprawdzana jest jej **unikalność**.

---

## Zarządzanie stanem

Stan aplikacji przechowywany jest w tablicy:

```javascript
let drawnNumbers = [];
```

Tablica przechowuje wszystkie wylosowane liczby w aktualnej sesji.

---

## Obsługa DOM

JavaScript odpowiada za:

- wyświetlanie wylosowanych liczb
- aktualizację licznika pozostałych losowań
- blokowanie przycisku po osiągnięciu limitu
- resetowanie interfejsu po kliknięciu **„Wyczyść”**

---

# 🚀 Uruchomienie projektu

1. Pobierz lub sklonuj repozytorium:

```
git clone https://github.com/twoje-repozytorium/projekt-wiosna.git
```

2. Otwórz projekt np. w `LiveServer` w przeglądarce internetowej.

---
