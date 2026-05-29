import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const card = { background: 'rgba(17,17,20,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16 };
const Wrap = ({ children }) => <div className="max-w-7xl mx-auto px-6 lg:px-10">{children}</div>;
const SLabel = ({ text }) => <div className="mb-5"><span className="section-label">{text}</span></div>;

const getInitials = (name) =>
  name.replace(/Mr\.\s*/, '').split(' ').map(n => n[0]).join('').slice(0, 2);

const Team = () => {
  const leaders = [
    { name: 'Mr. Abhishek Dubey', role: 'Founder & CEO',                               image: '/images/Abhishek.jpg' },
    { name: 'Mr. Prateek Gupta',  role: 'Co-Founder & Chief Strategy Officer (CSO)',   image: '/images/PrateekGupta.jpeg' },
  ];

  const developers = [
    { name: 'Siddhant Dubey',    role: 'Chief Technical Officer',                image: '/images/Siddhant.jpg' },
    { name: 'Abhay Mishra',      role: 'BDA (Business Development Administrator)', image: '/images/abhay.jpeg' },
  ];

  const MemberCard = ({ person, large = false }) => (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      className="p-8 rounded-2xl flex flex-col items-center text-center card-lift" style={card}>
      <div className={`relative ${large ? 'w-28 h-28' : 'w-20 h-20'} mx-auto mb-5`}>
        <img src={person.image} alt={person.name}
          className="w-full h-full rounded-full object-cover"
          style={{ border: '2px solid rgba(229,231,235,0.4)' }}
          onError={(e) => {
            e.target.style.display = 'none';
            const init = getInitials(person.name);
            e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;border-radius:50%;background:rgba(255,255,255,0.2);border:2px solid rgba(229,231,235,0.4);display:flex;align-items:center;justify-content:center;font-size:${large ? '1.5rem' : '1.1rem'};font-weight:800;color:#E5E7EB;">${init}</div>`;
          }}
        />
      </div>
      <h3 className={`${large ? 'text-xl' : 'text-base'} font-bold font-display text-white mb-1`}>{person.name}</h3>
      <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{person.role}</p>
    </motion.div>
  );

  return (
    <div className="bg-[#08090B] min-h-screen">

      {/* HERO */}
      <section className="pt-24 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0B0D12 0%, #08090B 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="max-w-3xl relative z-10">
            <SLabel text="Who We Are" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display text-white leading-tight mb-5">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Talented professionals working together to engineer exceptional digital solutions.
            </p>
          </motion.div>
        </Wrap>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24">
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-12">
            <SLabel text="Leadership" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Executive Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {leaders.map((l, i) => <MemberCard key={i} person={l} large />)}
          </div>
        </Wrap>
      </section>

      {/* CORE ENGINEERS */}
      <section className="py-24 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(12,12,14,0.5)' }}>
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-12">
            <SLabel text="Technology & Growth" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">Core Team</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {developers.map((d, i) => <MemberCard key={i} person={d} />)}
          </div>
        </Wrap>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Wrap>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 lg:p-16 rounded-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(209,213,219,0.15) 100%)', border: '1px solid rgba(229,231,235,0.3)' }}>
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Join Us</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white">
                Want to Join<br />Our Team?
              </h2>
              <p className="mt-3 text-slate-300 leading-relaxed max-w-md">
                We are always on the lookout for talented, driven individuals who want to craft impactful enterprise technologies.
              </p>
            </div>
            <Link to="/career"
              className="btn-glow flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Wrap>
      </section>

    </div>
  );
};

export default Team;

