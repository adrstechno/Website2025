import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);

/* ── Batch-reveal children inside a container on scroll ── */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const targets = ref.current.querySelectorAll('[data-reveal]');
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y: options.y ?? 40 });
      ScrollTrigger.batch(targets, {
        start: options.start ?? 'top 88%',
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            stagger: options.stagger ?? 0.12,
            duration: options.duration ?? 0.8,
            ease: options.ease ?? 'power3.out',
          }),
        once: true,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return ref;
}

/* ── Single element fade-up on scroll ── */
export function useFadeUp(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: options.y ?? 50 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 1,
          ease: options.ease ?? 'power3.out',
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? 'top 85%',
            once: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return ref;
}

/* ── Horizontal line draw animation ── */
export function useLineReveal() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return ref;
}

/* ── Counter number animation ── */
export function useCounterAnimation(target, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: options.duration ?? 2,
            ease: 'power2.out',
            onUpdate: () => {
              if (ref.current) {
                ref.current.textContent =
                  Math.round(obj.val).toLocaleString() + (options.suffix ?? '');
              }
            },
          });
        },
      });
    }, ref);
    return () => ctx.revert();
  }, [target]);

  return ref;
}

export { gsap, ScrollTrigger };
