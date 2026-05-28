import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import {
  FiArrowRight, FiLock, FiMonitor, FiSmartphone, FiCloud,
  FiShoppingCart, FiTruck, FiTarget, FiSend, FiHeadphones,
  FiShield, FiDatabase, FiUsers, FiDollarSign, FiMail,
  FiLayers, FiCheckCircle, FiClock,
} from 'react-icons/fi';
import { MdWeb, MdSmartphone, MdSecurity, MdElectricBolt, MdPsychology, MdVerified, MdSchool, MdGroups } from 'react-icons/md';
import { FaRobot, FaHospital } from 'react-icons/fa';
import { LuFactory, LuBrainCircuit } from 'react-icons/lu';
import { PiGraduationCap } from 'react-icons/pi';
import { FiPenTool, FiTool } from 'react-icons/fi';
import { AiOutlineCreditCard } from 'react-icons/ai';

const card  = { background: 'rgba(17,17,20,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14 };
const Wrap  = ({ children }) => <div className="max-w-7xl mx-auto px-6 lg:px-10">{children}</div>;
const SLabel = ({ text }) => <div className="mb-5"><span className="section-label">{text}</span></div>;

const Services = () => {
  const saasServices = [
    { icon: <FiMonitor />, title: 'Web & Mobile Development', description: 'Custom application development with modern technologies and best practices.', highlights: ['Application Development','Tech Consultation','Cloud Architecture','API Integration'] },
    { icon: <FiLock />,    title: 'Security Consultation',    description: 'Comprehensive security services to protect your digital assets and infrastructure.', highlights: ['Penetration Testing','Malware Analysis','Threat Management','Security Audits'] },
    { icon: <LuFactory />, title: 'Industrial Automation',    description: 'Smart automation solutions for modern manufacturing and logistics operations.',  highlights: ['Warehouse Automation','Supply Chain','Automated QA','IoT Integration'] },
  ];

  const additionalServices = [
    { icon: <FiPenTool />,      title: 'UI/UX Design',             description: 'User-centric design solutions that enhance engagement and satisfaction.',                  highlights: ['User Research','Wireframing','Prototyping','Design Systems'] },
    { icon: <FiSmartphone />,   title: 'Mobile App Development',   description: 'Native and cross-platform mobile applications for iOS and Android.',                     highlights: ['React Native','Flutter','Native iOS/Android','App Store Deploy'] },
    { icon: <FiCloud />,        title: 'Cloud Solutions',           description: 'Scalable cloud infrastructure and migration services.',                                  highlights: ['AWS/Azure/GCP','Cloud Migration','DevOps','Serverless'] },
    { icon: <LuBrainCircuit />, title: 'AI & Machine Learning',    description: 'Intelligent solutions powered by artificial intelligence and ML.',                        highlights: ['Predictive Analytics','NLP','Computer Vision','Chatbots'] },
  ];

  const bpoServices = [
    { icon: <FiHeadphones />, title: 'Customer Support & Call Center',   description: 'Responsive inbound and outbound support that keeps every customer touchpoint consistent.', highlights: ['Inbound & outbound','Multilingual','24/7 availability','Omnichannel'] },
    { icon: <FiTool />,       title: 'Technical Support & Help Desk',    description: 'Structured support teams for product troubleshooting and escalation handling.',             highlights: ['Troubleshooting','System admin','Remote assist','Ticketing'] },
    { icon: <FiDatabase />,   title: 'Data Entry & Processing',          description: 'Accurate data handling services that improve operational quality.',                          highlights: ['High-accuracy entry','Data validation','Doc processing','DB mgmt'] },
    { icon: <FiUsers />,      title: 'Human Resources Support',          description: 'Flexible HR operations support for hiring, onboarding, and employee lifecycle tasks.',       highlights: ['Recruitment','Payroll','Onboarding','Benefits admin'] },
    { icon: <FiDollarSign />, title: 'Finance & Accounting',             description: 'Reliable financial operations support designed to keep records organized and audit-ready.', highlights: ['AR/AP','Invoice mgmt','Bookkeeping','Financial analysis'] },
    { icon: <FiMonitor />,    title: 'Content Moderation & Annotation',  description: 'Safety and AI data services that help digital platforms scale responsibly.',               hints: ['Content review','Data annotation','QA','Image/video tagging'] },
    { icon: <FiMail />,       title: 'Email & Administrative Support',   description: 'Back-office assistance that keeps communication and documentation moving smoothly.',        highlights: ['Email mgmt','Calendar','Documentation','Admin tasks'] },
    { icon: <FiLayers />,     title: 'Back-Office Operations',           description: 'Repeatable operational support that reduces overhead and keeps critical work on track.',    highlights: ['Document mgmt','Report generation','DB maintenance','Monitoring'] },
  ];

  const workshopTopics = [
    { title: 'Full-Stack Development', description: 'Master modern web development with React, Node.js, and databases.', icon: <MdWeb />,          duration: '3–5 days' },
    { title: 'Python & AI',            description: 'Learn Python programming and artificial intelligence fundamentals.',  icon: <FaRobot />,        duration: '3–5 days' },
    { title: 'Mobile Apps',            description: 'Build cross-platform mobile applications with React Native.',         icon: <MdSmartphone />,  duration: '3–5 days' },
    { title: 'Arduino & IoT',          description: 'Create IoT projects with Arduino and sensor integration.',            icon: <MdElectricBolt />, duration: '5 days' },
    { title: 'Cybersecurity',          description: 'Understand security principles and ethical hacking basics.',          icon: <MdSecurity />,    duration: '5 days' },
  ];

  const workshopFormats = [
    { duration: '3-Day Workshop', topics: ['Full-Stack Development','Python & AI Basics','Mobile App Development'],       format: 'Intensive hands-on training',           certification: 'Certificate of Completion' },
    { duration: '5-Day Workshop', topics: ['Advanced Full-Stack','Arduino & IoT','Cybersecurity Fundamentals'],           format: 'Comprehensive project-based learning',   certification: 'Advanced Certificate' },
  ];

  const workshopFeatures = [
    { icon: <MdPsychology />, title: 'Hands-on Learning',          description: 'Practical, project-based approach' },
    { icon: <MdGroups />,     title: 'Expert Instructors',         description: 'Learn from industry professionals' },
    { icon: <MdVerified />,   title: 'Certification',              description: 'Receive official completion certificate' },
    { icon: <MdSchool />,     title: 'For Schools & Colleges',     description: 'Specially designed for educational institutions' },
  ];

  const industries = [
    { name: 'Financial Services', icon: <AiOutlineCreditCard />, description: 'Secure, compliant solutions for banking and fintech' },
    { name: 'Healthcare',         icon: <FaHospital />,           description: 'HIPAA-compliant platforms for healthcare providers' },
    { name: 'E-commerce',         icon: <FiShoppingCart />,       description: 'Scalable infrastructure for online retail' },
    { name: 'Manufacturing',      icon: <LuFactory />,            description: 'IoT-enabled solutions for smart factories' },
    { name: 'Education',          icon: <PiGraduationCap />,      description: 'Learning management and student information systems' },
    { name: 'Logistics',          icon: <FiTruck />,              description: 'Supply chain optimization and tracking' },
  ];

  const whyDifferent = [
    { icon: <FiTarget />,     number: '01', title: 'Tailored Solutions', desc: 'Customized to your exact needs' },
    { icon: <FiSend />,       number: '02', title: 'Rapid Deployment',   desc: 'Go live in days, not months' },
    { icon: <FiHeadphones />, number: '03', title: 'Enterprise Support', desc: 'Dedicated success team' },
    { icon: <FiShield />,     number: '04', title: 'Bank-Grade Security', desc: 'Industry-standard security' },
  ];

  const bpoBenefits = ['Cost efficiency and savings','Scalability and flexibility','Enhanced focus on core business','Reduced operational burden','Access to skilled professionals','24/7 operations','Quality assurance processes','Data security and compliance'];
  const bpoStats    = [{ value: '24/7', label: 'Support coverage' },{ value: '8', label: 'BPO service lines' },{ value: '8', label: 'Industries served' },{ value: '100%', label: 'Custom engagement' }];

  return (
    <div className="bg-[#08090B] min-h-screen">

      {/* HERO */}
      <section className="pt-24 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0B0D12 0%, #08090B 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="max-w-5xl relative z-10">
            <SLabel text="Services" />
            <h1 className="text-5xl md:text-7xl font-extrabold font-display text-white leading-tight mb-5">
              Everything Your<br /><span className="gradient-text">Enterprise</span> Needs
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              From custom software and cloud architecture to BPO operations and institutional tech workshops — all under one roof.
            </p>
          </motion.div>
        </Wrap>
      </section>

      {/* CORE TECH SERVICES */}
      <section className="py-24">
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SLabel text="Core Tech Services" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Software &amp; Technology</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {saasServices.map((svc, i) => <ServiceCard key={i} service={svc} index={i} />)}
          </div>
        </Wrap>
      </section>

      {/* ADDITIONAL */}
      <section className="py-24 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(12,12,14,0.5)' }}>
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SLabel text="Additional Capabilities" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Extended Expertise</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((svc, i) => <ServiceCard key={i} service={svc} index={i} />)}
          </div>
        </Wrap>
      </section>

      {/* BPO */}
      <section className="py-24">
        <Wrap>
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SLabel text="BPO Services" />
              <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Business Process Outsourcing</h2>
              <p className="mt-4 text-slate-400 leading-relaxed">Build dependable, multi-channel customer operations, technical help desks, payroll administration, and content moderation pods.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4">
              {bpoStats.map((s, i) => (
                <div key={i} className="p-6 rounded-xl text-center" style={card}>
                  <div className="text-3xl font-extrabold font-display text-blue-400 mb-1">{s.value}</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {bpoServices.map((svc, i) => <ServiceCard key={i} service={svc} index={i} />)}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-8 lg:p-10 rounded-2xl" style={card}>
            <h3 className="text-xl font-bold font-display text-white mb-5">Why Enterprises Outsource to ADRS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {bpoBenefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />{b}
                </div>
              ))}
            </div>
          </motion.div>
        </Wrap>
      </section>

      {/* WORKSHOPS */}
      <section className="py-24 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(12,12,14,0.5)' }}>
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SLabel text="ADRS Spark Workshops" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Tech Workshops for<br />Schools &amp; Colleges</h2>
            <p className="mt-4 text-slate-400 max-w-2xl">Hands-on, project-based educational workshops packed with modern tech learning and official certification.</p>
          </motion.div>

          <div className="space-y-4 mb-10">
            {workshopTopics.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-7 lg:p-8 rounded-2xl flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 card-lift" style={card}>
                <div className="text-3xl text-blue-400 group-hover:text-white transition-colors flex-shrink-0">{t.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-display text-white mb-1">{t.title}</h3>
                  <p className="text-slate-400 text-sm">{t.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 flex-shrink-0">
                  <FiClock className="w-3.5 h-3.5" />{t.duration}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {workshopFormats.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl" style={card}>
                <h3 className="text-xl font-bold font-display text-blue-400 mb-5 pb-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>{f.duration}</h3>
                <div className="space-y-3 mb-6">
                  {f.topics.map((t, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-slate-300">
                      <FiCheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />{t}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t space-y-1 text-xs text-slate-500" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <div><span className="text-slate-300 font-semibold">Format: </span>{f.format}</div>
                  <div><span className="text-slate-300 font-semibold">Certification: </span>{f.certification}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {workshopFeatures.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-7 rounded-2xl text-center card-lift" style={card}>
                <div className="text-3xl text-blue-400 mb-4 flex justify-center">{f.icon}</div>
                <h3 className="text-base font-bold font-display text-white mb-2">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SLabel text="Industries" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Industry-Specific Solutions</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group p-7 rounded-2xl card-lift" style={card}>
                <div className="text-3xl text-blue-400 group-hover:text-white transition-colors mb-4">{ind.icon}</div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{ind.name}</h3>
                <p className="text-sm text-slate-400">{ind.description}</p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* WHY ADRS */}
      <section className="py-24 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(12,12,14,0.5)' }}>
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <SLabel text="Why ADRS" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Why We're Different</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyDifferent.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl card-lift" style={card}>
                <div className="text-4xl font-black font-display gradient-text mb-4">{item.number}</div>
                <div className="text-2xl text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-12 lg:p-16 rounded-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(209,213,219,0.18) 100%)', border: '1px solid rgba(229,231,235,0.3)' }}>
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Ready to Begin?</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white">Let's Build Something Great</h2>
              <p className="mt-3 text-slate-300 leading-relaxed max-w-lg">Whether you need custom software, BPO support, or tech workshops — our team is ready to scope the right solution.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link to="/contact" className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors">
                Contact Us <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/career" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-sm hover:bg-white/5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </Wrap>
      </section>

    </div>
  );
};

export default Services;




