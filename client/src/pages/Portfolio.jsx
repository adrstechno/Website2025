import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiClock } from "react-icons/fi";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const projects = [
  {
    title: "Testwithspark",
    category: "EdTech SaaS",
    description: "A full-featured Learning Management System supporting 10,000+ students with live classes, assessments, certification, and progress analytics.",
    problem: "Educational institutions lacked a centralized, scalable platform for online education delivery.",
    solution: "Built a multi-tenant LMS with role-based access, live streaming, quiz engine, and automated certificate generation.",
    tags: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    timeline: "4 months",
    result: "10K+ active students · 95% satisfaction rate",
    color: "from-blue-600/20 to-indigo-600/20",
  },
  {
    title: "GoEventify",
    category: "Event Platform",
    description: "End-to-end event management suite covering ticketing, QR check-in, real-time attendee analytics, and Stripe payment integration.",
    problem: "Event organizers were managing multiple disconnected tools for ticketing, check-in, and analytics.",
    solution: "Developed a unified platform with mobile check-in app, real-time dashboard, and automated communications.",
    tags: ["Flutter", "Firebase", "Stripe", "Node.js"],
    timeline: "3 months",
    result: "50+ events managed · $200K+ in ticket sales processed",
    color: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "IDHPS Industrial System",
    category: "Enterprise Tool",
    description: "Industrial Document & Hardware Processing System for a manufacturing company, automating document workflows and inventory management.",
    problem: "Manual document handling was causing delays and errors in a high-volume manufacturing environment.",
    solution: "Built an automated processing pipeline with OCR, real-time inventory sync, and compliance reporting.",
    tags: ["React", "Python", "PostgreSQL", "OCR", "REST API"],
    timeline: "5 months",
    result: "70% reduction in manual effort · 99.9% document accuracy",
    color: "from-cyan-600/20 to-blue-600/20",
  },
  {
    title: "Adrs Spark",
    category: "Automation Platform",
    description: "Low-code workflow automation platform that lets non-technical users build custom automations between apps without writing code.",
    problem: "Small businesses were spending excessive time on repetitive manual tasks across multiple software tools.",
    solution: "Created a visual workflow builder with 50+ app integrations, conditional logic, and scheduling.",
    tags: ["React", "Node.js", "Redis", "OAuth2", "Webhooks"],
    timeline: "6 months",
    result: "3 enterprise clients · 80% time saved on manual tasks",
    color: "from-indigo-600/20 to-purple-600/20",
  },
  {
    title: "AI Customer Support Bot",
    category: "AI Automation",
    description: "GPT-powered customer support chatbot for an e-commerce platform that handles 80% of queries autonomously.",
    problem: "Support team was overwhelmed with repetitive queries, leading to slow response times and low CSAT.",
    solution: "Integrated GPT-4 with a fine-tuned knowledge base, escalation logic, and CRM sync.",
    tags: ["Python", "OpenAI", "LangChain", "FastAPI", "React"],
    timeline: "6 weeks",
    result: "80% query deflection · 60% cost reduction in support",
    color: "from-green-600/20 to-cyan-600/20",
  },
  {
    title: "Jewelry Inventory Manager",
    category: "Business Tool",
    description: "Custom inventory and order management system for a jewelry retailer with barcode scanning, invoicing, and WhatsApp order notifications.",
    problem: "Growing jewelry business needed better inventory visibility and faster order processing.",
    solution: "Built a web + mobile system with barcode scanning, real-time stock alerts, and automated WhatsApp notifications.",
    tags: ["React", "Node.js", "MySQL", "WhatsApp API"],
    timeline: "2 months",
    result: "30% faster order processing · Zero stock-out incidents",
    color: "from-yellow-600/20 to-orange-600/20",
  },
];

const normalizeCategory = (value) => value.trim().toLowerCase();
const categories = ["All", ...new Set(projects.map((project) => project.category.trim()))];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(
      (project) =>
        normalizeCategory(project.category) === normalizeCategory(active)
    );
  }, [active]);

  return (
    <div className="bg-[#08090B] min-h-screen">
      {/* Hero */}
      <section
        className="pt-24 pb-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            <span className="section-label">Our Work</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mb-4"
          >
            Portfolio & <span className="gradient-text">Case Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Real products built for real clients. Each project tells a story of a problem solved.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
              style={active === cat
                ? { background: "#E5E7EB", color: "#111827" }
                : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <motion.div
          key={active}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((proj, i) => (
            <motion.div key={proj.title} variants={fadeUp}>
              <div
                className={`p-7 rounded-xl h-full bg-gradient-to-br ${proj.color} card-lift`}
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full inline-block mb-4">
                  {proj.category}
                </span>
                <h3 className="text-xl font-bold font-display text-white mb-2">{proj.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{proj.description}</p>

                <div className="space-y-3 mb-5 p-4 rounded-lg" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-xs text-slate-300">{proj.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-xs text-slate-300">{proj.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded text-slate-300"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <FiClock className="w-3.5 h-3.5" />
                    {proj.timeline}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-green-400 font-semibold">
                    <FiCheckCircle className="w-3.5 h-3.5" />
                    {proj.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <section
        className="py-20 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(12,12,14,0.5)" }}
      >
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-slate-400 mb-8">Let's build something great together. Free consultation, no commitment.</p>
          <Link
            to="/contact"
            className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
          >
            Start Your Project <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;



