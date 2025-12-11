import { motion } from "framer-motion";

// Icons
import {
  MdLightbulb,
  MdSecurity,
  MdTrackChanges,
  MdHealthAndSafety,
  MdDiamond,
  MdSchool,
  MdBusinessCenter,
} from "react-icons/md";

const Mission = () => {
  /* ---------------------- CORE VALUES ---------------------- */
  const values = [
    {
      title: "Innovation",
      description:
        "Pushing boundaries with new solutions. We constantly explore emerging technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.",
      icon: <MdLightbulb className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Reliability",
      description:
        "Robust, tested architectures. Every solution we build undergoes rigorous testing and quality assurance to ensure it performs flawlessly in production environments.",
      icon: <MdSecurity className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Client Focus",
      description:
        "Tailored approach to business needs. We take time to understand your unique challenges and goals, crafting solutions that align perfectly with your business objectives.",
      icon: <MdTrackChanges className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
  ];

  /* ---------------------- WHAT WE DELIVER ---------------------- */
  const offerings = [
    {
      title: "Healthcare Solutions",
      description:
        "IDHPS platform for appointments, telemedicine, and electronic health records management.",
      icon: <MdHealthAndSafety className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Retail Management",
      description:
        "Jewelry Manager for inventory, billing, and customer relationship management.",
      icon: <MdDiamond className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Education Technology",
      description:
        "ADRS Learn Pro LMS with progress tracking, analytics, and certification.",
      icon: <MdSchool className="text-5xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Enterprise Solutions",
      description:
        "Custom ERP systems with workflow automation, reporting, and integration capabilities.",
      icon: <MdBusinessCenter className="text-5xl text-purple-600 dark:text-purple-400" />,
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
              Our{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Mission
              </span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Transforming businesses through innovative and scalable digital
              solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------- MISSION STATEMENT ---------------------- */}
      <section className="py-16 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-bg p-12 rounded-2xl text-center shadow-lg"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Deliver Cutting-Edge Digital Solutions That Transform Businesses
            </h2>

            <p className="text-xl text-secondary leading-relaxed max-w-4xl mx-auto">
              At ADRS Techno Private Limited, our mission is to empower
              businesses with scalable, secure, and customized digital
              solutions. We deliver innovative technology across healthcare,
              retail, education, and enterprise sectors—helping organizations
              achieve true digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------------- CORE VALUES ---------------------- */}
      <section className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Our Core{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Values
              </span>
            </h2>

            <p className="text-xl text-secondary max-w-2xl mx-auto">
              The principles that drive innovation, collaboration, and
              excellence.
            </p>
          </motion.div>

          {/* Value Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-bg p-10 rounded-xl text-center shadow-lg hover:shadow-purple-500/20 border border-transparent hover:border-purple-500/20 transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-400/20 flex items-center justify-center">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {value.title}
                </h3>

                <p className="text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- WHAT WE DELIVER ---------------------- */}
      <section className="py-32 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              What We{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Deliver
              </span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Comprehensive solutions across multiple industries.
            </p>
          </motion.div>

          {/* Delivery Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-bg p-10 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all border border-transparent hover:border-purple-500/20"
              >
                <div className="w-20 h-20 mb-6 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-400/20 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {item.title}
                </h3>

                <p className="text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- IMPACT SECTION ---------------------- */}
      <section className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Our{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Impact
              </span>
            </h2>
            <p className="text-xl text-secondary">
              Numbers that speak for themselves.
            </p>
          </motion.div>

          {/* Stat Cards */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "117+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Team Members" },
              { number: "2024", label: "Founded" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-bg p-8 rounded-xl text-center shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">
                  {stat.number}
                </div>
                <p className="text-secondary font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- CTA SECTION ---------------------- */}
      <section className="py-24 section-bg-alt">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-secondary mb-10">
              Let's discuss how we can help you achieve your digital goals.
            </p>

            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-purple-600 dark:bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
