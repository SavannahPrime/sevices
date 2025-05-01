
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, BarChart, Clock, Layers, ArrowUpRight } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Automation",
      description: "Streamline workflows and eliminate repetitive tasks with intelligent automation that learns and improves over time."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enhanced Security",
      description: "Advanced threat detection and prevention systems that protect your business data and customer information."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Turn raw data into actionable insights with comprehensive analytics and visualization tools."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time Processing",
      description: "Process and analyze data in real-time to make informed decisions faster than your competition."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Our AI systems grow with your business, easily scaling to meet increasing demands and complexity."
    },
    {
      icon: <ArrowUpRight className="h-6 w-6" />,
      title: "Continuous Improvement",
      description: "Self-optimizing systems that continuously learn and improve from operational data and feedback."
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 circuit-bg opacity-5 pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Core Features
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Intelligent Solutions for <span className="gradient-text">Modern Business</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-0 max-w-3xl"
          >
            Our AI-driven features transform complex business challenges into streamlined, 
            automated processes that drive efficiency and growth.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1}>
              <div className="p-6">
                <div className="p-3 rounded-md bg-primary/10 w-fit mb-4 text-primary">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
