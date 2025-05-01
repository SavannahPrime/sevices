
import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We deeply understand your business challenges, goals, and current systems to identify the right AI opportunities."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our experts create a tailored solution architecture combining the right AI technologies to address your specific needs."
    },
    {
      number: "03",
      title: "Development & Training",
      description: "We build and train your custom AI systems using your data to ensure optimal performance and accuracy."
    },
    {
      number: "04",
      title: "Implementation & Integration",
      description: "Seamlessly integrate AI solutions into your existing workflows and systems with minimal disruption."
    },
    {
      number: "05",
      title: "Continuous Optimization",
      description: "We continuously monitor, refine and optimize your AI solutions to ensure they deliver maximum value over time."
    }
  ];

  return (
    <section className="section bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 ai-dots opacity-10 pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Our Process
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How We Implement <span className="gradient-text">AI Solutions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-0 max-w-3xl"
          >
            Our structured approach ensures smooth development and integration of AI solutions 
            that deliver real business value.
          </motion.p>
        </div>
        
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="rounded-lg p-6 bg-background border border-border h-full">
                <div className="inline-block gradient-text text-4xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform translate-x-0 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
