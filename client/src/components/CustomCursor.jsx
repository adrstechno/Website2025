import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A'      ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a')         ||
        e.target.closest('button')    ||
        e.target.classList.contains('interactive-card') ||
        e.target.closest('.interactive-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-600 dark:bg-blue-400 pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6, scale: isHovering ? 2 : 1 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30, mass: 0.2 }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-blue-600 dark:border-blue-400 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.3 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.4 }}
      />

      {/* Trail dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-blue-500 dark:bg-blue-300 pointer-events-none z-[9998] opacity-40"
        animate={{ x: mousePosition.x - 3, y: mousePosition.y - 3 }}
        transition={{ type: 'spring', stiffness: 120, damping: 25 }}
      />
    </>
  );
};

export default CustomCursor;

