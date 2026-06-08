import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-24 bg-surface/30 border-y border-border"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 flex items-center">
              <span className="text-primary font-mono text-xl mr-3">01.</span> 
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                Hello! I'm Hammad, a dynamic Senior Web Developer with 4 years of experience delivering high-impact features and driving business success. My expertise lies in designing user-friendly interfaces and enhancing ERP systems.
              </p>
              <p>
                I graduated second in my batch with a Bachelor of Science in Software Engineering (BSSE) from the University of Sialkot, obtaining a silver medal. My proudest achievement was building a complete product suite single-handedly for my final year project.
              </p>
              <p>
                Today, I focus on applying best practices in code quality and project management, building highly scalable backends, and leading cross-functional teams using Agile methodologies.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-border p-4 rounded-xl bg-surface">
                <h4 className="text-4xl font-display font-bold text-primary mb-1">4+</h4>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Years Exp.</p>
              </div>
              <div className="border border-border p-4 rounded-xl bg-surface">
                <h4 className="text-4xl font-display font-bold text-primary mb-1">3+</h4>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Key Roles</p>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative z-10 w-full bg-surface border-2 border-border shadow-2xl">
               {/* Just a pleasant placeholder image if real photo is missing */}
               <img 
                 src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop" 
                 alt="Hammad setup" 
                 className="w-full h-full object-cover object-center"
               />
            </div>
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
