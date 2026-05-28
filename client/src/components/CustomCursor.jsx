/**
 * Premium GSAP cursor — dot + trailing ring with magnetic pull on interactive elements.
 * Desktop-only; cursor: auto on mobile via CSS.
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX  = mouseX;
    let ringY  = mouseY;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.12, ease: 'power2.out' });
    };

    const lerp = (a, b, n) => a + (b - a) * n;
    const loop = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      gsap.set(ring, { x: ringX, y: ringY });
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('mousemove', onMove);

    /* Hover states */
    const onEnterLink = () => {
      gsap.to(ring, { scale: 1.7, opacity: 0.6, borderColor: '#E5E7EB', duration: 0.25 });
      gsap.to(dot,  { scale: 0.4, duration: 0.2 });
    };
    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: 'rgba(255,255,255,0.5)', duration: 0.25 });
      gsap.to(dot,  { scale: 1, duration: 0.2 });
    };
    const onEnterBtn = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.45, borderColor: '#E5E7EB', duration: 0.25 });
      gsap.to(dot,  { scale: 0.3, duration: 0.2 });
    };

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        const isBtn = el.tagName === 'BUTTON' || el.classList.contains('btn-glow');
        el.addEventListener('mouseenter', isBtn ? onEnterBtn : onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };
    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} aria-hidden="true"
        style={{ position:'fixed', top:-5, left:-5, width:10, height:10, borderRadius:'50%', background:'#F3F4F6', pointerEvents:'none', zIndex:9999, boxShadow:'0 0 8px rgba(229,231,235,0.8)', transform:'translate(-50%,-50%)', willChange:'transform' }} />
      <div ref={ringRef} aria-hidden="true"
        style={{ position:'fixed', top:-20, left:-20, width:40, height:40, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,0.5)', pointerEvents:'none', zIndex:9998, transform:'translate(-50%,-50%)', willChange:'transform' }} />
    </>
  );
};

export default CustomCursor;



