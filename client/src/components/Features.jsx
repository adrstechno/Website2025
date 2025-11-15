import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'SaaS Solutions',
      description: 'Comprehensive software-as-a-service platforms with enterprise-grade security and scalability.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: '☁️',
      title: 'PaaS Infrastructure',
      description: 'Complete platform-as-a-service with automated deployment, scaling, and management.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: '🌐',
      title: 'Cloud Deployment',
      description: 'Multi-cloud deployment strategies with high availability and disaster recovery.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🤖',
      title: 'AI-powered Automation',
      description: 'Intelligent automation workflows powered by machine learning and AI technologies.',
      gradient: 'from-pink-500 to-cyan-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-dark-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade technology solutions designed to scale with your business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-dark-secondary/50 backdrop-blur-sm border border-white/10 group-hover:border-cyan-500/30 rounded-2xl p-8 h-full transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center text-cyan-400 text-sm font-semibold"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
