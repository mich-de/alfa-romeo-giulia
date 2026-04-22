import { useState } from 'react'
import { checklistGroups } from '../data/checklist'

const STORAGE_PREFIX = 'giulia_checklist_'

export default function Checklist() {
  const [checked, setChecked] = useState(() => {
    const saved = {}
    checklistGroups.forEach((g) =>
      g.items.forEach((item) => {
        saved[item.id] = localStorage.getItem(STORAGE_PREFIX + item.id) === 'true'
      })
    )
    return saved
  })

  const allItems = checklistGroups.flatMap((g) => g.items)
  const total = allItems.length
  const checkedCount = allItems.filter((i) => checked[i.id]).length
  const pct = (checkedCount / total) * 100

  const toggle = (id) => {
    setChecked((prev) => {
      const next = !prev[id]
      localStorage.setItem(STORAGE_PREFIX + id, next)
      return { ...prev, [id]: next }
    })
  }

  const reset = () => {
    if (!window.confirm('Vuoi davvero resettare la tua checklist?')) return
    const cleared = {}
    allItems.forEach((i) => {
      cleared[i.id] = false
      localStorage.removeItem(STORAGE_PREFIX + i.id)
    })
    setChecked(cleared)
  }

  return (
    <section id="checklist" className="section checklist-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Consigliato dalla Community · ClubAlfa.it</span>
          <h2 className="section-title">Checklist 100.000 km</h2>
          <p className="section-sub">
            Spunta gli interventi già eseguiti — la tua lista personale viene salvata nel browser
          </p>
        </div>

        <div className="checklist-progress-wrap">
          <div className="checklist-progress-bar">
            <div className="checklist-progress-fill" style={{ width: pct + '%' }} />
          </div>
          <span className="checklist-progress-label">
            {checkedCount} / {total} completati
          </span>
          <button className="checklist-reset-btn" onClick={reset}>
            ↺ Reset
          </button>
        </div>

        <div className="checklist-columns">
          {['left', 'right'].map((col) => {
            const groups = col === 'left' ? checklistGroups.slice(0, 3) : checklistGroups.slice(3)
            return (
              <div className="checklist-col" key={col}>
                {groups.map((g) => (
                  <div className="checklist-group" key={g.title}>
                    <div className="checklist-group-title">{g.title}</div>
                    {g.items.map((item) => (
                      <label className="checklist-item" key={item.id}>
                        <input
                          type="checkbox"
                          checked={!!checked[item.id]}
                          onChange={() => toggle(item.id)}
                        />
                        <span className="ci-box" />
                        <span
                          className="ci-text"
                          dangerouslySetInnerHTML={{ __html: item.html }}
                        />
                      </label>
                    ))}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
