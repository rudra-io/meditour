
'use client';

import { useEffect, useRef } from 'react';

export const useScrollAnimation = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: remove to keep element visible after first scroll
          // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('visible');
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
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
    };
  }, []);

  return ref;
};
