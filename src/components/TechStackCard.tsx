
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechStackCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const TechStackCard = ({ 
  icon, 
  title, 
  description, 
  className,
  delay = 0
}: TechStackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "tech-card group",
        className
      )}
    >
      <div className="mb-4 p-3 inline-block rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
};

export default TechStackCard;
