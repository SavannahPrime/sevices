
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animateHover?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className,
  delay = 0,
  duration = 0.5,
  animateHover = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
      whileHover={animateHover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "rounded-lg border border-border/50 bg-card shadow-sm overflow-hidden",
        animateHover && "hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
