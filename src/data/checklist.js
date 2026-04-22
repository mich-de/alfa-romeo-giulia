export const checklistGroups = [
  {
    title: '🔧 Distribuzione & Raffreddamento',
    items: [
      { id: 'ci-01', html: '<strong>Cinghia di distribuzione</strong> — sostituire entro 100k km o 5 anni. <em>~900–1.000 €</em>' },
      { id: 'ci-02', html: '<strong>Pompa dell\'acqua</strong> — sempre con la cinghia, mai separatamente.' },
      { id: 'ci-03', html: '<strong>Cinghia dei servizi + tendicinghia</strong> — verifica usura e rumorosità.' },
      { id: 'ci-04', html: '<strong>Liquido refrigerante</strong> — controlla concentrazione e pH.' },
    ],
  },
  {
    title: '🛢️ Lubrificazione & Olio',
    items: [
      { id: 'ci-05', html: '<strong>Guarnizione pescante pompa olio</strong> — <em>difetto cronico</em>: gommino che secca e aspira aria. Sostituire preventivamente.' },
      { id: 'ci-06', html: '<strong>Elettrovalvola pompa olio</strong> — diagnosi OBD per verificare pressione corretta.' },
      { id: 'ci-07', html: '<strong>Paraolio albero motore/cambio</strong> — verifica trasudamenti visivi.' },
      { id: 'ci-08', html: '<strong>Olio cambio AT8 ZF</strong> — lavaggio e sostituzione olio (ignorare la dicitura "for life").' },
    ],
  },
  {
    title: '💨 Turbina & Aspirazione',
    items: [
      { id: 'ci-09', html: '<strong>Turbocompressore</strong> — ascolta sibili anomali, verifica gioco assiale della girante.' },
      { id: 'ci-10', html: '<strong>Tubo mandata olio turbo</strong> — guarnizioni che cedono, cause imbrattamento vano motore.' },
      { id: 'ci-11', html: '<strong>Pulizia collettori di aspirazione</strong> — walnut blasting o pulizia chimica oltre 120k km.' },
    ],
  },
  {
    title: '🌫️ Emissioni & Scarico',
    items: [
      { id: 'ci-12', html: '<strong>Pulizia/verifica DPF/FAP</strong> — rigenerazione forzata o pulizia professionale se uso urbano prevalente.' },
      { id: 'ci-13', html: '<strong>Valvola EGR</strong> — pulizia condotti dai depositi di fuliggine.' },
      { id: 'ci-14', html: '<strong>Iniettore AdBlue SCR</strong> — verifica cristallizzazioni di urea. <em>Attento alle soste prolungate.</em>' },
      { id: 'ci-15', html: '<strong>Sensore NOX</strong> — guasto frequente, accende la MIL (spia motore). Testare con OBD.' },
    ],
  },
  {
    title: '⚡ Elettronica & Batteria',
    items: [
      { id: 'ci-16', html: '<strong>Test batteria principale</strong> — tester di capacità (non solo voltmetro). Spesso causa spie casuali.' },
      { id: 'ci-17', html: '<strong>Sensore IBS</strong> — falsi allarmi Start&amp;Stop; ricambio economico, prevenire è meglio.' },
      { id: 'ci-18', html: '<strong>Relè passaruota anteriore destro</strong> — <em>difetto noto</em>: si ossida per umidità → auto non parte. Trattare con spray anti-ossidazione o sostituire.' },
    ],
  },
  {
    title: '🔩 Telaio & Sospensioni',
    items: [
      { id: 'ci-19', html: '<strong>Testine braccetti anteriori</strong> — controllo al banco per rumori/clonck sui dossi.' },
      { id: 'ci-20', html: '<strong>Silent block barra stabilizzatrice</strong> — boccole che si sgretolano, causa instabilità in curva.' },
    ],
  },
]
