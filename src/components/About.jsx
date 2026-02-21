import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const techGroups = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'TailwindCSS', 'Ant Design', 'Chakra UI'],
    accent: '#6366f1',
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'SilverStripe', 'WordPress', 'Django', 'FastAPI', 'GraphQL', 'REST APIs'],
    accent: '#22d3ee',
  },
  {
    label: 'Data & Cloud',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Sequelize', 'Docker', 'AWS', 'CI/CD'],
    accent: '#f59e0b',
  },
  {
    label: 'Integrations',
    items: ['Stripe Connect', 'Azure AD', 'Apple Wallet', 'Google Wallet', 'MS Dynamics', 'PayPal'],
    accent: '#10b981',
  },
]

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const itemVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

function TechGroup({ group, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="tech-group"
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={staggerParent}
      style={{ '--g-accent': group.accent }}
    >
      <div className="tech-group-label">{group.label}</div>
      <div className="tech-group-items">
        {group.items.map((item) => (
          <motion.span key={item} className="tech-pill" variants={itemVariant} data-hover>
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="about-section">
      <div className="section-inner about-inner">
        {/* Left: bio */}
        <motion.div
          ref={ref}
          className="about-bio"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="section-label">About me</p>
          <h2 className="about-title">
            I build things
            <br />
            <span className="grad-text">end-to-end.</span>
          </h2>
          <div className="about-text">
            <p>
              Mathematics graduate from{' '}
              <span className="about-highlight">Universitas Diponegoro</span> turned
              full stack developer. I started in backend engineering and grew into
              owning full product stacks — APIs, frontends, and databases across Node.js, PHP/SilverStripe, and WordPress.
            </p>
            <p>
              Currently at <span className="about-highlight">Upscalix</span> as
              Full-stack Developer, while also doing freelance backend work for{' '}
              <span className="about-highlight">humanID</span> (a privacy-first
              auth platform). Over 5 years I&apos;ve shipped across startups and agencies
              in Indonesia — backend-first, full-stack-minded.
            </p>
            <p>
              I pick up new stacks fast, care deeply about clean APIs, and believe
              good code is code someone else can confidently change.
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot timeline-dot--active" />
              <div>
                <p className="timeline-role">Full-stack Developer</p>
                <p className="timeline-company">Upscalix · Jul 2023 – Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot timeline-dot--active" />
              <div>
                <p className="timeline-role">Software Developer · Freelance</p>
                <p className="timeline-company">humanID · Dec 2023 – Present</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p className="timeline-role">Backend Developer · Freelance</p>
                <p className="timeline-company">BetterSocial · May – Oct 2023</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p className="timeline-role">Back End Developer</p>
                <p className="timeline-company">Upscalix · Sep 2022 – Jul 2023</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p className="timeline-role">Backend Developer · Freelance</p>
                <p className="timeline-company">Potatos Studio · Oct 2021 – Apr 2023</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p className="timeline-role">Backend Engineer</p>
                <p className="timeline-company">Widya Robotics · Mar 2021 – Sep 2022</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: tech stack */}
        <div className="about-stack">
          <p className="section-label">Tech stack</p>
          <div className="tech-groups">
            {techGroups.map((g, i) => (
              <TechGroup key={g.label} group={g} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 7rem 0;
          position: relative;
        }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        .about-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin-bottom: 1.75rem;
        }
        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .about-text p {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--text-muted);
        }
        .about-highlight {
          color: var(--indigo-light);
          font-weight: 600;
        }
        .timeline {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          border-left: 1px solid var(--border);
          padding-left: 1.5rem;
        }
        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: -1.75rem;
          top: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-muted);
          border: 2px solid var(--bg);
        }
        .timeline-dot--active {
          background: var(--indigo);
          box-shadow: 0 0 0 2px var(--indigo)66;
        }
        .timeline-role {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
        }
        .timeline-company {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: 'Fira Code', monospace;
        }
        .about-stack {
          position: sticky;
          top: 6rem;
        }
        .tech-groups {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 0.5rem;
        }
        .tech-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .tech-group-label {
          font-family: 'Fira Code', monospace;
          font-size: 0.7rem;
          color: var(--g-accent, var(--indigo));
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .tech-group-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .tech-pill {
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.3rem 0.75rem;
          border-radius: 100px;
          background: var(--glass);
          border: 1px solid var(--border);
          color: var(--text-muted);
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: default;
        }
        .tech-pill:hover {
          border-color: var(--g-accent, var(--indigo))66;
          color: var(--text);
          background: var(--g-accent, var(--indigo))0d;
        }
        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-stack { position: static; }
        }
      `}</style>
    </section>
  )
}
