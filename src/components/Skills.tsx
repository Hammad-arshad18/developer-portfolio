import { motion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Layers, 
  Smartphone,
  Cpu,
  Globe
} from 'lucide-react';
import { useSkills } from '../hooks/useSkills';

export default function Skills() {
  const { skillsCategories, loading } = useSkills();

  // Helper to map icon names to actual Lucide components
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-primary" };
    switch(iconName) {
      case 'Layout': return <Layout {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 flex items-center md:justify-center">
            <span className="text-primary font-mono text-xl mr-3">02.</span> 
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
            A comprehensive overview of the tools, languages, and frameworks I use to build robust, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {loading ? (
             <p className="text-gray-400 font-mono col-span-full">Loading skills...</p>
          ) : skillsCategories.length === 0 ? (
             <p className="text-gray-400 font-mono col-span-full">No skills added yet.</p>
          ) : skillsCategories.map((category, index) => (
            <motion.div
              key={category.id || category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-colors interactive-hover"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-background rounded-lg border border-border">
                  {renderIcon(category.iconName)}
                </div>
                <h3 className="text-xl font-display font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills?.map((skill: string) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-background border border-border text-gray-300 rounded-full text-sm font-medium hover:text-primary hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
