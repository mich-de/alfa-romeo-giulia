const STATS = [
  { value: '160', unit: 'CV', label: 'Potenza' },
  { value: '118', unit: 'kW', label: 'Potenza kW' },
  { value: '5.8', unit: 'l/100', label: 'Consumo' },
  { value: '153', unit: 'g/km', label: 'CO₂' },
  { value: '2.143', unit: 'cm³', label: 'Cilindrata' },
  { value: '1.540', unit: 'kg', label: 'Tara' },
]

export default function StatsRibbon() {
  return (
    <section className="stats-ribbon" id="stats-ribbon">
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <span key={i}>
            {i > 0 && <div className="stat-divider" />}
            <div className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-unit">{s.unit}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          </span>
        ))}
      </div>
    </section>
  )
}
