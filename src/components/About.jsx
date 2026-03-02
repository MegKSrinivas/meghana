import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import '../styles/About.css';

const skillList = [
  { name: 'Python', link: 'https://www.python.org/', icon: 'python' },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: 'typescript',
  },
  { name: 'FastAPI', link: 'https://fastapi.tiangolo.com/', icon: 'fastapi' },
  { name: 'React', link: 'https://react.dev/', icon: 'react' },
  { name: 'Angular', link: 'https://angular.io/', icon: 'angular' },
  { name: 'PyTorch', link: 'https://pytorch.org/', icon: 'pytorch' },
  { name: 'Langchain', link: 'https://www.langchain.com/', icon: 'langchain' },
  { name: 'LangGraph', link: 'https://www.langgraph.dev/', icon: 'langgraph' },
  { name: 'AWS', link: 'https://aws.amazon.com/', icon: 'aws' },
  { name: 'Google Cloud', link: 'https://cloud.google.com/', icon: 'gcp' },
  { name: 'Kubernetes', link: 'https://kubernetes.io/', icon: 'kubernetes' },
  { name: 'Terraform', link: 'https://www.terraform.io/', icon: 'terraform' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="about_section">
              <h4 className="about_title">About Me</h4>
              <p className="about_intro">
                Add a short intro about yourself here—your background, what you
                do, and what you care about. Keep it to a few sentences so
                visitors get a quick sense of who you are.
              </p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="about_photoPlaceholder">
              <img
                src={`/assets/profile.png`}
                alt="profile"
                width={300}
                height={400}
                loading="lazy"
                className="about_profileImage"
              />
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <h4 className="about_toolsTitle">Tools &amp; skills</h4>
            <Grid container spacing={2} className="about_skills">
              {skillList.map((item, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  className="about_skillGridItem"
                >
                  <div className="about_skillCardWrap">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about_skillCard"
                    >
                      <div className="about_skillIcon">
                        <img
                          src={`/assets/icons/${item.icon}.png`}
                          alt=""
                          width={40}
                          height={40}
                          loading="lazy"
                        />
                      </div>
                      <div className="about_skillContent">
                        <span className="about_skillName">{item.name}</span>
                      </div>
                    </a>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
