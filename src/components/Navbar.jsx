import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
    >
      <div className="nav-inner section-inner">
        <a href="#" className="nav-logo" data-hover>
          <span className="nav-logo-bracket">[</span>
          <span className="grad-text">FA</span>
          <span className="nav-logo-bracket">]</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" data-hover>
              {l.label}
            </a>
          ))}
          <a
            href="mailto:firman.ali39@gmail.com"
            className="nav-cta"
            data-hover
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-hover
        >
          <span className={`ham-line ${menuOpen ? 'ham-line--1-open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'ham-line--2-open' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'ham-line--3-open' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:firman.ali39@gmail.com"
              className="nav-mobile-link nav-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1.25rem 0;
          transition: background 0.4s ease, border-color 0.4s ease, padding 0.4s ease;
        }
        .nav--scrolled {
          background: rgba(5, 5, 8, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 0.9rem 0;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Fira Code', monospace;
          font-size: 1.15rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 2px;
          transition: opacity 0.2s;
        }
        .nav-logo:hover { opacity: 0.8; }
        .nav-logo-bracket { color: var(--text-muted); }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 1px;
          background: var(--indigo);
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: var(--text); }
        .nav-link:hover::after { width: 100%; }
        .nav-cta {
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border: 1px solid var(--indigo);
          border-radius: 8px;
          color: var(--indigo-light);
          transition: background 0.2s, color 0.2s;
        }
        .nav-cta:hover {
          background: var(--indigo);
          color: #fff;
        }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .ham-line {
          display: block;
          width: 24px; height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
          transform-origin: center;
        }
        .ham-line--1-open { transform: translateY(7px) rotate(45deg); }
        .ham-line--2-open { opacity: 0; }
        .ham-line--3-open { transform: translateY(-7px) rotate(-45deg); }
        .nav-mobile {
          overflow: hidden;
          border-top: 1px solid var(--border);
          background: rgba(5, 5, 8, 0.95);
          backdrop-filter: blur(20px);
        }
        .nav-mobile-link {
          display: block;
          padding: 1rem 2rem;
          font-size: 1rem;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border);
          transition: color 0.2s, background 0.2s;
        }
        .nav-mobile-link:hover { color: var(--text); background: var(--glass); }
        .nav-mobile-cta { color: var(--indigo-light); }
        @media (max-width: 680px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>
    </motion.nav>
  )
}
