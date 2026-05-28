import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { WA } from "../constants/company";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", show, { passive: true });
    const t = setTimeout(() => setVisible(window.scrollY > 300 || true), 3000);
    return () => { window.removeEventListener("scroll", show); clearTimeout(t); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden"
          /* Safe area inset for iPhone home bar */
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <div
            className="flex items-stretch border-t"
            style={{
              background: "rgba(8,9,11,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <a
              href={WA.consult}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-green-400 active:bg-green-900/20 border-r"
              style={{ borderColor: "rgba(255,255,255,0.08)", minHeight: 56 }}
            >
              <BsWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="flex-[2] flex items-center justify-center gap-2 py-4 bg-blue-600 text-white text-sm font-bold active:bg-blue-700"
              style={{ minHeight: 56 }}
            >
              Talk With Our Team
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
