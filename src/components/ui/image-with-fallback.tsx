
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  alt: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  className,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading image...</span>
        </div>
      )}
      <img
        src={imgSrc || fallbackSrc}
        alt={alt}
        onError={() => setImgSrc(fallbackSrc)}
        onLoad={() => setIsLoading(false)}
        className={cn("w-full h-full object-cover transition-opacity", 
          isLoading ? "opacity-0" : "opacity-100")}
        {...rest}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default ImageWithFallback;
