# GEMINI MEMORY LOG

## Contesto Architetturale
- **Progetto:** Sito web Alfa Romeo Giulia (Vetrina & Manualistica).
- **Stack Attuale:** Migrazione in corso da `Vanilla HTML/CSS/JS` a `Vite + React`.
- **Styling:** CSS puro centralizzato (Glassmorphism, tema 'Blu Montecarlo', Dark Mode).

## Decisioni Architetturali (Recenti)
- **Migrazione React:** È stato deciso di passare a Vite + React data la mole crescente di logica UI (Filtri multipli, lightboxes, caroselli).
- **Asset Statici:** Le immagini, manuali e wallpapers verranno trattate come risorse statiche dentro `./public` e referenziati senza bundler process.

## Sessione Corrente
- Inizializzato Vite base
- Creato script di launch `run.bat` per ambiente di test in Windows.
- Next step: procedere alla frammentazione di `legacy/index.html` in componenti `.jsx`.
