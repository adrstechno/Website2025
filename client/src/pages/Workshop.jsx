import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiUsers } from 'react-icons/fi';

const Workshop = () => {
  const upcomingWorkshops = [
    {
      title: 'Full Stack Development Bootcamp',
      date: 'December 15, 2024',
      time: '10:00 AM - 5:00 PM',
      location: 'ADRS Technology Office',
      participants: '30 seats',
      description: 'Learn modern web development with React, Node.js, and MongoDB',
      image: '/workshops/fullstack.jpg',
    },
    {
      title: 'Cloud Computing with AWS',
      date: 'December 22, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Online',
      participants: '50 seats',
      description: 'Master AWS services and cloud deployment strategies',
      image: '/workshops/cloud.jpg',
    },
    {
      title: 'Mobile App Development',
      date: 'January 5, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'ADRS Technology Office',
      participants: '25 seats',
      description: 'Build cross-platform mobile apps with React Native',
      image: '/workshops/mobile.jpg',
    },
  ];

  const pastWorkshops = [
    { title: 'AI & Machine Learning Basics', date: 'November 2024', participants: '45' },
    { title: 'DevOps Fundamentals', date: 'October 2024', participants: '38' },
    { title: 'UI/UX Design Workshop', date: 'September 2024', participants: '52' },
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
              Tech <span className="text-purple-600 dark:text-purple-400">Workshops</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Learn from industry experts and enhance your technical skills
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Workshops */}
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
              Upcoming <span className="text-purple-600 dark:text-purple-400">Workshops</span>
            </h2>
            <p className="text-xl text-secondary">Register now for our upcoming sessions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-bg rounded-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-6xl">
                  💻
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{workshop.title}</h3>
                  <p className="text-secondary text-sm mb-4">{workshop.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-secondary">
                      <FiCalendar className="mr-2 text-purple-600 dark:text-purple-400" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-sm text-secondary">
                      <FiClock className="mr-2 text-purple-600 dark:text-purple-400" />
                      {workshop.time}
                    </div>
                    <div className="flex items-center text-sm text-secondary">
                      <FiMapPin className="mr-2 text-purple-600 dark:text-purple-400" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center text-sm text-secondary">
                      <FiUsers className="mr-2 text-purple-600 dark:text-purple-400" />
                      {workshop.participants}
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Workshops */}
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
              Past <span className="text-purple-600 dark:text-purple-400">Workshops</span>
            </h2>
            <p className="text-xl text-secondary">Successfully conducted sessions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pastWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bg p-6 rounded-xl text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-primary">{workshop.title}</h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm mb-2">{workshop.date}</p>
                <p className="text-secondary text-sm">{workshop.participants} participants</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshop;
