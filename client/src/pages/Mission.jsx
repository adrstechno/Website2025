import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MdLightbulb,
  MdSecurity,
  MdTrackChanges,
  MdHealthAndSafety,
  MdDiamond,
  MdSchool,
  MdBusinessCenter,
} from "react-icons/md";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import { STATS } from "../constants/company";

const card = {
  background: "rgba(17,17,20,0.6)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
};
const Wrap = ({ children }) => (
  <div className="max-w-7xl mx-auto px-6 lg:px-10">{children}</div>
);
const SLabel = ({ text }) => (
  <div className="mb-5">
    <span className="section-label">{text}</span>
  </div>
);

const Mission = () => {
  const values = [
    {
      title: "Innovation",
      icon: <MdLightbulb className="w-8 h-8" />,
      description:
        "Pushing boundaries with new solutions. We constantly explore emerging technologies to deliver cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      title: "Reliability",
      icon: <MdSecurity className="w-8 h-8" />,
      description:
        "Robust, tested architectures. Every solution we build undergoes rigorous testing to ensure it performs flawlessly in production environments.",
    },
    {
      title: "Client Focus",
      icon: <MdTrackChanges className="w-8 h-8" />,
      description:
        "Tailored approach to business needs. We take time to understand your unique challenges and craft solutions that align with your business objectives.",
    },
  ];

  const offerings = [
    {
      title: "Healthcare Solutions",
      icon: <MdHealthAndSafety className="w-8 h-8" />,
      description:
        "IDHPS platform for appointments, telemedicine, and electronic health records management.",
    },
    {
      title: "Retail Management",
      icon: <MdDiamond className="w-8 h-8" />,
      description:
        "Jewelry Manager for inventory, billing, and customer relationship management.",
    },
    {
      title: "Education Technology",
      icon: <MdSchool className="w-8 h-8" />,
      description:
        "Test With Spark LMS with progress tracking, analytics, and certification.",
    },
    {
      title: "Enterprise Solutions",
      icon: <MdBusinessCenter className="w-8 h-8" />,
      description:
        "Custom ERP systems with workflow automation, reporting, and integration capabilities.",
    },
  ];

  /* Use canonical STATS from constants — do not hardcode here */

  return (
    <div className="bg-[#08090B] min-h-screen">
      {/* HERO */}
      <section
        className="pt-24 pb-20 relative overflow-hidden text-center"
        style={{
          background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 400,
            top: -150,
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-label mb-4 inline-flex">Our Mission</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display text-white leading-tight mb-5"
          >
            Our <span className="gradient-text">Mission</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            Transforming businesses through innovative, secure, and scalable
            digital solutions.
          </motion.p>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section
        className="py-16 border-y"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <Wrap>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 sm:p-14 rounded-2xl text-center"
            style={card}
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mb-5 leading-tight">
              Deliver Cutting-Edge Digital Solutions That Transform Businesses
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
              At ADRS Techno Private Limited, our mission is to empower
              businesses with scalable, secure, and customized digital
              solutions. We deliver innovative technology across healthcare,
              retail, education, and enterprise sectors — helping organizations
              achieve true digital transformation.
            </p>
          </motion.div>
        </Wrap>
      </section>

      {/* CORE VALUES */}
      <section className="py-24">
        <Wrap>
          <div className="text-center mb-14">
            <SLabel text="Core Values" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-slate-400 mt-3">
              The principles that drive innovation, collaboration, and
              engineering excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl text-center card-lift"
                style={card}
              >
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center text-blue-400"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* WHAT WE DELIVER */}
      <section
        className="py-24 border-y"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "rgba(12,12,14,0.5)",
        }}
      >
        <Wrap>
          <div className="text-center mb-14">
            <SLabel text="Solutions" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
              What We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-slate-400 mt-3">
              Comprehensive and high-performance solutions across multiple
              industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl flex items-start gap-5 card-lift"
                style={card}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* IMPACT STATS */}
      <section className="py-24">
        <Wrap>
          <div className="text-center mb-14">
            <SLabel text="Impact" />
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-slate-400 mt-3">
              Measurable statistics behind our deployments.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl text-center card-lift"
                style={card}
              >
                <div className="text-4xl sm:text-5xl font-extrabold font-display text-blue-400 mb-2">
                  <CountUp
                    end={s.end}
                    suffix={s.suffix}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-slate-400 text-xs sm:text-sm font-semibold">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-lg mx-auto px-6">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-400 mb-7">
            Let's start scoping the right software, cloud infrastructure, or
            operations model for your needs.
          </p>
          <Link
            to="/contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
          >
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mission;
