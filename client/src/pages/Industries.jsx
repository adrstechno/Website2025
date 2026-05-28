import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiBookOpen,
  FiShoppingCart,
  FiDollarSign,
  FiHome,
  FiTruck,
  FiCloud,
  FiUsers,
  FiZap,
  FiSettings,
} from "react-icons/fi";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const industries = [
  {
    icon: <FiHeart className="w-8 h-8" />,
    name: "Healthcare",
    color: "from-rose-600/20 to-pink-600/20",
    desc: "Patient portals, telemedicine platforms, EMR systems, appointment scheduling, and HIPAA-compliant healthcare apps.",
    solutions: ["Patient Management Systems", "Telemedicine Apps", "HIPAA-compliant Portals", "Medical Billing Software"],
  },
  {
    icon: <FiBookOpen className="w-8 h-8" />,
    name: "Education",
    color: "from-blue-600/20 to-indigo-600/20",
    desc: "LMS platforms, e-learning apps, virtual classrooms, assessment engines, and student management systems.",
    solutions: ["Learning Management Systems", "Online Assessment Tools", "Virtual Classrooms", "Student Portals"],
  },
  {
    icon: <FiShoppingCart className="w-8 h-8" />,
    name: "E-commerce",
    color: "from-orange-600/20 to-yellow-600/20",
    desc: "Online stores, marketplace platforms, inventory management, payment integrations, and order automation.",
    solutions: ["Custom E-commerce Stores", "Marketplace Platforms", "Inventory Systems", "Payment Integration"],
  },
  {
    icon: <FiDollarSign className="w-8 h-8" />,
    name: "FinTech",
    color: "from-green-600/20 to-emerald-600/20",
    desc: "Secure banking apps, payment gateways, investment platforms, lending software, and financial analytics dashboards.",
    solutions: ["Payment Gateways", "Banking Apps", "Investment Platforms", "Financial Dashboards"],
  },
  {
    icon: <FiHome className="w-8 h-8" />,
    name: "Real Estate",
    color: "from-teal-600/20 to-cyan-600/20",
    desc: "Property listing platforms, CRM for realtors, virtual tours, lead management, and contract automation.",
    solutions: ["Property Listing Platforms", "Realtor CRM", "Virtual Tours", "Contract Automation"],
  },
  {
    icon: <FiTruck className="w-8 h-8" />,
    name: "Logistics",
    color: "from-yellow-600/20 to-orange-600/20",
    desc: "Fleet tracking, route optimization, warehouse management, delivery tracking, and supply chain automation.",
    solutions: ["Fleet Tracking Systems", "Warehouse Management", "Route Optimization", "Delivery Tracking"],
  },
  {
    icon: <FiCloud className="w-8 h-8" />,
    name: "SaaS",
    color: "from-purple-600/20 to-indigo-600/20",
    desc: "Multi-tenant SaaS platforms, subscription billing, analytics dashboards, API development, and cloud architecture.",
    solutions: ["Multi-tenant Architecture", "Subscription Billing", "API Development", "Analytics Dashboards"],
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    name: "BPO & Outsourcing",
    color: "from-cyan-600/20 to-blue-600/20",
    desc: "CRM automation, customer support systems, back-office operations software, workforce management tools.",
    solutions: ["CRM Automation", "Support Ticket Systems", "Workforce Management", "Quality Monitoring"],
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    name: "Startups",
    color: "from-indigo-600/20 to-purple-600/20",
    desc: "Rapid MVP development, product iteration, technical co-founder support, scalable architecture from day one.",
    solutions: ["MVP Development", "Rapid Prototyping", "Technical Advisory", "Scalable Foundations"],
  },
  {
    icon: <FiSettings className="w-8 h-8" />,
    name: "Manufacturing",
    color: "from-slate-600/20 to-gray-600/20",
    desc: "ERP integration, production tracking, quality control systems, IoT dashboards, and industrial automation.",
    solutions: ["ERP Systems", "Production Tracking", "Quality Control", "IoT Dashboards"],
  },
];

const Industries = () => (
  <div className="bg-[#08090B] min-h-screen">
    <section className="pt-24 pb-16 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-label mb-4 inline-flex">Industries</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mb-4">
          Industries We <span className="gradient-text">Serve</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg">
          Domain expertise across 10+ industries. We understand your business context, not just your tech stack.
        </motion.p>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 pb-24">
      <motion.div variants={stagger} initial="hidden" whileInView="visible"
        viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div key={i} variants={fadeUp}>
            <div className={`p-7 rounded-xl h-full bg-gradient-to-br ${ind.color} card-lift`}
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="text-slate-200 mb-4">{ind.icon}</div>
              <h3 className="text-xl font-bold font-display text-white mb-2">{ind.name}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">{ind.desc}</p>
              <ul className="space-y-1.5">
                {ind.solutions.map(s => (
                  <li key={s} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    <section className="py-16 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div className="max-w-md mx-auto px-6">
        <h2 className="text-2xl font-extrabold font-display text-white mb-4">Don't See Your Industry?</h2>
        <p className="text-slate-400 mb-7 text-sm">We work across all domains. Tell us your challenge and we will engineer the solution.</p>
        <Link to="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors">
          Talk to Our Team <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Industries;
