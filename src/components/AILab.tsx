
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, BarChart4, Bot, Network } from 'lucide-react';
import TechStackCard from './TechStackCard';

const AILab = () => {
  const techs = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Advanced neural networks and deep learning for pattern recognition and prediction."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Automation",
      description: "Intelligent process automation that adapts and improves over time."
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Neural Networks",
      description: "Custom artificial neural networks designed for specific business applications."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Big Data Processing",
      description: "Scalable data processing solutions that extract meaningful insights."
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Conversational AI",
      description: "Natural language processing and generation for human-like interactions."
    },
    {
      icon: <BarChart4 className="h-8 w-8" />,
      title: "Predictive Analytics",
      description: "Data-driven forecasting to anticipate trends and opportunities."
    }
  ];

  return (
    <section className="section overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 ai-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="mr-2">⚡</span> AI Technology Lab
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Cutting-Edge AI Technologies
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-0 max-w-3xl"
          >
            Our AI lab develops and implements the latest advancements in artificial intelligence 
            to solve complex business challenges and drive innovation.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((tech, index) => (
            <TechStackCard
              key={tech.title}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Animated Tech Diagram */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 p-8 rounded-lg border border-border bg-card/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
          
          <div className="relative flex flex-col items-center z-10">
            <h3 className="text-2xl font-semibold mb-6">Our AI Development Process</h3>
            
            <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mx-auto">
              {[
                { step: "1", title: "Data Collection", color: "from-primary/20 to-primary/5" },
                { step: "2", title: "Model Training", color: "from-secondary/20 to-secondary/5" },
                { step: "3", title: "Testing & Validation", color: "from-accent/20 to-accent/5" },
                { step: "4", title: "Deployment & Scaling", color: "from-primary/20 to-primary/5" },
              ].map((item, index) => (
                <div key={item.step} className="flex flex-col items-center mb-8 md:mb-0">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                    className={`h-16 w-16 rounded-full flex items-center justify-center bg-gradient-to-br ${item.color} border border-white/10 mb-3`}
                  >
                    <span className="text-xl font-bold">{item.step}</span>
                  </motion.div>
                  <span className="text-center text-sm">{item.title}</span>
                  
                  {index < 3 && (
                    <div className="hidden md:block w-12 h-[2px] bg-border absolute left-[calc(25%*2*(${index}+0.5))] top-8 transform translate-x-6">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 + index * 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AILab;
