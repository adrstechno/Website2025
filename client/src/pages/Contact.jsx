import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    { icon: FiMail,   title: 'Email',          primary: 'support@adrstechno.com',        secondary: 'Get in touch with us' },
    { icon: FiPhone,  title: 'Phone',          primary: '+91 9076927464',                secondary: 'Call us anytime' },
    { icon: FiMapPin, title: 'Location',       primary: 'Jabalpur, MP',                  secondary: '71, Dadda nagar Near katangi highway, 482001' },
    { icon: FiClock,  title: 'Business Hours', primary: 'Mon – Sat: 9AM – 7PM IST',      secondary: 'Quick response guaranteed' },
  ];

  const socials = [
    { icon: FaLinkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/adrs-technology/' },
    { icon: FaGithub,    label: 'GitHub',    href: 'https://github.com/adrstechno' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/adrstechno?igsh=bjJ1bmE4M21nbjRn' },
  ];

  const reasons = [
    'Schedule a personalized demo',
    'Discuss enterprise solutions',
    'Get technical support',
    'Explore partnership opportunities',
    'Request custom pricing',
  ];

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0B1120] pt-20">

      {/* ── HERO ── */}
      <section className="py-28 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[2px] w-8 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 font-display">
                Contact Us
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold font-display text-slate-900 dark:text-white leading-tight mb-6">
              Get in<br />
              <span className="text-blue-600 dark:text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] rounded-2xl shadow-sm hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300 p-8 text-center"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/40 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white group-hover:text-white transition-colors mb-2">{info.title}</h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors mb-1">{info.primary}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-100 transition-colors">{info.secondary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM & MAP ── */}
      <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-6">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden border border-slate-200 dark:border-[#1E293B]"
                style={{ height: 300 }}
              >
                <iframe
                  title="ADRS Office Location"
                  src="https://www.google.com/maps?q=71,+Dadda+nagar+Near+katangi+highway+Jabalpur+MP+482001&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=71,+Dadda+nagar+Near+katangi+highway+Jabalpur+MP+482001"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline transition-colors font-medium"
              >
                <FiArrowUpRight className="w-4 h-4" /> Open in Google Maps
              </a>

              {/* Why Contact Us */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] p-8"
              >
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-5">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {reasons.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Connect With Us</p>
            <div className="flex justify-center gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-14 h-14 flex items-center justify-center border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#111827] text-slate-500 dark:text-slate-400 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">Ready to Begin?</p>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white mb-6 leading-tight">
              Start Your Journey
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Ready to transform your business with cutting-edge technology?
            </p>
            <a
              href="mailto:support@adrstechno.com"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 font-bold uppercase tracking-wider text-sm hover:bg-blue-50 transition-colors"
            >
              Get Started Today <FiArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

