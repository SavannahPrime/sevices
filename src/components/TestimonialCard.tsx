
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  rating: number;
  delay?: number;
  className?: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  company,
  rating,
  delay = 0,
  className,
  image
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className={cn(
        "rounded-lg bg-card border border-border/50 p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300",
        className
      )}
    >
      <div className="mb-4">
        {Array(5).fill(0).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "inline-block w-4 h-4 mr-1",
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            )}
          />
        ))}
      </div>
      
      <blockquote className="text-foreground italic mb-6 relative">
        <span className="absolute top-0 left-0 text-6xl text-primary/20 -z-10 -mt-6 -ml-2">"</span>
        {quote}
        <span className="absolute bottom-0 right-0 text-6xl text-primary/20 -z-10 -mb-8 -mr-2">"</span>
      </blockquote>
      
      <div className="flex items-center">
        {image && (
          <div className="mr-3 h-10 w-10 rounded-full overflow-hidden border border-primary/20">
            <img src={image} alt={name} className="h-full w-full object-cover" />
          </div>
        )}
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">{company}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
