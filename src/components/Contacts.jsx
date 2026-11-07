import { FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's <span className="text-indigo-600">Connect!</span></h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Tertarik untuk kerja sama, bikin website bareng, atau sekadar ngobrol soal web development? Jangan ragu buat sapa gua di bawah ini!
        </p>

        {/* Kotak Tombol Kontak */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Tombol WhatsApp */}
          <a href="https://wa.me/6285815646430" 
             target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg hover:shadow-green-500/30">
            <FaWhatsapp size={24} />
            Chat via WhatsApp
          </a>

          {/* Tombol Email */}
          <a href="mailto:pkkmbh1@gmail.com" // GANTI dengan email lu
             className="flex items-center justify-center gap-3 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg hover:shadow-indigo-500/30">
            <FaEnvelope size={22} />
            Kirim Email
          </a>
          
        </div>

        {/* Link Tambahan */}
        <div className="mt-12 flex justify-center gap-6">
          <a href="https://github.com/bagsssv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition">
            <FaGithub size={28} />
          </a>
          {/* Kalau ada LinkedIn, tambahin di sini */}
        </div>
      </div>
    </section>
  );
};

export default Contact;