import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-700 tracking-tight">
          Bagus<span className="text-gray-900">.dev</span>
        </Link>
        
        <div className="flex gap-4 md:gap-8">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            <FaHome size={18} /> <span className="hidden sm:inline">Home</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            <FaUser size={18} /> <span className="hidden sm:inline">About</span>
          </Link>
          <Link to="/projects" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            <FaBriefcase size={18} /> <span className="hidden sm:inline">Projects</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
            <FaEnvelope size={18} /> <span className="hidden sm:inline">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}