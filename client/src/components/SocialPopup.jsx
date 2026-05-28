import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const SocialPopup = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-7 right-7 z-50 flex items-center gap-3">

      {/* Tooltip label — slides in on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.15 }}
            className="bg-[#08090B] text-white text-xs font-bold uppercase tracking-wider
                       px-4 py-2 whitespace-nowrap border border-[#1E293B] shadow-xl"
          >
            Apply Now
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => navigate('/apply')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Open application page"
        title="Apply Now"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 w-[52px] h-[52px] bg-blue-600 hover:bg-blue-700
                   text-white shadow-lg shadow-blue-600/30
                   flex items-center justify-center
                   transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        <HiOutlineDocumentText className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default SocialPopup;


