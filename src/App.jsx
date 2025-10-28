import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <NavBar />
      <div id="pages">
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
