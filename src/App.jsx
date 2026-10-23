import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Project from './components/Project';
// import Contact from './components/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <Navbar />
        <main className="pt-20"> 
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Project />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}