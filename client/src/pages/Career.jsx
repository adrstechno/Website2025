import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMapPin, FiBriefcase, FiClock, FiArrowRight, FiSend } from "react-icons/fi";
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
      badge: "Hot",
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
      badge: "New",
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
      badge: null,
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
      badge: null,
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
      icon: <MdPalette className="text-4xl text-blue-400" />,
      title: "Creative Environment",
      description:
        "Work in a collaborative space that encourages innovation and creativity",
    },
    {
      icon: <MdTrendingUp className="text-4xl text-blue-400" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement opportunities",
    },
    {
      icon: <MdAccessTime className="text-4xl text-blue-400" />,
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours",
    },
    {
      icon: <MdEmojiEvents className="text-4xl text-blue-400" />,
      title: "Recognition & Mentorship",
      description: "Regular recognition and guidance from experienced mentors",
    },
    {
      icon: <MdLaptopMac className="text-4xl text-blue-400" />,
      title: "Latest Technology",
      description: "Work with cutting-edge tools and technologies",
    },
    {
      icon: <MdHandshake className="text-4xl text-blue-400" />,
      title: "Team Culture",
      description: "Collaborative and supportive team environment",
    },
  ];

  const processSteps = [
    { step: "01", title: "Apply Online", description: "Submit your application through our portal" },
    { step: "02", title: "Initial Screening", description: "Our team reviews your application" },
    { step: "03", title: "Interview", description: "Technical and cultural fit assessment" },
    { step: "04", title: "Offer", description: "Welcome to the ADRS Techno family!" },
  ];

  return (
    <div className="section-bg pt-20">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        {/* Teal glow blob */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6">
              We're Hiring
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary">
              Build Your Career{" "}
              <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              Join ADRS Techno and work alongside talented engineers, designers,
              and marketers shaping the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────── */}
      <section className="py-24 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
              Why Work <span className="text-gradient">With Us?</span>
            </h2>
            <p className="text-xl text-secondary">
              Benefits and perks of joining ADRS Techno
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-bg p-7 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
              >
                <div className="w-16 h-16 mb-5 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{benefit.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ────────────────────────────── */}
      <section className="py-32 section-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
              Current <span className="text-gradient">Openings</span>
            </h2>
            <p className="text-xl text-secondary">
              Explore opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-bg p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    {/* Title + badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-primary">{job.title}</h3>
                      {job.badge && (
                        <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {job.badge}
                        </span>
                      )}
                    </div>

                    {/* Meta chips */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="flex items-center text-sm text-secondary bg-white/5 px-3 py-1 rounded-full">
                        <FiMapPin className="mr-2 text-blue-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center text-sm text-secondary bg-white/5 px-3 py-1 rounded-full">
                        <FiBriefcase className="mr-2 text-blue-400" />
                        {job.type}
                      </span>
                      <span className="flex items-center text-sm text-secondary bg-white/5 px-3 py-1 rounded-full">
                        <FiClock className="mr-2 text-blue-400" />
                        {job.experience}
                      </span>
                    </div>

                    <p className="text-secondary mb-4 leading-relaxed">{job.description}</p>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                      <ul className="space-y-1.5">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-secondary">
                            <span className="text-blue-400 mr-2 mt-0.5">▸</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:w-48 flex-shrink-0 flex items-center lg:items-start">
                    <Link
                      to="/apply"
                      className="w-full group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20"
                    >
                      Apply Now
                      <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ───────────────────────── */}
      <section className="py-32 section-bg-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">
              Application <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-secondary">Simple and transparent hiring process</p>
          </motion.div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="card-bg p-7 rounded-2xl text-center border border-white/5 hover:border-blue-500/20 transition-all"
                >
                  <div className="relative w-20 h-20 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-black text-blue-400">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{process.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-32 section-bg relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative icon */}
            <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-8">
              <FiSend className="text-3xl text-blue-400" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-xl text-secondary mb-10 leading-relaxed">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>

            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-10 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/30 group"
            >
              Send Your Resume
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;

