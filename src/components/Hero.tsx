import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full rounded">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="text-primary font-medium tracking-wide text-sm md:text-base uppercase mb-4 block">
              Hello, world! I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
              Hammad Arshad <br className="hidden md:block" />
              <span className="text-gray-400">Senior Web Developer.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed">
              Dynamic Senior Web Developer with 4 years of extensive experience in leading cross-functional teams 
              and managing complex project lifecycles. Proficient in API development, PHP, Laravel, and JavaScript frameworks 
              to deliver robust, scalable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="#experience" 
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center group"
              >
                View My Experience
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/resume.pdf"
                download="Hammad_Resume.pdf"
                className="w-full sm:w-auto px-8 py-3.5 bg-surface text-white border border-border font-medium rounded-full hover:bg-surface-hover transition-colors flex items-center justify-center"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Abstract geometric visual or portrait placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-md hidden lg:block"
          >
             <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface border border-border group">
                {/* Simulated code editor visual */}
                <div className="absolute inset-0 bg-surface flex flex-col">
                  {/* Window Controls */}
                  <div className="h-10 border-b border-border flex items-center px-4 space-x-2 bg-[#121212]">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  {/* Code Area */}
                  <div className="p-6 font-mono text-sm leading-loose text-gray-400 flex flex-col justify-center h-full">
                    <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                    <p className="ml-4">name: <span className="text-green-400">'Hammad Arshad'</span>,</p>
                    <p className="ml-4">role: <span className="text-green-400">'Senior Web Developer'</span>,</p>
                    <p className="ml-4">skills: [<span className="text-green-400">'PHP'</span>, <span className="text-green-400">'Laravel'</span>, <span className="text-green-400">'Vue.js'</span>],</p>
                    <p className="ml-4">location: <span className="text-green-400">'Dubai, UAE'</span></p>
                    <p>{'};'}</p>
                    <br/>
                    <p><span className="text-blue-400">developer</span>.<span className="text-yellow-200">code</span>();</p>
                  </div>
                </div>
            </div>
          </motion.div>
        
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
