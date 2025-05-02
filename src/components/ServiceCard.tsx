
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ImageWithFallback from '@/components/ui/image-with-fallback';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  isAnimated?: boolean;
  delay?: number;
  features?: string[];
  image?: string;
  imageAlt?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  className,
  isAnimated = true,
  delay = 0,
  features = [],
  image,
  imageAlt
}) => {
  return (
    <motion.div 
      initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
      whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "group rounded-lg p-6 bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/5 hover:border-primary/20 relative overflow-hidden",
        className
      )}
    >
      <div className="absolute h-1 w-0 bg-gradient-to-r from-primary via-secondary to-accent top-0 left-0 transition-all duration-500 group-hover:w-full"></div>
      
      {image && (
        <div className="mb-6 rounded-md overflow-hidden aspect-video">
          <ImageWithFallback
            src={image}
            alt={imageAlt || title}
            className="w-full h-full transition-transform duration-500 group-hover:scale-110"
            objectFit="cover"
          />
        </div>
      )}
      
      <div className="p-3 rounded-md bg-primary/10 w-fit mb-6 text-primary group-hover:bg-primary/20 transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-5">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <Link 
        to={link} 
        className="inline-flex items-center text-primary font-medium group/link mt-2"
      >
        Learn more
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, 5, 0] }}
          transition={{ 
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5
          }}
        >
          <ArrowRight className="w-4 h-4 ml-1" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
