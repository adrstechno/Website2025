import { motion } from 'framer-motion';

const AnimatedButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
}) => {
  const baseStyles = 'font-bold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center relative overflow-hidden group';

  const variants = {
    primary:   'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20',
    secondary: 'bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20',
    outline:   'bg-transparent text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20',
  };

  const sizes = {
    small:  'px-4 py-2 text-xs',
    medium: 'px-6 py-3 text-sm',
    large:  'px-8 py-4 text-sm',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;

