import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
      image: 'SJ',
      content: 'ADRS Technology transformed our infrastructure. Their PaaS solution reduced our deployment time by 80% and significantly improved our system reliability.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow Systems',
      image: 'MC',
      content: 'The AI-powered automation tools have revolutionized our workflow. We\'ve seen a 60% increase in productivity since implementing their solutions.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, CloudScale',
      image: 'ER',
      content: 'Outstanding support and enterprise-grade security. ADRS Technology is our trusted partner for all cloud infrastructure needs.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
              
              {/* Card */}
              <div className="relative bg-dark-primary/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                {/* Quote icon */}
                <div className="absolute top-8 right-8 text-6xl text-cyan-500/10">"</div>
                
                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-6 h-6 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed relative z-10">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg shadow-cyan-500/20">
                    {testimonials[activeIndex].image}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-cyan-400 to-blue-500'
                    : 'w-3 h-3 bg-white/20 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
