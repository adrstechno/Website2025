import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      name: 'ADRS Dashboard Pro',
      description: 'Enterprise-grade analytics and business intelligence platform with real-time data visualization and custom reporting.',
      icon: '📊',
      gradient: 'from-blue-500 to-cyan-500',
      badge: 'Popular',
      category: 'saas',
      features: [
        'Real-time data synchronization',
        'Custom dashboard builder',
        'Advanced analytics engine',
        'Multi-user collaboration',
        'API integration support',
      ],
    },
    {
      name: 'ADRS CRM Suite',
      description: 'Complete customer relationship management solution with sales automation, pipeline tracking, and customer insights.',
      icon: '👥',
      gradient: 'from-purple-500 to-pink-500',
      badge: 'New',
      category: 'saas',
      features: [
        '360° customer view',
        'Sales pipeline management',
        'Email marketing automation',
        'Lead scoring & tracking',
        'Mobile app included',
      ],
    },
    {
      name: 'ADRS Workflow Engine',
      description: 'No-code workflow automation platform that streamlines business processes and eliminates manual tasks.',
      icon: '⚙️',
      gradient: 'from-green-500 to-teal-500',
      category: 'saas',
      features: [
        'Visual workflow builder',
        'Pre-built templates',
        'Multi-step approvals',
        'Integration marketplace',
        'Audit trail & compliance',
      ],
    },
    {
      name: 'ADRS Cloud Platform',
      description: 'Fully managed PaaS infrastructure with auto-scaling, load balancing, and global CDN distribution.',
      icon: '☁️',
      gradient: 'from-blue-600 to-indigo-600',
      badge: 'Enterprise',
      category: 'paas',
      features: [
        '99.9% uptime guarantee',
        'Auto-scaling infrastructure',
        'Global CDN network',
        'DDoS protection',
        'Managed databases',
      ],
    },
    {
      name: 'ADRS DevOps Suite',
      description: 'Complete CI/CD pipeline with automated testing, deployment, and monitoring capabilities.',
      icon: '🛠️',
      gradient: 'from-orange-500 to-red-500',
      category: 'paas',
      features: [
        'Automated CI/CD pipelines',
        'Container orchestration',
        'Performance monitoring',
        'Log aggregation',
        'Security scanning',
      ],
    },
    {
      name: 'ADRS AI Assistant',
      description: 'AI-powered automation and insights platform that learns from your data and optimizes workflows.',
      icon: '🤖',
      gradient: 'from-purple-600 to-blue-600',
      badge: 'AI-Powered',
      category: 'saas',
      features: [
        'Natural language processing',
        'Predictive analytics',
        'Automated recommendations',
        'Smart data extraction',
        'Continuous learning',
      ],
    },
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  const comparisonFeatures = [
    'Real-time Analytics',
    'API Access',
    'Custom Integrations',
    'Priority Support',
    'SLA Guarantee',
    'White-label Options',
  ];

  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'Our 14-day free trial includes full access to all features with no credit card required. You can test all functionality with up to 5 users.',
    },
    {
      question: 'Can I switch between plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.',
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Absolutely! We work with enterprise clients to create tailored solutions that meet specific requirements. Contact our sales team for details.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use bank-grade encryption, are SOC 2 and ISO 27001 certified, and comply with GDPR and other data protection regulations.',
    },
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
              Powerful <span className="gradient-text">Products</span> for Modern Business
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Enterprise-grade solutions designed to transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'saas', label: 'SaaS Solutions' },
              { id: 'paas', label: 'PaaS Infrastructure' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
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
              Compare <span className="gradient-text">Plans</span>
            </h2>
            <p className="text-xl text-gray-600">Choose the right plan for your needs</p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Features</th>
                    <th className="px-6 py-4 text-center">Starter</th>
                    <th className="px-6 py-4 text-center">Professional</th>
                    <th className="px-6 py-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
                      <td className="px-6 py-4 text-center">
                        {index < 2 ? (
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {index < 4 ? (
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Try any product free for 14 days. No credit card required.
            </p>
            <button className="px-10 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Start Your Free Trial
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
