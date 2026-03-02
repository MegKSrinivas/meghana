import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../styles/Projects.css';

const projects = [
  {
    name: 'AutoStride',
    github: '#', // placeholder
  },
  {
    name: 'ForgeryNet',
    github: '#', // placeholder
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;
  const project = projects[activeIndex];

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  };

  return (
    <section id="projects" className="projects">
      <h2 className="projects_heading">Projects</h2>

      <div className="projects_carousel">
        <button
          type="button"
          className="projects_arrow projects_arrow--left"
          onClick={goPrev}
          aria-label="Previous project"
        >
          <ChevronLeftIcon />
        </button>

        <article className="projects_card">
          <div className="projects_cardInner">
            <h3 className="projects_cardTitle">{project.name}</h3>

            <button
              type="button"
              className="projects_githubButton"
              onClick={() => {}}
            >
              <GitHubIcon className="projects_githubIcon" />
              <span>GitHub link (coming soon)</span>
            </button>
          </div>
        </article>

        <button
          type="button"
          className="projects_arrow projects_arrow--right"
          onClick={goNext}
          aria-label="Next project"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
}
