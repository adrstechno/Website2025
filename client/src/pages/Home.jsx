// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FiArrowRight } from 'react-icons/fi';

// // React Icons (Replacements for emojis)
// import { MdDevices, MdSecurity, MdFactory } from 'react-icons/md';
// import { MdAssignment, MdEvent, MdAutoAwesome } from "react-icons/md";
// import { PiGraduationCapFill } from "react-icons/pi";


// import Hero from '../components/Hero';

// import usePWAInstall from '../hooks/usePWAInstall';



// const Home = () => {

//   /* ---------------------- SERVICES ---------------------- */
//   const services = [
//     {
//       title: 'Web & Mobile Development',
//       description:
//         'Custom application development, technical consulting, UI/UX engineering, and cloud-ready architectures.',
//       icon: <MdDevices className="text-5xl text-purple-600 dark:text-purple-400" />,
//     },
//     {
//       title: 'Security Consultation',
//       description:
//         'Advanced penetration testing, vulnerability analysis, threat detection, and enterprise-grade security solutions.',
//       icon: <MdSecurity className="text-5xl text-purple-600 dark:text-purple-400" />,
//     },
//     {
//       title: 'Industrial Automation',
//       description:
//         'Automation-driven systems for warehousing, supply chain, robotics, and smart manufacturing.',
//       icon: <MdFactory className="text-5xl text-purple-600 dark:text-purple-400" />,
//     },
//   ];

//   /* ---------------------- PRODUCTS ---------------------- */
// const products = [
//   {
//     title: 'Test Series',
//     description: 'A full-featured assessment and testing platform for training and certification.',
//     icon: <MdAssignment className="text-4xl text-purple-600 dark:text-purple-400" />,
//   },
//   {
//     title: 'ADRS LMS',
//     description: 'Learning management system for course delivery, progress tracking, and reporting.',
//     icon: <PiGraduationCapFill className="text-4xl text-purple-600 dark:text-purple-400" />,
//   },
//   {
//     title: 'Adrs Spark',
//     description: 'Low-code automation platform that accelerates workflows and smart integrations.',
//     icon: <MdAutoAwesome className="text-4xl text-purple-600 dark:text-purple-400" />,
//   },
//   {
//     title: 'GoEventify',
//     description: 'Event management suite for ticketing, scheduling, check-in, and real-time analytics.',
//     icon: <MdEvent className="text-4xl text-purple-600 dark:text-purple-400" />,
//   },
// ];


//   /* ---------------------- STATISTICS ---------------------- */
//   const stats = [
//     { number: '117+', label: 'Projects Completed' },
//     { number: '50+', label: 'Happy Clients' },
//     { number: '10+', label: 'Team Members' },
//     { number: '2024', label: 'Founded' },
//   ];

//   return (
//     <div className="section-bg">

//       {/* ---------------------- HERO ---------------------- */}
//       <Hero />

//       {/* ---------------------- ABOUT SECTION ---------------------- */}
//       <section className="py-32 section-bg-alt">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >

//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
//               About <span className="text-purple-600 dark:text-purple-400">ADRS Techno</span>
//             </h2>

//             <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
//               Established in 2024, ADRS Techno Pvt. Ltd. delivers enterprise-grade software,
//               automation systems, and digital transformation solutions that empower businesses
//               to grow in a modern digital ecosystem.
//             </p>

//           </motion.div>

//         </div>
//       </section>

//       {/* ---------------------- SERVICES OVERVIEW ---------------------- */}
//       <section className="py-32 section-bg">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">

//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
//               Our <span className="text-purple-600 dark:text-purple-400">Services</span>
//             </h2>
//             <p className="text-xl text-secondary max-w-2xl mx-auto">
//               Cutting-edge solutions engineered for reliability and scalability.
//             </p>
//           </motion.div>

//           {/* Service Cards */}
//           <div className="grid md:grid-cols-3 gap-10">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="
//                   card-bg p-10 rounded-2xl group 
//                   hover:border-purple-500/30 transition-all shadow-xl 
//                   hover:shadow-purple-500/20
//                 "
//               >
//                 <div className="mb-6">{service.icon}</div>

//                 <h3 className="
//                   text-2xl font-bold mb-4 text-primary 
//                   group-hover:text-purple-600 dark:group-hover:text-purple-400 
//                   transition-colors
//                 ">
//                   {service.title}
//                 </h3>

