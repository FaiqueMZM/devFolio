import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'scale' 
  | 'fade';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
}

const animationClasses: Record<AnimationType, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    hidden: 'opacity-0 -translate-y-8',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 -translate-x-8',
    visible: 'opacity-100 translate-x-0',
  },
  'scale': {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  'fade': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
};

/**
 * Reusable animated section wrapper using Intersection Observer
 */
export function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  as: Component = 'div',
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const classes = animationClasses[animation];

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? classes.visible : classes.hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

/**
 * Component for animating individual items in a list with stagger effect
 */
interface AnimatedItemProps {
  children: React.ReactNode;
  isVisible: boolean;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export function AnimatedItem({
  children,
  isVisible,
  animation = 'fade-up',
  delay = 0,
  className,
}: AnimatedItemProps) {
  const classes = animationClasses[animation];

  return (
    <div
      className={cn(
        'transition-all duration-500 ease-out',
        isVisible ? classes.visible : classes.hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
