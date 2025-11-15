import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    { year: '2018', event: 'Company Founded', description: 'ADRS Technology established with a vision to deliver enterprise-grade solutions' },
    { year: '2020', event: 'Team Expansion', description: 'Grew to 10+ specialized developers across multiple technology stacks' },
    { year: '2022', event: 'Enterprise Focus', description: 'Shifted focus to scalable SaaS and PaaS solutions for large organizations' },
    { year: '2024', event: 'Innovation Leader', description: 'Recognized as a trusted partner for cloud infrastructure and automation' },
  ];

  const leaders = [
    {
      name: 'Abhishek Dubey',
      role: 'Chief Executive Officer',
      bio: 'Abhishek leads ADRS Technology with a vision for innovation and sustainable growth. With extensive experience in enterprise software, he drives strategic initiatives and client relationships.',
      initials: 'AD',
    },
    {
      name: 'Siddhant Dubey',
      role: 'Chief Technology Officer',
      bio: 'Siddhant oversees all technical operations and architecture decisions. His expertise in cloud infrastructure and scalable systems ensures ADRS delivers robust, future-proof solutions.',
      initials: 'SD',
    },
    
  ];

  const values = [
    {
      title: 'Reliability',
      description: 'We build systems that work consistently, with 99.9% uptime guarantees.',
      icon: '🛡️',
    },
    {
      title: 'Scalability',
      description: 'Our solutions grow with your business, from startup to enterprise.',
      icon: '📈',
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security protocols protect your data and operations.',
      icon: '🔒',
    },
    {
      title: 'Innovation',
      description: 'We stay ahead with cutting-edge technologies and modern practices.',
      icon: '💡',
    },
  ];

  return (
    <div className="bg-dark-primary pt-20">
      {/* Hero */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              Building the Future of{' '}
              <span className="accent-cyan">Enterprise Technology</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              ADRS Technology is a forward-looking software company delivering enterprise-grade 
              SaaS and PaaS solutions. We combine technical excellence with business understanding 
              to create platforms that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To empower businesses with reliable, scalable, and secure technology solutions 
                that drive growth and operational excellence. We believe in building software 
                that solves real problems and delivers measurable value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To be the trusted technology partner for enterprises worldwide, known for 
                innovation, reliability, and human-centric solutions. We envision a future 
                where technology seamlessly enables business success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="accent-cyan">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">Key milestones in our growth</p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-dark p-8 rounded-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="text-4xl font-bold accent-cyan md:w-32">{item.year}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{item.event}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Leadership <span className="accent-cyan">Team</span>
            </h2>
            <p className="text-xl text-gray-400">
              Experienced executives guiding ADRS Technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark p-8 rounded-xl"
              >
                <div className="w-32 h-32 bg-accent-cyan/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold accent-cyan">{leader.initials}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{leader.name}</h3>
                <p className="accent-cyan text-center mb-6">{leader.role}</p>
                <p className="text-gray-400 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="accent-cyan">Development Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              10+ dedicated developers with expertise across the full technology stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {['Front-end Developers', 'Back-end Engineers', 'Full-stack Developers', 'Mobile App Specialists'].map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">👨‍💻</div>
                <h3 className="font-semibold">{role}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="accent-cyan">Values</span>
            </h2>
            <p className="text-xl text-gray-400">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark p-8 rounded-xl text-center"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