//                 <p className="text-secondary leading-relaxed">{service.description}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* View Services CTA */}
//           <div className="mt-12 text-center">
//             <Link
//               to="/services"
//               className="inline-flex items-center px-8 py-3 
//               bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded-lg 
//               hover:bg-purple-700 dark:hover:bg-purple-600 transition"
//             >
//               View All Services
//               <FiArrowRight className="ml-2" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ---------------------- PRODUCTS SHOWCASE ---------------------- */}
//       <section className="py-32 section-bg-alt">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
//               Featured <span className="text-purple-600 dark:text-purple-400">Products</span>
//             </h2>

//             <p className="text-xl text-secondary max-w-2xl mx-auto">
//               Industry-ready digital products designed for speed, security & efficiency.
//             </p>
//           </motion.div>

//           {/* Product Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {products.map((product, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="
//                   card-bg p-6 rounded-xl group 
//                   hover:border-purple-500/30 transition-all shadow-lg hover:shadow-purple-600/20
//                 "
//               >
//                 <div className="mb-4">{product.icon}</div>

//                 <h3 className="
//                   text-xl font-bold mb-3 text-primary 
//                   group-hover:text-purple-600 dark:group-hover:text-purple-400 
//                   transition-colors
//                 ">
//                   {product.title}
//                 </h3>

//                 <p className="text-secondary leading-relaxed text-sm">
//                   {product.description}
//                 </p>

//               </motion.div>
//             ))}
//           </div>

//           {/* Explore Products CTA */}
//           <div className="mt-12 text-center">
//             <Link
//               to="/products"
//               className="inline-flex items-center px-8 py-3 bg-purple-600 
//               dark:bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 
//               dark:hover:bg-purple-600 transition"
//             >
//               Explore Products
//               <FiArrowRight className="ml-2" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ---------------------- STAT SECTION ---------------------- */}
//       <section className="py-32 section-bg">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
//               Our <span className="text-purple-600 dark:text-purple-400">Impact</span>
//             </h2>

//             <p className="text-xl text-secondary max-w-2xl mx-auto">
//               Delivering measurable value through innovation.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="
//                   card-bg p-8 rounded-xl text-center shadow-md 
//                   hover:shadow-purple-500/20 transition
//                 "
//               >
//                 <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">
//                   {stat.number}
//                 </div>

//                 <p className="text-secondary font-medium">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------- CTA SECTION ---------------------- */}
//       <section className="py-32 section-bg-alt">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
//               Start Your Journey
//             </h2>

//             <p className="text-xl text-secondary mb-10">
//               Transform your business with scalable, secure, and modern digital solutions.
//             </p>

//             <Link
//               to="/contact"
//               className="
//                 inline-flex items-center px-10 py-4 bg-purple-600 
//                 dark:bg-purple-500 text-white font-semibold rounded-lg 
//                 hover:bg-purple-700 dark:hover:bg-purple-600 
//                 transition
//               "
//             >
//               Contact Us Today
//               <FiArrowRight className="ml-2" />
//             </Link>
//           </motion.div>

//         </div>
//       </section>
//     </div>
    
//   );
// };

// export default Home;



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

// React Icons
import { MdDevices, MdSecurity, MdFactory } from "react-icons/md";
import { MdAssignment, MdEvent, MdAutoAwesome } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";

import Hero from "../components/Hero";
import usePWAInstall from "../hooks/usePWAInstall";

