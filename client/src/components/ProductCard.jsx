import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const headerGradientAnim = {
  backgroundPosition: ['0% 50%', '100% 50%'],
};

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="relative group h-full"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-12 rounded-2xl blur-2xl transition-opacity duration-500`}></div>

      {/* Card - supports both light and dark modes */}
      <div className="relative bg-white/60 dark:bg-dark-secondary/50 backdrop-blur-sm border border-gray-100 dark:border-white/10 group-hover:border-cyan-500/30 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300">
        {/* Header with Icon */}
        <motion.div
          className={`h-36 bg-gradient-to-br ${product.gradient} flex items-center justify-center text-5xl relative overflow-hidden`}
          animate={headerGradientAnim}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
        >
          <div className="absolute inset-0 bg-white/10 dark:bg-black/20"></div>
          <span className="relative z-10">{product.icon}</span>
        </motion.div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-primary">{product.name}</h3>
            {product.badge && (
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs font-semibold rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          <p className="text-secondary mb-4 leading-relaxed text-sm">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-4 flex-1">
            <h4 className="font-semibold text-primary mb-2 text-sm">Key Features:</h4>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-secondary text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <AnimatedButton variant="primary" size="small" className="flex-1">
              Try Demo
            </AnimatedButton>
            <AnimatedButton variant="outline" size="small" className="flex-1">
              Learn More
            </AnimatedButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
