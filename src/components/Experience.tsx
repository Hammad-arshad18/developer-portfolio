import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useExperiences } from '../hooks/useExperiences';

export default function Experience() {
  const { experiences, loading } = useExperiences();

  return (
    <motion.section 
      id="experience" 
      className="py-24 bg-surface/30 border-y border-border"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 flex items-center">
            <span className="text-primary font-mono text-xl mr-3">03.</span> 
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {loading ? (
            <p className="text-gray-400 font-mono">Loading experiences...</p>
          ) : experiences.length === 0 ? (
            <p className="text-gray-400 font-mono">No experiences added yet.</p>
          ) : experiences.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="hidden md:block col-span-1 pt-1">
                  <div className="text-sm font-mono text-gray-500 mb-1 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.date.split('—')[0].trim()}
                  </div>
                  <div className="text-sm font-mono text-gray-500 flex items-center">
                    {exp.date.split('—')[1]?.trim() || ''}
                  </div>
                </div>
                
                <div className="md:col-span-3 bg-surface rounded-2xl p-6 lg:p-8 border border-border group hover:border-primary/50 transition-colors interactive-hover">
                  <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-primary font-medium mb-4 flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1.5" />
                      {exp.company}
                    </span>
                    <span className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {exp.location}
                    </span>
                    <span className="md:hidden flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {exp.date}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex text-gray-400 font-light text-sm leading-relaxed">
                        <span className="text-primary mr-2 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-x-3 gap-y-2 pt-4 border-t border-border/50">
                    {exp.tech.map(tech => (
                      <span key={tech} className="font-mono text-xs text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
