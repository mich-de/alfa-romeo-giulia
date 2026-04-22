import { useState, useEffect, useCallback, useRef } from 'react'

const SLIDES = [
  { bg: 'images/hero.png' },
  { bg: 'images/hero_2.png' },
  { bg: 'images/giulia (1).png' },
  { bg: 'images/giulia (7).png' },
]

const DURATION = 6000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const progressRef = useRef(null)

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    if (progressRef.current) {
      progressRef.current.style.transition = 'none'
      progressRef.current.style.width = '0%'
      progressRef.current.offsetHeight
      progressRef.current.style.transition = `width ${DURATION}ms linear`
      progressRef.current.style.width = '100%'
    }
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, DURATION)
  }, [])

  const goTo = useCallback(
    (idx) => {
      setCurrent(idx)
      startTimer()
    },
    [startTimer]
  )

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  useEffect(() => {
    startTimer()
  }, [current, startTimer])

  return (
    <section id="hero" className="hero">
      <div className="hero-carousel">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? ' active' : ''}`}
            data-index={i}
            style={{ backgroundImage: `url('${s.bg}')` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />
      <div className="hero-particles" id="particles" />

      <button
        className="hero-arrow hero-arrow-prev"
        aria-label="Slide precedente"
        onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="hero-arrow hero-arrow-next"
        aria-label="Slide successiva"
        onClick={() => goTo((current + 1) % SLIDES.length)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hero-content">
        <p className="hero-eyebrow">Piattaforma Giorgio · 2.2 Turbodiesel · RWD</p>
        <h1 className="hero-title">
          Alfa Romeo
          <br />
          <span className="hero-title-accent">Giulia</span>
        </h1>
        <p className="hero-subtitle">Business Edition · AT8 ZF · 160 CV · 2020</p>
        <div className="hero-badges">
          <span className="badge">Euro 6</span>
          <span className="badge">5.8 l/100km</span>
          <span className="badge">160 CV</span>
          <span className="badge">RWD</span>
        </div>
        <div className="hero-cta">
          <a href="#specs" className="btn btn-primary">Scopri la scheda</a>
          <a href="manuale/giulia-2020-manuale-del-proprietario.pdf" target="_blank" rel="noopener" className="btn btn-ghost">Consulta Manuale 📖</a>
          <a href="#gallery" className="btn btn-ghost">Gallery →</a>
        </div>
      </div>

      <div className="hero-carousel-ui">
        <div className="hero-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === current ? ' active' : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="hero-counter">
          <span>{String(current + 1).padStart(2, '0')}</span>
          <span className="hero-counter-sep">/</span>
          <span className="hero-counter-total">{String(SLIDES.length).padStart(2, '0')}</span>
        </div>
        <div className="hero-progress-track">
          <div className="hero-progress-fill" ref={progressRef} />
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>Scorri</span>
      </div>
    </section>
  )
}
