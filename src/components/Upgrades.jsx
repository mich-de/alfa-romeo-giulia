import { upgrades } from '../data/upgrades'

export default function Upgrades() {
  return (
    <section id="upgrades" className="section upgrades-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Migliorie</span>
          <h2 className="section-title">Upgrade Disponibili</h2>
          <p className="section-sub">
            Potenziamenti software e hardware compatibili con il tuo allestimento Business Gen 2
          </p>
        </div>
        <div className="upgrades-grid">
          {upgrades.map((u, i) => (
            <div className="upgrade-card glass-card" key={i}>
              <div className="upgrade-icon">{u.icon}</div>
              <div className={`upgrade-tag ${u.tagClass}`}>{u.tag}</div>
              <h3>{u.title}</h3>
              <p>{u.description}</p>
              <div className="upgrade-steps">
                {u.steps.map((s, j) => (
                  <div className="upgrade-step" key={j}>
                    <span>{j + 1}</span>
                    {s}
                  </div>
                ))}
              </div>
              <div className="upgrade-meta">
                <span className={`upgrade-difficulty ${u.difficulty.class}`}>{u.difficulty.label}</span>
                <span className="upgrade-cost">{u.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
