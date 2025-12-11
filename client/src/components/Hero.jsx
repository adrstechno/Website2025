

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const background = {
    url: "/hero-bg/bg-1.jpg",
    gradient: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
  };

  useEffect(() => {
    const img = new Image();
    img.src = background.url;
    img.onload = () => setImageLoaded(true);
  }, []);

  const stats = [
    { value: "10+", label: "Expert Engineers" },
    { value: "99.9%", label: "Service Reliability" },
    { value: "50+", label: "Enterprise Deployments" },
    { value: "24/7", label: "Global Support" },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center py-10 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {imageLoaded ? (
          <img src={background.url} className="w-full h-full object-cover" />
        ) : (
          <div style={{ background: background.gradient }} className="w-full h-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/40 dark:from-black/40 dark:via-black/30 dark:to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full flex flex-col gap-12">

        {/* MAIN ROW (LEFT = TEXT, RIGHT = IMAGE) */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 bg-purple-50 dark:bg-purple-500/10 
              border border-purple-200 dark:border-purple-500/20 rounded-full mb-5"
            >
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                Trusted Technology for Modern Enterprises
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-primary leading-tight"
            >
            
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 
              bg-clip-text text-transparent">
                Advanced Digital Reliable Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-secondary mt-6"
            >
              ADRS delivers secure, scalable and intelligent cloud platforms that help enterprises
              automate, innovate and transform their digital ecosystem.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center px-7 py-3 bg-purple-600 
                dark:bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 
                dark:hover:bg-purple-600 transition"
              >
                Book a Demo 
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/services"
                className="px-7 py-3 bg-white/70 dark:bg-white/5 border border-gray-200 
                dark:border-white/10 font-semibold rounded-lg hover:bg-white dark:hover:bg-white/10 
                transition"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative rounded-2xl border border-purple-200 
            dark:border-purple-500/20 bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-xl p-6">
              <img
                src="/hero-image.jpg"
                alt="Enterprise Architecture"
                className="rounded-xl w-full"
              />
            </div>
          </motion.div>
        </div>

        {/* STATS ROW — NOW INSIDE SAME PAGE AREA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center py-6 rounded-xl bg-white/70 dark:bg-white/5 
              border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow"
            >
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {s.value}
              </div>
              <div className="text-sm text-secondary mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
