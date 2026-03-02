import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

import '../styles/NavBar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // md+ desktop, <md mobile

  const [open, setOpen] = useState(false);
  const [scrolledPastHome, setScrolledPastHome] = useState(false);
  const toggle = (v) => () => setOpen(v);

  useEffect(() => {
    const home = document.getElementById('home');
    if (!home) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolledPastHome(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-72px 0px 0px 0px' },
    );
    observer.observe(home);
    return () => observer.disconnect();
  }, []);

  const EXT = {
    email: 'mailto:meghanaksrinivas@gmail.com',
    github: 'https://github.com/megksrinivas',
    linkedin: 'https://www.linkedin.com/in/meghana-k-srinivas',
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      className={`nav ${scrolledPastHome ? 'nav--scrolled' : ''}`}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className="nav_toolbar">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className="nav_brand nav_brandLink"
          >
            Meghana
          </Typography>

          {isDesktop ? (
            <>
              <Box className="nav_links">
                {LINKS.map(({ to, label }) => {
                  const active = pathname === to;
                  return (
                    <Button
                      key={to}
                      component={Link}
                      to={to}
                      color="inherit"
                      disableRipple
                      className={`nav_link ${active ? 'is-active' : ''}`}
                    >
                      {label}
                    </Button>
                  );
                })}
              </Box>

              <Box className="nav_icons">
                <a href={EXT.email} className="nav_icon" aria-label="Email">
                  <EmailOutlinedIcon fontSize="medium" />
                </a>
                <a
                  href={EXT.github}
                  className="nav_icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon fontSize="medium" />
                </a>
                <a
                  href={EXT.linkedin}
                  className="nav_icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fontSize="medium" />
                </a>
              </Box>
            </>
          ) : (
            <IconButton
              aria-label="Open navigation menu"
              edge="end"
              onClick={toggle(true)}
              className="nav_hamburger"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {!isDesktop && (
        <Drawer
          anchor="right"
          open={open}
          onClose={toggle(false)}
          slotProps={{ paper: { className: 'nav_drawer' } }}
        >
          <Box className="nav_drawerContent">
            <List className="nav_drawerList">
              {LINKS.map(({ to, label }) => {
                const active = pathname === to;
                return (
                  <ListItemButton
                    key={to}
                    component={Link}
                    to={to}
                    onClick={toggle(false)}
                    className={`nav_drawerItem ${active ? 'is-active' : ''}`}
                  >
                    <ListItemText primary={label} />
                  </ListItemButton>
                );
              })}
            </List>

            <Box className="nav_drawerIcons">
              <a href={EXT.email} className="nav_icon" aria-label="Email">
                <EmailOutlinedIcon />
              </a>
              <a
                href={EXT.github}
                className="nav_icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={EXT.linkedin}
                className="nav_icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </Box>
          </Box>
        </Drawer>
      )}
    </AppBar>
  );
}
