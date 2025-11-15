import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { MdDashboard, MdCloud, MdPhoneIphone, MdAutoAwesome } from 'react-icons/md';
import Hero from '../components/Hero';

const Home = () => {
  const features = [
    {
      title: 'Enterprise SaaS Dashboard',
      description: 'Comprehensive analytics and management tools designed for enterprise-scale operations.',
      icon: MdDashboard,
    },
    {
      title: 'Cloud PaaS Infrastructure',
      description: 'Scalable platform services with automated deployment and container orchestration.',
      icon: MdCloud,
    },
    {
      title: 'Mobile & Web App Delivery',
      description: 'Cross-platform development with native performance and seamless user experience.',
      icon: MdPhoneIphone,
    },
    {
      title: 'AI-Driven Automation',
      description: 'Intelligent workflows that reduce manual tasks and optimize business processes.',
      icon: MdAutoAwesome,
    },
  ];

  const leaders = [
    {
      name: 'Abhishek Dubey',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader driving innovation and strategic growth at ADRS Technology.',
      image: '/team/abhishek.jpg',
    },
    {
      name: 'Siddhant Dubey',
      role: 'Chief Technology Officer',
      bio: 'Technical architect ensuring cutting-edge solutions and robust infrastructure.',
      image: '/team/siddhant.jpg',
    },
  ];

  return (
    <div className="section-bg">
      {/* Hero Component with Background Carousel */}
      <Hero />

      {/* Features Section */}
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
              Core <span className="text-purple-600 dark:text-purple-400">Capabilities</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Comprehensive solutions designed for enterprise-scale operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-bg p-8 rounded-xl hover:border-purple-500/30 transition-all group"
              >
                <feature.icon className="text-5xl text-purple-600 dark:text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
              Meet the <span className="text-purple-600 dark:text-purple-400">Leaders</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Experienced executives driving innovation and growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-bg p-8 rounded-xl text-center"
              >
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const initials = leader.name.split(' ').map(n => n[0]).join('');
                    e.target.parentElement.innerHTML = `<div class="w-32 h-32 bg-purple-100 dark:bg-purple-500/10 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-purple-600 dark:text-purple-400">${initials}</div>` + e.target.parentElement.innerHTML.substring(e.target.outerHTML.length);
                  }}
                />
                <h3 className="text-xl font-bold mb-2 text-primary">{leader.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm mb-4">{leader.role}</p>
                <p className="text-secondary text-sm leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <Link to="/team" className="inline-block">
              <div className="card-bg p-12 rounded-xl inline-block hover:border-purple-500/30 transition-all cursor-pointer group">
                <p className="text-2xl font-bold mb-2 text-primary group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  <span className="text-purple-600 dark:text-purple-400">10+</span> Dedicated Developers
                </p>
                <p className="text-secondary mb-4">
                  Front-end, Back-end, Full-stack, and Mobile specialists
                </p>
                <span className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold">
                  Meet Our Team
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-secondary mb-10">
              Let's discuss how ADRS Technology can help you scale
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              Get Started Today
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
