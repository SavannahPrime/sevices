
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  alt: string;
  animateLoad?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc = "/placeholder.svg",
  alt,
  className,
  animateLoad = true,
  objectFit = 'cover',
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && animateLoad && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading image...</span>
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
          <span className="text-sm text-muted-foreground">Failed to load image</span>
        </div>
      )}
      <img
        src={imgSrc || fallbackSrc}
        alt={alt}
        onError={() => {
          setImgSrc(fallbackSrc);
          setIsError(true);
        }}
        onLoad={() => {
          setIsLoading(false);
          setIsError(false);
        }}
        className={cn(`w-full h-full transition-all duration-500`,
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          objectFit === 'none' && 'object-none',
          objectFit === 'scale-down' && 'object-scale-down',
          isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
        )}
        {...rest}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default ImageWithFallback;
