import { useState, useRef } from 'react'
import videos from '../data/videos'

export default function Cinema() {
  const [activeVideo, setActiveVideo] = useState(null)
  
  return (
    <section id="cinema" className="section cinema-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Cinema Room</span>
          <h2 className="section-title">Esperienze Visive</h2>
          <p className="section-sub">Clip cinematografiche generate con AI per catturare l'anima della Giulia.</p>
        </div>
        
        <div className="video-grid">
          {videos.map((vid) => (
            <div key={vid.id} className="video-card reveal" onClick={() => setActiveVideo(vid)}>
              <div className="video-thumb-container">
                <video 
                   src={vid.src} 
                   muted 
                   loop 
                   playsInline
                   preload="metadata"
                   onMouseOver={e => e.target.play()} 
                   onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
                   onClick={e => e.preventDefault()}
                />
                <div className="video-play-hint">
                   <span>▶ Riproduci</span>
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
        <div className="video-modal active" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)}>✕</button>
            <video src={activeVideo.src} controls autoPlay />
          </div>
        </div>
      )}
    </section>
  )
}
