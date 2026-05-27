import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

/* ── Reusable section label ── */
const SectionLabel = ({ number, text }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-display tabular-nums">{number}</span>
    <span className="h-[1px] w-8 bg-blue-600 dark:bg-blue-400" />
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-display">{text}</span>
  </div>
);

const Team = () => {
  const leaders = [
    {
      name: 'Mr. Abhishek Dubey',
      role: 'Founder & CEO',
      image: '/images/Abhishek.jpg',
    },
    { 
      name: 'Mr. Prateek Gupta',
      role: 'Co-Founder & Chief Strategy Officer (CSO)',
      image: '/images/PrateekGupta.jpeg' 
    },
  ];

  const developers = [
    { name: 'Siddhant Dubey', role: 'Chief Technical Officer', image: '/images/Siddhant.jpg' },
    { name: 'Aman Vishwakarma', role: 'Chief Operating Officer', image: '/images/Aman.jpg' },
    { name: 'Danish Khan', role: 'ErpNEXT-Python Developer', image: '/images/danish.jpeg' },
    { name: 'Abhay Mishra', role: 'BDA (Business Development Administrator)', image: '/images/abhay.jpeg' }
  ];

  // Helper function to extract initials
  const getInitials = (name) => {
    return name
      .replace(/Mr\.\s*/, '')
      .split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2);
  };

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0B1120] pt-20 transition-colors duration-300">
      
      {/* ───────────── HERO ───────────── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <SectionLabel number="00" text="Who We Are" />
            <h1 className="text-5xl lg:text-7xl font-extrabold font-display leading-tight text-slate-900 dark:text-white">
              Meet Our <br />
              <span className="text-blue-600 dark:text-blue-400">Team</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-sans max-w-3xl">
              Talented professionals working together to engineer exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───────────── LEADERSHIP ───────────── */}
      <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <SectionLabel number="01" text="Leadership" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Executive Team
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
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full rounded-full object-cover border-4 border-slate-50 dark:border-[#131C2E] shadow-sm"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const initials = getInitials(leader.name);
                      e.target.parentElement.innerHTML = `
                        <div class="w-32 h-32 bg-blue-50 dark:bg-[#131C2E] rounded-full flex items-center justify-center text-3xl font-extrabold font-display text-blue-600 dark:text-blue-400 border-4 border-white dark:border-[#1E293B] shadow-sm">
                          ${initials}
                        </div>`;
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold font-display mb-1 text-slate-900 dark:text-white text-center">
                  {leader.name}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── DEVELOPERS ───────────── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <SectionLabel number="02" text="Development" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Core Engineers
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8FAFC] dark:bg-[#0B1120] border border-slate-200 dark:border-[#1E293B] rounded-2xl p-8 flex flex-col items-center hover:border-blue-600 transition-colors duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <img 
                    src={dev.image} 
                    alt={dev.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-[#111827] shadow-sm"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const initials = getInitials(dev.name);
                      e.target.parentElement.innerHTML = `
                        <div class="w-24 h-24 bg-white dark:bg-[#111827] rounded-full flex items-center justify-center text-xl font-bold font-display text-blue-600 dark:text-blue-400 border-4 border-[#F8FAFC] dark:border-[#1E293B] shadow-sm">
                          ${initials}
                        </div>`;
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold font-display mb-1 text-slate-900 dark:text-white text-center">
                  {dev.name}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                  {dev.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA PANEL ───────────── */}
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
              <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-3">Join Us</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
                Want to Join Our<br />Team?
              </h2>
              <p className="mt-3 text-blue-100 text-base leading-relaxed max-w-xl">
                We are always on the lookout for talented, driven individuals who want to craft impactful enterprise technologies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                to="/career"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold text-sm uppercase tracking-wider hover:bg-blue-50 transition-colors"
              >
                Apply Now <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Team;
