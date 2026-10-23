import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 flex items-center">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Judul Bagian */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Kotak Cerita Profil */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 hover:shadow-md transition-shadow">
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Halo! Saya <span className="font-semibold text-indigo-600">M Bagus Shokhibul Khikam</span>. Perjalanan saya ke dunia IT mungkin sedikit berbeda dari kebanyakan orang. 
              Sebelum terbiasa dengan barisan kode, saya pernah merasakan kerasnya berjualan empek-empek di lapangan. Pengalaman tersebut membentuk mental saya menjadi pribadi yang pantang menyerah, adaptif, dan selalu siap menghadapi tekanan kerja.
            </p>
            <p>
              Berbekal etos kerja lapangan dan rasa ingin tahu yang tinggi terhadap teknologi, saya mendalami dunia *web development* secara mandiri hingga berhasil menyelesaikan program magang sebagai <strong>Frontend Developer di PT. Humma Teknologi Indonesia (Hummatech)</strong>.
            </p>
            <p>
              Saat ini, saya fokus membangun antarmuka web modern, responsif, dan ramah pengguna menggunakan ekosistem <strong>React.js, Vite, dan Tailwind CSS</strong>. Saya memadukan keuletan kerja keras dengan kedisiplinan teknis untuk menciptakan produk digital yang solutif.
            </p>
          </div>
        </div>

        {/* 3 Kartu Keahlian */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center space-y-4 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
              <FaCode size={24} />
            </div>
            <h3 className="font-bold text-gray-900">Tech Stack</h3>
            <p className="text-gray-500 text-sm">React.js, Vite, Tailwind CSS v4, Axios, React Router, Git.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center space-y-4 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
              <FaBriefcase size={24} />
            </div>
            <h3 className="font-bold text-gray-900">Experience</h3>
            <p className="text-gray-500 text-sm">Frontend Developer Intern di PT. Hummatech (Juli - Sept 2026).</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center space-y-4 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
              <FaGraduationCap size={24} />
            </div>
            <h3 className="font-bold text-gray-900">Soft Skills</h3>
            <p className="text-gray-500 text-sm">Problem Solving, Resiliensi, Adaptasi Cepat, Team Collaboration.</p>
          </div>
        </div>

      </div>
    </div>
  );
}