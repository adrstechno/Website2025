import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  FiCheckCircle,
  FiPlus,
  FiMinus,
  FiArrowRight,
  FiArrowUpRight,
  FiBox,
} from "react-icons/fi";
import { Check } from "lucide-react";
import { MdHealthAndSafety, MdSchool, MdBusinessCenter } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";

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

const Products = () => {
  const products = [
    {
      name: "IDHPS",
      badge: "Healthcare",
      icon: <MdHealthAndSafety />,
      description:
        "Comprehensive healthcare solution for modern medical facilities with appointment management, telemedicine, and EHR.",
      features: [
        "Appointment Scheduling",
        "Telemedicine Integration",
        "Electronic Health Records",
        "Patient Portal",
        "Billing & Insurance",
      ],
    },
    {
      name: "Jewelry Manager",
      badge: "Retail",
      icon: <IoDiamondOutline />,
      description:
        "Complete retail management solution designed specifically for jewelry businesses with inventory, billing, and CRM.",
      features: [
        "Inventory Management",
        "Point of Sale (POS)",
        "Customer Relationship Mgmt",
        "Billing & Invoicing",
        "Analytics & Reports",
      ],
    },
    {
      name: "Test With Spark",
      badge: "Education",
      icon: <MdSchool />,
      description:
        "Advanced learning management system with progress tracking, analytics, and interactive course delivery.",
      features: [
        "Course Management",
        "Progress Tracking",
        "Analytics Dashboard",
        "Interactive Assessments",
        "Student Portal",
      ],
    },
    {
      name: "Custom ERP",
      badge: "Enterprise",
      icon: <MdBusinessCenter />,
      description:
        "Tailored enterprise resource planning solution with workflow automation, comprehensive reporting, and integration.",
      features: [
        "Workflow Automation",
        "Custom Reports",
        "Third-party Integration",
        "Multi-department Management",
        "Real-time Analytics",
      ],
    },
  ];

  const comparisonFeatures = [
    "Real-time Analytics",
    "API Access",
    "Custom Integrations",
    "Priority Support",
    "SLA Guarantee",
    "White-label Options",
  ];

  const upcoming = [
    {
      name: "Test With Spark",
      desc: "Full-featured assessment and testing platform for training and certification.",
    },
    { name: "LMS/CRM", desc: "Education and Relationship Management." },
    { name: "GemControl", desc: "Jewelry billing, Inventory & Analytics." },
    {
      name: "GoEventify",
      desc: "Event management for ticketing, schedules, and on-site check-in.",
    },
    {
      name: "Inventory Management System",
      desc: "Manage stock and supply flow.",
    },
  ];

  const faqs = [
    {
      q: "What is included in the free trial?",
      a: "Our 14-day free trial includes full access to all features with no credit card required. You can test all functionality with up to 5 users.",
    },
    {
      q: "Can I switch between plans?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.",
    },
    {
      q: "Do you offer custom enterprise solutions?",
      a: "Absolutely! We work with enterprise clients to create tailored solutions. Contact our sales team for details.",
    },
    {
      q: "What kind of support do you provide?",
      a: "We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers.",
    },
    {
      q: "Is my data secure?",
      a: "Yes, we use bank-grade encryption, are SOC 2 and ISO 27001 certified, and comply with GDPR and other data protection regulations.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-[#08090B] min-h-screen">
      {/* HERO */}
      <section
        className="pt-24 pb-20 relative overflow-hidden"
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
        <Wrap>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl relative z-10"
          >
            <SLabel text="SaaS Ecosystem" />
            <h1 className="text-5xl md:text-7xl font-extrabold font-display text-white leading-tight mb-5">
              Powerful <span className="gradient-text">Products</span>
              <br />
              for Modern Business
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Enterprise-grade solutions engineered to transform and automate
              your daily business operations. Secure, scalable, and ready to
              deploy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-glow group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
              >
                Start Free Trial{" "}
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-slate-300 font-bold text-sm hover:text-white transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </Wrap>
      </section>

      {/* PRODUCTS GRID + SIDEBAR */}
      <section className="py-24">
        <Wrap>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <SLabel text="Featured Platforms" />
                <h2 className="text-4xl font-extrabold font-display text-white">
                  Production-Ready Software Solutions
                </h2>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-6">
                {products.map((p, i) => (
                  <ProductCard key={i} product={p} index={i} />
                ))}
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="w-full lg:w-72 flex-shrink-0 self-start lg:sticky lg:top-28 lg:mt-[140px]">
              <div
                className="p-8 rounded-2xl overflow-hidden relative card-lift"
                style={card}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: "linear-gradient(90deg, #E5E7EB, #D1D5DB)",
                  }}
                />
                <h3 className="text-lg font-bold font-display text-white mb-4">
                  Why ADRS Products?
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-7">
                  Our products are built on highly scalable cloud infrastructure
                  with SOC 2 compliance, bank-grade encryption, and intuitive
                  user workflows.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-white font-bold text-sm hover:bg-blue-600 transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(229,231,235,0.3)",
                    }}
                  >
                    Free Trial <FiArrowRight />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-slate-300 font-bold text-sm hover:text-white transition-colors"
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    Demo <FiArrowRight />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Wrap>
      </section>

      {/* UPCOMING */}
      <section
        className="py-24 border-y"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "rgba(12,12,14,0.5)",
        }}
      >
        <Wrap>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-5"
          >
            <div>
              <SLabel text="In Development" />
              <h2 className="text-4xl font-extrabold font-display text-white">
                Upcoming Releases
              </h2>
            </div>
            <Link
              to="/contact"
              className="text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
            >
              Get Early Access <FiArrowRight />
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcoming.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-2xl flex flex-col card-lift"
                style={card}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-400 mb-5"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <FiBox className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2">
                  {u.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {u.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24">
        <Wrap>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <SLabel text="Compare Plans" />
            <h2 className="text-4xl font-extrabold font-display text-white">
              Service Levels
            </h2>
          </motion.div>
          <div className="rounded-2xl overflow-x-auto" style={card}>
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr
                  className="border-b"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/3">
                    Features
                  </th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-300 text-center">
                    Starter
                  </th>
                  <th
                    className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-slate-300 text-center border-x"
                    style={{
                      borderColor: "rgba(255,255,255,0.06)",
                      background: "rgba(255,255,255,0.05)",
                    }}
                  >
                    Professional
                  </th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-blue-400 text-center">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody
                className="divide-y"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                {comparisonFeatures.map((f, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-8 py-4 text-sm text-slate-300">{f}</td>
                    <td className="px-8 py-4 text-center">
                      {i < 2 ? (
                        <Check className="w-5 h-5 text-slate-500 mx-auto" />
                      ) : (
                        <FiMinus className="w-5 h-5 text-slate-700 mx-auto" />
                      )}
                    </td>
                    <td
                      className="px-8 py-4 text-center border-x"
                      style={{
                        borderColor: "rgba(255,255,255,0.06)",
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      {i < 4 ? (
                        <Check className="w-5 h-5 text-blue-400 mx-auto" />
                      ) : (
                        <FiMinus className="w-5 h-5 text-slate-700 mx-auto" />
                      )}
                    </td>
                    <td className="px-8 py-4 text-center">
                      <Check className="w-5 h-5 text-blue-400 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Wrap>
      </section>

      {/* FAQ */}
      <section
        className="py-24 border-y"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          background: "rgba(12,12,14,0.5)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <SLabel text="FAQ" />
            <h2 className="text-4xl font-extrabold font-display text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="rounded-2xl p-6 sm:p-8" style={card}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-base font-semibold text-slate-100 group-hover:text-blue-400 transition-colors pr-4">
                    {faq.q}
                  </span>
                  <span className="text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0">
                    {openFaq === i ? (
                      <FiMinus className="w-5 h-5" />
                    ) : (
                      <FiPlus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-slate-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-lg mx-auto px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            Start Today
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto mb-8">
            Try any platform free for 14 days. No credit card required. Cancel
            anytime.
          </p>
          <Link
            to="/contact"
            className="btn-glow inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
          >
            Start Your Free Trial <FiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
