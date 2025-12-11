// import { motion } from 'framer-motion';

// const ServiceCard = ({ service, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
//       whileHover={{ y: -10, scale: 1.02 }}
//       className="relative group h-full"
//     >
//       {/* Glow effect */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500`}></div>
      
//       {/* Card */}
//       <div className="relative bg-dark-secondary/50 backdrop-blur-sm border border-white/10 group-hover:border-cyan-500/30 rounded-2xl p-8 h-full transition-all duration-300">
//         {/* Icon */}
//         <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//           {service.icon}
//         </div>
        
//         {/* Title */}
//         <h3 className="text-2xl font-bold text-white mb-3">
//           {service.title}
//         </h3>
        
//         {/* Description */}
//         <p className="text-gray-400 mb-6 leading-relaxed">
//           {service.description}
//         </p>

//         {/* Highlights */}
//         <div className="space-y-3 mb-6">
//           {service.highlights.map((highlight, idx) => (
//             <div key={idx} className="flex items-center text-sm text-gray-300">
//               <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
//               {highlight}
//             </div>
//           ))}
//         </div>

//         {/* Learn More Link */}
//         <motion.button
//           whileHover={{ x: 5 }}
//           className="text-cyan-400 font-semibold flex items-center group/btn"
//         >
//           Learn more
//           <svg
//             className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceCard;

import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group h-full"
    >
      {/* Glow effect */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${service.gradient} 
          opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl 
          transition-opacity duration-500
        `}
      ></div>

      {/* MAIN CARD */}
      <div
        className="
          relative 
          bg-white/70 dark:bg-white/10 
          border border-gray-200 dark:border-white/10 
          group-hover:border-purple-400/30 
          backdrop-blur-md 
          rounded-2xl 
          p-8 
          h-full 
          transition-all 
          duration-300
          shadow-lg dark:shadow-none
        "
      >
        {/* ICON BOX */}
        <div
          className={`
            w-16 h-16 rounded-xl flex items-center justify-center 
            text-4xl 
            bg-gradient-to-br ${service.gradient} 
            text-white shadow-lg 
            mb-6 
            group-hover:scale-110 
            transition-transform duration-300
          `}
        >
          {service.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* HIGHLIGHTS */}
        <div className="space-y-3 mb-6">
          {service.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-center text-sm text-gray-800 dark:text-gray-300"
            >
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
              {highlight}
            </div>
          ))}
        </div>

        {/* LEARN MORE BUTTON */}
        <motion.button
          whileHover={{ x: 5 }}
          className="
            text-purple-600 dark:text-purple-400 
            font-semibold flex items-center 
            group/btn
          "
        >
          Learn more
          <svg
            className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
