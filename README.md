# Alfa Romeo Giulia 2020 — Sito Personale

Sito dedicato alla Alfa Romeo Giulia 2.2 Turbodiesel 160cv Business 2020, con scheda tecnica, gallery, upgrade, manutenzione e checklist 100k km.

## Stack

- **Vite** + **React 19** — Build & dev server
- **CSS** custom (glassmorphism dark theme, Blu Montecarlo palette)
- **GitHub Pages** — Hosting

## Struttura

```
├── public/
│   ├── images/          # Foto gallery + hero
│   ├── manuale/         # PDF manuale proprietario
│   ├── wallpapers/      # Sfondi + index.html
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/      # Componenti React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── StatsRibbon.jsx
│   │   ├── Specs.jsx
│   │   ├── Gallery.jsx
│   │   ├── Upgrades.jsx
│   │   ├── Reviews.jsx
│   │   ├── Maintenance.jsx
│   │   ├── Checklist.jsx
│   │   ├── Footer.jsx
│   │   ├── Wallpapers.jsx
│   │   └── ScrollTop.jsx
│   ├── data/            # Dati separati dalla UI
│   │   ├── specs.js
│   │   ├── gallery.js
│   │   ├── upgrades.js
│   │   ├── reviews.js
│   │   ├── maintenance.js
│   │   ├── wallpapers.js
│   │   └── checklist.js
│   ├── App.jsx          # Layout principale + effetti
│   ├── main.jsx         # Entry point
│   └── index.css        # Stile globale (legacy style.css)
├── legacy/              # Backup sito originale (HTML/CSS/JS)
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Comandi

| Comando            | Descrizione                        |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Dev server con HMR                 |
| `npm run build`    | Build di produzione in `dist/`     |
| `npm run preview`  | Anteprima locale della build       |
| `npm run lint`     | Linting ESLint                     |
| `npm run deploy`   | Deploy su GitHub Pages (gh-pages)  |

## Deploy

Il sito è pubblicato su GitHub Pages:

```
https://mich-de.github.io/alfa-romeo-giulia/
```

Il `base` path è configurato in `vite.config.js` (`/alfa-romeo-giulia/`).

### Deploy manuale

```bash
npm run build
npm run deploy
```

## Funzionalità

- **Carousel Hero** — Slideshow automatico con Ken Burns, dots, frecce, progress bar
- **Wallpaper Gallery** — 52 sfondi scaricabili con metadati SEO, didascalie e sistema di filtraggio per categorie (Heritage, Scenic, AI Concepts, ecc.)
- **Gallery + Lightbox** — 20 foto con lightbox navigabile (tastiera + click)
- **Filtri Manutenzione** — 30 punti filtrabili per categoria e priorità
- **Checklist 100k** — 20 voci con persistenza in `localStorage`
- **Scroll Reveal** — Animazioni di entrata su scroll (IntersectionObserver)
- **Particles** — Effetto particelle nell'hero
- **Tilt 3D** — Effetto tilt sulle card manutenzione/wallpapers
- **Scroll-to-Top** — Pulsante "torna su"
- **Navbar** — Scroll-aware con active section tracking e burger menu mobile
- **Responsive** — Adattivo per desktop, tablet e mobile

## Migrazione

Il sito originale (HTML/CSS/JS statico) è stato migrato a Vite + React. I file originali sono preservati in `legacy/`.
