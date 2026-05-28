import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    className="group relative flex flex-col h-full overflow-hidden card-lift"
    style={{ background: 'rgba(17,17,20,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14 }}
  >
    {/* Left blue accent bar */}
    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r" />

    {/* Top row */}
    <div className="flex items-start justify-between p-7 pb-4">
      <div className="w-11 h-11 flex items-center justify-center text-xl text-blue-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.15)' }}>
        {service.icon}
      </div>
      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
    </div>

    <div className="px-7 pb-7 flex flex-col flex-grow">
      <h3 className="text-base font-bold font-display text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed flex-grow">{service.description}</p>

      {service.highlights && (
        <div className="mt-5 pt-5 border-t grid grid-cols-2 gap-x-4 gap-y-2"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          {service.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
              {h}
            </div>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default ServiceCard;



