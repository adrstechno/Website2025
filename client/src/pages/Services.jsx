import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import {
  FiArrowRight,
  FiLock, FiMonitor, FiSmartphone, FiCloud,
  FiShoppingCart, FiTruck, FiTarget, FiSend,
  FiHeadphones, FiShield, FiDatabase, FiUsers,
  FiDollarSign, FiMail, FiLayers, FiCheckCircle,
  FiClock, FiBarChart2, FiBriefcase, FiMessageSquare,
  FiSettings, FiGlobe,
} from 'react-icons/fi';
import {
  MdWeb, MdSmartphone, MdSecurity, MdElectricBolt,
  MdPsychology, MdVerified, MdSchool, MdGroups,
} from 'react-icons/md';
import { FaRobot, FaHospital } from 'react-icons/fa';
import { LuFactory, LuBrainCircuit } from 'react-icons/lu';
import { PiGraduationCap } from 'react-icons/pi';
import { FiPenTool, FiTool } from 'react-icons/fi';
import { AiOutlineCreditCard } from 'react-icons/ai';

/* ── Reusable section label ── */
const SectionLabel = ({ number, text, light = false }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className={`text-xs font-bold font-display tabular-nums ${light ? 'text-blue-300' : 'text-blue-600 dark:text-blue-400'}`}>
      {number}
    </span>
    <span className={`h-[1px] w-8 ${light ? 'bg-blue-300' : 'bg-blue-600 dark:bg-blue-400'}`} />
    <span className={`text-xs font-bold uppercase tracking-[0.2em] font-display ${light ? 'text-blue-300' : 'text-blue-600 dark:text-blue-400'}`}>
      {text}
    </span>
  </div>
);

