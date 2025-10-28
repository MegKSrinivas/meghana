import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import '../styles/About.css';

export default function About() {
  let skillList = ['Skill 1', 'Skill 2', 'Skill 3'];
  return (
    <div className="about">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="about_section">
              <h4> about me</h4>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  condimentum, neque at bibendum finibus, lectus nibh cursus
                  velit, a dictum justo dui eget lorem. Curabitur venenatis,
                  arcu vitae maximus suscipit, turpis massa malesuada sem, vitae
                  fermentum nisi sapien at risus.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                {skillList.map((item) => {
                  return (
                    <div>
                      <span>
                        <KeyboardDoubleArrowRightOutlinedIcon
                          sx={{
                            color: 'var(--color-accent, #f1a9d6);',
                            paddingRight: '2rem',
                          }}
                        />
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <div>
              <h3>*Space for photo*</h3>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
