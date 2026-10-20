import { reviews } from '../data/reviews'

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Opinioni & Community</span>
          <h2 className="section-title">Pro & Contro del Modello</h2>
          <p className="section-sub">
            Sintesi delle recensioni dai forum italiani e dai club ufficiali
          </p>
        </div>
        <div className="reviews-layout">
          <div className="reviews-col pros-col">
            <div className="reviews-col-header">
              <span className="reviews-col-icon">✓</span>
              <h3>Punti di Forza</h3>
            </div>
            {reviews.pros.map((r, i) => (
              <div className="review-item" key={i}>
                <div className="review-item-icon">{r.icon}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: r.text }} />
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-divider-vert">
            <div className="vs-badge">VS</div>
          </div>

          <div className="reviews-col cons-col">
            <div className="reviews-col-header">
              <span className="reviews-col-icon cons-icon">✗</span>
              <h3>Punti Deboli</h3>
            </div>
            {reviews.cons.map((r, i) => (
              <div className="review-item" key={i}>
                <div className="review-item-icon">{r.icon}</div>
                <div>
                  <h4>{r.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: r.text }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
