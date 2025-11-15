import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  // Background carousel images - Will try to load real images first, then fallback to gradients
  const backgroundImages = [
    {
      url: '/hero-bg/bg-1.jpg',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      url: '/hero-bg/bg-2.jpg',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      url: '/hero-bg/bg-3.jpg',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      url: '/hero-bg/bg-4.jpg',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      url: '/hero-bg/bg-5.jpg',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
  ];

  const stats = [
    { value: '10+', label: 'Expert Developers' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Support' },
  ];

  // Preload images
  useEffect(() => {
    backgroundImages.forEach((img, index) => {
      const image = new Image();
      image.src = img.url;
      image.onload = () => {
        setImageLoaded(prev => ({ ...prev, [index]: true }));
      };
      image.onerror = () => {
        setImageLoaded(prev => ({ ...prev, [index]: false }));
      };
    });
  }, []);

  // Auto-change background images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Carousel with animations */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="absolute inset-0"
          >
            {/* Show image if loaded, otherwise show gradient */}
            {imageLoaded[currentImageIndex] ? (
              <img
                src={backgroundImages[currentImageIndex].url}
                alt={`Background ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  background: backgroundImages[currentImageIndex].gradient,
                }}
              />
            )}
            
            {/* Overlay for better text readability - Reduced opacity for more visible images */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/50 dark:from-black/50 dark:via-black/40 dark:to-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {backgroundImages.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentImageIndex 
                  ? 'w-8 bg-purple-600 dark:bg-purple-400' 
                  : 'w-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              animate={{
                scale: index === currentImageIndex ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 z-[1]"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 dark:bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                Enterprise-Grade Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-primary"
            >
              Empowering Enterprises with{' '}
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 dark:from-purple-400 dark:via-purple-300 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                SaaS & PaaS
              </motion.span>{' '}
              Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-secondary leading-relaxed mb-10"
            >
              ADRS Technology delivers scalable cloud platforms, enterprise automation,
              and cutting-edge software solutions that transform business operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                Book a Demo
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-primary font-semibold rounded hover:bg-white dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image - Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Glow effect behind image */}
              <motion.div 
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent rounded-2xl blur-3xl" 
              />
              
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20 shadow-2xl">
                <img
                  src="/hero-image.jpg"
                  alt="Enterprise Technology"
                  className="relative w-full h-auto rounded-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-96 flex items-center justify-center text-6xl">💻</div>';
                  }}
                />
              </div>
            </motion.div>

            {/* Floating elements around image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/20"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/20"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-secondary"
        >
          <span className="text-xs font-medium">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
