import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="card-bg p-8 md:p-10 rounded-xl"
    >
      <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>

      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused('')}
            className={`w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border ${
              focused === 'name'
                ? 'border-purple-500 ring-2 ring-purple-500/20'
                : 'border-gray-200 dark:border-white/10'
            } rounded-lg text-primary placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all`}
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused('')}
            className={`w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border ${
              focused === 'email'
                ? 'border-purple-500 ring-2 ring-purple-500/20'
                : 'border-gray-200 dark:border-white/10'
            } rounded-lg text-primary placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all`}
            placeholder="john@company.com"
          />
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onFocus={() => setFocused('company')}
            onBlur={() => setFocused('')}
            className={`w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border ${
              focused === 'company'
                ? 'border-purple-500 ring-2 ring-purple-500/20'
                : 'border-gray-200 dark:border-white/10'
            } rounded-lg text-primary placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all`}
            placeholder="Your Company"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused('')}
            rows={5}
            className={`w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border ${
              focused === 'message'
                ? 'border-purple-500 ring-2 ring-purple-500/20'
                : 'border-gray-200 dark:border-white/10'
            } rounded-lg text-primary placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all resize-none`}
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full group inline-flex items-center justify-center px-8 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-all hover:shadow-lg hover:shadow-purple-500/50"
        >
          Send Message
          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
