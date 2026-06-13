import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <main className="bg-black text-white selection:bg-linear-to-r selection:from-purple-500 selection:to-pink-500 selection:text-white">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;