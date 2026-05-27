import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const stats = [
    { value: "10+",   label: "Expert Engineers" },
    { value: "99.9%", label: "Service Reliability" },
    { value: "50+",   label: "Enterprise Deployments" },
    { value: "24/7",  label: "Global Support" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300 pt-[56px]">

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />
      <div className="absolute inset-0 pointer-events-none dark:opacity-20 opacity-0"
        style={{
          backgroundImage: "radial-gradient(circle, #1E293B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="grid lg:grid-cols-12 min-h-[75vh] items-stretch">

          {/* ── LEFT — Main content ── */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-10 lg:pr-16 lg:border-r border-slate-200 dark:border-[#1E293B]">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="block h-[2px] w-8 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 font-display">
                Enterprise Technology Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.0] tracking-tight font-display text-slate-900 dark:text-white"
            >
              Powering<br />
              <span className="text-blue-600 dark:text-blue-400">Digital</span><br />
              Transformation
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              ADRS Techno Pvt. Ltd. delivers secure, scalable, and intelligent software platforms,
              BPO operations, and automation solutions for modern enterprises.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-colors"
              >
                Book a Demo
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-slate-300 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 font-bold text-sm uppercase tracking-wider hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 bg-transparent transition-colors"
              >
                Our Services
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT — Vertical stats strip ── */}
          <div className="lg:col-span-4 flex flex-col justify-center lg:pl-12 mt-14 lg:mt-0">
            <div>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="py-7 border-b border-slate-200 dark:border-[#1E293B] first:border-t"
                >
                  <div className="text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

