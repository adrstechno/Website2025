import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      primary: 'hello@adrstechnology.com',
      secondary: 'support@adrstechnology.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      primary: '+1 (555) 123-4567',
      secondary: '+1 (555) 987-6543',
    },
    {
      icon: FiMapPin,
      title: 'Office',
      primary: '123 Innovation Drive',
      secondary: 'San Francisco, CA 94105',
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      primary: 'Mon - Fri: 9AM - 6PM PST',
      secondary: '24/7 Support Available',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Innovation Drive, CA 94105',
      phone: '+1 (555) 123-4567',
    },
    {
      city: 'London',
      country: 'UK',
      address: '45 Tech Street, London EC2A 4DN',
      phone: '+44 20 1234 5678',
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '78 Marina Boulevard, Singapore 018987',
      phone: '+65 6789 0123',
    },
  ];

  return (
    <div className="section-bg pt-20">
      {/* Hero */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
              Get in <span className="text-purple-600 dark:text-purple-400">Touch</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-bg p-6 rounded-xl text-center"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{info.title}</h3>
                <p className="text-primary font-medium mb-1">{info.primary}</p>
                <p className="text-secondary text-sm">{info.secondary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="card-bg rounded-xl h-80 flex items-center justify-center overflow-hidden"
              >
                <img 
                  src="/contact/office-location.jpg" 
                  alt="Office Location"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card-bg p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Schedule a personalized demo',
                    'Discuss enterprise solutions',
                    'Get technical support',
                    'Explore partnership opportunities',
                    'Request custom pricing',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our <span className="text-purple-600 dark:text-purple-400">Global Offices</span>
            </h2>
            <p className="text-xl text-secondary">We're here to serve you worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-bg p-8 rounded-xl"
              >
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-primary mb-2">{office.city}</h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">{office.country}</p>
                <div className="space-y-2 text-secondary">
                  <p className="flex items-start">
                    <FiMapPin className="mr-2 mt-1 flex-shrink-0" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center">
                    <FiPhone className="mr-2 flex-shrink-0" />
                    <span>{office.phone}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">Connect With Us</h3>
            <div className="flex justify-center gap-6">
              {[
                { icon: FaLinkedin, label: 'LinkedIn' },
                { icon: FaGithub, label: 'GitHub' },
                { icon: FaTwitter, label: 'Twitter' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-16 h-16 card-bg rounded-xl flex items-center justify-center hover:border-purple-500/30 transition-all"
                >
                  <social.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 section-bg-alt">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-secondary mb-10">
              Schedule a call with our team to discuss your specific needs
            </p>
            <button className="px-10 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5">
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
