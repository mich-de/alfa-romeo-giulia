import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#specs', label: 'Tecnica' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#upgrades', label: 'Upgrade' },
  { href: '#reviews', label: 'Recensioni' },
  { href: '#maintenance', label: 'Manutenzione' },
  { href: '#checklist', label: 'Checklist 100k' },
  { href: '#wallpapers', label: 'Wallpapers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const handleNav = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        const offset = 70 + 16
        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
      }
    }
    setOpen(false)
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="logo-symbol">α</span>
          <span className="logo-text">
            Giulia <em>2020</em>
          </span>
        </div>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link${activeId === l.href.slice(1) ? ' active' : ''}`}
                onClick={(e) => handleNav(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`nav-burger${open ? ' open' : ''}`}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
