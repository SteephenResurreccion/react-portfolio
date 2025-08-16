import { Routes, Route } from 'react-router-dom';
import NavbarAutumn from './components/NavbarAutumn';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';          // ← add this

export default function App() {
  return (
    <>
      <NavbarAutumn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />     {/* ← new route */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
