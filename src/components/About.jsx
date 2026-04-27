import { motion } from 'framer-motion';

const skills = [
  { name: 'React / Next.js', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Framer Motion', level: 85 },
  { name: 'Ableton Live', level: 90 },
  { name: 'Sound Design', level: 80 }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </div>
          
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            I'm a passionate developer and music producer with a love for creating beautiful digital experiences and immersive soundscapes. I blend logic with creativity to build modern, responsive web applications and produce high-quality audio tracks.
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            My philosophy is that interfaces shouldn't just be functional—they should feel alive. That's why I focus heavily on continuous motion, micro-interactions, and premium aesthetics.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
              <div className="text-sm text-gray-500">Years Dev Exp</div>
            </div>
            <div className="glass-panel p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">100+</div>
              <div className="text-sm text-gray-500">Beats Produced</div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 rounded-2xl relative overflow-hidden"
        >
          {/* Animated background glow for the panel */}
          <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[50%] -right-[50%] w-full h-full bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"
          />

          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            Core <span className="text-purple-400">Skills</span>
          </h3>

          <div className="space-y-6 relative z-10">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
                  {/* The actual progress bar */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative"
                  >
                    {/* Looping Shimmer Effect */}
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: Math.random() }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
