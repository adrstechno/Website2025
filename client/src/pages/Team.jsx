import { motion } from 'framer-motion';

const Team = () => {
  const leaders = [
    {
      name: 'Mr. Abhishek Dubey',
      role: 'Founder & CEO',
      image: '/images/Abhishek.jpg',
    },
  ];

  const developers = [
    { name: 'Siddhant Dubey', role: 'Chief Technical Officer', image: '/images/Siddhant.jpg' },
    { name: 'Aman Vishwakarma', role: 'Full Stack Developer', image: '/images/Aman.jpg' },
    { name: 'Ishant Patel', role: 'Team Lead', image: '/images/Ishant.jpg' },
    { name: 'Sapeksh Vishwakarma', role: 'Team Lead', image: '/images/sapeksh.JPG' },
    { name: 'Srajal Vishwakarma', role: 'Full Stack Developer', image: '/images/srajal.jpeg' },
    { name: 'Sparsh Sahu', role: 'Full Stack Developer', image: '/images/sparsh.jpeg' },
    { name: 'Sachin Sen', role: 'Full Stack Developer', image: '/images/sachin.jpg' },
    { name: 'Sakshi Jain', role: 'Full Stack Developer', image: '/images/sakshi.jpg' },
    { name: 'Roshan Sachdev', role: 'Full Stack Developer', image: '/images/roshan.JPG' },
    { name: 'Danish Khan', role: 'ErpNEXT-Python Developer', image: '/images/danish.JPG' }
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
              Meet Our <span className="text-purple-600 dark:text-purple-400">Team</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Talented individuals working together to build exceptional software solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Leadership <span className="text-purple-600 dark:text-purple-400">Team</span>
            </h2>
            <p className="text-xl text-secondary">Guiding ADRS Technology to success</p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-bg p-8 rounded-xl text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full rounded-full object-cover border-4 border-purple-200 dark:border-purple-500/30 shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const initials = leader.name.split(' ').map(n => n[0]).join('');
                      e.target.parentElement.innerHTML = `<div class="w-32 h-32 bg-purple-100 dark:bg-purple-500/10 rounded-full flex items-center justify-center text-3xl font-bold text-purple-600 dark:text-purple-400 border-4 border-purple-200 dark:border-purple-500/30 shadow-lg">${initials}</div>`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{leader.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Development <span className="text-purple-600 dark:text-purple-400">Team</span>
            </h2>
            <p className="text-xl text-secondary">Expert developers building the future</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="card-bg p-6 rounded-xl text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img 
                    src={dev.image} 
                    alt={dev.name}
                    className="w-full h-full rounded-full object-cover border-4 border-purple-200 dark:border-purple-500/30 shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const initials = dev.name.split(' ').map(n => n[0]).join('');
                      e.target.parentElement.innerHTML = `<div class="w-24 h-24 bg-purple-100 dark:bg-purple-500/10 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 dark:text-purple-400 border-4 border-purple-200 dark:border-purple-500/30 shadow-lg">${initials}</div>`;
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 text-primary">{dev.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm">{dev.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-bg-alt">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-secondary mb-10">
              We're always looking for talented individuals
            </p>
            <a
              href="mailto:careers@adrstechnology.com"
              className="inline-block px-10 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
