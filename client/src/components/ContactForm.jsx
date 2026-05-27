import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [focused,   setFocused]   = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputClass = (field) =>
    `w-full px-4 py-3.5 text-sm font-medium transition-all outline-none resize-none
     bg-[#F8FAFC] dark:bg-[#0B1120] border text-slate-900 dark:text-white
     placeholder:text-slate-400 dark:placeholder:text-slate-600
     ${focused === field
       ? 'border-blue-600 dark:border-blue-500 ring-2 ring-blue-600/15 dark:ring-blue-500/15'
       : 'border-slate-200 dark:border-[#1E293B] hover:border-slate-300 dark:hover:border-[#2D3B55]'
     }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] p-8 md:p-10"
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          /* ── Success ── */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center mb-6">
              <FiCheckCircle className="text-3xl text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-3">Message Sent!</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', message: '' }); }}
              className="px-6 py-2.5 text-sm border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors font-semibold"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          /* ── Form ── */
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-1">Send us a message</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">We'll respond within 24 hours.</p>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-2">
                  Full Name <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                  className={inputClass('name')} placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-2">
                  Email Address <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                  className={inputClass('email')} placeholder="john@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-2">
                  Company
                </label>
                <input
                  type="text" id="company" name="company"
                  value={formData.company} onChange={handleChange}
                  onFocus={() => setFocused('company')} onBlur={() => setFocused('')}
                  className={inputClass('company')} placeholder="Your Company"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.15em] mb-2">
                  Message <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  className={inputClass('message')} placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4
                           bg-blue-600 hover:bg-blue-700 disabled:opacity-70
                           text-white font-bold uppercase tracking-wider text-sm
                           transition-colors shadow-lg shadow-blue-600/20"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;

