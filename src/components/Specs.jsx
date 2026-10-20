import { specsCards } from '../data/specs'

export default function Specs() {
  return (
    <section id="specs" className="section specs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Dati Tecnici</span>
          <h2 className="section-title">Scheda Tecnica Completa</h2>
          <p className="section-sub">
            Dati ufficiali del veicolo immatricolato nel 2020.
            <br />
            <a
              href="manuale/giulia-2020-manuale-del-proprietario.pdf"
              target="_blank"
              rel="noopener"
              style={{ color: 'var(--blue-light)', textDecoration: 'underline', marginTop: '0.5rem', display: 'inline-block' }}
            >
              Scarica il Manuale del Proprietario Ufficiale (PDF)
            </a>
          </p>
        </div>
        <div className="specs-layout">
          {specsCards.map((card) => (
            <div className="specs-card glass-card" key={card.id} id={card.id}>
              <div className="spec-card-icon">{card.icon}</div>
              <h3 className="spec-card-title">{card.title}</h3>
              <div className="spec-list">
                {card.rows.map((r, i) => (
                  <div className="spec-row" key={i}>
                    <span className="spec-key">{r.key}</span>
                    <span
                      className={`spec-val${r.badge ? ` ${r.badge}` : ''}`}
                      {...(r.style ? { style: r.style } : {})}
                    >
                      {r.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
