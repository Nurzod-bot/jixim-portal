# JI va XIM kafedrasi — talabalar portali

Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar kafedrasi talabalari uchun interaktiv oʻquv sayti.
Hech qanday dasturlash tili yoki oʻrnatish talab qilinmaydi — oddiy HTML/CSS/JS.

## Tuzilma

| Fayl | Vazifasi |
|---|---|
| `index.html` | Bosh sahifa: modullar (kurs boʻyicha filtr), progress, muhim sanalar |
| `modul.html?id=...` | Har bir modul sahifasi: Umumiy · Mavzular · Seminarlar · Test · Resurslar |
| `testlar.html` | Testlar markazi va aralash test |
| `lugat.html` | Atamalar lugʻati, qidiruv, kartochkalar |
| `vositalar.html` | Kalkulyatorlar: qiyosiy ustunlik, bojxona, savdo balansi, valyuta |
| `assets/js/data.js` | **Butun mazmun shu yerda** — modullar, mavzular, testlar, atamalar, sanalar |
| `assets/js/app.js` | Sayt mantigʻi (odatda tegmaslik kerak) |
| `assets/css/style.css` | Dizayn: ranglar faylning boshida (`:root`) |

## Mazmun qoʻshish

`assets/js/data.js` ni Bloknot yoki GitHub saytida oching:
- **Yangi modul** — `modules` roʻyxatiga mavjud modulni nusxalab, `id`ni oʻzgartiring. U avtomatik ravishda bosh sahifa, yon menyu, testlar va qidiruvda paydo boʻladi.
- **Test savoli** — `{ q: "savol", o: ["A","B","C","D"], a: 0, e: "izoh" }` (`a` — toʻgʻri javob tartib raqami, 0 dan boshlanadi).
- **Atama** — `glossary` ga `{ t, en, d, m }` qoʻshing (`m` — modul id).

## Kompyuterda koʻrish
`index.html` ni ikki marta bosing — brauzerda ochiladi.

## GitHub Pages orqali internetga chiqarish
1. github.com da yangi repozitoriy yarating (masalan `jixim-portal`), **Public**.
2. “uploading an existing file” havolasini bosib, shu papkadagi barcha fayl va papkalarni sudrab tashlang → **Commit changes**.
3. **Settings → Pages → Branch: main / root → Save**.
4. 1–2 daqiqadan keyin sayt `https://<foydalanuvchi>.github.io/jixim-portal/` manzilida ochiladi.
