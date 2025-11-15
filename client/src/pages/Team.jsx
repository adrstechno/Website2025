import { motion } from 'framer-motion';

const Team = () => {
  const leaders = [
    {
      name: 'Abhishek Dubey',
      role: 'Chief Executive Officer',
      image: '/team/abhishek.jpg',
    },
    {
      name: 'Siddhant Dubey',
      role: 'Chief Technology Officer',
      image: '/team/siddhant.jpg',
    },
   
  ];

  const developers = [
    { name: 'Srajal Vishwakarma', role: 'Full Stack Developer', image: '/team/srajal.jpg' },
    { name: 'Sapeksh Vishwakarma', role: 'Frontend Developer', image: '/team/sapeksh.jpg' },
    { name: 'Sparsh Sahu', role: 'Backend Developer', image: '/team/sparsh.jpg' },
    { name: 'Sachin Sen', role: 'Full Stack Developer', image: '/team/sachin.jpg' },
    { name: 'Danish Khan', role: 'Mobile Developer', image: '/team/danish.jpg' },
    { name: 'Ishant Patel', role: 'Frontend Developer', image: '/team/ishant.jpg' },
    { name: 'Roshan Sachdev', role: 'Backend Developer', image: '/team/roshan.jpg' },
    { name: 'Sakshi Jain', role: 'UI/UX Designer', image: '/team/sakshi.jpg' },
    { name: 'Anshraj Baghel', role: 'Full Stack Developer', image: '/team/anshraj.jpg' },
    { name: 'Aman Vishwakarma', role: 'DevOps Engineer', image: '/team/aman.jpg' },
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const initials = leader.name.split(' ').map(n => n[0]).join('');
                    e.target.parentElement.innerHTML = `<div class="w-32 h-32 bg-purple-100 dark:bg-purple-500/10 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-purple-600 dark:text-purple-400">${initials}</div>` + e.target.parentElement.innerHTML.substring(e.target.outerHTML.length);
                  }}
                />
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

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                <img 
                  src={dev.image} 
                  alt={dev.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const initials = dev.name.split(' ').map(n => n[0]).join('');
                    e.target.parentElement.innerHTML = `<div class="w-24 h-24 bg-purple-100 dark:bg-purple-500/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-purple-600 dark:text-purple-400">${initials}</div>` + e.target.parentElement.innerHTML.substring(e.target.outerHTML.length);
                  }}
                />
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
