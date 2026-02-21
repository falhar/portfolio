import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 'enpnt',
    index: '01',
    name: 'ENPNT',
    tagline: 'Dance & Fitness Marketplace',
    year: '2024 – 2025',
    role: 'Backend Developer',
    desc: 'A comprehensive fitness marketplace connecting dancers, studios, and enthusiasts. I owned the backend — a SilverStripe CMS platform exposing a GraphQL API consumed by the Next.js frontend and mobile apps. Covers class booking, e-commerce, multi-store, queued jobs, and deep third-party integrations.',
    highlights: [
      'SilverStripe 4 CMS backend with GraphQL API layer',
      'Stripe Connect multi-vendor payment processing',
      'Elasticsearch-powered search & discovery',
      'Queued jobs system for async tasks & emails',
      'Integrations: PayPal, MailChimp, Microsoft Graph, GeoIP2',
    ],
    tech: ['PHP', 'SilverStripe', 'GraphQL', 'Elasticsearch', 'Stripe Connect', 'MySQL', 'Docker'],
    accent: '#6366f1',
    accentBg: 'rgba(99,102,241,0.08)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="12" r="7" stroke="#6366f1" strokeWidth="2"/>
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 30l6-6 6 6" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 24v12" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'solace',
    index: '02',
    name: 'Solace',
    tagline: 'Smart Wellness Platform',
    year: '2024 – 2025',
    role: 'Full Stack Developer',
    desc: 'A smart gym & sauna management platform with IoT smart lock integration. Gym operators control sauna access via connected hardware — guests book slots, pay, and unlock doors digitally, managed through a real-time admin dashboard.',
    highlights: [
      'IoT Smart Lock integration (Sciener API)',
      'Real-time sauna passcode generation',
      'Multi-service microservices architecture',
      'Admin dashboard with Chart.js analytics',
      'Stripe-powered gym membership & booking payments',
    ],
    tech: ['Next.js', 'Node.js', 'Chakra UI', 'Chart.js', 'IoT API', 'PostgreSQL', 'Redis'],
    accent: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.08)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="32" height="22" rx="4" stroke="#22d3ee" strokeWidth="2"/>
        <path d="M16 20v-6a8 8 0 0116 0v6" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="31" r="4" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="2"/>
        <path d="M24 35v4" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'wavecards',
    index: '03',
    name: 'Wavecards',
    tagline: 'Digital Identity Platform',
    year: '2024 – 2025',
    role: 'Full Stack Developer',
    desc: 'An enterprise digital business card platform. Users create branded digital cards exportable to Apple Wallet and Google Wallet. Integrates with MS Dynamics CRM and Azure AD for seamless enterprise adoption, with Stripe-powered subscriptions.',
    highlights: [
      'Apple Wallet (.pkpass) card export',
      'Google Wallet generic card export',
      'Azure AD / MSAL enterprise SSO',
      'MS Dynamics CRM bi-directional sync',
      'Stripe subscription billing system',
    ],
    tech: ['React', 'Vite', 'Node.js', 'Azure AD', 'Apple Wallet', 'Google Wallet', 'MS Dynamics', 'Stripe'],
    accent: '#ec4899',
    accentBg: 'rgba(236,72,153,0.08)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="40" height="26" rx="5" stroke="#ec4899" strokeWidth="2"/>
        <path d="M4 20h40" stroke="#ec4899" strokeWidth="2"/>
        <rect x="10" y="26" width="10" height="6" rx="2" fill="#ec4899" fillOpacity="0.25" stroke="#ec4899" strokeWidth="1.5"/>
        <path d="M28 29h10M28 33h6" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      className="project-card glass"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      custom={index}
      style={{ '--accent': project.accent, '--accent-bg': project.accentBg }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Top row */}
      <div className="card-top">
        <div className="card-icon">{project.icon}</div>
        <span className="card-index">{project.index}</span>
      </div>

      {/* Header */}
      <div className="card-header">
        <div>
          <div className="card-year">{project.year}</div>
          <h3 className="card-title">{project.name}</h3>
          <p className="card-tagline">{project.tagline}</p>
        </div>
        <span className="card-role-badge">{project.role}</span>
      </div>

      {/* Description */}
      <p className="card-desc">{project.desc}</p>

      {/* Highlights */}
      <ul className="card-highlights">
        {project.highlights.map((h, i) => (
          <li key={i} className="card-highlight">
            <span className="card-highlight-dot" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="card-tech">
        {project.tech.map((t) => (
          <span key={t} className="card-badge">{t}</span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="card-accent-bar" />

      <style>{`
        .project-card {
          position: relative;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .project-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px var(--accent, #6366f1)33;
        }
        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .card-icon {
          width: 48px;
          height: 48px;
        }
        .card-icon svg { width: 100%; height: 100%; }
        .card-index {
          font-family: 'Fira Code', monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .card-year {
          font-family: 'Fira Code', monospace;
          font-size: 0.7rem;
          color: var(--accent, var(--indigo));
          letter-spacing: 0.1em;
          margin-bottom: 0.3rem;
        }
        .card-title {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text);
          line-height: 1.1;
        }
        .card-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }
        .card-role-badge {
          flex-shrink: 0;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.75rem;
          border-radius: 100px;
          background: var(--accent-bg, rgba(99,102,241,0.08));
          border: 1px solid var(--accent, var(--indigo))44;
          color: var(--accent, var(--indigo));
          white-space: nowrap;
        }
        .card-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--text-muted);
        }
        .card-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .card-highlight {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .card-highlight-dot {
          flex-shrink: 0;
          margin-top: 6px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent, var(--indigo));
        }
        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }
        .card-badge {
          font-family: 'Fira Code', monospace;
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          color: var(--text-muted);
          transition: border-color 0.2s, color 0.2s;
        }
        .project-card:hover .card-badge {
          border-color: var(--accent, var(--indigo))33;
          color: var(--text);
        }
        .card-accent-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent, #6366f1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .card-accent-bar { opacity: 1; }
      `}</style>
    </motion.article>
  )
}

const moreProjects = [
  {
    name: 'PlatfirmAI',
    desc: 'AI-powered WordPress platform, built and shipped in 5 weeks.',
    status: 'done',
    date: 'Oct – Nov 2024',
    emoji: '🤖',
    tech: 'WordPress',
  },
  {
    name: 'Nova Therapies',
    desc: 'Therapy services website — WordPress build from kickoff to launch.',
    status: 'done',
    date: 'Sep – Nov 2024',
    emoji: '✨',
    tech: 'WordPress',
  },
  {
    name: 'Safety Roof Anchor',
    desc: 'Safety equipment product site and compliance platform on WordPress.',
    status: 'done',
    date: 'Sep – Nov 2024',
    emoji: '🏗️',
    tech: 'WordPress',
  },
  {
    name: 'Frootmap',
    desc: 'Produce discovery & mapping platform. On hold — awaiting client.',
    status: 'pending',
    date: 'Nov 2024',
    emoji: '🥑',
    tech: 'WordPress',
  },
  {
    name: 'Internal Webs',
    desc: 'Internal tools & websites for SDT, Vafe, and Upscalix on WordPress.',
    status: 'maintenance',
    date: 'Jul – Dec 2024',
    emoji: '🌐',
    tech: 'WordPress',
  },
  {
    name: 'TGOC',
    desc: 'WordPress site delivered and handed off to client.',
    status: 'done',
    date: '2024',
    emoji: '📦',
    tech: 'WordPress',
  },
]

const statusMap = {
  done:        { label: 'Shipped', color: '#10b981' },
  progress:    { label: 'In progress', color: '#6366f1' },
  maintenance: { label: 'Maintenance', color: '#f59e0b' },
  pending:     { label: 'Pending', color: '#64748b' },
}

function MoreProjects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="more-projects"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="more-label">
        <span className="section-label" style={{ marginBottom: 0 }}>More work</span>
      </div>
      <div className="more-grid">
        {moreProjects.map((p, i) => (
          <motion.div
            key={p.name}
            className="more-card glass"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <div className="more-card-top">
              <span className="more-emoji">{p.emoji}</span>
              <span
                className="more-status"
                style={{ color: statusMap[p.status].color, borderColor: statusMap[p.status].color + '44' }}
              >
                {statusMap[p.status].label}
              </span>
            </div>
            <p className="more-name">{p.name}</p>
            <p className="more-desc">{p.desc}</p>
            <div className="more-footer">
              <p className="more-date">{p.date}</p>
              {p.tech && <span className="more-tech">{p.tech}</span>}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .more-projects {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
        }
        .more-label {
          margin-bottom: 1.5rem;
        }
        .more-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }
        .more-card {
          padding: 1.25rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          transition: box-shadow 0.25s;
        }
        .more-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .more-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .more-emoji {
          font-size: 1.25rem;
          line-height: 1;
        }
        .more-status {
          font-family: 'Fira Code', monospace;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.2rem 0.5rem;
          border-radius: 100px;
          border: 1px solid;
        }
        .more-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
        }
        .more-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.6;
          flex-grow: 1;
        }
        .more-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.25rem;
          gap: 0.5rem;
        }
        .more-date {
          font-family: 'Fira Code', monospace;
          font-size: 0.68rem;
          color: var(--text-muted);
          opacity: 0.6;
        }
        .more-tech {
          font-family: 'Fira Code', monospace;
          font-size: 0.65rem;
          color: var(--text-muted);
          opacity: 0.5;
          white-space: nowrap;
        }
      `}</style>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="section-label">Selected work</p>
          <h2 className="section-title">
            Projects I&apos;ve
            <br />
            <span className="grad-text">shipped in production.</span>
          </h2>
          <p className="section-sub">
            Featured products built over the past year at Upscalix — from
            architecture to deployment. Scroll down for more.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Secondary projects */}
        <MoreProjects />
      </div>

      <style>{`
        .projects-section {
          padding: 7rem 0;
          position: relative;
        }
        .section-header {
          margin-bottom: 3.5rem;
        }
        .section-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 1rem;
        }
        .section-sub {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 480px;
          line-height: 1.7;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 720px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
