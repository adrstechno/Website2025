import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const background = {
    url: "/hero-bg/bg-1.jpg",
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
    <section className="relative min-h-[90vh] flex items-center py-10 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        {imageLoaded ? (
          <img
            src={background.url}
            className="w-full h-full object-cover"
            alt="Background"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 dark:bg-gray-900" />
        )}

        {/* OVERLAY FOR LIGHT & DARK MODES */}
        <div className="
          absolute inset-0 
          bg-white/50 dark:bg-black/50 
          backdrop-blur-[2px]
        " />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                inline-block px-4 py-2 
                bg-purple-100/50 dark:bg-purple-600/20 
                border border-purple-300 dark:border-purple-400/30
                rounded-full mb-5
              "
            >
              <span className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                Trusted Technology for Modern Enterprises
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                text-4xl lg:text-6xl font-bold leading-tight 
                text-black dark:text-white drop-shadow-xl
              "
            >
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 
                bg-clip-text text-transparent">
                Advanced Digital Reliable Solutions
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 dark:text-gray-200 mt-6 max-w-xl leading-relaxed"
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
              {/* PRIMARY BUTTON */}
              <Link
                to="/contact"
                className="
                  group inline-flex items-center px-7 py-3 
                  bg-purple-600 text-white 
                  dark:bg-purple-500 
                  font-semibold rounded-lg 
                  hover:bg-purple-700 dark:hover:bg-purple-600 
                  transition
                "
              >
                Book a Demo
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </Link>

              {/* SECONDARY BUTTON */}
              <Link
                to="/services"
                className="
                  px-7 py-3 
                  bg-white/70 dark:bg-white/10 
                  border border-gray-300 dark:border-white/20 
                  text-black dark:text-white 
                  font-semibold rounded-lg 
                  hover:bg-white dark:hover:bg-white/20 
                  transition
                "
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
            <div className="
              relative rounded-2xl 
              border border-gray-300 dark:border-white/20 
              bg-white/60 dark:bg-white/10 
              backdrop-blur-sm shadow-xl 
              p-4 lg:p-6
            ">
              <img
                src="https://images.pexels.com/photos/5475763/pexels-photo-5475763.jpeg"
                alt="Enterprise Architecture"
                className="rounded-xl w-full object-cover shadow-lg"
              />
            </div>
          </motion.div>

        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="
                text-center py-6 rounded-xl 
                bg-white/70 dark:bg-white/10 
                border border-gray-300 dark:border-white/20 
                backdrop-blur-sm shadow-lg
              "
            >
              <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                {s.value}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
