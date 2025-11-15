import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';

const Products = () => {
  const products = [
    {
      name: 'IDHPS',
      description: 'Comprehensive healthcare solution for modern medical facilities with appointment management, telemedicine, and electronic health records.',
      icon: '🏥',
      gradient: 'from-blue-500 to-cyan-500',
      badge: 'Healthcare',
      category: 'saas',
      features: [
        'Appointment Scheduling',
        'Telemedicine Integration',
        'Electronic Health Records (EHR)',
        'Patient Portal',
        'Billing & Insurance',
      ],
    },
    {
      name: 'Jewelry Manager',
      description: 'Complete retail management solution designed specifically for jewelry businesses with inventory, billing, and CRM capabilities.',
      icon: '💎',
      gradient: 'from-purple-500 to-pink-500',
      badge: 'Retail',
      category: 'saas',
      features: [
        'Inventory Management',
        'Point of Sale (POS)',
        'Customer Relationship Management',
        'Billing & Invoicing',
        'Analytics & Reports',
      ],
    },
    {
      name: 'ADRS Learn Pro',
      description: 'Advanced learning management system with progress tracking, analytics, and interactive course delivery.',
      icon: '🎓',
      gradient: 'from-green-500 to-teal-500',
      badge: 'Education',
      category: 'saas',
      features: [
        'Course Management',
        'Progress Tracking',
        'Analytics Dashboard',
        'Interactive Assessments',
        'Student Portal',
      ],
    },
    {
      name: 'Custom ERP',
      description: 'Tailored enterprise resource planning solution with workflow automation, comprehensive reporting, and seamless integration.',
      icon: '🏢',
      gradient: 'from-blue-600 to-indigo-600',
      badge: 'Enterprise',
      category: 'saas',
      features: [
        'Workflow Automation',
        'Custom Reports',
        'Third-party Integration',
        'Multi-department Management',
        'Real-time Analytics',
      ],
    },
  ];



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
    <div className="section-bg pt-20">
      {/* Hero Section */}
      <section className="py-24 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Powerful <span className="text-purple-600 dark:text-purple-400">Products</span> for Modern Business
            </h1>
            <p className="text-xl text-secondary leading-relaxed mb-8">
              Enterprise-grade solutions designed to transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                Start Free Trial
              </button>
              <button className="px-8 py-4 card-bg text-primary border-2 border-purple-600 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Compare <span className="text-purple-600 dark:text-purple-400">Plans</span>
            </h2>
            <p className="text-xl text-secondary">Choose the right plan for your needs</p>
          </motion.div>

          <div className="card-bg rounded-2xl shadow-xl overflow-hidden">
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
                <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-white/5">
                      <td className="px-6 py-4 font-medium text-primary">{feature}</td>
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
      <section className="py-24 section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Frequently Asked <span className="text-purple-600 dark:text-purple-400">Questions</span>
            </h2>
            <p className="text-xl text-secondary">Everything you need to know</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bg rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-secondary leading-relaxed">{faq.answer}</p>
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
