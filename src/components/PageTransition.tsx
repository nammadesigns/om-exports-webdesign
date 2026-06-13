import { useEffect, useRef, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Wraps page content in a transition envelope.
 * On every route change, the wrapper fades + slides in from below.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Remove class first to retrigger animation
    el.classList.remove('page-enter-active');
    el.classList.add('page-enter');

    // Use rAF to ensure DOM has painted before starting the transition
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.remove('page-enter');
        el.classList.add('page-enter-active');
      });
    });

    return () => cancelAnimationFrame(rafId);
  }, [location.pathname]);

  return (
    <div ref={wrapperRef} className="page-enter-active">
      {children}
    </div>
  );
}
