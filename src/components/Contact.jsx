import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Let's talk about everything!</h3>
            <p className="text-gray-400 text-lg">
              Don't like forms? Send me an email. 👋
            </p>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <div className="p-4 bg-purple-500/10 text-purple-400 rounded-full">
                  <Mail size={24} />
                </div>
                <span className="text-xl">abdulali34568@gmail.com</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <div className="p-4 bg-blue-500/10 text-blue-400 rounded-full">
                  <MapPin size={24} />
                </div>
                <span className="text-xl">New York, NY</span>
              </motion.div>
            </div>

            <div className="pt-8 flex gap-4">
              {[
                { name: 'GitHub', url: 'https://github.com/abdul2007-ux', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg> },
                { name: 'LinkedIn', url: '#', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                { name: 'Instagram', url: 'https://www.instagram.com/xrv_ali?igsh=ZHp6bnI2NTBya21p&utm_source=qr', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                { name: 'YouTube', url: '#', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="interactive p-4 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <form className="glass-panel p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group">
             {/* Glow effect on hover */}
             <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-2">
              <label className="text-sm font-medium text-gray-400">Your Name</label>
              <input 
                type="text" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="relative z-10 space-y-2">
              <label className="text-sm font-medium text-gray-400">Your Email</label>
              <input 
                type="email" 
                required 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="relative z-10 space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                required 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 interactive flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>

        </div>
      </motion.div>
    </section>
  );
}
