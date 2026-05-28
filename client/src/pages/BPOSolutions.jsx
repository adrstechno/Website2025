import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiUsers, FiHeadphones, FiDatabase, FiTrendingUp, FiMail, FiFileText } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  { icon: <FiHeadphones className="w-6 h-6" />, title: "Customer Support", color: "from-blue-600/20 to-indigo-600/20", desc: "24/7 multichannel customer support via phone, email, chat, and social media. Trained agents, quality monitoring, and SLA adherence.", points: ["Live Chat Support", "Email Ticket Management", "Call Center Operations", "Social Media Support"] },
  { icon: <FiDatabase className="w-6 h-6" />, title: "Data Entry & Processing", color: "from-cyan-600/20 to-blue-600/20", desc: "High-accuracy data entry, validation, cleansing, and migration services with real-time quality checks.", points: ["Data Entry & Validation", "Document Processing", "Database Management", "Data Cleansing"] },
  { icon: <FiFileText className="w-6 h-6" />, title: "Back-Office Operations", color: "from-indigo-600/20 to-purple-600/20", desc: "Complete back-office management including accounts processing, HR administration, and compliance documentation.", points: ["Invoice Processing", "HR Administration", "Compliance Reporting", "Document Management"] },
  { icon: <FiTrendingUp className="w-6 h-6" />, title: "Lead Generation", color: "from-green-600/20 to-cyan-600/20", desc: "Targeted B2B and B2C lead generation, prospecting, and appointment setting for your sales pipeline.", points: ["B2B Prospecting", "Appointment Setting", "CRM Data Enrichment", "Follow-up Sequences"] },
  { icon: <FiUsers className="w-6 h-6" />, title: "Virtual Assistance", color: "from-purple-600/20 to-pink-600/20", desc: "Dedicated virtual assistants for scheduling, research, correspondence, and administrative tasks.", points: ["Calendar Management", "Email Correspondence", "Research & Reporting", "Administrative Tasks"] },
  { icon: <FiMail className="w-6 h-6" />, title: "Content Moderation", color: "from-orange-600/20 to-yellow-600/20", desc: "Scalable content review and moderation for platforms — user-generated content, comments, images, and listings.", points: ["User Content Review", "Policy Enforcement", "Image/Video Moderation", "Compliance Checks"] },
];

const process = [
  { step: "01", title: "Requirement Analysis", desc: "We understand your process, volume, SLAs, and quality standards." },
  { step: "02", title: "Team Setup", desc: "We recruit, train, and deploy a dedicated team aligned with your processes." },
  { step: "03", title: "Quality Framework", desc: "Implement QA checks, KPI tracking, and daily/weekly reporting." },
  { step: "04", title: "Continuous Improvement", desc: "Regular reviews, process optimization, and scaling as needed." },
];

const BPOSolutions = () => (
  <div className="bg-[#08090B] min-h-screen">
    {/* Hero */}
    <section className="pt-24 pb-16 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <span className="section-label mb-4 inline-flex">BPO Solutions</span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mb-4">
          Scale Operations with <span className="gradient-text">Expert BPO Teams</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg mb-8">
          Offshore business process outsourcing that reduces costs by 50–60% while maintaining world-class quality standards.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl">
            Get BPO Quote <FiArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://wa.me/919201347033" target="_blank" rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-green-400"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.25)" }}>
            <BsWhatsapp className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>

    {/* Key benefits */}
    <section className="py-12 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(17,17,20,0.3)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {["50–60% Cost Reduction", "24/7 Availability", "99.5% Quality Accuracy", "14-Day Onboarding", "NDA Protected", "Scalable Teams"].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <FiCheck className="w-4 h-4 text-blue-400" /> {b}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Our BPO Services</span>
          <h2 className="text-4xl font-extrabold font-display text-white">End-to-End BPO Capabilities</h2>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className={`p-7 rounded-xl h-full bg-gradient-to-br ${svc.color} card-lift`}
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-400 mb-4"
                  style={{ background: "rgba(255,255,255,0.2)" }}>{svc.icon}</div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{svc.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-1.5">
                  {svc.points.map(p => (
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

    {/* Process */}
    <section className="py-20 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(12,12,14,0.5)" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-flex">How It Works</span>
          <h2 className="text-3xl font-extrabold font-display text-white">BPO Onboarding Process</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl"
              style={{ background: "rgba(17,17,20,0.5)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="text-3xl font-black font-display gradient-text mb-3">{step.step}</div>
              <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="max-w-md mx-auto px-6">
        <h2 className="text-2xl font-extrabold font-display text-white mb-3">Ready to Outsource?</h2>
        <p className="text-slate-400 text-sm mb-7">Get a free process audit and cost-saving estimate within 48 hours.</p>
        <Link to="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors">
          Get Free BPO Audit <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default BPOSolutions;




