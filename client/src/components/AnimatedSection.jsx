/**
 * AnimatedSection — wraps any section to apply GSAP scroll-triggered reveals.
 * Children with data-reveal="true" get stagger-animated as they enter the viewport.
 * Children with data-reveal-line get a line-draw underline animation.
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ children, className = '', id, stagger = 0.1, y = 50, duration = 0.85, start = 'top 82%' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      /* Stagger-reveal any element with data-reveal attribute */
      const revealEls = el.querySelectorAll('[data-reveal]');
      if (revealEls.length) {
        gsap.set(revealEls, { opacity: 0, y });
        ScrollTrigger.batch(revealEls, {
          start,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1, y: 0,
              stagger,
              duration,
              ease: 'power3.out',
              overwrite: true,
            }),
          once: true,
        });
      }

      /* Heading clip reveal — any element with data-clip */
      const clipEls = el.querySelectorAll('[data-clip]');
      clipEls.forEach((c) => {
        gsap.fromTo(
          c,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0, opacity: 1,
            duration: 0.9,
            ease: 'power4.out',
            scrollTrigger: { trigger: c, start, once: true },
          }
        );
      });

      /* Horizontal rule scale reveal — elements with data-line */
      const lineEls = el.querySelectorAll('[data-line]');
      lineEls.forEach((l) => {
        gsap.fromTo(
          l,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: l, start, once: true },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
};

export default AnimatedSection;
