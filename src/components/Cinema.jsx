import { useState, useRef, useEffect } from 'react'
import videos from '../data/videos'

export default function Cinema() {
  const [activeVideo, setActiveVideo] = useState(null)
  const thumbRefs = useRef([])

  useEffect(() => {
    thumbRefs.current.forEach((video) => {
      if (!video) return
      video.currentTime = 1
    })
  }, [])

  const handleOpen = (vid) => setActiveVideo(vid)
  const handleClose = () => setActiveVideo(null)

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden'
      const onKey = (e) => { if (e.key === 'Escape') handleClose() }
      window.addEventListener('keydown', onKey)
      return () => {
        window.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
      }
    }
    document.body.style.overflow = ''
  }, [activeVideo])

  return (
    <section id="cinema" className="section cinema-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Cinema Room</span>
          <h2 className="section-title">Esperienze Visive</h2>
          <p className="section-sub">Clip cinematografiche generate con AI per catturare l'anima della Giulia.</p>
        </div>

        <div className="video-grid">
          {videos.map((vid, i) => (
            <div key={vid.id} className="video-card reveal" onClick={() => handleOpen(vid)}>
              <div className="video-thumb-container">
                <video
                  ref={(el) => (thumbRefs.current[i] = el)}
                  src={vid.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => {
                    e.target.pause()
                    e.target.currentTime = 1
                  }}
                  onClick={(e) => e.preventDefault()}
                />
                <div className="video-thumb-overlay" />
                <div className="video-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="video-thumb-label">
                  <span className="video-thumb-title">{vid.title}</span>
                  <span className="video-thumb-sub">{vid.sub}</span>
                </div>
              </div>
              <div className="video-info">
                <h3>{vid.title}</h3>
                <p>{vid.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal active" onClick={handleClose}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={handleClose}>✕</button>
            <video src={activeVideo.src} controls autoPlay />
            <div className="video-modal-info">
              <h3>{activeVideo.title}</h3>
              <p>{activeVideo.sub}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
