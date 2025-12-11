import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

// React Icons
import {
  FiLock,
  FiMonitor,
  FiSmartphone,
  FiCloud,
  FiShoppingCart,
  FiTruck,
  FiTarget,
  FiSend,
  FiHeadphones,
  FiShield
} from "react-icons/fi";

import { LuFactory, LuBrainCircuit } from "react-icons/lu";
import { FaHospital } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { FiPenTool } from "react-icons/fi";
import { AiOutlineCreditCard } from "react-icons/ai";

const Services = () => {

  // ---------------- CORE SAAS SERVICES ----------------
  const saasServices = [
    {
      icon: <div className="flex gap-2 text-5xl"><FiMonitor /></div>,
      title: 'Web & Mobile Development',
      description: 'Custom application development with modern technologies and best practices.',
      gradient: 'from-purple-500 to-pink-500',
      highlights: [
        'Application Development',
        'Tech Consultation',
        'Cloud Architecture',
        'API Integration'
      ],
    },
    {
      icon: <FiLock className="text-5xl" />,
      title: 'Security Consultation',
      description: 'Comprehensive security services to protect your digital assets and infrastructure.',
      gradient: 'from-blue-500 to-cyan-500',
      highlights: [
        'Penetration Testing',
        'Malware Analysis',
        'Threat Management',
        'Security Audits'
      ],
    },
    {
      icon: <LuFactory className="text-5xl" />,
      title: 'Industrial Automation',
      description: 'Smart automation solutions for modern manufacturing and logistics operations.',
      gradient: 'from-green-500 to-teal-500',
      highlights: [
        'Warehouse Automation',
        'Supply Chain Management',
        'Automated QA',
        'IoT Integration'
      ],
    },
  ];

  // ---------------- ADDITIONAL SERVICES ----------------
  const additionalServices = [
    {
      icon: <FiPenTool className="text-5xl" />,
      title: 'UI/UX Design',
      description: 'User-centric design solutions that enhance engagement and satisfaction.',
      gradient: 'from-blue-600 to-indigo-600',
      highlights: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems'
      ],
    },
    {
      icon: <FiSmartphone className="text-5xl" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      gradient: 'from-purple-600 to-blue-600',
      highlights: [
        'React Native',
        'Flutter',
        'Native iOS/Android',
        'App Store Deployment'
      ],
    },
    {
      icon: <FiCloud className="text-5xl" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      gradient: 'from-teal-600 to-green-600',
      highlights: [
        'AWS/Azure/GCP',
        'Cloud Migration',
        'DevOps',
        'Serverless Architecture'
      ],
    },
    {
      icon: <LuBrainCircuit className="text-5xl" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and ML.',
      gradient: 'from-red-600 to-pink-600',
      highlights: [
        'Predictive Analytics',
        'NLP',
        'Computer Vision',
        'Chatbots'
      ],
    },
  ];

  // ---------------- INDUSTRIES ----------------
  const industries = [
    {
      name: 'Financial Services',
      icon: <AiOutlineCreditCard className="text-5xl" />,
      description: 'Secure, compliant solutions for banking and fintech'
    },
    {
      name: 'Healthcare',
      icon: <FaHospital className="text-5xl" />,
      description: 'HIPAA-compliant platforms for healthcare providers'
    },
    {
      name: 'E-commerce',
      icon: <FiShoppingCart className="text-5xl" />,
      description: 'Scalable infrastructure for online retail'
    },
    {
      name: 'Manufacturing',
      icon: <LuFactory className="text-5xl" />,
      description: 'IoT-enabled solutions for smart factories'
    },
    {
      name: 'Education',
      icon: <PiGraduationCap className="text-5xl" />,
      description: 'Learning management and student information systems'
    },
    {
      name: 'Logistics',
      icon: <FiTruck className="text-5xl" />,
      description: 'Supply chain optimization and tracking'
    },
  ];

  // ---------------- WHY ADRS IS DIFFERENT ----------------
  const whyDifferent = [
    {
      icon: <FiTarget className="text-5xl" />,
      title: 'Tailored Solutions',
      desc: 'Customized to your needs'
    },
    {
      icon: <FiSend className="text-5xl" />,
      title: 'Rapid Deployment',
      desc: 'Go live in days, not months'
    },
    {
      icon: <FiHeadphones className="text-5xl" />,
      title: 'Enterprise Support',
      desc: 'Dedicated success team'
    },
    {
      icon: <FiShield className="text-5xl" />,
      title: 'Bank-Grade Security',
      desc: 'Industry-standard security'
    },
  ];

  return (
    <div className="section-bg pt-20">

      {/* HERO */}
      <section className="py-24 section-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Enterprise <span className="text-purple-600 dark:text-purple-400">Solutions</span> That Scale
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Comprehensive technology services designed for modern businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Core <span className="text-purple-600 dark:text-purple-400">Services</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Comprehensive technology solutions for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saasServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
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
              Additional <span className="text-purple-600 dark:text-purple-400">Services</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Extended capabilities to meet all your technology needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Industry-Specific <span className="text-purple-600 dark:text-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
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
                className="card-bg rounded-2xl p-8 text-center"
              >
                <div className="mb-4 flex justify-center text-purple-600 dark:text-purple-400 text-5xl">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {industry.name}
                </h3>
                <p className="text-secondary">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ADRS */}
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
              Why ADRS is Different
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              We don't just provide software—we partner with you for success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDifferent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bg p-6 rounded-xl text-center"
              >
                <div className="mb-4 flex justify-center text-purple-600 dark:text-purple-400 text-5xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
