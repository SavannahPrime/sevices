
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroGradientProps {
  className?: string;
}

const HeroGradient: React.FC<HeroGradientProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 z-0 pointer-events-none overflow-hidden", className)}>
      {/* Top right pink/purple gradient */}
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
      
      {/* Middle blue gradient */}
      <div className="absolute top-[30%] -left-[5%] w-[30%] h-[30%] bg-secondary/20 rounded-full blur-[100px]" />
      
      {/* Bottom purple gradient */}
      <div className="absolute bottom-[10%] right-[20%] w-[25%] h-[25%] bg-primary/20 rounded-full blur-[100px]" />
    </div>
  );
};

export default HeroGradient;
