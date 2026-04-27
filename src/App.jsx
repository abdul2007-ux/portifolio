import { motion } from 'framer-motion';
import Cursor from './components/Cursor';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Cursor />
      <Background />
      <ScrollProgress />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 min-h-screen"
      >
        <header className="fixed top-0 left-0 right-0 z-50 p-6 glass-panel border-b border-white/5 border-l-0 border-r-0 border-t-0 bg-black/30">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold tracking-tighter"
            >
              Portfolio<span className="text-purple-500">.</span>
            </motion.div>
            <nav className="hidden md:flex gap-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="interactive text-sm font-medium hover:text-purple-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </motion.div>
    </>
  );
}

export default App;
