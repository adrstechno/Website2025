import { motion } from 'framer-motion';
import { MdShield, MdTrendingUp, MdLock, MdLightbulb } from 'react-icons/md';
import { FiCode } from 'react-icons/fi';

/* ── Reusable section label ── */
const SectionLabel = ({ number, text }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-display tabular-nums">{number}</span>
    <span className="h-[1px] w-8 bg-blue-600 dark:bg-blue-400" />
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-display">{text}</span>
  </div>
);

const About = () => {
  const timeline = [
    { year: '2024', event: 'Company Founded', description: 'ADRS Techno Pvt. Ltd. established with a vision to deliver scalable enterprise-grade software and automation solutions.' },
    { year: '2024', event: 'Initial Launch', description: 'Launched core products including IDHPS, Jewelry Manager, and specialized BPO services.' },
    { year: '2025', event: 'Team & Services Expansion', description: 'Grew a dedicated team of developers and expanded into cloud infrastructure and custom enterprise solutions.' },
    { year: '2026', event: 'Enterprise Partner', description: 'Recognized as a trusted technology partner delivering robust digital transformation for global clients.' },
  ];

  const leaders = [
    {
      name: 'Abhishek Dubey',
      role: 'Chief Executive Officer',
      bio: 'Abhishek leads ADRS Technology with a vision for innovation and sustainable growth. With extensive experience in enterprise software, he drives strategic initiatives and client relationships.',
      initials: 'AD',
    },
    {
      name: 'Siddhant Dubey',
      role: 'Chief Technology Officer',
      bio: 'Siddhant oversees all technical operations and architecture decisions. His expertise in cloud infrastructure and scalable systems ensures ADRS delivers robust, future-proof solutions.',
      initials: 'SD',
    },
  ];

  const values = [
    {
      title: 'Reliability',
      description: 'We build systems that work consistently, with 99.9% uptime guarantees.',
      icon: <MdShield className="w-6 h-6" />,
    },
    {
      title: 'Scalability',
      description: 'Our solutions grow with your business, from startup to enterprise.',
      icon: <MdTrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security protocols protect your data and operations.',
      icon: <MdLock className="w-6 h-6" />,
    },
    {
      title: 'Innovation',
      description: 'We stay ahead with cutting-edge technologies and modern practices.',
      icon: <MdLightbulb className="w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0B1120] pt-20 transition-colors duration-300">
      
      {/* ── HERO SECTION ── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <SectionLabel number="00" text="About Us" />
            <h1 className="text-5xl lg:text-7xl font-extrabold font-display leading-tight text-slate-900 dark:text-white">
              Building the Future of <br/>
              <span className="text-blue-600 dark:text-blue-400">Enterprise Technology</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-3xl">
              ADRS Techno is a forward-looking software company delivering enterprise-grade 
              SaaS and PaaS solutions. We combine technical excellence with business understanding 
              to create platforms that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-10 hover:border-blue-600 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-6 uppercase tracking-wider">
                Our Mission
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base font-sans">
                To empower businesses with reliable, scalable, and secure technology solutions 
                that drive growth and operational excellence. We believe in building software 
                that solves real problems and delivers measurable value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-10 hover:border-blue-600 transition-colors duration-300"
            >
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-6 uppercase tracking-wider">
                Our Vision
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base font-sans">
                To be the trusted technology partner for enterprises worldwide, known for 
                innovation, reliability, and human-centric solutions. We envision a future 
                where technology seamlessly enables business success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <SectionLabel number="01" text="Our Journey" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Growth & Milestones
            </h2>
          </motion.div>

          <div className="relative border-l-2 border-slate-200 dark:border-[#1E293B] ml-4 md:ml-[140px] space-y-12 py-2">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-16 group"
              >
                {/* Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white dark:bg-[#111827] border-2 border-blue-600 dark:border-blue-500 rounded-full group-hover:bg-blue-600 transition-colors" />

                <div className="bg-[#F8FAFC] dark:bg-[#0B1120] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl hover:border-blue-600 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="text-3xl font-extrabold font-display text-blue-600 dark:text-blue-400 md:w-24 mt-[-4px]">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display mb-2 text-slate-900 dark:text-white">
                        {item.event}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <SectionLabel number="02" text="Executive Team" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Leadership
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-10 flex flex-col items-center hover:border-blue-600 transition-colors duration-300"
              >
                <div className="w-20 h-20 bg-blue-50 dark:bg-[#131C2E] text-blue-600 dark:text-blue-400 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl font-extrabold font-display">{leader.initials}</span>
                </div>
                <h3 className="text-2xl font-bold font-display mb-1 text-slate-900 dark:text-white text-center">
                  {leader.name}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6 text-center">
                  {leader.role}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed text-center font-sans">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <SectionLabel number="03" text="Core Values" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Principles & Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#F8FAFC] dark:bg-[#0B1120] border border-slate-200 dark:border-[#1E293B] p-8 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white dark:bg-[#111827] group-hover:bg-white/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:text-white mb-6 transition-colors shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold font-display mb-3 text-slate-900 dark:text-white group-hover:text-white transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 group-hover:text-blue-50 text-sm leading-relaxed font-sans transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
