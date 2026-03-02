import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import About from './components/About';
import ContactMe from './components/ContactMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

const ROUTE_TO_SECTION_ID = {
  '/': 'home',
  '/about': 'about',
  '/experience': 'experience',
  '/projects': 'projects',
  '/education': 'education',
  '/contactme': 'contact',
};

function App() {
  const location = useLocation();

  useEffect(() => {
    const id = ROUTE_TO_SECTION_ID[location.pathname];
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    const navOffset = 80; // adjust if your navbar height changes
    const y = el.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <div id="pages">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Education />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
