import { motion } from 'framer-motion';

export default function Background() {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Moving Gradient Orbs */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] h-[60%] w-[50%] rounded-full bg-purple-900/30 blur-[120px]"
        animate={{
          x: ['0%', '20%', '0%'],
          y: ['0%', '30%', '0%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[40%] -right-[10%] h-[50%] w-[40%] rounded-full bg-blue-900/20 blur-[100px]"
        animate={{
          x: ['0%', '-30%', '0%'],
          y: ['0%', '-20%', '0%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: ['0vh', '-100vh'],
            x: ['0vw', `${Math.random() * 10 - 5}vw`],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Optional Subtle Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
    </div>
  );
}
