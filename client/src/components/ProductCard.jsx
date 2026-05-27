import { motion } from 'framer-motion';
import { FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-[#111827] flex flex-col h-full hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300 border border-slate-200 dark:border-[#1E293B] rounded-2xl shadow-sm overflow-hidden"
    >
      <div className="p-8 flex-grow flex flex-col">
        {/* Header: Icon + Badge */}
        <div className="flex items-start justify-between mb-8">
          <div className="w-14 h-14 bg-blue-50 dark:bg-[#131C2E] group-hover:bg-white/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors">
            <div className="text-2xl">
              {product.icon}
            </div>
          </div>
          {product.badge && (
            <span className="px-3 py-1 bg-slate-100 dark:bg-[#131C2E] group-hover:bg-white/20 text-slate-600 dark:text-slate-300 group-hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
              {product.badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-white mb-3 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 group-hover:text-blue-100 text-sm leading-relaxed mb-8 transition-colors">
          {product.description}
        </p>

        {/* Features List */}
        <div className="mb-8 flex-grow">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-white mb-4 transition-colors">
            Key Features
          </p>
          <ul className="space-y-3">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FiCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white mt-0.5 flex-shrink-0 transition-colors" />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-50 transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="grid grid-cols-2 border-t border-slate-200 dark:border-[#1E293B] group-hover:border-white/20 transition-colors">
        <Link 
          to="/contact" 
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-slate-900 dark:text-white group-hover:text-white border-r border-slate-200 dark:border-[#1E293B] group-hover:border-white/20 transition-colors hover:bg-slate-50 dark:hover:bg-[#131C2E] group-hover:hover:bg-white/10"
        >
          Try Demo
        </Link>
        <Link 
          to="/contact" 
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors hover:bg-slate-50 dark:hover:bg-[#131C2E] group-hover:hover:bg-white/10"
        >
          Details <FiArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
