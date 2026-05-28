import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiHome } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const NotFound = () => (
  <div
    className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #0B0D12 0%, #08090B 60%, #11141A 100%)" }}
  >
    {/* Glow orbs */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: "500px", height: "500px",
        top: "-150px", left: "50%", transform: "translateX(-50%)",
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative z-10 max-w-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="text-[10rem] font-black font-display leading-none mb-4"
          style={{
            background: "linear-gradient(135deg, #F3F4F6, #D1D5DB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-3xl font-extrabold font-display text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
          >
            <FiHome className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            Contact Us <FiArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/919201347033"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-green-400"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <BsWhatsapp className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm text-slate-500">
          {[
            { name: "Services", path: "/services" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Hire Developers", path: "/hire-developers" },
            { name: "FAQ", path: "/faq" },
          ].map(link => (
            <Link key={link.name} to={link.path} className="hover:text-blue-400 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default NotFound;




