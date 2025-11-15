import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
      className="relative group h-full"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500`}></div>
      
      {/* Card */}
      <div className="relative bg-dark-secondary/50 backdrop-blur-sm border border-white/10 group-hover:border-cyan-500/30 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300">
        {/* Header with Icon */}
        <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <span className="relative z-10">{product.icon}</span>
        </div>
        
        {/* Content */}
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            {product.badge && (
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full">
                {product.badge}
              </span>
            )}
          </div>
          
          <p className="text-gray-400 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-6 flex-1">
            <h4 className="font-semibold text-white mb-3 text-sm">Key Features:</h4>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">{feature}</span>
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
