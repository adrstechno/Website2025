import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const saasServices = [
    {
      icon: '📊',
      title: 'Dashboard & Analytics',
      description: 'Real-time business intelligence with customizable dashboards and advanced analytics.',
      gradient: 'from-blue-500 to-cyan-500',
      highlights: ['Custom KPI tracking', 'Real-time data visualization', 'Predictive analytics'],
    },
    {
      icon: '👥',
      title: 'CRM Platform',
      description: 'Complete customer relationship management with sales automation and pipeline tracking.',
      gradient: 'from-purple-500 to-pink-500',
      highlights: ['360° customer view', 'Sales automation', 'Email integration'],
    },
    {
      icon: '⚙️',
      title: 'Workflow Automation',
      description: 'Streamline business processes with intelligent automation and approval workflows.',
      gradient: 'from-green-500 to-teal-500',
      highlights: ['No-code builder', 'Multi-step workflows', 'Integration hub'],
    },
    {
      icon: '📈',
      title: 'Business Analytics',
      description: 'Advanced analytics suite with AI-powered insights and forecasting capabilities.',
      gradient: 'from-orange-500 to-red-500',
      highlights: ['AI predictions', 'Custom reports', 'Data export'],
    },
  ];

  const paasServices = [
    {
      icon: '☁️',
      title: 'Cloud Hosting',
      description: 'Enterprise-grade cloud infrastructure with auto-scaling and load balancing.',
      gradient: 'from-blue-600 to-indigo-600',
      highlights: ['99.9% uptime SLA', 'Auto-scaling', 'Global CDN'],
    },
    {
      icon: '🛠️',
      title: 'Developer Tools',
      description: 'Complete DevOps toolkit with CI/CD pipelines and monitoring solutions.',
      gradient: 'from-purple-600 to-blue-600',
      highlights: ['Git integration', 'Automated testing', 'Performance monitoring'],
    },
    {
      icon: '📦',
      title: 'Container Environment',
      description: 'Kubernetes-based container orchestration with Docker support.',
      gradient: 'from-teal-600 to-green-600',
      highlights: ['Kubernetes clusters', 'Docker registry', 'Service mesh'],
    },
    {
      icon: '🔄',
      title: 'CI/CD Pipeline',
      description: 'Automated deployment pipelines with testing and rollback capabilities.',
      gradient: 'from-red-600 to-pink-600',
      highlights: ['Automated builds', 'Zero-downtime deploy', 'Rollback support'],
    },
  ];

  const industries = [
    { name: 'Financial Services', icon: '🏦', description: 'Secure, compliant solutions for banking and fintech' },
    { name: 'Healthcare', icon: '🏥', description: 'HIPAA-compliant platforms for healthcare providers' },
    { name: 'E-commerce', icon: '🛒', description: 'Scalable infrastructure for online retail' },
    { name: 'Manufacturing', icon: '🏭', description: 'IoT-enabled solutions for smart factories' },
    { name: 'Education', icon: '🎓', description: 'Learning management and student information systems' },
    { name: 'Logistics', icon: '🚚', description: 'Supply chain optimization and tracking' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise <span className="gradient-text">Solutions</span> That Scale
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive SaaS and PaaS services designed for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* SaaS Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SaaS <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready-to-use software solutions for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PaaS Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PaaS <span className="gradient-text">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete platform for building, deploying, and scaling applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paasServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why ADRS is Different</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              We don't just provide software—we partner with you for success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: 'Tailored Solutions', desc: 'Customized to your needs' },
              { icon: '🚀', title: 'Rapid Deployment', desc: 'Go live in days, not months' },
              { icon: '💪', title: 'Enterprise Support', desc: 'Dedicated success team' },
              { icon: '🔐', title: 'Bank-Grade Security', desc: 'SOC 2 & ISO certified' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plans that grow with your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$99', features: ['Up to 10 users', 'Basic features', 'Email support', '5GB storage'] },
              { name: 'Professional', price: '$299', features: ['Up to 50 users', 'Advanced features', 'Priority support', '50GB storage'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited users', 'All features', '24/7 support', 'Unlimited storage'] },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>/month</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className={`w-5 h-5 mr-2 ${plan.popular ? 'text-white' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={plan.popular ? 'text-white' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
