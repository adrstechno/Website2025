import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiStar,
  FiCode,
  FiSmartphone,
  FiZap,
  FiCloud,
  FiUsers,
  FiShield,
  FiClock,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";
import {
  MdAssignment,
  MdEvent,
  MdAutoAwesome,
  MdSupportAgent,
} from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import {
  SiReact,
  SiNodedotjs,
  SiFlutter,
  SiPython,
  SiMongodb,
  SiAmazonwebservices,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import Hero from "../components/Hero";
import { STATS, WA } from "../constants/company";

/* ─── Fade-up animation variant ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Section heading component ─── */
const SectionHeading = ({ badge, title, subtitle, light = false }) => (
  <div className="text-center max-w-2xl mx-auto mb-16">
    <div className="flex justify-center mb-4">
      <span className="section-label">{badge}</span>
    </div>
    <h2
      className={`text-4xl sm:text-5xl font-extrabold font-display leading-tight mb-4 ${light ? "text-white" : "text-white"}`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 text-lg leading-relaxed">{subtitle}</p>
    )}
  </div>
);

/* ─── Data ─── */
const services = [
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Full-stack web applications with React, Next.js, Node.js. From MVPs to enterprise platforms.",
    tags: ["React", "Next.js", "Node.js"],
    href: "/services",
  },
  {
    icon: <FiSmartphone className="w-6 h-6" />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps for iOS and Android using Flutter and React Native.",
    tags: ["Flutter", "React Native", "iOS/Android"],
    href: "/services",
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "AI Automation",
    description:
      "Intelligent automation, LLM integrations, chatbots, and AI-powered workflows.",
    tags: ["OpenAI", "LangChain", "Python"],
    href: "/services",
  },
  {
    icon: <MdAutoAwesome className="w-6 h-6" />,
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development with multi-tenancy, billing, and analytics.",
    tags: ["SaaS", "Multi-tenant", "Stripe"],
    href: "/services",
  },
  {
    icon: <MdSupportAgent className="w-6 h-6" />,
    title: "BPO Solutions",
    description:
      "Offshore business process operations — customer support, data entry, back-office.",
    tags: ["Customer Support", "Data Entry", "Back-office"],
    href: "/services",
  },
  {
    icon: <FiCloud className="w-6 h-6" />,
    title: "Cloud & DevOps",
    description:
      "CI/CD pipelines, AWS/GCP infrastructure, Docker, Kubernetes, and monitoring.",
    tags: ["AWS", "Docker", "Kubernetes"],
    href: "/services",
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Dedicated Developers",
    description:
      "Hire pre-vetted developers who integrate seamlessly into your team and timezone.",
    tags: ["Remote Teams", "Full-time", "Part-time"],
    href: "/hire-developers",
  },
];

const whyChoose = [
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Fast Delivery",
    desc: "We ship production-ready features in weeks, not months, using Agile sprints.",
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "Agile Development",
    desc: "Iterative development with bi-weekly demos and full transparency at every step.",
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "NDA Protection",
    desc: "Full IP ownership and strict NDAs ensure your ideas stay confidential.",
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Dedicated Teams",
    desc: "Your own dedicated team — engineers, designer, and PM — focused solely on you.",
  },
  {
    icon: <FiAward className="w-6 h-6" />,
    title: "Cost Effective",
    desc: "World-class quality at 60% lower cost than US/EU agencies. No hidden fees.",
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: "Long-Term Support",
    desc: "We don't disappear after launch. Ongoing maintenance, updates, and scaling support.",
  },
];

