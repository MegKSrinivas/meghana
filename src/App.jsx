import About from './components/About';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <NavBar />
      <div id="pages">
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
