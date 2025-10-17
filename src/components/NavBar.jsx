import MenuIcon from '@mui/icons-material/Menu';
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
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/NavBar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggle = (v) => () => setOpen(v);

  return (
    <AppBar position="sticky" color="transparent" elevation={0} className="nav">
      <Container maxWidth="lg">
        <Toolbar disableGutters className="nav__toolbar">
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className="nav__brandLink"
          >
            Meghana
          </Typography>

          <Box className="nav__links">
            {LINKS.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <Button
                  key={to}
                  component={Link}
                  color="inherit"
                  to={to}
                  disableRipple
                  className={`nav__link ${active ? 'is-active' : ''}`}
                >
                  {label}
                </Button>
              );
            })}
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            edge="end"
            onClick={toggle(true)}
            className="nav__hamburger"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggle(false)}
        slotProps={{ paper: { className: 'nav__drawer' } }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" className="nav__drawerTitle">
            Menu
          </Typography>
          <List>
            {LINKS.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <ListItemButton
                  key={to}
                  component={Link}
                  to={to}
                  onClick={toggle(false)}
                  className={`nav__drawerItem ${active ? 'is-active' : ''}`}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