const Home = () => {
  /* ======================= PWA LOGIC (A5X SAME) ======================= */
  const { isInstallable, installApp } = usePWAInstall();
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const ios =
      /iphone|ipad|ipod/.test(ua) &&
      !window.matchMedia("(display-mode: standalone)").matches;
    setIsIOS(ios);
  }, []);

  useEffect(() => {
  let shown = false;

  const showPopup = () => {
    if (shown) return;

    if (isInstallable || isIOS) {
      setShowInstallPopup(true);
      shown = true;
      window.removeEventListener("scroll", showPopup);
      window.removeEventListener("click", showPopup);
    }
  };

  // User engagement triggers
  window.addEventListener("scroll", showPopup);
  window.addEventListener("click", showPopup);

  return () => {
    window.removeEventListener("scroll", showPopup);
    window.removeEventListener("click", showPopup);
  };
}, [isInstallable, isIOS]);

  /* =================================================================== */

  /* ---------------------- SERVICES ---------------------- */
  const services = [
    {
      title: "Web & Mobile Development",
      description:
        "Custom application development, technical consulting, UI/UX engineering, and cloud-ready architectures.",
      icon: <MdDevices className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Security Consultation",
      description:
        "Advanced penetration testing, vulnerability analysis, threat detection, and enterprise-grade security solutions.",
      icon: <MdSecurity className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Industrial Automation",
      description:
        "Automation-driven systems for warehousing, supply chain, robotics, and smart manufacturing.",
      icon: <MdFactory className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
  ];

  /* ---------------------- PRODUCTS ---------------------- */
  const products = [
    {
      title: "Test Series",
      description:
        "A full-featured assessment and testing platform for training and certification.",
      icon: <MdAssignment className="text-4xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "ADRS LMS",
      description:
        "Learning management system for course delivery, progress tracking, and reporting.",
      icon: <PiGraduationCapFill className="text-4xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Adrs Spark",
      description:
        "Low-code automation platform that accelerates workflows and smart integrations.",
      icon: <MdAutoAwesome className="text-4xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "GoEventify",
      description:
        "Event management suite for ticketing, scheduling, check-in, and real-time analytics.",
      icon: <MdEvent className="text-4xl text-purple-600 dark:text-purple-400" />,
    },
  ];

  /* ---------------------- STATS ---------------------- */
  const stats = [
    { number: "117+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Team Members" },
    { number: "2024", label: "Founded" },
  ];

  return (
    <>
      <div className="section-bg">
        <Hero />

        {/* ABOUT */}
        <section className="py-32 section-bg-alt">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
                About{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  ADRS Techno
                </span>
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                Established in 2024, ADRS Techno Pvt. Ltd. delivers enterprise-grade
                software, automation systems, and digital transformation solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-32 section-bg">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
                Our <span className="text-purple-600 dark:text-purple-400">Services</span>
              </h2>
              <p className="text-xl text-secondary max-w-2xl mx-auto">
                Cutting-edge solutions engineered for reliability and scalability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-bg p-10 rounded-2xl group hover:border-purple-500/30 transition-all shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
                         <Link
              to="/services"
             className="inline-flex items-center px-8 py-3 
               bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded-lg 
               hover:bg-purple-700 dark:hover:bg-purple-600 transition"
             >
               View All Services
               <FiArrowRight className="ml-2" />
             </Link>
           </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-32 section-bg-alt">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
                Featured{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  Products
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-bg p-6 rounded-xl group hover:border-purple-500/30 transition-all shadow-lg hover:shadow-purple-600/20"
                >
                  <div className="mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-purple-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-secondary text-sm">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
            <Link
               to="/products"
               className="inline-flex items-center px-8 py-3 bg-purple-600 
               dark:bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 
               dark:hover:bg-purple-600 transition"
             >
               Explore Products
               <FiArrowRight className="ml-2" />
             </Link>
           </div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-32 section-bg">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
                Our <span className="text-purple-600 dark:text-purple-400">Impact</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-bg p-8 rounded-xl text-center shadow-md hover:shadow-purple-500/20 transition"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-3">
                    {stat.number}
                  </div>
                  <p className="text-secondary font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 section-bg-alt">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
                Start Your Journey
              </h2>
              <p className="text-xl text-secondary mb-10">
                Transform your business with scalable, secure, and modern digital solutions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
              >
                Contact Us Today
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ======================= PWA POPUP ======================= */}
      {showInstallPopup && (
        <div className="fixed bottom-4 left-4 right-4 z-[9999]">
          <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold">
                Install ADRS App 🚀
              </h4>
              <p className="text-gray-400 text-sm">
                Get faster access & app-like experience
              </p>
            </div>

            <div className="flex gap-3 items-center">
              {!isIOS && isInstallable && (
                <button
                  onClick={installApp}
                  className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-cyan-300 transition"
                >
                  Install
                </button>
              )}

              {isIOS && (
                <span className="text-gray-300 text-sm">
                  Tap <b>Share</b> → <b>Add to Home Screen</b>
                </span>
              )}

              <button
                onClick={() => setShowInstallPopup(false)}
                className="text-gray-400 hover:text-white transition"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
