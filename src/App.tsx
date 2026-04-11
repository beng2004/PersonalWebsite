import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects";
import Contact from './components/Contact';
import AnimatedBackground from './components/CoolBackground';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden selection:bg-purple-300/30 selection:text-white">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-neutral-950" />
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-x-0 top-[-25%] h-[40rem] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.2),transparent_55%)]" />
          <div className="absolute right-[-10%] top-[25%] h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />
          <div className="absolute left-[-5%] bottom-[-10%] h-80 w-80 rounded-full bg-blue-600/15 blur-[110px]" />
        </div>
        <AnimatedBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar />
          <Routes>
            <Route path="/PersonalWebsite/" element={<Hero />} />
            <Route path="/PersonalWebsite/about" element={<About />} />
            <Route path="/PersonalWebsite/projects" element={<Projects />} />
            <Route path="/PersonalWebsite/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App