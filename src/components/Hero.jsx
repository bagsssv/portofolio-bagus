import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-3xl text-center space-y-8">
        
        {/* Foto Profil */}
        <div className="mx-auto w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-600 shadow-xl">
          {/* Ganti src ini pakai foto lu nanti */}
          <img 
            src="https://via.placeholder.com/150" 
            alt="M Bagus Shokhibul Khikam" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Teks Perkenalan */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Hi, I'm <span className="text-indigo-600">M Bagus Shokhibul Khikam</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Frontend Developer | React.js Enthusiast
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Membangun antarmuka website yang responsif dan interaktif. Terbiasa menyelesaikan tantangan kompleks, dari integrasi API yang dinamis hingga memastikan setiap piksel desain tampil sempurna di layar pengguna.
          </p>
        </div>

        {/* Tombol Sosial Media */}
        <div className="flex justify-center gap-6 pt-4">
          <a href="#" className="p-3 bg-white text-gray-700 hover:text-indigo-600 rounded-full shadow-md hover:shadow-lg transition-all">
            <Github size={18} />
          </a>
          <a href="#" className="p-3 bg-white text-gray-700 hover:text-indigo-600 rounded-full shadow-md hover:shadow-lg transition-all">
            <Linkedin size={18} />
          </a>
          <a href="#" className="p-3 bg-white text-gray-700 hover:text-indigo-600 rounded-full shadow-md hover:shadow-lg transition-all">
            <Mail size={18} />
          </a>
        </div>
        
      </div>
    </div>
  );
}