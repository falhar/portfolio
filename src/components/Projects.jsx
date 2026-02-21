import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 'enpnt',
    index: '01',
    name: 'ENPNT',
    tagline: 'Dance & Fitness Marketplace',
    year: 'Mar 2025 – Present',
    role: 'Backend Developer',
    desc: 'A comprehensive fitness marketplace connecting dancers, studios, and enthusiasts. I own the backend — a SilverStripe CMS platform exposing a GraphQL API consumed by the Next.js frontend. Covers class booking, e-commerce, multi-store, queued jobs, and deep third-party integrations.',
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
    detail: {
      overview: 'ENPNT is an Australian dance and fitness marketplace that connects students, instructors, and studios on a single platform. The product covers class discovery, slot booking, multi-vendor e-commerce, and digital membership management. I was brought in as the sole backend developer — responsible for the entire server-side stack while the frontend team built the Next.js consumer app on top of my API.',
      objectives: [
        'Build a scalable, multi-tenant CMS backend that supports multiple studios and instructors on a single instance',
        'Expose a clean GraphQL API for the Next.js frontend to consume for all data operations',
        'Enable multi-vendor payouts so studios receive funds directly via Stripe Connect',
        'Integrate deep third-party services (search, payments, email, calendar, geolocation)',
        'Keep the system reliable under load with async job processing for heavy operations',
      ],
      responsibilities: [
        'Designed and maintained all SilverStripe 4 data models, relations, and CMS page types',
        'Built and versioned the entire GraphQL schema — queries, mutations, and custom resolvers',
        'Implemented Stripe Connect onboarding, payment splits, and webhook reconciliation',
        'Integrated Elasticsearch for full-text search with custom analyzers and relevance tuning',
        'Built a queued jobs system for email automation, report generation, and async API calls',
        'Integrated PayPal, MailChimp (mailing lists), Microsoft Graph (calendar sync), and GeoIP2 (location detection)',
        'Containerized the dev environment with Docker for consistent local and CI builds',
      ],
      challenges: [
        {
          problem: 'GraphQL N+1 query problem',
          solution: 'Implemented DataLoader-style batching within SilverStripe resolvers — grouped child queries and fetched them in single SQL calls rather than per-item, cutting query counts by ~80% on list endpoints.',
        },
        {
          problem: 'Complex Stripe Connect multi-vendor settlement flows',
          solution: 'Built custom transfer and payout logic with idempotency keys and a webhook handler to reconcile disputes, refunds, and partial payouts — ensuring studios always receive the correct split without double-processing.',
        },
        {
          problem: 'Elasticsearch relevance for fitness-specific queries',
          solution: 'Wrote custom analyzers with edge n-gram tokenizers for partial matching on class names and studio tags, plus field boosting to prioritise proximity and schedule relevance over raw text score.',
        },
      ],
      impact: [
        'Platform actively serving studios and students in production since launch',
        'Multi-vendor payouts process cleanly with full audit trail and zero manual reconciliation',
        'Elasticsearch reduced average search response time vs previous SQL LIKE query approach',
        'Queued job system handles all email campaigns and report exports without blocking API responses',
      ],
    },
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
    year: 'Feb 2024 – Present',
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
    detail: {
      overview: 'Solace is a SaaS platform for gym and wellness centre operators that replaces physical key handoffs with IoT-connected smart locks. Guests book a sauna slot, pay online, and receive a time-limited digital passcode — no staff interaction needed. Operators get a real-time admin dashboard with booking management, analytics, and remote lock control. I built both the backend API and the admin frontend.',
      objectives: [
        'Digitise sauna access control — eliminate manual key handoffs and reception bottlenecks',
        'Integrate reliably with Sciener IoT smart lock hardware over their API',
        'Provide gym operators a real-time dashboard to monitor bookings and lock status',
        'Support multiple gyms on a single platform with isolated data and settings',
        'Handle Stripe billing for memberships, one-off bookings, and pay-as-you-go access',
      ],
      responsibilities: [
        'Built the Node.js (Express) backend API that interfaces with the Sciener IoT lock API',
        'Implemented time-limited passcode generation and automatic revocation on booking expiry',
        'Architected a microservices structure — separate services for bookings, locks, payments, and notifications',
        'Developed the Next.js + Chakra UI admin dashboard with live booking tables and Chart.js usage analytics',
        'Designed the PostgreSQL schema for multi-gym tenancy, bookings, and access logs',
        'Added Redis caching layer for frequently read gym configurations and lock states',
        'Integrated Stripe Checkout for membership plans and per-session payments',
      ],
      challenges: [
        {
          problem: 'IoT hardware latency and unreliable lock responses',
          solution: 'Built a retry queue with exponential backoff for all lock commands — if a passcode write times out, the system retries up to 3 times and falls back to a pre-generated backup code, with an alert sent to the operator.',
        },
        {
          problem: 'Real-time access scheduling across time zones',
          solution: 'Standardised all booking timestamps as UTC in the database and converted to the gym\'s configured local timezone only at display time — eliminating DST-related double-booking bugs that appeared during the initial test phase.',
        },
        {
          problem: 'Dashboard performance with concurrent bookings during peak hours',
          solution: 'Introduced Redis caching on gym-level config reads (TTL 60s) and paginated all booking list APIs — dashboard load time dropped significantly once the unbounded SQL joins were replaced.',
        },
      ],
      impact: [
        'Gym operators eliminated front-desk check-in for sauna sessions entirely',
        'Guests receive access passcodes on any device — no native app required',
        'Booking conflicts and double-access incidents dropped to zero after timezone fix',
        'Platform handles multiple gym sites from a single operator dashboard',
      ],
    },
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
    year: 'Nov 2022 – Present',
    role: 'Full Stack → Maintenance',
    desc: 'An enterprise digital business card platform. Joined as an early developer and shipped the core CRM integrations, payment flow, and wallet features. Now in a maintenance & DevOps capacity: server infra, DB admin, and PR review.',
    highlights: [
      'Built MS Dynamics 365 & HubSpot CRM integrations from scratch',
      'Implemented Rex CRM, Apple Wallet export & custom domain system',
      'New Stripe payment flow & GST auto-collection',
      'CI/CD pipelines, multi-server deploy scripts & VPN management',
      'DB query optimisation, indexing & MongoDB upgrades',
    ],
    tech: ['React', 'Vite', 'Node.js', 'MongoDB', 'Azure AD', 'Apple Wallet', 'Stripe', 'MS Dynamics'],
    accent: '#ec4899',
    accentBg: 'rgba(236,72,153,0.08)',
    detail: {
      overview: 'Wavecards is an enterprise SaaS platform that replaces physical business cards with dynamic digital profiles. Users create a branded card, share it via QR code or NFC, and contacts are automatically pushed into CRM systems. The platform serves real estate agencies, financial advisers, and enterprise sales teams in Australia. I joined as one of the early developers, owned several core feature areas, and now maintain the infrastructure and codebase.',
      objectives: [
        'Give enterprise clients a seamless way to sync contact exchanges directly into their CRM of choice',
        'Enable professionals to store and share their digital card via Apple Wallet and Google Wallet',
        'Rebuild the payment system to handle Australian GST compliance automatically',
        'Maintain platform reliability and performance as the user base scaled',
        'Establish CI/CD pipelines for consistent and safe deployments across multiple servers',
      ],
      responsibilities: [
        'Built MS Dynamics 365 CRM integration from scratch — MSAL OAuth flow, contact sync, and field mapping',
        'Implemented HubSpot CRM sync with webhook-driven contact updates and custom property mapping',
        'Integrated Rex CRM (popular in Australian real estate) with card-to-contact automation',
        'Built Apple Wallet .pkpass generation with certificate signing via Node.js crypto',
        'Redesigned the Stripe payment flow with automatic GST calculation and invoice generation',
        'Set up CI/CD pipelines and multi-server deploy scripts using GitHub Actions and PM2',
        'Now: managing server infra (VPS, VPN, SSL), MongoDB upgrades, query optimisation, and PR review',
      ],
      challenges: [
        {
          problem: 'MS Dynamics 365 OAuth complexity and token management',
          solution: 'Implemented MSAL (Microsoft Authentication Library) with a server-side token cache and automatic refresh logic — abstracting the OAuth handshake away from the CRM sync service so it could focus purely on data mapping.',
        },
        {
          problem: 'Apple Wallet .pkpass certificate signing without an Apple backend SDK',
          solution: 'Used Node.js\'s built-in crypto module to sign .pkpass bundles with the Apple-issued certificate — managed the certificate lifecycle (renewals, revocations) and built a generator that produces valid, scannable passes for any card.',
        },
        {
          problem: 'MongoDB performance degradation as data volume grew',
          solution: 'Ran query profiling to identify slow operations, added compound indexes on frequently filtered fields, rewrote aggregation pipelines to filter early, and coordinated a zero-downtime MongoDB major version upgrade.',
        },
      ],
      impact: [
        'Enterprise clients (real estate agencies, financial firms) onboarded with native CRM sync',
        'Apple Wallet adoption simplified the sales handoff workflow for Rex CRM users in real estate',
        'GST auto-collection eliminated manual tax processing for the billing team',
        'CI/CD pipelines reduced deployment risk and allowed faster, safer releases across environments',
      ],
    },
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

