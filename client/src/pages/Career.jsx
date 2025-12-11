import { motion } from "framer-motion";
import { FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";

// Benefit Icons
import {
  MdPalette,
  MdTrendingUp,
  MdAccessTime,
  MdEmojiEvents,
  MdLaptopMac,
  MdHandshake,
} from "react-icons/md";

const Career = () => {
  /* ---------------------- OPEN POSITIONS ---------------------- */
  const openings = [
    {
      title: "React.js Developer",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Build modern, responsive web applications using React.js and related technologies.",
      requirements: [
        "Strong proficiency in React.js and JavaScript",
        "Experience with state management (Redux, Context API)",
        "Knowledge of modern CSS frameworks",
        "Understanding of RESTful APIs",
      ],
    },
    {
      title: "Node.js Backend Developer",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Design and develop scalable backend services and APIs using Node.js.",
      requirements: [
        "Strong experience with Node.js and Express",
        "Database design (MongoDB, PostgreSQL)",
        "RESTful API development",
        "Understanding of microservices architecture",
      ],
    },
    {
      title: "UI/UX Designer",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Create beautiful, user-friendly interfaces and exceptional user experiences.",
      requirements: [
        "Proficiency in Figma, Adobe XD, or Sketch",
        "Strong portfolio demonstrating UI/UX work",
        "Understanding of design systems",
        "Knowledge of responsive design principles",
      ],
    },
    {
      title: "Digital Marketing Executive",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Drive digital marketing campaigns and grow our online presence.",
      requirements: [
        "Experience with SEO, SEM, and social media marketing",
        "Content creation and copywriting skills",
        "Analytics and reporting (Google Analytics)",
        "Email marketing campaign management",
      ],
    },
  ];

  /* ---------------------- BENEFITS ---------------------- */
  const benefits = [
    {
      icon: (
        <MdPalette className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Creative Environment",
      description:
        "Work in a collaborative space that encourages innovation and creativity",
    },
    {
      icon: (
        <MdTrendingUp className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Growth Opportunities",
      description:
        "Continuous learning and career advancement opportunities",
    },
    {
      icon: (
        <MdAccessTime className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours",
    },
    {
      icon: (
        <MdEmojiEvents className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Recognition & Mentorship",
      description: "Regular recognition and guidance from experienced mentors",
    },
    {
      icon: (
        <MdLaptopMac className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Latest Technology",
      description: "Work with cutting-edge tools and technologies",
    },
    {
      icon: (
        <MdHandshake className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Team Culture",
      description: "Collaborative and supportive team environment",
    },
  ];

  return (
    <div className="section-bg pt-20">
      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
              Join Our{" "}
              <span className="text-purple-600 dark:text-purple-400">Team</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Build your career with ADRS Techno. We're looking for talented
              individuals who are passionate about technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------- BENEFITS ---------------------- */}
      <section className="py-16 section-bg-alt">
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
              Why Work{" "}
              <span className="text-purple-600 dark:text-purple-400">
                With Us?
              </span>
            </h2>
            <p className="text-xl text-secondary">
              Benefits and perks of joining ADRS Techno
            </p>
          </motion.div>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-bg p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all border border-transparent hover:border-purple-500/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-400/20 flex items-center justify-center">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-secondary text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- OPEN POSITIONS ---------------------- */}
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Current{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Openings
              </span>
            </h2>
            <p className="text-xl text-secondary">
              Explore opportunities to grow your career with us
            </p>
          </motion.div>

          {/* Job Cards */}
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-bg p-8 rounded-xl hover:border-purple-500/30 transition-all shadow-md"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center text-sm text-secondary">
                        <FiMapPin className="mr-2 text-purple-600 dark:text-purple-400" />
                        {job.location}
                      </span>

                      <span className="flex items-center text-sm text-secondary">
                        <FiBriefcase className="mr-2 text-purple-600 dark:text-purple-400" />
                        {job.type}
                      </span>

                      <span className="flex items-center text-sm text-secondary">
                        <FiClock className="mr-2 text-purple-600 dark:text-purple-400" />
                        {job.experience}
                      </span>
                    </div>

                    <p className="text-secondary mb-4">{job.description}</p>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-secondary"
                          >
                            <span className="text-purple-600 dark:text-purple-400 mr-2">
                              •
                            </span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:w-48 flex-shrink-0">
                    <button className="w-full px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- APPLICATION PROCESS ---------------------- */}
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
              Application{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Process
              </span>
            </h2>
            <p className="text-xl text-secondary">
              Simple and transparent hiring process
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description: "Submit your application through our portal",
              },
              {
                step: "2",
                title: "Initial Screening",
                description: "Our team reviews your application",
              },
              {
                step: "3",
                title: "Interview",
                description: "Technical and cultural fit assessment",
              },
              {
                step: "4",
                title: "Offer",
                description: "Welcome to the team!",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-bg p-6 rounded-xl text-center shadow-md hover:shadow-purple-500/20"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {process.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-2">
                  {process.title}
                </h3>
                <p className="text-secondary text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- CTA ---------------------- */}
      <section className="py-24 section-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              Don't See a Perfect Fit?
            </h2>

            <p className="text-xl text-secondary mb-10">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>

            <a
              href="mailto:support@adrstechno.com"
              className="inline-block px-10 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;
