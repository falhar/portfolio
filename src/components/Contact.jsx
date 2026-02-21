import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/falhar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/firman-ali-muthohar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        {/* Divider */}
        <div className="contact-divider" />

        <motion.div
          ref={ref}
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="contact-title">
            Let&apos;s build something
            <br />
            <span className="grad-text">great together.</span>
          </h2>
          <p className="contact-desc">
            I&apos;m open to full-time roles, freelance projects, and interesting
            collaborations. If you have something in mind, reach out — I read
            every message.
          </p>

          <a
            href="mailto:firman.ali39@gmail.com"
            className="contact-email"
            data-hover
          >
            <span>firman.ali39@gmail.com</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9h10.5M10.5 5.25L14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <div className="contact-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="contact-social" target="_blank" rel="noreferrer" data-hover>
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer bar */}
        <div className="footer-bar">
          <p className="footer-copy">
            © 2025 Firman Ali Muthohar —{' '}
            <span className="footer-built">Built with React + Vite</span>
          </p>
          <p className="footer-code">Made with care, shipped with confidence.</p>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 5rem 0 3rem;
          position: relative;
        }
        .contact-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          margin-bottom: 5rem;
        }
        .contact-content {
          max-width: 620px;
        }
        .contact-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .contact-desc {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 460px;
        }
        .contact-email {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1rem;
          font-weight: 600;
          color: var(--indigo-light);
          border-bottom: 1px solid var(--indigo)66;
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
          margin-bottom: 2rem;
        }
        .contact-email:hover {
          color: var(--cyan);
          border-color: var(--cyan)66;
        }
        .contact-socials {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .contact-social {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.1rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .contact-social:hover {
          border-color: var(--indigo)66;
          color: var(--text);
          background: var(--glass);
        }
        .footer-bar {
          margin-top: 5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .footer-copy {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: 'Fira Code', monospace;
        }
        .footer-built {
          color: var(--indigo-light);
        }
        .footer-code {
          font-family: 'Fira Code', monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
          opacity: 0.5;
        }
      `}</style>
    </section>
  )
}
