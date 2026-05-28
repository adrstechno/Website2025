import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiZap, FiCpu, FiMessageSquare, FiBarChart2, FiRefreshCw, FiSettings, FiCheck } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { useModal } from "../context/ModalContext";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const solutions = [
  { icon: <FiMessageSquare className="w-6 h-6" />, title: "AI Chatbots & Assistants", color: "from-blue-600/20 to-cyan-600/20", desc: "GPT-powered chatbots for customer support, lead qualification, and internal knowledge bases. 24/7 availability with human-like responses.", points: ["GPT-4 Integration", "Multi-language Support", "CRM Sync", "Custom Knowledge Base"] },
  { icon: <FiRefreshCw className="w-6 h-6" />, title: "Workflow Automation", color: "from-indigo-600/20 to-purple-600/20", desc: "Automate repetitive business processes across departments. Connect apps, trigger actions, and eliminate manual work.", points: ["Process Mapping", "App Integrations (100+)", "Error Handling", "Audit Trails"] },
  { icon: <FiBarChart2 className="w-6 h-6" />, title: "Data Automation", color: "from-purple-600/20 to-pink-600/20", desc: "Automated data extraction, transformation, enrichment, and reporting pipelines. From raw data to actionable insights.", points: ["ETL Pipelines", "Automated Reporting", "Data Enrichment", "Anomaly Detection"] },
  { icon: <FiSettings className="w-6 h-6" />, title: "CRM & Sales Automation", color: "from-green-600/20 to-cyan-600/20", desc: "Automate lead scoring, follow-up sequences, deal updates, and sales reporting within your CRM.", points: ["Lead Scoring", "Email Sequences", "Pipeline Automation", "Sales Forecasting"] },
  { icon: <FiCpu className="w-6 h-6" />, title: "Document Processing", color: "from-cyan-600/20 to-blue-600/20", desc: "AI-powered OCR and document understanding to extract, validate, and process data from invoices, contracts, and forms.", points: ["OCR Extraction", "Invoice Processing", "Contract Analysis", "Form Validation"] },
  { icon: <FiZap className="w-6 h-6" />, title: "Business Process Automation", color: "from-orange-600/20 to-yellow-600/20", desc: "End-to-end automation of complex multi-step business processes across HR, Finance, Operations, and Customer Service.", points: ["HR Onboarding", "Invoice Approval", "IT Ticketing", "Customer Onboarding"] },
];

const useCases = [
  { industry: "E-commerce", before: "Manual order processing taking 2 hours/day", after: "Automated order management — zero manual effort", saving: "10 hrs/week saved" },
  { industry: "Real Estate", before: "Sales team manually qualifying 200 leads/week", after: "AI chatbot pre-qualifies leads 24/7", saving: "60% faster lead response" },
  { industry: "Healthcare", before: "Staff manually extracting data from patient forms", after: "AI extracts and populates EHR automatically", saving: "95% reduction in data entry errors" },
  { industry: "Finance", before: "Invoice processing took 3 days per batch", after: "Automated AI extraction and approval workflow", saving: "From 3 days to 2 hours" },
];

const AIAutomation = () => {
  const { openModal } = useModal();

  return (
  <div className="bg-[#08090B] min-h-screen">
    {/* Hero */}
    <section className="pt-24 pb-16 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* AI glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(209,213,219,0.2) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <span className="section-label mb-4 inline-flex">AI Automation</span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mb-4">
          Automate Your Business with <span className="gradient-text">AI-Powered Systems</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg mb-8">
          From chatbots to complex workflow automation — we build intelligent systems that work around the clock so your team doesn't have to.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            type="button"
            onClick={() => openModal("services")}
            className="btn-glow inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl"
          >
            Book AI Consultation <FiArrowRight className="w-4 h-4" />
          </button>
          <a href="https://wa.me/919201347033" target="_blank" rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-green-400"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)" }}>
            <BsWhatsapp className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>

    {/* Key stats */}
    <section className="py-10 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(17,17,20,0.3)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[["70%", "Average time saved"], ["50%", "Cost reduction"], ["24/7", "Automation runs"], ["3x", "Team productivity"]].map(([val, label], i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold font-display stat-number">{val}</div>
              <div className="text-xs text-slate-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Solutions */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">What We Automate</span>
          <h2 className="text-4xl font-extrabold font-display text-white">AI Automation Solutions</h2>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className={`p-7 rounded-xl h-full bg-gradient-to-br ${sol.color} card-lift`}
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-400 mb-4"
                  style={{ background: "rgba(255,255,255,0.2)" }}>{sol.icon}</div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{sol.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{sol.desc}</p>
                <ul className="space-y-1.5">
                  {sol.points.map(p => (
                    <li key={p} className="text-xs text-slate-400 flex items-center gap-2">
                      <FiCheck className="w-3 h-3 text-blue-400 flex-shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Use cases */}
    <section className="py-20 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(12,12,14,0.5)" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-flex">Real Results</span>
          <h2 className="text-3xl font-extrabold font-display text-white">Automation in Action</h2>
        </div>
        <div className="space-y-4">
          {useCases.map((uc, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl grid sm:grid-cols-4 gap-4 items-center"
              style={{ background: "rgba(17,17,20,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{uc.industry}</span>
              </div>
              <div className="text-sm text-slate-400"><span className="text-red-400 font-semibold">Before: </span>{uc.before}</div>
              <div className="text-sm text-slate-300"><span className="text-green-400 font-semibold">After: </span>{uc.after}</div>
              <div className="text-right">
                <span className="text-xs font-bold text-green-400 bg-green-900/20 px-3 py-1 rounded-full">{uc.saving}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="max-w-md mx-auto px-6">
        <h2 className="text-2xl font-extrabold font-display text-white mb-3">What Can We Automate for You?</h2>
        <p className="text-slate-400 text-sm mb-7">Book a free AI audit — we'll map your processes and identify automation opportunities.</p>
        <button
          type="button"
          onClick={() => openModal("services")}
          className="btn-glow inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
        >
          Book Free AI Audit <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  </div>
  );
};

export default AIAutomation;