const techStack = [
  { icon: <SiReact />, name: "React", color: "#E5E7EB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#D1D5DB" },
  { icon: <SiFlutter />, name: "Flutter", color: "#D1D5DB" },
  { icon: <SiPython />, name: "Python", color: "#D1D5DB" },
  { icon: <SiAmazonwebservices />, name: "AWS", color: "#D1D5DB" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#D1D5DB" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#D1D5DB" },
];

/* NOTE: Replace with real verified client testimonials when available.
   Link to LinkedIn profiles and add photos for maximum credibility. */
const testimonials = [
  {
    name: "James R.",
    role: "CTO",
    company: "TechFlow Inc.",
    flag: "🇺🇸",
    country: "United States",
    project: "SaaS Platform",
    rating: 5,
    text: "ADRS Techno delivered our SaaS platform 2 weeks ahead of schedule. Clean code, excellent communication, and they flagged potential issues before they became problems. Genuinely impressed.",
    avatar: "JR",
    color: "#2563EB",
  },
  {
    name: "Sarah L.",
    role: "Founder",
    company: "EduStart",
    flag: "🇬🇧",
    country: "United Kingdom",
    project: "Mobile App + BPO",
    rating: 5,
    text: "We hired ADRS for our mobile app and later expanded to their BPO support team. Both were exceptional. They understood our vision without lengthy briefings. Would hire again immediately.",
    avatar: "SL",
    color: "#6366F1",
  },
  {
    name: "Ahmed K.",
    role: "Head of Product",
    company: "FinTech Ventures",
    flag: "🇦🇪",
    country: "United Arab Emirates",
    project: "AI Automation System",
    rating: 5,
    text: "Our AI automation system went live on time and the ROI was measurable within the first month. ADRS were honest about trade-offs, not just agreeable. That's rare in outsourcing.",
    avatar: "AK",
    color: "#06B6D4",
  },
];

const portfolioItems = [
  {
    title: "Test With Spark",
    category: "EdTech SaaS",
    description:
      "A full-featured LMS with live classes, assessments, and progress analytics for 10,000+ students.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-blue-600/20 to-indigo-600/20",
  },
  {
    title: "GoEventify",
    category: "Event Platform",
    description:
      "Event management suite with ticketing, check-in, real-time analytics, and payment integration.",
    tags: ["Flutter", "Firebase", "Stripe"],
    color: "from-purple-600/20 to-blue-600/20",
  },
  {
    title: "IDHPS System",
    category: "Enterprise Tool",
    description:
      "Industrial document & hardware processing system for a manufacturing enterprise.",
    tags: ["React", "Python", "PostgreSQL"],
    color: "from-cyan-600/20 to-blue-600/20",
  },
  {
    title: "Adrs Spark",
    category: "Automation",
    description:
      "Low-code workflow automation platform that reduced manual tasks by 70% for 3 clients.",
    tags: ["Node.js", "AI", "REST API"],
    color: "from-indigo-600/20 to-purple-600/20",
  },
];

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Depending on complexity, most MVPs are delivered in 4-8 weeks. Full-scale enterprise projects take 3-6 months. We provide detailed timelines during consultation.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, absolutely. We sign NDA agreements before any project discussion. Your IP, ideas, and business data are fully protected.",
  },
  {
    q: "How does the dedicated developer model work?",
    a: "You hire one or more of our pre-vetted developers full-time or part-time. They work in your timezone, attend your stand-ups, and are fully dedicated to your project.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Our core stack includes React, Next.js, Node.js, Flutter, Python, AWS, MongoDB, and AI/LLM tools. We adapt to your existing tech stack when needed.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer flexible maintenance plans — from basic bug fixes to full ongoing feature development and 24/7 monitoring support.",
  },
  {
    q: "What are your pricing models?",
    a: "We offer Fixed Price (for defined scope), Time & Material (for evolving requirements), and Dedicated Team (for ongoing development) pricing models.",
  },
];

/* Stats pulled from single source of truth in constants/company.js */

