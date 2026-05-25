import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import {
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiDollarSign,
  FiGlobe,
  FiHeadphones,
  FiLayers,
  FiMail,
  FiMessageSquare,
  FiMonitor,
  FiPhoneCall,
  FiCalendar,
  FiSettings,
  FiShield,
  FiStar,
  FiTool,
  FiUsers,
  FiAward,
} from 'react-icons/fi';

const BpoServices = () => {
  useEffect(() => {
    const title = 'Business Process Outsourcing (BPO) Services | ADRS Techno';
    const description =
      'Professional, scalable BPO solutions for modern enterprises including customer support, back-office operations, finance, HR, moderation, and 24/7 multilingual support.';

    document.title = title;

    const ensureMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }

      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    ensureMeta('meta[name="description"]', { name: 'description', content: description });
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });

    const serviceData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Business Process Outsourcing (BPO) Services',
      serviceType: 'Business Process Outsourcing',
      description,
      provider: {
        '@type': 'Organization',
        name: 'ADRS Techno',
        url: 'https://www.adrstechno.com',
      },
      areaServed: 'Worldwide',
    };

    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.adrstechno.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://www.adrstechno.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'BPO Services',
          item: 'https://www.adrstechno.com/bpo-services',
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify([serviceData, breadcrumbData]);
    script.setAttribute('data-bpo-schema', 'true');
    document.head.appendChild(script);

    return () => {
      document.head.querySelectorAll('script[data-bpo-schema="true"]').forEach((node) => node.remove());
    };
  }, []);

  const services = [
    {
      icon: <FiHeadphones className="text-5xl" />,
      title: 'Customer Support & Call Center Services',
      description: 'Responsive inbound and outbound support that keeps every customer touchpoint consistent, courteous, and measurable.',
      gradient: 'from-purple-500 to-indigo-500',
      highlights: [
        'Inbound and outbound customer support',
        'Multilingual support coverage',
        '24/7 availability',
        'Omnichannel phone, email, chat, and social support',
      ],
    },
    {
      icon: <FiTool className="text-5xl" />,
      title: 'Technical Support & Help Desk',
      description: 'Structured support teams for product troubleshooting, remote assistance, and escalation handling.',
      gradient: 'from-blue-500 to-cyan-500',
      highlights: [
        'Technical troubleshooting',
        'System administration support',
        'Remote assistance',
        'Ticketing system management',
      ],
    },
    {
      icon: <FiDatabase className="text-5xl" />,
      title: 'Data Entry & Processing',
      description: 'Accurate data handling services that improve operational quality and reduce manual workload.',
      gradient: 'from-emerald-500 to-teal-500',
      highlights: [
        'High-accuracy data entry',
        'Data validation and cleansing',
        'Document processing',
        'Database management',
      ],
    },
    {
      icon: <FiUsers className="text-5xl" />,
      title: 'Human Resources Support',
      description: 'Flexible HR operations support for hiring, onboarding, employee lifecycle tasks, and payroll workflows.',
      gradient: 'from-pink-500 to-rose-500',
      highlights: [
        'Recruitment support',
        'Payroll processing',
        'Employee onboarding',
        'Benefits administration',
      ],
    },
    {
      icon: <FiDollarSign className="text-5xl" />,
      title: 'Finance & Accounting Services',
      description: 'Reliable financial operations support designed to keep records organized, timely, and audit-ready.',
      gradient: 'from-amber-500 to-orange-500',
      highlights: [
        'Accounts receivable and payable processing',
        'Invoice management',
        'Bookkeeping',
        'Financial data analysis',
      ],
    },
    {
      icon: <FiMonitor className="text-5xl" />,
      title: 'Content Moderation & Annotation',
      description: 'Safety and AI data services that help digital platforms and machine learning pipelines scale responsibly.',
      gradient: 'from-violet-500 to-fuchsia-500',
      highlights: [
        'Content review and moderation',
        'Data annotation for AI and ML',
        'Quality assurance',
        'Image and video tagging',
      ],
    },
    {
      icon: <FiMail className="text-5xl" />,
      title: 'Email & Administrative Support',
      description: 'Back-office assistance that keeps communication, scheduling, and documentation moving smoothly.',
      gradient: 'from-sky-500 to-blue-500',
      highlights: [
        'Email management',
        'Scheduling and calendar management',
        'Documentation preparation',
        'Administrative task handling',
      ],
    },
    {
      icon: <FiLayers className="text-5xl" />,
      title: 'Back-Office Operations',
      description: 'Repeatable operational support that reduces overhead and keeps critical internal work on track.',
      gradient: 'from-slate-500 to-gray-700',
      highlights: [
        'Document management',
        'Report generation',
        'Database maintenance',
        'System monitoring',
      ],
    },
  ];

  const benefits = [
    'Cost efficiency and savings',
    'Scalability and flexibility',
    'Enhanced focus on core business',
    'Reduced operational burden',
    'Access to skilled professionals',
    '24/7 operations',
    'Quality assurance processes',
    'Data security and compliance',
  ];

  const processSteps = [
    'Consultation & Assessment',
    'Customized Solution Design',
    'Team Onboarding & Training',
    'Implementation & Launch',
    'Continuous Monitoring & Optimization',
    'Reporting & Analysis',
  ];

  const technologyStack = [
    {
      title: 'CRM Systems',
      icon: <FiMonitor className="text-3xl" />,
      items: ['Salesforce', 'HubSpot', 'Zoho CRM'],
    },
    {
      title: 'Communication Tools',
      icon: <FiMessageSquare className="text-3xl" />,
      items: ['Slack', 'Microsoft Teams', 'WhatsApp Business'],
    },
    {
      title: 'Project Management',
      icon: <FiBriefcase className="text-3xl" />,
      items: ['Jira', 'Trello', 'Asana'],
    },
    {
      title: 'Security & Compliance',
      icon: <FiShield className="text-3xl" />,
      items: ['Access control', 'Audit trails', 'Policy workflows'],
    },
    {
      title: 'Analytics & Reporting',
      icon: <FiBarChart2 className="text-3xl" />,
      items: ['Dashboards', 'Performance reports', 'KPI tracking'],
    },
  ];

  const industries = [
    'E-commerce & Retail',
    'Technology & Software',
    'Healthcare',
    'Finance & Banking',
    'Telecommunications',
    'Education',
    'Manufacturing',
    'Real Estate',
  ];

  const testimonials = [
    {
      name: 'Operations Director',
      company: 'Regional Retail Group',
      metric: '32% lower support overhead',
      quote: 'ADRS Techno gave us a reliable support layer that improved response times without adding internal complexity.',
    },
    {
      name: 'Head of Customer Experience',
      company: 'SaaS Platform',
      metric: '24/7 coverage across 3 regions',
      quote: 'The handoff process, reporting cadence, and multilingual support were seamless from day one.',
    },
    {
      name: 'Finance Manager',
      company: 'Healthcare Provider Network',
      metric: 'Faster invoice turnaround',
      quote: 'Their finance and back-office support helped us clean up manual work and improve monthly close visibility.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 'Custom quote',
      ideal: 'Small teams and pilots',
      features: ['Focused process coverage', 'Shared reporting', 'Flexible scope'],
    },
    {
      name: 'Growth',
      price: 'Custom quote',
      ideal: 'Scaling operations',
      featured: true,
      features: ['Dedicated team pod', '24/7 options', 'Quality assurance cadence'],
    },
    {
      name: 'Enterprise',
      price: 'Custom quote',
      ideal: 'Multi-function outsourcing',
      features: ['Multi-process delivery', 'Security reviews', 'Tailored SLAs'],
    },
  ];

  const stats = [
    { value: '24/7', label: 'Support coverage' },
    { value: '8', label: 'Core BPO service lines' },
    { value: '8', label: 'Industries served' },
    { value: '100%', label: 'Custom engagement model' },
  ];

  const contactMethods = [
    { icon: FiPhoneCall, label: 'Call us', value: '+91 9076927464', href: 'tel:+919076927464' },
    { icon: FiMail, label: 'Email', value: 'support@adrstechno.com', href: 'mailto:support@adrstechno.com' },
    { icon: FiCalendar, label: 'Schedule', value: 'Book a consultation', href: '/contact' },
  ];

  return (
    <div className="section-bg pt-20">
      <section className="relative min-h-[78vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-bg/bg-2.jpg"
            alt="Business process outsourcing background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-white/65 dark:bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-secondary">
              <li><Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary font-medium">BPO Services</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-2 bg-purple-100/60 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-400/30 rounded-full mb-5"
              >
                <span className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                  Professional, scalable BPO solutions for modern enterprises
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold leading-tight text-primary"
              >
                Business Process Outsourcing (BPO) Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-secondary mt-6 max-w-2xl leading-relaxed"
              >
                Build dependable customer, back-office, finance, HR, and moderation operations with teams designed to scale with your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-7 py-3 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition"
                >
                  Get Started
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="px-7 py-3 bg-white/70 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-primary font-semibold rounded-lg hover:bg-white dark:hover:bg-white/20 transition"
                >
                  Learn More
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                    className="card-bg rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{stat.value}</div>
                    <div className="text-xs md:text-sm text-secondary mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative rounded-2xl border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/10 backdrop-blur-sm shadow-xl p-4 lg:p-6">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Team collaborating on outsourced operations"
                  className="rounded-xl w-full h-[420px] object-cover shadow-lg"
                  loading="eager"
                />
                <div className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-sm card-bg rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3 mb-2 text-purple-600 dark:text-purple-400">
                    <FiAward className="w-5 h-5" />
                    <span className="text-sm font-semibold">BPO operations designed for reliability</span>
                  </div>
                  <p className="text-sm text-secondary">
                    Security-first workflows, structured reporting, and flexible delivery models.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Core <span className="text-purple-600 dark:text-purple-400">BPO Services</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Reusable operating models for front-office, mid-office, and back-office functions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

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
              Features & <span className="text-purple-600 dark:text-purple-400">Benefits</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Built to reduce operational burden while improving responsiveness, compliance, and service quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="card-bg rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-xl bg-gray-50 dark:bg-white/5 p-4">
                    <FiCheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="card-bg rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Why enterprises choose this model</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Lower cost per transaction', value: 'Optimized' },
                    { label: 'Faster turnaround time', value: 'Streamlined' },
                    { label: 'Better reporting visibility', value: 'Transparent' },
                    { label: 'Flexible ramp-up and ramp-down', value: 'Scalable' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4 border-b border-gray-200 dark:border-white/10 pb-3">
                      <span className="text-secondary">{item.label}</span>
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-bg rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Quality controls</h3>
                <p className="text-secondary leading-relaxed">
                  Each engagement can include escalation matrices, QA sampling, SLA reporting, and compliance checks tailored to your process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              BPO <span className="text-purple-600 dark:text-purple-400">Engagement Process</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              A structured delivery flow that keeps discovery, onboarding, and optimization aligned.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="card-bg rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step}</h3>
                <p className="text-secondary leading-relaxed">
                  Process alignment, training, and reporting are handled at each stage to keep delivery predictable.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Technology <span className="text-purple-600 dark:text-purple-400">Stack</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Tools and workflows that support collaboration, visibility, and secure operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {technologyStack.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-bg rounded-2xl p-6"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((tool) => (
                    <li key={tool} className="flex items-center gap-2 text-sm text-secondary">
                      <FiSettings className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Industries <span className="text-purple-600 dark:text-purple-400">Served</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              BPO services applicable across regulated, customer-facing, and high-volume operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="card-bg rounded-2xl p-6 flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FiGlobe className="w-5 h-5" />
                </div>
                <span className="text-primary font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Testimonials & <span className="text-purple-600 dark:text-purple-400">Case Studies</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Example outcomes and client feedback for teams exploring outsourced operations support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="card-bg rounded-2xl p-8"
              >
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-4">
                  <FiStar className="w-4 h-4 fill-current" />
                  <FiStar className="w-4 h-4 fill-current" />
                  <FiStar className="w-4 h-4 fill-current" />
                  <FiStar className="w-4 h-4 fill-current" />
                  <FiStar className="w-4 h-4 fill-current" />
                </div>
                <p className="text-secondary leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="border-t border-gray-200 dark:border-white/10 pt-4">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-secondary">{testimonial.company}</div>
                  <div className="mt-3 text-sm font-medium text-purple-600 dark:text-purple-400">{testimonial.metric}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Flexible <span className="text-purple-600 dark:text-purple-400">Pricing Models</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Engagement models designed for pilots, growth teams, and enterprise-scale outsourcing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`rounded-2xl p-8 border ${tier.featured ? 'card-bg border-purple-400/40 shadow-lg' : 'card-bg'}`}
              >
                {tier.featured && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{tier.price}</div>
                <p className="text-secondary mb-6">{tier.ideal}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-secondary">
                      <FiCheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-bg rounded-2xl p-8 md:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 mb-4">
                Ready to Transform Your Operations?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Let’s scope the right BPO model for your team.
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                Book a consultation to discuss service coverage, onboarding timelines, security needs, and the metrics that matter most to your operation.
              </p>

              <div className="space-y-4 mb-8">
                {contactMethods.map((contact) => {
                  const linkContent = (
                    <>
                      <div className="w-11 h-11 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-secondary">{contact.label}</div>
                        <div className="font-semibold text-primary">{contact.value}</div>
                      </div>
                    </>
                  );

                  if (contact.href.startsWith('/')) {
                    return (
                      <Link key={contact.label} to={contact.href} className="flex items-center gap-4 rounded-xl bg-gray-50 dark:bg-white/5 p-4 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                        {linkContent}
                      </Link>
                    );
                  }

                  return (
                    <a key={contact.label} href={contact.href} className="flex items-center gap-4 rounded-xl bg-gray-50 dark:bg-white/5 p-4 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                      {linkContent}
                    </a>
                  );
                })}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition"
              >
                Schedule a Consultation
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BpoServices;