# JU „Djeca Sarajeva" — Web stranica

Moderna web stranica za Javnu ustanovu za predškolski odgoj i obrazovanje „Djeca Sarajeva".

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** + custom design tokens
- **Framer Motion** za mikro-interakcije
- **React Icons** (Heroicons + brand)
- **TypeScript**

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000) u browseru.

## Produkcijski build

```bash
npm run build
npm run start
```

## Struktura

```
app/
  layout.tsx           Root layout sa fontovima i nav/footer
  page.tsx             Početna
  o-nama/page.tsx
  vrtici/page.tsx
  upis/page.tsx
  jelovnici/page.tsx
  obavjestenja/page.tsx
  dokumenti/page.tsx
  vijece-roditelja/page.tsx
  kontakt/page.tsx
  globals.css          Paper grain, handline accent, polaroid styles
components/
  Nav.tsx              Sticky navigacija sa BHS/EN togglom
  Footer.tsx           Sa newsletter prijavom
  AnnouncementBar.tsx  Marquee traka na vrhu
  Doodles.tsx          Ručno-crtane SVG dekoracije (pčele, oblačići…)
  PageHeader.tsx       Konzistentan hero za podstranice
  Accordion.tsx        FAQ
  home/                Homepage sekcije
public/images/         Logo + fotografije djece
source_assets/         Originali (PNG, JPEG, HEIC)
```

## Dizajn

Paleta: terakota (`#C9533A`), žalfija zelena (`#5F7F4F`), zlatno-žuta (`#E8A93B`),
dusty plava (`#6B98C9`), cream paper pozadina (`#F4ECDE`).

Tipografija: **Fraunces** (variable serif sa SOFT osom) za naslove,
**Manrope** za UI, **JetBrains Mono** za eyebrows i datume.
