import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMapPin, FiBriefcase, FiClock, FiArrowRight, FiSend } from 'react-icons/fi';
import { MdPalette, MdTrendingUp, MdAccessTime, MdEmojiEvents, MdLaptopMac, MdHandshake } from 'react-icons/md';

const card = { background: 'rgba(17,17,20,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 };
const Wrap = ({ children }) => <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>;
const SLabel = ({ text }) => <div className="mb-5"><span className="section-label">{text}</span></div>;

const Career = () => {
  const openings = [
    {
      title: 'React.js Developer', location: 'Remote / Hybrid', type: 'Full-time', experience: '2–4 years', badge: 'Hot',
      description: 'Build modern, responsive web applications using React.js and related technologies.',
      requirements: ['Strong proficiency in React.js and JavaScript', 'Experience with state management (Redux, Context API)', 'Knowledge of modern CSS frameworks', 'Understanding of RESTful APIs'],
    },
    {
      title: 'Node.js Backend Developer', location: 'Remote / Hybrid', type: 'Full-time', experience: '3–5 years', badge: 'New',
      description: 'Design and develop scalable backend services and APIs using Node.js.',
      requirements: ['Strong experience with Node.js and Express', 'Database design (MongoDB, PostgreSQL)', 'RESTful API development', 'Understanding of microservices architecture'],
    },
    {
      title: 'UI/UX Designer', location: 'Remote / Hybrid', type: 'Full-time', experience: '2–3 years', badge: null,
      description: 'Create beautiful, user-friendly interfaces and exceptional user experiences.',
      requirements: ['Proficiency in Figma, Adobe XD, or Sketch', 'Strong portfolio demonstrating UI/UX work', 'Understanding of design systems', 'Knowledge of responsive design principles'],
    },
    {
      title: 'Digital Marketing Executive', location: 'Remote / Hybrid', type: 'Full-time', experience: '1–3 years', badge: null,
      description: 'Drive digital marketing campaigns and grow our online presence.',
      requirements: ['Experience with SEO, SEM, and social media marketing', 'Content creation and copywriting skills', 'Analytics and reporting (Google Analytics)', 'Email marketing campaign management'],
    },
  ];

  const benefits = [
    { icon: <MdPalette     className="w-8 h-8" />, title: 'Creative Environment', description: 'Work in a collaborative space that encourages innovation and creativity.' },
    { icon: <MdTrendingUp  className="w-8 h-8" />, title: 'Growth Opportunities',  description: 'Continuous learning and career advancement opportunities.' },
    { icon: <MdAccessTime  className="w-8 h-8" />, title: 'Flexible Hours',         description: 'Work-life balance with flexible working hours.' },
    { icon: <MdEmojiEvents className="w-8 h-8" />, title: 'Recognition & Mentorship', description: 'Regular recognition and guidance from experienced mentors.' },
    { icon: <MdLaptopMac   className="w-8 h-8" />, title: 'Latest Technology',      description: 'Work with cutting-edge tools and technologies.' },
    { icon: <MdHandshake   className="w-8 h-8" />, title: 'Team Culture',            description: 'Collaborative and supportive team environment.' },
  ];

  const processSteps = [
    { step: '01', title: 'Apply Online',      description: 'Submit your application through our portal.' },
    { step: '02', title: 'Initial Screening', description: 'Our team reviews your application.' },
    { step: '03', title: 'Interview',          description: 'Technical and cultural fit assessment.' },
    { step: '04', title: 'Offer',              description: 'Welcome to the ADRS Techno family!' },
  ];

  return (
    <div className="bg-[#08090B] min-h-screen">

      {/* HERO */}
      <section className="pt-24 pb-20 relative overflow-hidden text-center"
        style={{ background: 'linear-gradient(180deg, #0B0D12 0%, #08090B 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute pointer-events-none" style={{ width: 600, height: 400, top: -150, left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-4 inline-flex">We're Hiring</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display text-white mb-5 leading-tight">
            Build Your Career <span className="gradient-text">With Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed">
            Join ADRS Techno and work alongside talented engineers, designers, and marketers shaping the future of technology.
          </motion.p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <Wrap>
          <div className="text-center mb-14">
            <SLabel text="Perks" />
            <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white mb-3">
              Why Work <span className="gradient-text">With Us?</span>
            </h2>
            <p className="text-slate-400">Benefits and perks of joining ADRS Techno.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl card-lift group" style={card}>
                <div className="w-14 h-14 mb-5 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-2">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(12,12,14,0.5)' }}>
        <Wrap>
          <div className="text-center mb-14">
            <SLabel text="Openings" />
            <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white mb-3">
              Current <span className="gradient-text">Openings</span>
            </h2>
            <p className="text-slate-400">Explore opportunities to grow your career with us.</p>
          </div>
          <div className="space-y-5">
            {openings.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
                className="p-8 rounded-2xl card-lift" style={card}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      {job.badge && (
                        <span className="px-2.5 py-0.5 text-xs font-bold rounded-full text-blue-400"
                          style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(229,231,235,0.3)' }}>
                          {job.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {[{ icon: FiMapPin, text: job.location }, { icon: FiBriefcase, text: job.type }, { icon: FiClock, text: job.experience }].map((meta, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-sm text-slate-400 rounded-full px-3 py-1"
                          style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <meta.icon className="w-3.5 h-3.5 text-blue-400" />
                          {meta.text}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{job.description}</p>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req, j) => (
                        <li key={j} className="flex items-start text-sm text-slate-400">
                          <span className="text-blue-400 mr-2 mt-0.5">▸</span>{req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-40 flex-shrink-0">
                    <Link to="/apply"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors">
                      Apply Now <FiArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <Wrap>
          <div className="text-center mb-14">
            <SLabel text="How It Works" />
            <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white mb-3">
              Application <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400">Simple and transparent hiring process.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(229,231,235,0.35), transparent)' }} />
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                  className="p-7 rounded-2xl text-center card-lift" style={card}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(229,231,235,0.3)' }}>
                    <span className="text-xl font-black font-display text-blue-400">{step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* CTA */}
      <section className="py-24 border-t text-center relative overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at bottom center, rgba(255,255,255,0.12) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(229,231,235,0.3)' }}>
            <FiSend className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold font-display text-white mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/apply"
            className="btn-glow inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors">
            Send Your Resume <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Career;




