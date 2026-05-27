import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import {
  FiCheckCircle,
  FiChevronDown,
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiArrowUpRight,
  FiBox
} from 'react-icons/fi';
import { MdHealthAndSafety, MdSchool, MdBusinessCenter } from 'react-icons/md';
import { IoDiamondOutline } from 'react-icons/io5';

/* ── Reusable section label ── */
const SectionLabel = ({ number, text }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-display tabular-nums">{number}</span>
    <span className="h-[1px] w-8 bg-blue-600 dark:bg-blue-400" />
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-display">{text}</span>
  </div>
);

const Products = () => {
  const products = [
    {
      name: 'IDHPS',
      description: 'Comprehensive healthcare solution for modern medical facilities with appointment management, telemedicine, and electronic health records.',
      icon: <MdHealthAndSafety />,
      badge: 'Healthcare',
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
      icon: <IoDiamondOutline />,
      badge: 'Retail',
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
      icon: <MdSchool />,
      badge: 'Education',
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
      icon: <MdBusinessCenter />,
      badge: 'Enterprise',
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

  const upcoming = [
    { name: 'Test With Spark', desc: 'A full-featured assessment and testing platform for training and certification.' },
    { name: 'LMS/CRM', desc: 'Education and Relationship Management.' },
    { name: 'GemControl', desc: 'Jewelry billing, Inventory & Analytics.' },
    { name: 'GoEventify', desc: 'Event management product for ticketing, schedules, and on-site check-in.' },
    { name: 'Inventory Management System', desc: 'Manage stock and supply flow.' },
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

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);


  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0B1120] pt-20 transition-colors duration-300">

      {/* ── HERO SECTION ── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <SectionLabel number="00" text="SaaS Ecosystem" />
            <h1 className="text-5xl md:text-7xl font-extrabold font-display text-slate-900 dark:text-white leading-tight mb-6">
              Powerful <span className="text-blue-600 dark:text-blue-400">Products</span><br />for Modern Business
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Enterprise-grade solutions engineered to transform and automate your daily business operations. Secure, scalable, and ready to deploy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-slate-300 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 font-bold text-sm uppercase tracking-wider hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PLATFORMS (CORE PRODUCTS) ── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Products Grid */}
            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-12"
              >
                <SectionLabel number="01" text="Featured Platforms" />
                <h2 className="text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                  Production-Ready<br />Software Solutions
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((p, i) => (
                  <ProductCard key={i} product={p} index={i} />
                ))}
              </div>
            </div>

            {/* Sticky Callout Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0 self-start lg:sticky lg:top-28 lg:mt-[140px]">
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] p-8 relative overflow-hidden group hover:border-blue-600 dark:hover:border-blue-500 transition-colors duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-4">Why ADRS Products?</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                  Our products are built on highly scalable cloud infrastructure with SOC 2 compliance, bank-grade encryption protocols, and a focus on intuitive user workflows.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full py-3 px-4 bg-slate-100 dark:bg-[#131C2E] text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Free Trial <FiArrowRight />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full py-3 px-4 bg-transparent border border-slate-200 dark:border-[#1E293B] text-slate-600 dark:text-slate-400 text-sm font-bold uppercase tracking-wider hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Demo <FiArrowRight />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── UPCOMING PRODUCTS ── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <SectionLabel number="02" text="In Development" />
              <h2 className="text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                Upcoming Releases
              </h2>
            </div>
            <Link
              to="/contact"
              className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors flex items-center gap-2"
            >
              Get Early Access <FiArrowRight />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcoming.map((u, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] rounded-2xl shadow-sm p-8 flex flex-col hover:border-blue-600 dark:hover:border-blue-500 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <FiBox className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-3">{u.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow mb-6">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <SectionLabel number="03" text="Compare Plans" />
            <h2 className="text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Service Levels
            </h2>
          </motion.div>

          <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-[#1E293B]">
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/3">Features</th>
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white text-center">Starter</th>
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white text-center border-x border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B1120]">Professional</th>
                  <th className="px-8 py-6 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-[#1E293B]">
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-[#131C2E] transition-colors">
                    <td className="px-8 py-5 text-sm font-medium text-slate-700 dark:text-slate-300">{feature}</td>

                    {/* Starter */}
                    <td className="px-8 py-5 text-center">
                      {index < 2 ? (
                        <FiCheckCircle className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <FiMinus className="w-5 h-5 text-slate-300 dark:text-slate-700 mx-auto" />
                      )}
                    </td>

                    {/* Professional */}
                    <td className="px-8 py-5 text-center border-x border-slate-200 dark:border-[#1E293B] bg-slate-50 dark:bg-[#0B1120]">
                      {index < 4 ? (
                        <FiCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto" />
                      ) : (
                        <FiMinus className="w-5 h-5 text-slate-300 dark:text-slate-700 mx-auto" />
                      )}
                    </td>

                    {/* Enterprise */}
                    <td className="px-8 py-5 text-center">
                      <FiCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <SectionLabel number="04" text="FAQ" />
            <h2 className="text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Frequently Asked<br />Questions
            </h2>
          </motion.div>

          <div className="divide-y divide-slate-200 dark:divide-[#1E293B] border-y border-slate-200 dark:border-[#1E293B]">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="bg-white dark:bg-[#111827]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  >
                    <span className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4">
                      {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">Start Today</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Try any platform free for 14 days. No credit card required. Cancel anytime.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 font-bold uppercase tracking-wider text-sm hover:bg-blue-50 transition-colors"
            >
              Start Your Free Trial <FiArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
