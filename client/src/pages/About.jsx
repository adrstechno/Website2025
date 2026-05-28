import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdShield, MdTrendingUp, MdLock, MdLightbulb } from 'react-icons/md';
import { ArrowRight, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import { STATS, OFFICES, COMPANY } from '../constants/company';

/* ── Shared dark-theme section wrapper ── */
const Section = ({ children, className = '', alt = false, id }) => (
  <section id={id}
    className={`py-24 ${className}`}
    style={alt
      ? { background: 'rgba(12,12,14,0.6)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }
      : {}
    }
  >
    {children}
  </section>
);

const Wrap = ({ children }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-10">{children}</div>
);

const SLabel = ({ text }) => (
  <div className="mb-5">
    <span className="section-label">{text}</span>
  </div>
);

const About = () => {

  const leaders = [
    { name: 'Abhishek Dubey', role: 'Chief Executive Officer', initials: 'AD', bio: 'Abhishek leads ADRS Technology with a vision for innovation and sustainable growth. With extensive experience in enterprise software, he drives strategic initiatives and client relationships.' },
    { name: 'Siddhant Dubey', role: 'Chief Technology Officer', initials: 'SD', bio: 'Siddhant oversees all technical operations and architecture decisions. His expertise in cloud infrastructure and scalable systems ensures ADRS delivers robust, future-proof solutions.' },
  ];

  const values = [
    { title: 'Reliability',  description: 'We build systems that work consistently, with 99.9% uptime guarantees.',        icon: <MdShield    className="w-6 h-6" /> },
    { title: 'Scalability',  description: 'Our solutions grow with your business, from startup to enterprise.',           icon: <MdTrendingUp className="w-6 h-6" /> },
    { title: 'Security',     description: 'Enterprise-grade security protocols protect your data and operations.',         icon: <MdLock      className="w-6 h-6" /> },
    { title: 'Innovation',   description: 'We stay ahead with cutting-edge technologies and modern practices.',           icon: <MdLightbulb className="w-6 h-6" /> },
  ];

  /* Stats from canonical source — never hardcode here */
  const cardStyle = { background: 'rgba(19,28,46,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 };

  return (
    <div className="bg-[#08090B] min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-24 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0B0D12 0%, #08090B 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute pointer-events-none"
          style={{ width: 600, height: 400, top: -100, left: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="max-w-4xl relative z-10">
            <SLabel text="About Us" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display leading-tight text-white mb-6">
              Building the Future of<br />
              <span className="gradient-text">Enterprise Technology</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
              ADRS Techno is a forward-looking software company delivering enterprise-grade SaaS and PaaS solutions.
              We combine technical excellence with business understanding to create platforms that drive real results.
            </p>
          </motion.div>
        </Wrap>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(17,17,20,0.4)' }}>
        <Wrap>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
            {STATS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="text-center py-8 px-4">
                <div className="text-4xl sm:text-5xl font-extrabold font-display stat-number mb-1">
                  <CountUp end={s.end} suffix={s.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ── MISSION & VISION ── */}
      <Section>
        <Wrap>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Our Mission', body: 'To empower businesses with reliable, scalable, and secure technology solutions that drive growth and operational excellence. We believe in building software that solves real problems and delivers measurable value.' },
              { title: 'Our Vision',  body: 'To be the trusted technology partner for enterprises worldwide, known for innovation, reliability, and human-centric solutions. We envision a future where technology seamlessly enables business success.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12 }}
                className="p-10 rounded-2xl card-lift" style={cardStyle}>
                <h2 className="text-2xl font-bold font-display text-white mb-5 uppercase tracking-wider">{item.title}</h2>
                <p className="text-slate-400 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </Section>


      {/* ── LEADERSHIP ── */}
      <Section>
        <Wrap>
          <div className="text-center mb-14">
            <SLabel text="Executive Team" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {leaders.map((leader, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-10 rounded-2xl flex flex-col items-center text-center card-lift" style={cardStyle}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 text-2xl font-extrabold font-display text-blue-400"
                  style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(229,231,235,0.4)' }}>
                  {leader.initials}
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-1">{leader.name}</h3>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-5">{leader.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* ── VALUES ── */}
      <Section alt>
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-14">
            <SLabel text="Core Values" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Principles &amp; Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl card-lift" style={cardStyle}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* ── CTA ── */}
      {/* ── OFFICES ── */}
      <Section alt>
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-12">
            <SLabel text="Our Locations" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Offices Across India</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {OFFICES.map((office, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="p-7 rounded-2xl card-lift" style={cardStyle}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0"
                    style={{ background: 'rgba(37,99,235,0.15)' }}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full text-blue-400"
                    style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(59,130,246,0.25)' }}>
                    {office.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{office.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{office.address}</p>
                <a href={office.mapUrl} target="_blank" rel="noreferrer noopener"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  View on Google Maps →
                </a>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </Section>

      <section className="py-20 text-center border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-lg mx-auto px-6">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">Ready to Build Together?</h2>
          <p className="text-slate-400 mb-7">Let's start scoping the right software solution for your business.</p>
          <Link to="/contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;