function DetailSection({ title, accent, children }) {
  return (
    <div className="detail-section">
      <div className="detail-section-heading">
        <span className="detail-section-bar" style={{ background: accent }} />
        <h4 className="detail-section-title">{title}</h4>
      </div>
      {children}
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const { detail, accent, accentBg } = project

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-panel"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        style={{ '--accent': accent, '--accent-bg': accentBg }}
      >
        {/* Modal header */}
        <div className="modal-header">
          <div>
            <div className="modal-year">{project.year}</div>
            <h3 className="modal-title">{project.name}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Role + tech badges */}
        <div className="modal-meta">
          <span className="card-role-badge">{project.role}</span>
          <div className="modal-tech">
            {project.tech.map((t) => (
              <span key={t} className="card-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="modal-body">

          {/* Overview */}
          <DetailSection title="Project Overview" accent={accent}>
            <p className="detail-text">{detail.overview}</p>
          </DetailSection>

          {/* Objectives */}
          <DetailSection title="Objectives" accent={accent}>
            <ul className="detail-list">
              {detail.objectives.map((o, i) => (
                <li key={i} className="detail-list-item">
                  <span className="detail-dot" style={{ background: accent }} />
                  {o}
                </li>
              ))}
            </ul>
          </DetailSection>

          {/* Key Responsibilities */}
          <DetailSection title="Key Responsibilities" accent={accent}>
            <ul className="detail-list">
              {detail.responsibilities.map((r, i) => (
                <li key={i} className="detail-list-item">
                  <span className="detail-dot" style={{ background: accent }} />
                  {r}
                </li>
              ))}
            </ul>
          </DetailSection>

          {/* Challenges & Solutions */}
          <DetailSection title="Technical Challenges & Solutions" accent={accent}>
            <div className="detail-challenges">
              {detail.challenges.map((c, i) => (
                <div key={i} className="challenge-block" style={{ '--accent-bg': accentBg, '--accent': accent }}>
                  <p className="challenge-problem">
                    <span className="challenge-label">Problem</span>
                    {c.problem}
                  </p>
                  <p className="challenge-solution">
                    <span className="challenge-label">Solution</span>
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </DetailSection>

          {/* Impact */}
          <DetailSection title="Impact & Results" accent={accent}>
            <ul className="detail-list">
              {detail.impact.map((im, i) => (
                <li key={i} className="detail-list-item detail-list-item--impact">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                    <path d="M2.5 7l3 3 6-6" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {im}
                </li>
              ))}
            </ul>
          </DetailSection>

        </div>

        <style>{`
          .modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 200;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(6px);
            display: flex;
            justify-content: flex-end;
          }
          .modal-panel {
            width: 100%;
            max-width: 580px;
            height: 100%;
            background: #0d0d14;
            border-left: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 2rem 2rem 1.25rem;
            border-bottom: 1px solid var(--border);
            flex-shrink: 0;
          }
          .modal-year {
            font-family: 'Fira Code', monospace;
            font-size: 0.7rem;
            color: var(--accent);
            letter-spacing: 0.1em;
            margin-bottom: 0.3rem;
          }
          .modal-title {
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            color: var(--text);
          }
          .modal-tagline {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-top: 0.2rem;
          }
          .modal-close {
            background: none;
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text-muted);
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s;
            flex-shrink: 0;
          }
          .modal-close:hover { border-color: var(--accent); color: var(--text); }
          .modal-meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border-bottom: 1px solid var(--border);
            flex-shrink: 0;
          }
          .modal-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
          }
          .modal-body {
            overflow-y: auto;
            flex: 1;
            padding: 1.75rem 2rem 3rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .modal-body::-webkit-scrollbar { width: 4px; }
          .modal-body::-webkit-scrollbar-track { background: transparent; }
          .modal-body::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
          .detail-section { display: flex; flex-direction: column; gap: 0.9rem; }
          .detail-section-heading {
            display: flex;
            align-items: center;
            gap: 0.6rem;
          }
          .detail-section-bar {
            display: inline-block;
            width: 3px;
            height: 1rem;
            border-radius: 2px;
            flex-shrink: 0;
          }
          .detail-section-title {
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--text-muted);
          }
          .detail-text {
            font-size: 0.9rem;
            line-height: 1.75;
            color: var(--text-muted);
          }
          .detail-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }
          .detail-list-item {
            display: flex;
            align-items: flex-start;
            gap: 0.6rem;
            font-size: 0.875rem;
            line-height: 1.55;
            color: var(--text-muted);
          }
          .detail-list-item--impact { color: var(--text); }
          .detail-dot {
            flex-shrink: 0;
            margin-top: 7px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
          }
          .detail-challenges {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          .challenge-block {
            padding: 1rem 1.1rem;
            border-radius: 10px;
            background: var(--accent-bg);
            border: 1px solid var(--accent)22;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }
          .challenge-problem,
          .challenge-solution {
            font-size: 0.85rem;
            line-height: 1.6;
            color: var(--text-muted);
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          }
          .challenge-label {
            font-family: 'Fira Code', monospace;
            font-size: 0.65rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--accent);
          }
          @media (max-width: 640px) {
            .modal-panel { max-width: 100%; border-left: none; border-top: 1px solid var(--border); }
            .modal-overlay { align-items: flex-end; }
            .modal-panel { height: 92%; border-radius: 16px 16px 0 0; }
          }
        `}</style>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, index, onOpen }) {
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

      {/* Details button */}
      <button className="card-details-btn" onClick={() => onOpen(project)} data-hover>
        <span>View full summary</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

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
        .card-details-btn {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          cursor: pointer;
          align-self: flex-start;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .card-details-btn:hover {
          border-color: var(--accent, var(--indigo))66;
          color: var(--text);
          background: var(--accent-bg);
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
  const [activeProject, setActiveProject] = useState(null)

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
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActiveProject} />
          ))}
        </div>

        {/* Secondary projects */}
        <MoreProjects />
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>

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
