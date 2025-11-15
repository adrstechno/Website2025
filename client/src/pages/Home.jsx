import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { MdDashboard, MdCloud, MdPhoneIphone, MdAutoAwesome } from 'react-icons/md';
import Hero from '../components/Hero';

const Home = () => {
  const services = [
    {
      title: 'Security Consultation',
      description: 'Penetration Testing, Malware Analysis, and comprehensive Threat Management to protect your digital assets.',
      icon: '🔒',
    },
    {
      title: 'Web & Mobile Development',
      description: 'Custom Application Development, Tech Consultation, and Cloud Architecture solutions.',
      icon: '💻',
    },
    {
      title: 'Industrial Automation',
      description: 'Warehouse Automation, Supply Chain optimization, and Automated QA systems.',
      icon: '🏭',
    },
  ];

  const products = [
    {
      title: 'IDHPS',
      description: 'Healthcare solution with Appointments, Telemedicine, and Electronic Health Records.',
      icon: '🏥',
    },
    {
      title: 'Jewelry Manager',
      description: 'Retail management with Inventory, Billing, and Customer Relationship Management.',
      icon: '💎',
    },
    {
      title: 'ADRS Learn Pro',
      description: 'Learning Management System with Progress tracking and Analytics.',
      icon: '🎓',
    },
    {
      title: 'Custom ERP',
      description: 'Enterprise solution with Workflow automation, Reports, and Integration.',
      icon: '🏢',
    },
  ];

  const stats = [
    { number: '117+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Team Members' },
    { number: '2024', label: 'Founded' },
  ];

  return (
    <div className="section-bg">
      {/* Hero Component with Background Carousel */}
      <Hero />

      {/* About Section */}
      <section className="py-32 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              About <span className="text-purple-600 dark:text-purple-400">ADRS Techno</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Founded in 2024, ADRS Techno Private Limited is a technology company delivering custom enterprise applications 
              and user-centric digital platforms. We specialize in innovation and business transformation through cutting-edge 
              digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Our <span className="text-purple-600 dark:text-purple-400">Services</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Comprehensive technology solutions for modern businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-bg p-8 rounded-xl hover:border-purple-500/30 transition-all group"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              View All Services
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Featured <span className="text-purple-600 dark:text-purple-400">Products</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Innovative solutions across healthcare, retail, education, and enterprise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-bg p-6 rounded-xl hover:border-purple-500/30 transition-all group"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 text-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              Explore Products
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Our <span className="text-purple-600 dark:text-purple-400">Impact</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Delivering results that matter
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bg p-8 rounded-xl text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                  {stat.number}
                </div>
                <p className="text-secondary font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 section-bg-alt">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Start Your Journey
            </h2>
            <p className="text-xl text-secondary mb-10">
              Transform your business with cutting-edge digital solutions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              Contact Us Today
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
