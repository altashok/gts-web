"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  duration?: number;
  once?: boolean;
}

/**
 * A wrapper component that reveals its children when they enter the viewport.
 */
export function ScrollReveal({ 
  children, 
  className, 
  animation = "fade-up",
  delay = 0,
  duration = 1000,
  once = true
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before it hits the bottom
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [once]);

  const animations = {
    "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "scale-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
    "slide-in-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
    "slide-in-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
  };

  return (
    <div
      ref={ref}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
      className={cn(
        "transition-all ease-out will-change-transform",
        animations[animation],
        className
      )}
    >
      {children}
    </div>
  );
}
