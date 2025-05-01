
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroGradient from './HeroGradient';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <HeroGradient />
      <ParticleBackground particleCount={40} />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>Redefining AI & Automation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Transforming Business with <span className="gradient-text">AI Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              SavannahPrime delivers cutting-edge AI solutions and intelligent automation 
              that help businesses thrive in the digital era. Our technologies adapt, 
              learn, and evolve to meet your unique challenges.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="button-hover-effect bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20 text-center"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border border-border hover:border-primary px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 group text-center"
              >
                Explore AI Solutions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-xl rounded-full"></div>
              
              <div className="relative glass-card border border-white/10 rounded-2xl p-6 max-w-md mx-auto">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-muted-foreground">AI Platform</span>
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                </div>
                
                <div className="font-code text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="text-primary mb-2"
                  >
                    {"> "}initAI(client)
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="text-muted-foreground mb-2"
                  >
                    {"> "}Initializing AI model...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 }}
                    className="text-muted-foreground mb-2"
                  >
                    {"> "}Loading client data...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                    className="text-secondary mb-2"
                  >
                    {"> "}Data loaded successfully! 
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2.2 }}
                    className="text-accent mb-2"
                  >
                    {"> "}AI model ready. Awaiting instructions...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2.6 }}
                  >
                    <span className="text-primary">{"> "}</span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-primary ml-1"
                    >
                      &nbsp;
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-border">
          <div className="text-center mb-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Trusted by innovative companies
            </motion.p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {['Microsoft', 'IBM', 'Google', 'Amazon', 'Safaricom', 'Equity'].map((company, idx) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-muted-foreground/50 text-xl font-semibold"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
