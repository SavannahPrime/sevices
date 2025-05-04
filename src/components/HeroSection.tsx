
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ImageWithFallback from './ui/image-with-fallback';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-primary/10">
      {/* Tech background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Professional tech background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
      </div>
      
      {/* Subtle particle animation */}
      <ParticleBackground particleCount={20} />
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>Leading AI Solutions Provider in Kenya</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Enterprise <span className="gradient-text">AI Solutions</span> for East African Businesses
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              SavannahPrime delivers custom AI solutions for Kenyan businesses, 
              with local expertise and Swahili language support. Transform your operations 
              with machine learning, data analytics, and intelligent automation.
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
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="border border-border hover:border-primary px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 group text-center"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-xl opacity-75"></div>
              
              <div className="relative glass-card border border-white/10 rounded-2xl p-6 bg-background/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-muted-foreground">AI Analytics Dashboard</span>
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="AI data visualization"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="font-code text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="text-primary mb-2"
                  >
                    {"> "}initAI(client, "Nairobi")
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="text-muted-foreground mb-2"
                  >
                    {"> "}Analyzing Kenyan market trends...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 }}
                    className="text-muted-foreground mb-2"
                  >
                    {"> "}Processing data from East African sources...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                    className="text-secondary mb-2"
                  >
                    {"> "}Market insights ready!
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2.2 }}
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
              Trusted by Leading Kenyan Organizations
            </motion.p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {['Safaricom', 'Equity Bank', 'KCB Group', 'Nation Media', 'Jumia Kenya', 'M-KOPA'].map((company, idx) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-muted-foreground/50 text-xl font-semibold flex items-center"
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
