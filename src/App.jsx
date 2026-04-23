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
    const particles = document.getElementById('particles')
    if (particles) {
      for (let i = 0; i < 28; i++) {
        const p = document.createElement('div')
        const size = Math.random() * 3 + 1
        const x = Math.random() * 100
        const y = Math.random() * 100
        const dur = Math.random() * 8 + 6
        const del = Math.random() * 6
        p.style.cssText = `position:absolute;left:${x}%;top:${y}%;width:${size}px;height:${size}px;border-radius:50%;background:hsla(4,85%,60%,${Math.random() * 0.5 + 0.2});animation:particleDrift ${dur}s ${del}s ease-in-out infinite alternate;pointer-events:none;`
        particles.appendChild(p)
      }
      if (!document.getElementById('particle-keyframe')) {
        const style = document.createElement('style')
        style.id = 'particle-keyframe'
        style.textContent = `@keyframes particleDrift{from{transform:translateY(0) scale(1);opacity:.4}to{transform:translateY(-${20 + Math.random() * 30}px) scale(1.4);opacity:.8}}`
        document.head.appendChild(style)
      }
    }

    const revealEls = document.querySelectorAll('.glass-card,.review-item,.section-header,.upgrade-card')
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    revealEls.forEach((el) => {
      el.classList.add('reveal')
      revealObs.observe(el)
    })

    const statItems = document.querySelectorAll('.stat-item')
    const statsObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.4 }
    )
    statItems.forEach((el) => statsObs.observe(el))

    const maintCards = document.querySelectorAll('.maint-card')
    maintCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8
        card.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform = ''
      })
    })

    return () => {
      revealObs.disconnect()
      statsObs.disconnect()
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