const Services = () => {

  /* ─── TECH SERVICES ─── */
  const saasServices = [
    {
      icon: <FiMonitor />,
      title: 'Web & Mobile Development',
      description: 'Custom application development with modern technologies and best practices.',
      highlights: ['Application Development', 'Tech Consultation', 'Cloud Architecture', 'API Integration'],
    },
    {
      icon: <FiLock />,
      title: 'Security Consultation',
      description: 'Comprehensive security services to protect your digital assets and infrastructure.',
      highlights: ['Penetration Testing', 'Malware Analysis', 'Threat Management', 'Security Audits'],
    },
    {
      icon: <LuFactory />,
      title: 'Industrial Automation',
      description: 'Smart automation solutions for modern manufacturing and logistics operations.',
      highlights: ['Warehouse Automation', 'Supply Chain Management', 'Automated QA', 'IoT Integration'],
    },
  ];

  const additionalServices = [
    {
      icon: <FiPenTool />,
      title: 'UI/UX Design',
      description: 'User-centric design solutions that enhance engagement and satisfaction.',
      highlights: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      highlights: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      highlights: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps', 'Serverless Architecture'],
    },
    {
      icon: <LuBrainCircuit />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and ML.',
      highlights: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Chatbots'],
    },
  ];

  /* ─── BPO SERVICES ─── */
  const bpoServices = [
    {
      icon: <FiHeadphones />,
      title: 'Customer Support & Call Center',
      description: 'Responsive inbound and outbound support that keeps every customer touchpoint consistent, courteous, and measurable.',
      highlights: ['Inbound & outbound support', 'Multilingual coverage', '24/7 availability', 'Omnichannel support'],
    },
    {
      icon: <FiTool />,
      title: 'Technical Support & Help Desk',
      description: 'Structured support teams for product troubleshooting, remote assistance, and escalation handling.',
      highlights: ['Technical troubleshooting', 'System admin support', 'Remote assistance', 'Ticketing management'],
    },
    {
      icon: <FiDatabase />,
      title: 'Data Entry & Processing',
      description: 'Accurate data handling services that improve operational quality and reduce manual workload.',
      highlights: ['High-accuracy data entry', 'Data validation & cleansing', 'Document processing', 'Database management'],
    },
    {
      icon: <FiUsers />,
      title: 'Human Resources Support',
      description: 'Flexible HR operations support for hiring, onboarding, and employee lifecycle tasks.',
      highlights: ['Recruitment support', 'Payroll processing', 'Employee onboarding', 'Benefits administration'],
    },
    {
      icon: <FiDollarSign />,
      title: 'Finance & Accounting',
      description: 'Reliable financial operations support designed to keep records organized, timely, and audit-ready.',
      highlights: ['Accounts receivable/payable', 'Invoice management', 'Bookkeeping', 'Financial data analysis'],
    },
    {
      icon: <FiMonitor />,
      title: 'Content Moderation & Annotation',
      description: 'Safety and AI data services that help digital platforms scale responsibly.',
      highlights: ['Content review', 'Data annotation for AI/ML', 'Quality assurance', 'Image & video tagging'],
    },
    {
      icon: <FiMail />,
      title: 'Email & Administrative Support',
      description: 'Back-office assistance that keeps communication, scheduling, and documentation moving smoothly.',
      highlights: ['Email management', 'Calendar management', 'Documentation prep', 'Admin task handling'],
    },
    {
      icon: <FiLayers />,
      title: 'Back-Office Operations',
      description: 'Repeatable operational support that reduces overhead and keeps critical internal work on track.',
      highlights: ['Document management', 'Report generation', 'Database maintenance', 'System monitoring'],
    },
  ];

  /* ─── WORKSHOP / ADRS SPARK ─── */
  const workshopTopics = [
    { title: 'Full-Stack Development', description: 'Master modern web development with React, Node.js, and databases.', icon: <MdWeb />, duration: '3–5 days' },
    { title: 'Python & AI', description: 'Learn Python programming and artificial intelligence fundamentals.', icon: <FaRobot />, duration: '3–5 days' },
    { title: 'Mobile Apps', description: 'Build cross-platform mobile applications with React Native.', icon: <MdSmartphone />, duration: '3–5 days' },
    { title: 'Arduino & IoT', description: 'Create IoT projects with Arduino and sensor integration.', icon: <MdElectricBolt />, duration: '5 days' },
    { title: 'Cybersecurity', description: 'Understand security principles and ethical hacking basics.', icon: <MdSecurity />, duration: '5 days' },
  ];

  const workshopFormats = [
    {
      duration: '3-Day Workshop',
      topics: ['Full-Stack Development', 'Python & AI Basics', 'Mobile App Development'],
      format: 'Intensive hands-on training',
      certification: 'Certificate of Completion',
    },
    {
      duration: '5-Day Workshop',
      topics: ['Advanced Full-Stack', 'Arduino & IoT', 'Cybersecurity Fundamentals'],
      format: 'Comprehensive project-based learning',
      certification: 'Advanced Certificate',
    },
  ];

  const workshopFeatures = [
    { icon: <MdPsychology />, title: 'Hands-on Learning', description: 'Practical, project-based approach' },
    { icon: <MdGroups />,     title: 'Expert Instructors', description: 'Learn from industry professionals' },
    { icon: <MdVerified />,   title: 'Certification', description: 'Receive official completion certificate' },
    { icon: <MdSchool />,     title: 'For Schools & Colleges', description: 'Specially designed for educational institutions' },
  ];

  /* ─── INDUSTRIES ─── */
  const industries = [
    { name: 'Financial Services', icon: <AiOutlineCreditCard />, description: 'Secure, compliant solutions for banking and fintech' },
    { name: 'Healthcare',         icon: <FaHospital />,           description: 'HIPAA-compliant platforms for healthcare providers' },
    { name: 'E-commerce',         icon: <FiShoppingCart />,       description: 'Scalable infrastructure for online retail' },
    { name: 'Manufacturing',      icon: <LuFactory />,            description: 'IoT-enabled solutions for smart factories' },
    { name: 'Education',          icon: <PiGraduationCap />,      description: 'Learning management and student information systems' },
    { name: 'Logistics',          icon: <FiTruck />,              description: 'Supply chain optimization and tracking' },
  ];

  /* ─── WHY ADRS ─── */
  const whyDifferent = [
    { icon: <FiTarget />,     number: '01', title: 'Tailored Solutions', desc: 'Customized to your exact needs' },
    { icon: <FiSend />,       number: '02', title: 'Rapid Deployment',   desc: 'Go live in days, not months' },
    { icon: <FiHeadphones />, number: '03', title: 'Enterprise Support',  desc: 'Dedicated success team' },
    { icon: <FiShield />,     number: '04', title: 'Bank-Grade Security', desc: 'Industry-standard security' },
  ];

  /* ─── BPO BENEFITS ─── */
  const bpoBenefits = [
    'Cost efficiency and savings', 'Scalability and flexibility',
    'Enhanced focus on core business', 'Reduced operational burden',
    'Access to skilled professionals', '24/7 operations',
    'Quality assurance processes', 'Data security and compliance',
  ];

  const bpoStats = [
    { value: '24/7',  label: 'Support coverage' },
    { value: '8',     label: 'BPO service lines' },
    { value: '8',     label: 'Industries served' },
    { value: '100%',  label: 'Custom engagement' },
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0B1120] pt-20 transition-colors duration-300">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl space-y-6"
          >
            <SectionLabel number="—" text="Services" />
            <h1 className="text-5xl md:text-7xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Everything Your<br />
              <span className="text-blue-600 dark:text-blue-400">Enterprise</span><br />
              Needs
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              From custom software and cloud architecture to BPO operations and institutional
              tech workshops — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORE TECH SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <SectionLabel number="01" text="Core Tech Services" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Software &<br />Technology
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 dark:bg-[#1E293B]">
            {saasServices.map((svc, i) => (
              <ServiceCard key={i} service={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADDITIONAL TECH CAPABILITIES
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <SectionLabel number="02" text="Additional Capabilities" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Extended<br />Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-[#1E293B]">
            {additionalServices.map((svc, i) => (
              <ServiceCard key={i} service={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BPO SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header + stats strip */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel number="03" text="BPO Services" />
              <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                Business Process<br />Outsourcing
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                Build dependable, multi-channel customer operations, technical help desks, payroll administration,
                and content moderation pods with dedicated teams designed to scale instantly.
              </p>
            </motion.div>

            {/* BPO stat row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-px bg-slate-200 dark:bg-[#1E293B] border border-slate-200 dark:border-[#1E293B]"
            >
              {bpoStats.map((s, i) => (
                <div key={i} className="bg-white dark:bg-[#0B1120] p-6 text-center">
                  <div className="text-3xl font-extrabold font-display text-blue-600 dark:text-blue-400">{s.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* BPO service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 dark:bg-[#1E293B]">
            {bpoServices.map((svc, i) => (
              <ServiceCard key={i} service={svc} index={i} />
            ))}
          </div>

          {/* BPO benefits strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] p-8 lg:p-10"
          >
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Why Enterprises Outsource to ADRS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bpoBenefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 flex-shrink-0 mt-0.5" />
                  {b}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADRS SPARK — WORKSHOPS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <SectionLabel number="04" text="ADRS Spark Workshops" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Tech Workshops for<br />Schools & Colleges
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
              Hands-on, project-based educational workshops packed with modern tech learning and
              official certification — designed for educational institutions.
            </p>
          </motion.div>

          {/* Workshop topics — horizontal rows */}
          <div className="space-y-4 mb-12">
            {workshopTopics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-[#F8FAFC] dark:bg-[#0B1120] border border-slate-200 dark:border-[#1E293B] rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300 p-7 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10"
              >
                <div className="text-3xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors flex-shrink-0">
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-white mb-1 transition-colors">{topic.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 group-hover:text-blue-100 transition-colors text-sm">{topic.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors flex-shrink-0">
                  <FiClock className="w-3.5 h-3.5" />
                  {topic.duration}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workshop formats */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {workshopFormats.map((fmt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F8FAFC] dark:bg-[#0B1120] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold font-display text-blue-600 dark:text-blue-400 mb-5 pb-4 border-b border-slate-200 dark:border-[#1E293B]">
                  {fmt.duration}
                </h3>
                <div className="space-y-3 mb-6">
                  {fmt.topics.map((t, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <FiCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <div className="pt-5 border-t border-slate-200 dark:border-[#1E293B] space-y-1.5 text-xs text-slate-500">
                  <div><span className="text-slate-700 dark:text-slate-300 font-semibold">Format: </span>{fmt.format}</div>
                  <div><span className="text-slate-700 dark:text-slate-300 font-semibold">Certification: </span>{fmt.certification}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workshop features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F8FAFC] dark:bg-[#0B1120] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-7 hover:border-blue-600 transition-colors text-center"
              >
                <div className="text-3xl text-blue-600 dark:text-blue-400 mb-4 flex justify-center">{f.icon}</div>
                <h3 className="text-base font-bold font-display text-slate-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <SectionLabel number="05" text="Industries" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Industry-Specific<br />Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-[#1E293B]">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white dark:bg-[#111827] hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors p-8"
              >
                <div className="text-3xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors mb-4">{ind.icon}</div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-white transition-colors mb-2">{ind.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-blue-100 transition-colors">{ind.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY ADRS
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <SectionLabel number="06" text="Why ADRS" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Why We're Different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDifferent.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-8 hover:border-blue-600 transition-colors"
              >
                <div className="text-5xl font-black font-display text-slate-100 dark:text-[#1E293B] mb-4 transition-colors">{item.number}</div>
                <div className="text-2xl text-blue-600 dark:text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA — Contact
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-blue-600 p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
          >
            <div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-3">Ready to Begin?</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
                Let's Build<br />Something Great
              </h2>
              <p className="mt-3 text-blue-100 text-base leading-relaxed max-w-xl">
                Whether you need custom software, BPO support, or tech workshops for your institution —
                our team is ready to scope the right solution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold text-sm uppercase tracking-wider hover:bg-blue-50 transition-colors"
              >
                Contact Us <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/career"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-blue-400 text-white font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;

