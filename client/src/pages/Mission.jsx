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
} from "react-icons/md"
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Mission = () => {
  /* ---------------------- CORE VALUES ---------------------- */
  const values = [
    {
      title: "Innovation",
      description:
        "Pushing boundaries with new solutions. We constantly explore emerging technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.",
      icon: <MdLightbulb className="text-5xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Reliability",
      description:
        "Robust, tested architectures. Every solution we build undergoes rigorous testing and quality assurance to ensure it performs flawlessly in production environments.",
      icon: <MdSecurity className="text-5xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Client Focus",
      description:
        "Tailored approach to business needs. We take time to understand your unique challenges and goals, crafting solutions that align perfectly with your business objectives.",
      icon: <MdTrackChanges className="text-5xl text-blue-600 dark:text-blue-400" />,
    },
  ];

  /* ---------------------- WHAT WE DELIVER ---------------------- */
  const offerings = [
    {
      title: "Healthcare Solutions",
      description:
        "IDHPS platform for appointments, telemedicine, and electronic health records management.",
      icon: <MdHealthAndSafety className="text-5xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Retail Management",
      description:
        "Jewelry Manager for inventory, billing, and customer relationship management.",
      icon: <MdDiamond className="text-5xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Education Technology",
      description:
        "ADRS Learn Pro LMS with progress tracking, analytics, and certification.",
      icon: <MdSchool className="text-5xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Enterprise Solutions",
      description:
        "Custom ERP systems with workflow automation, reporting, and integration capabilities.",
      icon: <MdBusinessCenter className="text-5xl text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-black pt-20 transition-colors duration-300">

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-4"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Our <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Mission</span>
            </h1>
            <p className="text-xl text-slate-650 dark:text-slate-350 leading-relaxed font-sans max-w-2xl mx-auto">
              Transforming businesses through innovative, secure, and scalable digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 section-bg-alt border-t border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-bg p-8 sm:p-12 rounded-2xl text-center border border-slate-200 dark:border-white/10 shadow-lg"
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display mb-6 text-slate-900 dark:text-white leading-tight">
              Deliver Cutting-Edge Digital Solutions That Transform Businesses
            </h2>
            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto font-sans">
              At ADRS Techno Private Limited, our mission is to empower businesses with scalable, secure, and customized digital solutions. We deliver innovative technology across healthcare, retail, education, and enterprise sectors—helping organizations achieve true digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
              The principles that drive innovation, collaboration, and engineering excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="interactive-card card-bg p-8 rounded-2xl text-center hover:border-blue-500/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed font-sans">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 section-bg-alt border-t border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              What We <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
              Comprehensive and high-performance solutions across multiple industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-bg p-8 rounded-2xl hover:border-blue-500/20 hover:shadow-xl transition-all duration-300 flex items-start gap-5"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-655 dark:text-slate-400 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white">
              Our <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
              Measurable statistics behind our deployments.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "117+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Team Members" },
              { number: "2024", label: "Founded" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-bg p-8 rounded-2xl text-center hover:border-blue-500/20 transition-all duration-300 shadow-sm"
              >
                <div className="text-4xl sm:text-5xl font-extrabold font-display text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-zinc-950 dark:to-black text-white relative overflow-hidden border-t border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] -z-10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-100 dark:text-slate-350 max-w-2xl mx-auto font-sans leading-relaxed">
              Let’s start scoping the right software, cloud infrastructure, or operations model for your needs.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-white dark:bg-blue-500 text-blue-800 dark:text-white font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-blue-400 hover:shadow-lg transition-all"
              >
                Start Your Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

