export const upgrades = [
  {
    icon: '📱',
    tag: 'Software',
    tagClass: 'upgrade-tag-sw',
    title: 'Android Auto & Apple CarPlay',
    description:
      'Il modulo è già presente fisicamente nell\'unità Gen 2. Serve solo un <strong>allineamento proxy</strong> via computer: nessuno smontaggio, nessun cambio schermo.',
    steps: [
      'Diagnosi con tool ufficiale/aftermarket',
      'Abilitazione modulo AA/CP via proxy',
      'Verifica funzionamento live',
    ],
    difficulty: { label: '✓ Difficoltà Bassa', class: 'easy' },
    cost: '~100–250 €',
  },
  {
    icon: '📷',
    tag: 'Hardware OEM',
    tagClass: 'upgrade-tag-hw',
    title: 'Retrocamera Originale (OEM)',
    description:
      'Maniglia portellone originale Alfa Romeo con telecamera integrata. Cablaggio originale fino all\'infotainment e abilitazione via software delle traiettorie dinamiche.',
    steps: [
      'Acquisto maniglia OEM con camera',
      'Stesura cablaggio originale',
      'Attivazione via coding (griglie dinamiche)',
    ],
    difficulty: { label: '◈ Difficoltà Media', class: 'medium' },
    cost: '~400–700 €',
  },
  {
    icon: '🎥',
    tag: 'Aftermarket',
    tagClass: 'upgrade-tag-am',
    title: 'Retrocamera Aftermarket',
    description:
      'Modulo video aggiuntivo che intercetta il segnale LVDS e si interfaccia col monitor originale. Più economico, altrettanto funzionale, senza toccare il codice fabbrica.',
    steps: [
      'Selezione modulo compatibile',
      'Connessione al bus LVDS dello schermo',
      'Configurazione trigger retromarcia',
    ],
    difficulty: { label: '✓ Difficoltà Bassa', class: 'easy' },
    cost: '~150–300 €',
  },
  {
    icon: '⚡',
    tag: 'Prestazioni',
    tagClass: 'upgrade-tag-sw',
    title: 'Rimappatura / Sblocco CV',
    description:
      'Il motore 2.2 da 160 CV è meccanicamente identico alle versioni da 190 CV. Uno sblocco via centralina garantisce incrementi notevoli (spesso si raggiungono i 200–210 CV) migliorando i consumi ad andatura costante.',
    steps: [
      'Lettura parametri centralina',
      'Ottimizzazione curve di coppia / CV',
      'Esclusione/Chiusura opzionale valvola EGR',
    ],
    difficulty: { label: '◈ Difficoltà Media', class: 'medium' },
    cost: '~300–500 €',
  },
  {
    icon: '🕹️',
    tag: 'Hardware OEM',
    tagClass: 'upgrade-tag-hw',
    title: 'Paddle al Volante (Palette)',
    description:
      'Installazione delle iconiche palette in alluminio fisse. Spesso pre-cablate, richiedono l\'installazione del devioluci specifico e l\'allineamento PROXI con MES (SGWD bypass necessario dal 2018 in poi).',
    steps: [
      'Smontaggio volante e cover piantone',
      'Swap blocco devioluci con palette integrate',
      'Attivazione "Steering Wheel Paddles" via PROXI',
    ],
    difficulty: { label: '◈ Difficoltà Media', class: 'medium' },
    cost: '~300–450 €',
  },
  {
    icon: '🏁',
    tag: 'Software / HW',
    tagClass: 'upgrade-tag-sw',
    title: 'Modalità RACE (RDNA)',
    description:
      'Sblocco della modalità RACE esclusiva Quadrifoglio. Disattiva completamente i controlli di trazione (ESC) per l\'uso in pista. Il manettino va sostituito con la versione a 4 posizioni.',
    steps: [
      'Smontaggio tunnel centrale e swap selettore',
      'Modifica byte "Dynamic Control" in "Type 3"',
      'Allineamento PROXI e calibrazione angoli',
    ],
    difficulty: { label: '◆ Difficoltà Alta', class: 'hard' },
    cost: '~150–250 €',
  },
  {
    icon: '🛡️',
    tag: 'Retrofit OEM',
    tagClass: 'upgrade-tag-hw',
    title: 'Adaptive Cruise Control (ACC+)',
    description:
      'Se la vettura ha già radar anteriore e camera (AEB), si può sbloccare il Cruise Adattivo semplicemente sostituendo la pulsantiera sinistra sul volante e modificando i parametri PROXI.',
    steps: [
      'Acquisto e montaggio pulsantiera ACC+ SX',
      'Abilitazione parametro ACC nel nodo BCM',
      'Ricalibrazione modulo freni ABS via software',
    ],
    difficulty: { label: '◈ Difficoltà Media', class: 'medium' },
    cost: '~150–350 €',
  },
]
