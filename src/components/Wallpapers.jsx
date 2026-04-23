import { useState, useCallback, useEffect, useMemo } from 'react'
import { WALLPAPERS as WP_IMAGES, WALLPAPER_CATEGORIES } from '../data/wallpapers.js';

export default function Wallpapers() {
  const [lbOpen, setLbOpen] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("Tutti")

  const filteredImages = useMemo(() => {
    if (activeCategory === "Tutti") return WP_IMAGES
    return WP_IMAGES.filter(img => img.category === activeCategory)
  }, [activeCategory])

  const openLb = useCallback((i) => {
    setLbIndex(i)
    setLbOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLb = useCallback(() => {
    setLbOpen(false)
    document.body.style.overflow = ''
  }, [])

  const prev = useCallback(() => setLbIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length), [filteredImages.length])
  const next = useCallback(() => setLbIndex((i) => (i + 1) % filteredImages.length), [filteredImages.length])

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
            Tutti gli sfondi in alta risoluzione della tua Alfa Romeo Giulia. Scegli la tua serie preferita.
          </p>
        </div>

        <div className="maintenance-filters reveal visible" style={{ marginBottom: '3rem' }}>
          {WALLPAPER_CATEGORIES.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="wallpapers-grid">
          {filteredImages.map((wp, i) => (
            <div className="wp-card reveal visible" key={wp.id} onClick={(e) => {
              if (e.target.tagName === 'A' || e.target.closest('a')) return
              openLb(i)
            }}>
              <img src={wp.src} alt={wp.alt} loading="lazy" />
              <div className="wp-overlay">
                <a href={wp.src} download className="wp-btn">Scarica ⬇</a>
              </div>
              <p className="wp-caption">{wp.caption}</p>
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
            <img src={filteredImages[lbIndex].src} alt={filteredImages[lbIndex].alt} />
          </div>
          <div className="lightbox-counter">
            {lbIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
