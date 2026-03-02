import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import '../styles/Experience.css';

const experience = [
  {
    role: 'ML Engineer',
    company: 'FinOptima Solutions',
    location: 'New York, NY',
    period: 'Sep 2025 – Present',
    bullets: [
      'Architected AWS EC2 microservices for deepfake detection; implemented IAM and SSO with Cognito and OAuth 2.0 for multi-tenant SaaS.',
      'Built deepfake audio classifier (EER under 2.5%) with XLSR and Mamba; enhanced ML pipelines with diffusion-based synthetic data for fraud detection.',
    ],
    skills: [
      'AWS',
      'Cognito',
      'OAuth 2.0',
      'PyTorch',
      'Mamba',
      'XLSR',
      'Diffusion',
    ],
  },
  {
    role: 'Software Development Engineer II',
    company: 'Nineleaps',
    location: 'Bangalore, India',
    period: 'Apr 2021 – Oct 2023',
    bullets: [
      'Improved rendering 60% via SSR and lazy loading; reduced API calls 40% with JWT auth; built low-latency retrieval API with S3.',
      'Led REST-to-GraphQL migration; built NLP evaluation system with RAG and BERT for essay feedback.',
    ],
    skills: ['React', 'SSR', 'GraphQL', 'AWS S3', 'BERT', 'RAG', 'JWT'],
  },
  {
    role: 'Member of Technical Staff III',
    company: 'Nineleaps',
    location: 'Bangalore, India',
    period: 'Aug 2019 – Apr 2021',
    bullets: [
      'Reduced duplication with React/Redux; deployed ML on Lambda for essay scoring; built Elasticsearch article API (50ms p99).',
      'Automated ETL for essay evaluation; standardized API contracts and CI/CD; optimized SQL for 25% faster marketing insights.',
    ],
    skills: [
      'React',
      'Redux',
      'AWS Lambda',
      'Elasticsearch',
      'ETL',
      'CI/CD',
      'SQL',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Nineleaps',
    location: 'Bangalore, India',
    period: 'Jan 2019 – Aug 2019',
    bullets: [
      'Integrated Firebase Analytics with custom events across 15+ interactions for UX prioritization.',
      'Developed and optimized REST APIs with PostgreSQL indexing for 10k+ daily active users.',
    ],
    skills: ['Firebase', 'REST APIs', 'PostgreSQL'],
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
          <Grid size={{ xs: 12, md: 5 }}>
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
                  <div className="experience_companyLabelBlock">
                    <span className="experience_companyLabel">{item.role}</span>
                    <span className="experience_meta">
                      {item.period} · {item.location}
                    </span>
                  </div>
                  <span className="experience_companyIndicator" />
                </button>
              ))}
            </nav>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <article className="experience_item">
              <ul className="experience_bullets">
                {job.bullets.map((bullet, index) => (
                  <li key={index} className="experience_bulletItem">
                    <KeyboardDoubleArrowRightOutlinedIcon className="experience_bulletIcon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {job.skills && job.skills.length > 0 && (
                <div className="experience_tags">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="experience_tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
