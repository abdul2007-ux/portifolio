import { motion } from 'framer-motion';

const typingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const typingLetter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  const name = "Abdul Ali";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-left z-10">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-purple-400 font-medium mb-4 tracking-wider uppercase text-sm"
          >
            Hello, I'm
          </motion.h4>
          
          <motion.h1
            variants={typingContainer}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl font-bold mb-4"
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={typingLetter}
                className={char === ' ' ? 'mr-4' : 'text-gradient inline-block'}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-300 font-light mb-8"
          >
            Music Producer & Web Developer
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4"
          >
            <a href="#projects" className="interactive px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all transform hover:-translate-y-1">
              View Work
            </a>
            <a href="#contact" className="interactive px-8 py-3 rounded-full border border-purple-500/50 text-white font-medium hover:bg-purple-500/10 transition-all transform hover:-translate-y-1 backdrop-blur-sm">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* 3D Floating Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[400px] flex items-center justify-center z-10 hidden md:flex"
        >
          {/* We will use a stylistic glowing orb array for the 3D effect */}
          {/* We will use a stylistic glowing orb array for the 3D effect */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* The rotating rings */}
            <motion.div
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full blur-[2px]" style={{ transform: 'rotateX(45deg)' }}></div>
              <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full blur-[2px]" style={{ transform: 'rotateY(45deg)' }}></div>
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full blur-[2px]" style={{ transform: 'rotateZ(45deg)' }}></div>
            </motion.div>
            
            {/* The gently floating photo (not spinning) */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.3)] z-10"
            >
              <img src="/profile.jpeg" alt="Abdul Ali" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
