import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group flex flex-col h-full card-lift overflow-hidden"
    style={{ background: 'rgba(17,17,20,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 }}
  >
    <div className="p-8 flex-grow flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-7">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-blue-400 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
          style={{ background: 'rgba(255,255,255,0.15)' }}>
          {product.icon}
        </div>
        {product.badge && (
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-400"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(229,231,235,0.25)' }}>
            {product.badge}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold font-display text-white group-hover:text-blue-400 mb-3 transition-colors">
        {product.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-7">{product.description}</p>

      <div className="flex-grow mb-7">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Key Features</p>
        <ul className="space-y-2.5">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-400">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Footer */}
    <div className="grid grid-cols-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <Link to="/contact"
        className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-slate-300 hover:text-white border-r hover:bg-white/5 transition-colors"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        Try Demo
      </Link>
      <Link to="/contact"
        className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-blue-400 hover:text-blue-300 hover:bg-white/5 transition-colors">
        Details <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

export default ProductCard;



