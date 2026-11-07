import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import muscleStoreImage from '../assets/musclestore.png';

const Projects = () => {
  // Tempat lu masukin data project. Kalau ada project baru, tinggal copy blok kurung kurawal ini ke bawahnya.
  const projectList = [
    {
      id: 1,
      title: "MuscleStore E-Commerce",
      description: "Aplikasi e-commerce modern dengan fitur keranjang dinamis, UI responsif, dan dark mode. Cocok untuk toko suplemen fitness.",
      image: muscleStoreImage, // GANTI dengan path/link gambar SS web lu
      techStack: ["React.js", "Tailwind CSS", "Vite"],
      demoLink: "https://supplement-store-ruby.vercel.app/", // GANTI
      githubLink: "https://github.com/bagsssv/supplement-store" // GANTI
    }
    // Tambahin project kedua di sini nanti...
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">My <span className="text-indigo-600">Projects</span></h2>
          <p className="text-gray-500 mt-2">Kumpulan karya dan eksperimen web development yang pernah gua buat.</p>
        </div>

        {/* Grid Card Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              {/* Gambar Project */}
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tombol Aksi */}
                <div className="flex justify-between items-center">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition font-medium text-sm">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition font-medium text-sm">
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;