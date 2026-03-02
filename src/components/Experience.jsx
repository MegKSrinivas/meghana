import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import '../styles/Experience.css';

const experience = [
  {
    role: 'ML Engineer',
    company: 'FinOptima',
    location: 'New York, NY',
    period: 'Sep 2025 – Present',
    bullets: [
      'Decoupled a monolithic deepfake detection platform into AWS EC2 microservices for high-throughput inference.',
      'Implemented centralized IAM and SSO with AWS Cognito and OAuth 2.0 for secure multi-tenant SaaS auth and RBAC.',
      'Developed a deepfake audio classifier (EER under 2.5%) using XLSR representations and Mamba-based sequence modeling.',
      'Enhanced ML pipelines with diffusion-based synthetic data generation, tripling dataset scale for fraud detection.',
    ],
  },
  {
    role: 'Software Development Engineer II',
    company: 'Nineleaps',
    location: 'Bangalore, India',
    period: 'Apr 2021 – Oct 2023',
    bullets: [
      'Optimized application rendering by 60% via SSR and lazy loading; improved Lighthouse accessibility and SEO.',
      'Reduced redundant network requests by 40% with JWT-based client-side auth and conditional UI rendering.',
      'Built a low-latency retrieval API for essays and feedback (sub-200ms p95) with artifact offload to AWS S3.',
      'Led migration of REST APIs to GraphQL, improving query efficiency and eliminating over-fetching.',
      'Engineered an NLP evaluation system with token- and document-level essay feedback and RAG-based scoring with BERT.',
    ],
  },
  {
    role: 'Member of Technical Staff III',
    company: 'Nineleaps',
    location: 'Bangalore, India',
    period: 'Aug 2019 – Apr 2021',
    bullets: [
      'Reduced code duplication by 30% with modular React components and Redux for shared state.',
      'Deployed ML inference on AWS Lambda for real-time essay scoring, feedback, and recommendations.',
      'Built article discovery API with Elasticsearch (50ms p99) for keyword-based retrieval.',
      'Automated ETL pipeline for contextual essay evaluation; standardized API contracts and CI/CD schema validation.',
      'Enabled 25% faster marketing insights by optimizing SQL in campaign analytics workflows.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Nineleaps',
    location: 'Bangalore, India',
    period: 'Jan 2019 – Aug 2019',
    bullets: [
      'Integrated Firebase Analytics with custom event tracking across 15+ interactions for data-driven UX decisions.',
      'Developed and optimized REST APIs for CRUD with PostgreSQL indexing, supporting 10k+ daily active users.',
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const job = experience[activeIndex];

  return (
    <section id="experience" className="experience">
      <h2 className="experience_heading">Experience</h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <nav
              className="experience_companyNav"
              aria-label="Experience companies"
            >
              {experience.map((item, index) => (
                <button
                  key={item.role + index}
                  type="button"
                  className={
                    index === activeIndex
                      ? 'experience_companyButton experience_companyButton--active'
                      : 'experience_companyButton'
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="experience_companyLabel">{item.role}</span>
                  <span className="experience_companyIndicator" />
                </button>
              ))}
            </nav>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <article className="experience_item">
              <header className="experience_header">
                <h3 className="experience_role">
                  {job.role}{' '}
                  <span className="experience_roleAt">@ {job.company}</span>
                </h3>
                <span className="experience_meta">
                  {job.period} · {job.location}
                </span>
              </header>
              <ul className="experience_bullets">
                {job.bullets.map((bullet, index) => (
                  <li key={index} className="experience_bulletItem">
                    <KeyboardDoubleArrowRightOutlinedIcon className="experience_bulletIcon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
