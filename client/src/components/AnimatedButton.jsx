import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  className = ''
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40',
    secondary: 'bg-dark-secondary text-white border-2 border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10',
    outline: 'bg-transparent text-cyan-400 border-2 border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {/* Glow effect on hover */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
      )}
      
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.button>
  );
};

export default AnimatedButton;
