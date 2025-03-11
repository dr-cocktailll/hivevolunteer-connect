
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  once = true,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getDirectionStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-8 opacity-0';
        case 'down':
          return '-translate-y-8 opacity-0';
        case 'left':
          return 'translate-x-8 opacity-0';
        case 'right':
          return '-translate-x-8 opacity-0';
        case 'none':
          return 'opacity-0';
        default:
          return 'translate-y-8 opacity-0';
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100';
  };

  return (
    <div
      ref={ref}
      className={`transform ${getDirectionStyles()} transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
