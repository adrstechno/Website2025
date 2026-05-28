import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiStar, FiClock, FiShield, FiUsers, FiCode, FiSmartphone, FiZap } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { SiReact, SiFlutter, SiNodedotjs, SiPython } from "react-icons/si";
import { WA, DEV_RATES } from "../constants/company";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* Pricing note: displayed range, actual rate confirmed on discovery call */
const roles = [
  {
    id: "react",
    icon: <SiReact className="w-6 h-6" style={{ color: "#61DAFB" }} />,
    title: "React Developers",
    skills: ["React 18+", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    exp: "2–7 years",
    from: "$25–$40/hr",
  },
  {
    id: "flutter",
    icon: <SiFlutter className="w-6 h-6" style={{ color: "#54C5F8" }} />,
    title: "Flutter Developers",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management"],
    exp: "2–6 years",
    from: "$25–$38/hr",
  },
  {
    id: "mern",
    icon: <SiNodedotjs className="w-6 h-6" style={{ color: "#68A063" }} />,
    title: "MERN Stack Developers",
    skills: ["MongoDB", "Express", "React", "Node.js", "GraphQL"],
    exp: "2–8 years",
    from: "$28–$42/hr",
  },
  {
    id: "ai",
    icon: <SiPython className="w-6 h-6" style={{ color: "#FFD43B" }} />,
    title: "AI / ML Engineers",
    skills: ["Python", "OpenAI", "LangChain", "TensorFlow", "FastAPI"],
    exp: "3–8 years",
    from: "$35–$45/hr",
  },
  {
    id: "fullstack",
    icon: <FiCode className="w-6 h-6 text-indigo-400" />,
    title: "Full-Stack Developers",
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    exp: "3–7 years",
    from: "$30–$45/hr",
  },
  {
    id: "mobile",
    icon: <FiSmartphone className="w-6 h-6 text-cyan-400" />,
    title: "Mobile App Developers",
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    exp: "2–6 years",
    from: "$25–$40/hr",
  },
];

const process = [
  { step: "01", title: "Share Requirements", desc: "Tell us about your project, team size, skills needed, and timeline." },
  { step: "02", title: "We Match You", desc: "Within 24–48 hours, we send you 2-3 pre-vetted developer profiles." },
  { step: "03", title: "Interview & Select", desc: "Conduct technical interviews. Choose who fits your team best." },
  { step: "04", title: "Onboard & Build", desc: "Developer joins your team, attends stand-ups, and delivers sprint by sprint." },
];

const guarantees = [
  { icon: <FiShield />, text: "14-day risk-free trial" },
  { icon: <FiClock />, text: "Timezone-matched availability" },
  { icon: <FiUsers />, text: "Dedicated, not shared" },
  { icon: <FiStar />, text: "Pre-vetted & interviewed" },
  { icon: <FiZap />, text: "Onboard in 3–5 days" },
  { icon: <FiCheck />, text: "NDA & IP protection" },
];

const HireDevelopers = () => (
  <div className="bg-[#08090B] min-h-screen">
    {/* Hero */}
    <section
      className="pt-24 pb-16 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}
    >
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
          <span className="section-label">Hire Talent</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mb-4"
        >
          Hire <span className="gradient-text">World-Class Developers</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-8"
        >
          Pre-vetted React, Flutter, MERN, and AI engineers ready to join your team in 3–5 days.
          Rates from $25–$45/hr · Pre-vetted · Onboard in 3–5 days · NDA protected.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={WA.hire}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-glow inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl"
          >
            Hire Now — Free Consultation <FiArrowRight className="w-4 h-4" />
          </a>
          <a
            href={WA.hire}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-green-400"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            <BsWhatsapp className="w-4 h-4" /> WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>

    {/* Guarantees */}
    <section id="dedicated-teams" className="py-12 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(17,17,20,0.3)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {guarantees.map((g, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-blue-400">{g.icon}</span>
              {g.text}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Roles */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Available Talent</span>
          <h2 className="text-4xl font-extrabold font-display text-white">Choose Your Developer Role</h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {roles.map((role, i) => (
            <motion.div id={role.id} key={role.id} variants={fadeUp} className="h-full scroll-mt-28">
              <div
                className="flex flex-col h-full p-6 rounded-xl card-lift"
                style={{ background: "rgba(17,17,20,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    {role.icon}
                  </div>
                  <h3 className="font-bold font-display text-white leading-snug">{role.title}</h3>
                </div>

                {/* Skills — flex-1 so all cards grow to same height */}
                <div className="flex flex-wrap gap-1.5 flex-1 content-start mb-4">
                  {role.skills.map(s => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded text-slate-400"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer — always pinned to bottom */}
                <div className="border-t pt-4 mt-auto" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="text-slate-400">Exp: {role.exp}</span>
                    <span className="text-blue-400 font-bold">From {role.from}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    style={{ background: "rgba(255,255,255,0.3)", border: "1px solid rgba(229,231,235,0.4)" }}
                  >
                    Hire Now <FiArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 border-t" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(12,12,14,0.5)" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">How It Works</span>
          <h2 className="text-4xl font-extrabold font-display text-white">Onboard in 4 Simple Steps</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl"
              style={{ background: "rgba(17,17,20,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="text-4xl font-black font-display gradient-text mb-3">{step.step}</div>
              <h3 className="font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-20 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-display text-white mb-4">Ready to Hire?</h2>
        <p className="text-slate-400 mb-8">Tell us what you need and we'll match you with the right developer within 48 hours.</p>
        <Link
          to="/contact"
          className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
        >
          Get Started — It's Free <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default HireDevelopers;




