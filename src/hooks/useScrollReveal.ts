import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Attaches an IntersectionObserver to elements matching the selector
 * and adds the `in-view` class when they enter the viewport.
 */
export function useScrollReveal(
  selector: string = '[data-reveal]',
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            if (once) {
              observerRef.current?.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [selector, threshold, rootMargin, once]);
}
