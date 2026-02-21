import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'

const roles = [
  'Full Stack Developer',
  'React & Next.js Engineer',
  'Node.js Backend Dev',
  'Mobile App Builder',
  'API Architect',
]

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '10+', label: 'Products shipped' },
  { value: '3', label: 'Apps in production' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="hero">
      {/* Aurora background */}
      <div className="aurora" aria-hidden>
        <div className="aurora-blob" />
        <div className="aurora-blob" />
        <div className="aurora-blob" />
      </div>

      <div className="hero-inner section-inner">
        <motion.p
          className="hero-greeting"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span className="hero-greeting-line" />
          Hey, I&apos;m
        </motion.p>

        <motion.h1
          className="hero-name"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Firman Ali
          <br />
          <span className="grad-text">Muthohar.</span>
        </motion.h1>

        <motion.div
          className="hero-role-wrap"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          <span className="hero-role">{typed}</span>
          <span className="hero-cursor" aria-hidden>|</span>
        </motion.div>

        <motion.p
          className="hero-desc"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          I craft scalable web &amp; mobile products from zero to production —
          obsessing over clean architecture, great UX, and shipping that actually works.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
        >
          <a href="#projects" className="btn-primary" data-hover>
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="mailto:firman.ali39@gmail.com" className="btn-ghost" data-hover>
            Let&apos;s talk
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
        >
          {stats.map((s, i) => (
            <div key={i} className="hero-stat">
              <span className="hero-stat-value grad-text">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="hero-scroll-track">
          <div className="hero-scroll-thumb" />
        </div>
        <span>scroll</span>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8rem 0 5rem;
          overflow: hidden;
        }
        .hero-inner {
          position: relative;
          z-index: 2;
        }
        .hero-greeting {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          letter-spacing: 0.05em;
        }
        .hero-greeting-line {
          display: inline-block;
          width: 40px;
          height: 1px;
          background: var(--indigo);
        }
        .hero-name {
          font-size: clamp(3.2rem, 8vw, 7rem);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: var(--text);
        }
        .hero-role-wrap {
          display: flex;
          align-items: center;
          gap: 2px;
          margin-bottom: 1.5rem;
          min-height: 2rem;
        }
        .hero-role {
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-weight: 500;
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
        }
        .hero-cursor {
          color: var(--cyan);
          font-family: 'Fira Code', monospace;
          font-size: 1.4rem;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-desc {
          max-width: 520px;
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s;
          box-shadow: 0 4px 24px rgba(99, 102, 241, 0.35);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(99, 102, 241, 0.5);
        }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 0.85rem 1.75rem;
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          border-radius: 10px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .btn-ghost:hover {
          border-color: var(--indigo);
          color: var(--text);
          transform: translateY(-2px);
        }
        .hero-stats {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .hero-stat-value {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: 'Fira Code', monospace;
        }
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hero-scroll-track {
          width: 1px;
          height: 48px;
          background: var(--border);
          position: relative;
          overflow: hidden;
        }
        .hero-scroll-thumb {
          position: absolute;
          top: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--indigo));
          animation: scroll-drop 1.6s ease-in-out infinite;
        }
        @keyframes scroll-drop {
          0%  { top: -100%; }
          100%{ top: 100%; }
        }
      `}</style>
    </section>
  )
}
