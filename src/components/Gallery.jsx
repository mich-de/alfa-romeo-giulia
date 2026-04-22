import { useState, useCallback, useEffect } from 'react'
import { galleryItems } from '../data/gallery'

export default function Gallery() {
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

  const prev = useCallback(() => setLbIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length), [])
  const next = useCallback(() => setLbIndex((i) => (i + 1) % galleryItems.length), [])

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
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title">La mia Giulia in dettaglio</h2>
          <p className="section-sub">Clicca su un'immagine per vederla a tutto schermo</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`gallery-item${i === 0 ? ' gallery-featured' : ''}`}
              onClick={() => openLb(i)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-hover-overlay">
                <span>↗ Espandi</span>
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
            <img src={galleryItems[lbIndex].src} alt={galleryItems[lbIndex].alt} />
          </div>
          <div className="lightbox-counter">
            {lbIndex + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </section>
  )
}
