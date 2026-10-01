import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AnimationContextType {
  animationsPaused: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType>({
  animationsPaused: false,
  toggleAnimations: () => {},
});

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [animationsPaused, setAnimationsPaused] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const saved = localStorage.getItem('mrjupyter_animations_paused');
      return saved !== null ? saved === 'true' : prefersReduced;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('mrjupyter_animations_paused', String(animationsPaused));
  }, [animationsPaused]);

  const toggleAnimations = () => {
    setAnimationsPaused((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ animationsPaused, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
