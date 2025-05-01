
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    { value: 97, label: "Client Satisfaction", suffix: "%" },
    { value: 250, label: "AI Projects Completed", suffix: "+" },
    { value: 5, label: "Years of Innovation", suffix: "+" },
    { value: 10000, label: "AI Models Trained", suffix: "+" }
  ];

  return (
    <section ref={ref} className="py-16 bg-primary/5 border-y border-primary/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-network-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <CountUpStat 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isInView={isInView}
                  delay={index * 0.1} 
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "40%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="h-1 bg-primary/50 rounded absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-muted-foreground mt-2"
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpStatProps {
  value: number;
  suffix?: string;
  isInView: boolean;
  delay?: number;
}

const CountUpStat: React.FC<CountUpStatProps> = ({ value, suffix = "", isInView, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    // Add delay before starting the animation
    const delayTimer = setTimeout(() => {
      // Determine the increment based on the value size
      const increment = Math.ceil(value / 50);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(current);
        }
      }, 30);
      
      return () => clearInterval(timer);
    }, delay * 1000);
    
    return () => clearTimeout(delayTimer);
  }, [isInView, value, delay]);
  
  return (
    <div className="text-4xl md:text-5xl font-bold text-primary">
      {displayValue}{suffix}
    </div>
  );
};

export default StatsSection;
