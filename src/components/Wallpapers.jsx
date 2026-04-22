import { useState, useCallback, useEffect } from 'react'

const OLD_WP = Array.from({ length: 9 }, (_, i) => ({
  src: `wallpapers/wallapers_giulia_ (${i + 1}).png`,
  alt: `Wallpaper Giulia Classico ${i + 1}`,
}));

const NEW_WP = Array.from({ length: 18 }, (_, i) => ({
  src: `wallpapers/wallpaper___ (${i + 1}).png`,
  alt: `Wallpaper Giulia Premium ${i + 1}`,
}));

const WP_IMAGES = [...OLD_WP, ...NEW_WP];

export default function Wallpapers() {
  const [lbOpen, setLbOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)

  const openLb = useCallback((i) => {
    setLbIndex(i)
    setLbOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLb = useCallback(() => {
    setLbOpen(false)
    document.body.style.overflow = ''
  }, [])

  const prev = useCallback(() => setLbIndex((i) => (i - 1 + WP_IMAGES.length) % WP_IMAGES.length), [])
  const next = useCallback(() => setLbIndex((i) => (i + 1) % WP_IMAGES.length), [])

  useEffect(() => {
    if (!lbOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLb()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lbOpen, closeLb, prev, next])

  return (
    <section id="wallpapers" className="section wallpapers-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Download Collection</span>
          <h2 className="section-title">Wallpapers Esclusivi</h2>
          <p className="section-sub">
            Tutti gli sfondi in alta risoluzione della tua Alfa Romeo Giulia (desktop e mobile).
          </p>
        </div>
        <div className="wallpapers-grid">
          {WP_IMAGES.map((wp, i) => (
            <div className="wp-card" key={i} onClick={(e) => {
              if (e.target.tagName === 'A' || e.target.closest('a')) return
              openLb(i)
            }}>
              <img src={wp.src} alt={wp.alt} loading="lazy" />
              <div className="wp-overlay">
                <a href={wp.src} download className="wp-btn">Scarica Sfondo ⬇</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lbOpen && (
        <div className="lightbox active" onClick={(e) => e.target === e.currentTarget && closeLb()}>
          <button className="lightbox-close" onClick={closeLb}>✕</button>
          <button className="lightbox-nav lightbox-prev" onClick={prev}>‹</button>
          <button className="lightbox-nav lightbox-next" onClick={next}>›</button>
          <div className="lightbox-img-wrap">
            <img src={WP_IMAGES[lbIndex].src} alt={WP_IMAGES[lbIndex].alt} />
          </div>
          <div className="lightbox-counter">
            {lbIndex + 1} / {WP_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  )
}