/* ─── FAQ Accordion ─── */
const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b transition-colors"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <button
        className="w-full flex items-center justify-between py-5 px-1 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-semibold text-slate-100 pr-4">{q}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-blue-400 transition-transform"
          style={{
            background: "rgba(255,255,255,0.15)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-3 h-3"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16M4 12h16"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5 px-1">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => (
  <div className="bg-[#08090B]">
    {/* ───────────── HERO ───────────── */}
    <Hero />

    {/* ───────────── SERVICES ───────────── */}
    <section className="py-24 relative" id="services">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          badge="What We Build"
          title="Our Core Services"
          subtitle="Full-spectrum software development and business solutions designed for global scale."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Link to={svc.href} className="group block h-full">
                <div
                  className="h-full p-6 rounded-xl card-lift"
                  style={{
                    background: "rgba(17,17,20,0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-blue-400 mb-5"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {svc.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded text-slate-400"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs text-blue-400 font-semibold group-hover:gap-2 transition-all">
                    Learn More <FiArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
          >
            View All Services <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* ───────────── STATS BANNER ───────────── */}
    <section
      className="py-20 border-y"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "rgba(17,17,20,0.5)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-8 sm:py-10 px-4 sm:px-8 text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display stat-number leading-none">
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  separator=","
                />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ───────────── WHY CHOOSE US ───────────── */}
    <section className="py-24" id="why-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          badge="Why Choose ADRS Techno"
          title={
            <>
              Built for <span className="gradient-text">Speed & Trust</span>
            </>
          }
          subtitle="We don't just write code. We build partnerships that deliver measurable business results."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChoose.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                className="p-6 rounded-xl h-full"
                style={{
                  background: "rgba(17,17,20,0.4)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-blue-400 mb-4"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ───────────── PORTFOLIO ───────────── */}
    <section
      className="py-24 border-y"
      id="portfolio"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "rgba(12,12,14,0.6)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          badge="Our Work"
          title="Featured Projects"
          subtitle="A selection of products we've built for clients across industries."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {portfolioItems.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                className={`p-8 rounded-xl h-full bg-gradient-to-br ${item.color} card-lift`}
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full mb-4 inline-block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold font-display text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded text-slate-300"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    to="/portfolio"
                    className="text-xs font-bold text-white flex items-center gap-1 hover:text-blue-400 transition-colors"
                  >
                    Case Study <FiArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white hover:text-blue-400 transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            View Full Portfolio <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* ───────────── TECHNOLOGY STACK ───────────── */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          badge="Technology"
          title="Our Tech Stack"
          subtitle="We use modern, battle-tested technologies to build fast, scalable, maintainable products."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="tech-badge"
            >
              <span style={{ color: tech.color, fontSize: "1.25rem" }}>
                {tech.icon}
              </span>
              <span className="text-slate-300 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ───────────── HIRE DEVELOPERS CTA ───────────── */}
    <section
      className="py-20 border-y"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-10 lg:p-14 rounded-2xl text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(209,213,219,0.15) 100%)",
            border: "1px solid rgba(229,231,235,0.3)",
          }}
        >
          <span className="section-label mb-4 inline-flex">Hire Talent</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white mb-4">
            Need a Dedicated Developer?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Hire pre-vetted React, Flutter, MERN, or AI engineers who work as an
            extension of your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/hire-developers"
              className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-colors"
            >
              Hire Developers <FiArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WA.hire}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-green-400"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <BsWhatsapp className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            {[
              "React Developers",
              "Flutter Developers",
              "MERN Stack",
              "AI Engineers",
              "Full-stack Teams",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <FiCheck className="w-3.5 h-3.5 text-blue-400" /> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* ───────────── TESTIMONIALS ───────────── */}
    <section className="py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          badge="Client Reviews"
          title="What Our Clients Say"
          subtitle="Real feedback from businesses we've helped build and scale."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                className="flex flex-col h-full p-7 rounded-2xl card-lift"
                style={{
                  background: "rgba(19,28,46,0.6)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Top: stars + project tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <FiStar
                        key={j}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full text-blue-400"
                    style={{ background: "rgba(37,99,235,0.15)" }}
                  >
                    {t.project}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Footer: avatar + name + verified */}
                <div
                  className="flex items-center gap-3 pt-5 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-slate-400 truncate">
                      {t.role}, {t.company}
                    </div>
                  </div>
                  <span className="text-lg flex-shrink-0" title={t.country}>
                    {t.flag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clutch CTA — builds anticipation for real reviews */}
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-3">
            Collecting verified reviews on Clutch &amp; Google Business.
          </p>
          <a
            href="https://clutch.co"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            View our Clutch profile → (coming soon)
          </a>
        </div>
      </div>
    </section>

    {/* ───────────── FOUNDER SECTION ───────────── */}
    <section
      className="py-24 border-y"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "rgba(12,12,14,0.5)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label mb-6 inline-flex">
            From the Founders
          </span>
          <blockquote className="text-2xl sm:text-3xl font-display font-semibold text-white leading-snug mb-8 italic">
            "We started ADRS Techno with one mission — to make world-class
            technology accessible to every business, regardless of size or
            geography. Every project we take on is a commitment to that
            mission."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-blue-400"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              A
            </div>
            <div className="text-left">
              <div className="font-bold text-white">ADRS Techno Leadership</div>
              <div className="text-sm text-slate-400">
                Founding Team · Jabalpur, India
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Meet the Full Team <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ───────────── FAQ ───────────── */}
    <section className="py-24" id="faq">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before working with us."
        />

        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(17,17,20,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Still have questions?{" "}
          <Link
            to="/contact"
            className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
          >
            Contact us directly →
          </Link>
        </p>
      </div>
    </section>

    {/* ───────────── CONTACT / CTA ───────────── */}
    <section
      className="py-24 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-6 inline-flex">
              Start a Project
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white leading-tight mb-5">
              Ready to Build
              <br />
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Tell us your vision. We'll craft the roadmap, assemble the team,
              and deliver results that exceed expectations.
            </p>
            <div className="space-y-3">
              {[
                "Free project consultation & estimate",
                "NDA signed before any discussion",
                "Response within 24 hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-900/50 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                    <FiCheck className="w-3 h-3 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — quick lead form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(17,17,20,0.7)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3 className="text-xl font-bold font-display text-white mb-6">
                Get a Free Quote
              </h3>
              <QuickLeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ───────────── ABOUT STRIP ───────────── */}
    <section
      className="py-20 bg-white/[0.02] border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-5 inline-flex">Who We Are</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white leading-tight mb-5">
              Enterprise Tech Built
              <br />
              for the Real World
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg mb-7">
              Established in 2024, ADRS Techno Pvt. Ltd. delivers
              enterprise-grade software, automation systems, and digital
              transformation solutions. We empower businesses globally by
              translating complex tech challenges into operational value.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More{" "}
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors ml-6"
              >
                Our Services{" "}
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "2022", label: "Year Founded" },
              { value: "40+", label: "Specialists" },
              { value: "6+", label: "Countries Served" },
              { value: "100+", label: "Projects Delivered" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(17,17,20,0.6)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-3xl font-extrabold font-display text-blue-400 mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* ───────────── PRODUCTS ───────────── */}
    <section
      className="py-24 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-5">
          <div>
            <span className="section-label mb-4 inline-flex">Our Products</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white leading-tight">
              Our Digital Products
            </h2>
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors flex-shrink-0"
          >
            All Products{" "}
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              title: "Test With Spark",
              desc: "Full-featured assessment and testing platform for training and certification.",
              icon: <MdAssignment className="w-6 h-6" />,
            },
            {
              title: "ADRS LMS",
              desc: "Learning management system for course delivery, progress tracking, and reporting.",
              icon: <PiGraduationCapFill className="w-6 h-6" />,
            },
            {
              title: "Adrs Spark",
              desc: "Low-code automation platform that accelerates workflows and smart integrations.",
              icon: <MdAutoAwesome className="w-6 h-6" />,
            },
            {
              title: "GoEventify",
              desc: "Event management suite for ticketing, scheduling, check-in, and real-time analytics.",
              icon: <MdEvent className="w-6 h-6" />,
            },
          ].map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-7 rounded-xl card-lift"
              style={{
                background: "rgba(17,17,20,0.5)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-blue-400">{prod.icon}</div>
                <FiArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-blue-400 transition-colors">
                {prod.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {prod.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

/* ─── Quick Lead Form ─── */
const QuickLeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "AI Automation",
    "SaaS",
    "BPO",
    "Cloud / DevOps",
    "Hire Developers",
    "Other",
  ];
  const budgets = [
    "< $1,000",
    "$1,000 – $5,000",
    "$5,000 – $20,000",
    "$20,000+",
    "Discuss with team",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-green-900/40 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
          <FiCheck className="w-6 h-6 text-green-400" />
        </div>
        <h4 className="text-lg font-bold text-white mb-2">Message Received!</h4>
        <p className="text-slate-400 text-sm">
          We'll get back to you within 24 hours.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-block text-sm text-blue-400 font-semibold hover:text-blue-300 transition-colors"
        >
          Visit full contact page →
        </Link>
      </div>
    );
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "#f1f5f9",
    outline: "none",
    width: "100%",
    padding: "10px 14px",
    fontSize: "0.875rem",
  };
  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: "600",
    color: "#94a3b8",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Name *</label>
          <input
            required
            style={inputStyle}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input
            type="tel"
            style={inputStyle}
            placeholder="+1 000 000 0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email *</label>
        <input
          required
          type="email"
          style={inputStyle}
          placeholder="you@company.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Project Type</label>
          <select
            style={inputStyle}
            value={form.projectType}
            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          >
            <option value="">Select...</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Budget</label>
          <select
            style={inputStyle}
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option value="">Select...</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          rows={3}
          style={inputStyle}
          placeholder="Brief description of your project..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-glow w-full py-4 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>
      <p className="text-xs text-slate-500 text-center">
        Free consultation · No commitment · NDA available
      </p>
    </form>
  );
};

export default Home;
