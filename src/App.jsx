import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsRibbon from './components/StatsRibbon'
import Specs from './components/Specs'
import Gallery from './components/Gallery'
import Upgrades from './components/Upgrades'
import Reviews from './components/Reviews'
import Maintenance from './components/Maintenance'
import Checklist from './components/Checklist'
import Wallpapers from './components/Wallpapers'
import Cinema from './components/Cinema'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

export default function App() {
  useEffect(() => {
    // Mouse glow follower
    const glow = document.createElement('div')
    glow.className = 'glow-follower'
    document.body.appendChild(glow)
    const onMove = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)

    // Hero particles — rosso-ferrari
    const particles = document.getElementById('particles')
    if (particles) {
      for (let i = 0; i < 28; i++) {
        const p = document.createElement('div')
        const size = Math.random() * 3 + 1
        const x = Math.random() * 100
        const y = Math.random() * 100
        const dur = Math.random() * 8 + 6
        const del = Math.random() * 6
        p.style.cssText = `position:absolute;left:${x}%;top:${y}%;width:${size}px;height:${size}px;border-radius:50%;background:hsla(0,85%,48%,${Math.random() * 0.3 + 0.1});animation:particleDrift ${dur}s ${del}s ease-in-out infinite alternate;pointer-events:none;`
        particles.appendChild(p)
      }
    }

    // Per-grid staggered reveal
    const containers = '.specs-layout,.upgrades-grid,.maintenance-grid,.wallpapers-grid,.gallery-grid,.video-grid'
    const gridObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          Array.from(e.target.children).forEach((child, i) => {
            child.style.setProperty('--i', i)
            child.classList.add('reveal-stagger')
            requestAnimationFrame(() => child.classList.add('visible'))
          })
          gridObs.unobserve(e.target)
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll(containers).forEach((el) => gridObs.observe(el))

    // Stat items — sequential entry
    const statWrap = document.querySelector('.stats-grid')
    if (statWrap) {
      const statObs = new IntersectionObserver(
        (e) => {
          if (!e[0].isIntersecting) return
          const items = statWrap.querySelectorAll('.stat-item')
          items.forEach((item, i) => setTimeout(() => item.classList.add('visible'), i * 120))
          statObs.disconnect()
        },
        { threshold: 0.4 }
      )
      statObs.observe(statWrap)
    }

    // 3D tilt — maintenance cards
    document.querySelectorAll('.maint-card').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width - 0.5) * 8
        const y = ((e.clientY - r.top) / r.height - 0.5) * 8
        card.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`
      })
      card.addEventListener('mouseleave', () => { card.style.transform = '' })
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      glow.remove()
      gridObs.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <StatsRibbon />
      <Specs />
      <Gallery />
      <Upgrades />
      <Reviews />
      <Maintenance />
      <Checklist />
      <Wallpapers />
      <Cinema />
      <Footer />
      <ScrollTop />
    </>
  )
}
