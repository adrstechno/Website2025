import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { FiMessageCircle, FiX } from "react-icons/fi";

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const whatsappUrl =
    "https://wa.me/919201347033?text=Hi%20ADRS%20Techno%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20talk%3F";

  return (
    <div className="fixed bottom-24 right-5 z-[100] flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-start gap-2 pr-7 pl-4 py-3 rounded-2xl rounded-br-none text-sm font-medium shadow-xl max-w-[200px]"
            style={{
              background: "#3F3F46",
              color: "#fff",
            }}
          >
            <span className="inline-flex items-center gap-1.5">
              <FiMessageCircle className="w-3.5 h-3.5" />
              Chat with us on WhatsApp
            </span>
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-1.5 right-1.5 p-0.5 rounded-full opacity-70 hover:opacity-100"
            >
              <FiX className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 8px 30px rgba(37,211,102,0.4)",
        }}
      >
        <BsWhatsapp className="w-7 h-7 text-white" />
        {/* Ping ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-40"
          style={{ background: "#25D366" }}
        />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;


