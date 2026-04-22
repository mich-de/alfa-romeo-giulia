import { useState } from 'react'
import { maintenanceItems } from '../data/maintenance'

const CAT_FILTERS = [
  { key: 'all', label: 'Tutti (30)' },
  { key: 'motore', label: '🔧 Motore (15)' },
  { key: 'elettronica', label: '⚡ Elettronica (7)' },
  { key: 'telaio', label: '🔩 Telaio & Interni (8)' },
]

const PRI_FILTERS = [
  { key: 'all', label: 'Priorità: Tutte' },
  { key: 'high', label: '🔴 Alta' },
  { key: 'medium', label: '🟡 Media' },
  { key: 'low', label: '🟢 Bassa' },
]

export default function Maintenance() {
  const [cat, setCat] = useState('all')
  const [pri, setPri] = useState('all')

  const filtered = maintenanceItems.filter((m) => {
    const matchCat = cat === 'all' || m.category === cat
    const matchPri = pri === 'all' || m.severity === pri
    return matchCat && matchPri
  })

  return (
    <section id="maintenance" className="section maintenance-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Oltre 100.000 km · Forum ClubAlfa.it</span>
          <h2 className="section-title">30 Punti di Manutenzione</h2>
          <p className="section-sub">
            Interventi straordinari e difetti cronici documentati dalla community italiana per la Giulia 2.2
            Turbodiesel
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div className="maintenance-filters" style={{ marginBottom: 0 }}>
            {CAT_FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-btn${cat === f.key ? ' active' : ''}`}
                onClick={() => setCat(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="maintenance-filters" style={{ marginBottom: 0 }}>
            {PRI_FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-btn filter-pri${pri === f.key ? ' active' : ''}`}
                onClick={() => setPri(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="maintenance-grid">
          {filtered.map((m) => (
            <div
              className="maint-card glass-card"
              key={m.number}
              data-category={m.category}
              data-severity={m.severity}
            >
              <div className="maint-number">{String(m.number).padStart(2, '0')}</div>
              <div className={`maint-severity ${m.severity}`}>{m.severityLabel}</div>
              <h4>{m.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: m.text }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
