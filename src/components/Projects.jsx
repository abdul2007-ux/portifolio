import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    desc: 'A full-stack dashboard with real-time analytics and inventory management.',
    img: 'https://via.placeholder.com/600x400/222/a855f7?text=Project+1',
    color: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Beat Store',
    desc: 'Custom audio player and beat selling platform with integrated payments.',
    img: 'https://via.placeholder.com/600x400/222/3b82f6?text=Project+2',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Synthesizer Web App',
    desc: 'Web Audio API based synthesizer with real-time effects and keyboard mapping.',
    img: 'https://via.placeholder.com/600x400/222/a855f7?text=Project+3',
    color: 'from-purple-500 to-pink-500'
  }
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 min-h-screen">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              className="relative group perspective-1000"
            >
              {/* Animated Glow Border Background */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
              
              <div className="relative h-full bg-black/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col items-start overflow-hidden">
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
                  <motion.img 
                    src={project.img} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href="#" className="interactive p-3 bg-white/10 backdrop-blur rounded-full hover:bg-purple-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <a href="https://github.com/abdul2007-ux" target="_blank" rel="noreferrer" className="interactive p-3 bg-white/10 backdrop-blur rounded-full hover:bg-purple-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.desc}</p>
                
                <button className="interactive mt-auto text-sm font-medium text-purple-400 group-hover:text-purple-300 flex items-center gap-2">
                  View Case Study <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
