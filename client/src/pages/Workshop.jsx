import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

// React Icons for Topics
import {
  MdWeb,
  MdSmartphone,
  MdSecurity,
  MdElectricBolt,
  MdPsychology,
  MdVerified,
  MdSchool,
  MdGroups
} from "react-icons/md";

import { FaRobot } from "react-icons/fa";

const Workshop = () => {
  /* ---------------------- WORKSHOP TOPICS ---------------------- */
  const workshopTopics = [
    {
      title: "Full-Stack Development",
      description:
        "Master modern web development with React, Node.js, and databases",
      icon: <MdWeb className="text-5xl text-purple-600 dark:text-purple-400" />,
      duration: "3–5 days",
    },
    {
      title: "Python & AI",
      description:
        "Learn Python programming and artificial intelligence fundamentals",
      icon: <FaRobot className="text-5xl text-purple-600 dark:text-purple-400" />,
      duration: "3–5 days",
    },
    {
      title: "Mobile Apps",
      description:
        "Build cross-platform mobile applications with React Native",
      icon: (
        <MdSmartphone className="text-5xl text-purple-600 dark:text-purple-400" />
      ),
      duration: "3–5 days",
    },
    {
      title: "Arduino & IoT",
      description:
        "Create IoT projects with Arduino and sensor integration",
      icon: (
        <MdElectricBolt className="text-5xl text-purple-600 dark:text-purple-400" />
      ),
      duration: "5 days",
    },
    {
      title: "Cybersecurity",
      description:
        "Understand security principles and ethical hacking basics",
      icon: (
        <MdSecurity className="text-5xl text-purple-600 dark:text-purple-400" />
      ),
      duration: "5 days",
    },
  ];

  /* ---------------------- WORKSHOP FORMATS ---------------------- */
  const workshopFormats = [
    {
      duration: "3-Day Workshop",
      topics: [
        "Full-Stack Development",
        "Python & AI Basics",
        "Mobile App Development",
      ],
      format: "Intensive hands-on training",
      certification: "Certificate of Completion",
    },
    {
      duration: "5-Day Workshop",
      topics: [
        "Advanced Full-Stack",
        "Arduino & IoT",
        "Cybersecurity Fundamentals",
      ],
      format: "Comprehensive project-based learning",
      certification: "Advanced Certificate",
    },
  ];

  /* ---------------------- FEATURES ---------------------- */
  const features = [
    {
      icon: (
        <MdPsychology className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Hands-on Learning",
      description: "Practical, project-based approach",
    },
    {
      icon: (
        <MdGroups className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Expert Instructors",
      description: "Learn from industry professionals",
    },
    {
      icon: (
        <MdVerified className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Certification",
      description: "Receive completion certificate",
    },
    {
      icon: (
        <MdSchool className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "For Schools & Colleges",
      description: "Specially designed for educational institutions",
    },
  ];

  return (
    <div className="section-bg pt-20">

      {/* ---------------------- HERO ---------------------- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
              ADRS <span className="text-purple-600 dark:text-purple-400">Spark</span>
            </h1>

            <p className="text-xl text-secondary leading-relaxed">
              Hands-on, project-based educational workshops for schools and colleges — 
              packed with modern tech learning & certification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------- WORKSHOP TOPICS ---------------------- */}
      <section className="py-16 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Workshop <span className="text-purple-600 dark:text-purple-400">Topics</span>
            </h2>
            <p className="text-xl text-secondary">
              Comprehensive technology training programs
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshopTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-bg rounded-xl p-8 shadow-md hover:shadow-purple-500/20 transition"
              >
                <div className="mb-4">{topic.icon}</div>

                <h3 className="text-xl font-bold mb-3 text-primary">
                  {topic.title}
                </h3>

                <p className="text-secondary text-sm mb-4">
                  {topic.description}
                </p>

                <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                  <FiClock className="mr-2" />
                  {topic.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- WORKSHOP FORMATS ---------------------- */}
      <section className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Workshop <span className="text-purple-600 dark:text-purple-400">Formats</span>
            </h2>
            <p className="text-xl text-secondary">Choose a format that suits your needs</p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {workshopFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-bg p-8 rounded-xl shadow-md hover:shadow-purple-500/20 transition"
              >
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                  {format.duration}
                </h3>

                <div className="space-y-4">

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {format.topics.map((topic, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-secondary"
                        >
                          <span className="text-purple-600 dark:text-purple-400 mr-2">
                            •
                          </span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-secondary text-sm">
                    <span className="font-semibold text-primary">Format:</span>{" "}
                    {format.format}
                  </p>

                  <p className="text-secondary text-sm">
                    <span className="font-semibold text-primary">Certification:</span>{" "}
                    {format.certification}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- FEATURES ---------------------- */}
      <section className="py-32 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Why Choose{" "}
              <span className="text-purple-600 dark:text-purple-400">
                ADRS Spark?
              </span>
            </h2>
            <p className="text-xl text-secondary">
              What makes our workshops special
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bg p-6 rounded-xl text-center shadow-md hover:shadow-purple-500/20 transition"
              >
                <div className="mb-3">{feature.icon}</div>

                <h3 className="text-lg font-bold mb-2 text-primary">
                  {feature.title}
                </h3>

                <p className="text-secondary text-sm">
                  {feature.description}
                </p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Workshop;
