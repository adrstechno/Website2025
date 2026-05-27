import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative bg-white dark:bg-[#111827] overflow-hidden flex flex-col h-full
                 border-0 transition-all duration-300
                 hover:shadow-[0_8px_32px_-4px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_8px_32px_-4px_rgba(59,130,246,0.1)]"
    >
      {/* Left accent bar — slides in on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-600 dark:bg-blue-500
                      transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      {/* Top row — icon + arrow */}
      <div className="flex items-start justify-between p-7 pb-4">
        <div className="w-11 h-11 flex items-center justify-center text-xl
                        bg-blue-50 dark:bg-blue-950/40
                        text-blue-600 dark:text-blue-400
                        group-hover:bg-blue-600 group-hover:text-white
                        transition-colors duration-300 flex-shrink-0">
          {service.icon}
        </div>
        <FiArrowUpRight
          className="w-4 h-4 text-slate-300 dark:text-slate-600
                     group-hover:text-blue-600 dark:group-hover:text-blue-400
                     group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                     transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="px-7 pb-7 flex flex-col flex-grow">
        <h3 className="text-base font-bold font-display text-slate-900 dark:text-white mb-2 leading-snug
                       group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* Highlights */}
        {service.highlights && (
          <div className="mt-5 pt-5 border-t border-slate-100 dark:border-[#1E293B] grid grid-cols-2 gap-x-4 gap-y-2">
            {service.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="w-[5px] h-[5px] rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                {h}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;

