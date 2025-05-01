
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

const ParticleBackground = ({ 
  particleCount = 50,
  className = "" 
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5;
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: getRandomColor()
        });
      }
    };
    
    const getRandomColor = () => {
      // Colors matching our theme (purples, blues, pinks)
      const colors = [
        'rgba(147, 51, 234, 0.7)', // Purple
        'rgba(79, 70, 229, 0.7)',  // Indigo
        'rgba(59, 130, 246, 0.7)', // Blue
        'rgba(236, 72, 153, 0.7)', // Pink
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections
      particles.current.forEach((particleA, index) => {
        for (let i = index + 1; i < particles.current.length; i++) {
          const particleB = particles.current[i];
          const distance = Math.sqrt(
            Math.pow(particleA.x - particleB.x, 2) + 
            Math.pow(particleA.y - particleB.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`${className} fixed top-0 left-0 w-full h-full pointer-events-none z-0`}
    />
  );
};

export default ParticleBackground;
