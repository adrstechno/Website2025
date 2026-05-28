import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import CalendlyButton from "../components/CalendlyButton";

const faqCategories = {
  "General": [
    { q: "What does ADRS Techno do?", a: "ADRS Techno is a software development company offering web and mobile development, AI automation, BPO solutions, SaaS development, cloud/DevOps, and dedicated offshore developer teams for global businesses." },
    { q: "Where is ADRS Techno located?", a: "We are headquartered in Jabalpur, Madhya Pradesh, India. We serve clients globally across the USA, UK, UAE, Europe, and Australia." },
    { q: "When was ADRS Techno founded?", a: "ADRS Techno Pvt. Ltd. was incorporated in 2024 with a mission to make world-class technology accessible to every business." },
    { q: "What industries do you serve?", a: "We work across EdTech, FinTech, Healthcare, E-commerce, Manufacturing, Real Estate, Logistics, and more. If you have a software problem, we likely have a solution." },
  ],
  "Services": [
    { q: "What technologies do you specialize in?", a: "Our core stack includes React, Next.js, Node.js, Flutter, Python, AWS, MongoDB, PostgreSQL, and AI/LLM tools. We adapt to your existing stack when needed." },
    { q: "Do you build mobile apps?", a: "Yes. We build cross-platform mobile apps using Flutter and React Native for iOS and Android. We also do native development for performance-critical use cases." },
    { q: "Can you help with AI integration?", a: "Absolutely. We specialize in LLM integrations (OpenAI, Anthropic), AI chatbots, document processing automation, recommendation engines, and custom ML models." },
    { q: "What BPO services do you offer?", a: "We offer customer support, data entry, back-office operations, lead generation, virtual assistance, and content moderation as managed offshore services." },
  ],
  "Pricing & Process": [
    { q: "How much does a project cost?", a: "Costs vary by scope. Simple websites start from $500, mobile apps from $2,000, and complex platforms from $10,000+. We provide a free, detailed quote after a discovery call." },
    { q: "What are your pricing models?", a: "We offer: Fixed Price (defined scope), Time & Material (evolving requirements), and Dedicated Team (ongoing development). We recommend based on your project type." },
    { q: "What is your typical project timeline?", a: "MVPs typically ship in 4–8 weeks. Full-scale enterprise platforms take 3–6 months. We provide detailed milestone breakdowns upfront." },
    { q: "Do you work with startups?", a: "Yes! We love working with startups. We offer startup-friendly packages, lean MVP development, and equity-discussion options for exceptional opportunities." },
  ],
  "Hire Developers": [
    { q: "How does the dedicated developer model work?", a: "You hire one or more of our pre-vetted developers full-time or part-time. They join your team, attend daily stand-ups, and work in your timezone exclusively on your project." },
    { q: "How quickly can I onboard a developer?", a: "We can onboard a developer in 3–5 business days after the initial consultation and profile selection process." },
    { q: "What roles can I hire?", a: "React, Next.js, Flutter, MERN Stack, Full-stack, AI/ML Engineers, DevOps Engineers, UI/UX Designers, QA Engineers, and Project Managers." },
    { q: "Is there a minimum engagement period?", a: "Our minimum engagement is 1 month for part-time and 2 months for full-time dedicated developers. We offer a 14-day trial period for new clients." },
  ],
  "Legal & Security": [
    { q: "Do you sign NDAs?", a: "Yes. We sign NDA agreements before any project discussion begins. Your ideas, code, and business data are fully protected." },
    { q: "Who owns the intellectual property?", a: "100% of the IP belongs to you, the client. This is specified clearly in every contract. We make no claims on anything we build for you." },
    { q: "How do you handle data security?", a: "We follow industry-standard security practices including encrypted communications, secure code reviews, access controls, and regular security audits." },
    { q: "Do you offer post-launch support?", a: "Yes. We offer flexible maintenance plans from basic bug fixes to full ongoing development and 24/7 monitoring. Support contracts are available monthly or annually." },
  ],
};

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <button className="w-full flex items-center justify-between py-4 px-1 text-left" onClick={() => setOpen(!open)}>
        <span className="text-sm font-semibold text-slate-100 pr-4">{q}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-blue-400 transition-transform"
          style={{ background: "rgba(255,255,255,0.15)", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }} className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-4 px-1">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("General");

  return (
    <div className="bg-[#08090B] min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-16 text-center" style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <span className="section-label mb-4 inline-flex">FAQ</span>
          <h1 className="text-5xl font-extrabold font-display text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-slate-400 text-lg">Everything you need to know before working with ADRS Techno.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {Object.keys(faqCategories).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
              style={activeCategory === cat
                ? { background: "#E5E7EB", color: "#111827" }
                : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="rounded-2xl p-6 sm:p-8" style={{ background: "rgba(17,17,20,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {faqCategories[activeCategory].map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Still have questions?{" "}
          <Link to="/contact" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Contact us directly →
          </Link>
        </p>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-2xl font-extrabold font-display text-white mb-4">Ready to Get Started?</h2>
          <CalendlyButton
            className="btn-glow inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
          >
            Book Free Consultation <FiArrowRight className="w-4 h-4" />
          </CalendlyButton>
        </div>
      </section>
    </div>
  );
};

export default FAQ;




