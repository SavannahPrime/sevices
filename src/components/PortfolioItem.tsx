
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
  className?: string;
  isAnimated?: boolean;
  delay?: number;
  isProfile?: boolean;
  role?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  imageUrl,
  category,
  link,
  className,
  isAnimated = true,
  delay = 0,
  isProfile = false,
  role
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-md hover:shadow-primary/10",
        isAnimated && "fade-up stagger-item",
        className
      )}
      style={{ animationDelay: isAnimated ? `${delay * 0.1}s` : '0s' }}
    >
      <div className={cn(
        "relative overflow-hidden",
        isProfile ? "aspect-square" : "aspect-video"
      )}>
        <img
          src={imageUrl}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isProfile ? "object-top" : "object-cover",
            "group-hover:scale-105",
            !imageLoaded && "image-blur-loading",
            imageLoaded && "image-loaded"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {role && (
          <p className="text-primary font-medium text-sm mb-2">{role}</p>
        )}
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-primary font-medium text-sm hover:underline"
          >
            View Profile
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
