import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiClock, FiArrowRight, FiCheck, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { Calendar, MessageSquare } from "lucide-react";
import { COMPANY, OFFICES, SOCIALS, WA } from "../constants/company";
import ContactForm from "../components/ContactForm";
import CalendlyInline from "../components/CalendlyInline";

const socials = [
  { icon: FaLinkedin,  label: "LinkedIn",  href: SOCIALS.linkedin },
  { icon: FaGithub,    label: "GitHub",    href: SOCIALS.github },
  { icon: FaInstagram, label: "Instagram", href: SOCIALS.instagram },
];

const Contact = () => {
  /* Tab: "form" | "calendly" */
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="bg-[#08090B] min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-4 inline-flex">Let's Talk</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg">
            Free consultation · Response within 24 hours · NDA available
          </motion.p>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ── */}
      <section className="py-8 border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              { icon: FiPhone,    label: COMPANY.phone,       href: `tel:${COMPANY.phone}` },
              { icon: FiMail,     label: COMPANY.email,       href: `mailto:${COMPANY.email}` },
              { icon: BsWhatsapp, label: "Chat on WhatsApp",  href: WA.general, green: true },
            ].map((item, i) => (
              <a key={i} href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  item.green ? "text-green-400 hover:text-green-300" : "text-slate-300 hover:text-white"
                }`}>
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-14 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── LEFT: Tab switcher + content ── */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}>

                {/* Tab buttons */}
                <div className="flex gap-2 mb-8 p-1 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <button
                    onClick={() => setActiveTab("form")}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold transition-all"
                    style={activeTab === "form"
                      ? { background: "#2563EB", color: "#fff", boxShadow: "0 0 20px rgba(37,99,235,0.4)" }
                      : { color: "#94a3b8" }
                    }
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send a Message
                  </button>
                  <button
                    onClick={() => setActiveTab("calendly")}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold transition-all"
                    style={activeTab === "calendly"
                      ? { background: "#2563EB", color: "#fff", boxShadow: "0 0 20px rgba(37,99,235,0.4)" }
                      : { color: "#94a3b8" }
                    }
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Meeting
                  </button>
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                  {activeTab === "form" ? (
                    <motion.div key="form"
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                      <p className="text-slate-400 text-sm mb-6">
                        Fill in the details and we'll reply within 24 hours.
                      </p>
                      <ContactForm />
                    </motion.div>
                  ) : (
                    <motion.div key="calendly"
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                      <p className="text-slate-400 text-sm mb-4">
                        Pick a time that works for you — 30-min free discovery call.
                      </p>
                      {/* Calendly inline embed — no backend required */}
                      <CalendlyInline height={620} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* ── RIGHT: Contact info ── */}
            <div className="lg:col-span-2 space-y-4">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4">

                {/* WhatsApp CTA */}
                <a href={WA.consult} target="_blank" rel="noreferrer noopener"
                  className="flex items-center gap-4 p-5 rounded-2xl card-lift group"
                  style={{ background: "rgba(8,24,14,0.8)", border: "1px solid rgba(34,197,94,0.3)" }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(34,197,94,0.18)" }}>
                    <BsWhatsapp className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-100">Book via WhatsApp</p>
                    <p className="text-slate-400 text-sm mt-0.5">Message us — we'll schedule a call same day</p>
                  </div>
                  <FiArrowRight className="text-slate-400 group-hover:translate-x-1 group-hover:text-green-400 transition-all" />
                </a>

                {/* Business hours */}
                <div className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(37,99,235,0.18)" }}>
                      <FiClock className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <p className="font-semibold text-white text-sm">Business Hours</p>
                  </div>
                  <p className="text-slate-300 text-sm">Mon–Sat: 9:00 AM – 7:00 PM IST</p>
                  <p className="text-slate-500 text-xs mt-1">Emergency support 24/7 via WhatsApp</p>
                </div>

                {/* What to expect */}
                <div className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">What to Expect</p>
                  <ul className="space-y-2.5">
                    {[
                      "Free project consultation & quote",
                      "NDA signed before any discussion",
                      "Response within 24 business hours",
                      "No obligation, no pressure",
                      "Honest advice, even if we're not the right fit",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(37,99,235,0.2)", border: "1px solid rgba(59,130,246,0.35)" }}>
                          <FiCheck className="w-2.5 h-2.5 text-blue-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Socials */}
                <div className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {socials.map(s => (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.label}
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <s.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="py-16 border-y"
        style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-10">
            <span className="section-label mb-4 inline-flex">Our Locations</span>
            <h2 className="text-3xl font-extrabold font-display text-white">Offices Across India</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {OFFICES.map((office, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl card-lift"
                style={{ background: "rgba(17,17,20,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-400"
                    style={{ background: "rgba(37,99,235,0.15)" }}>
                    <FiMapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full text-blue-400"
                    style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(59,130,246,0.25)" }}>
                    {office.type}
                  </span>
                </div>
                <h3 className="font-bold font-display text-white mb-2">{office.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{office.address}</p>
                <a href={office.mapUrl} target="_blank" rel="noreferrer noopener"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
                  View on Google Maps <FiArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-12 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(12,12,14,0.65)" }}>
        <div className="max-w-lg mx-auto px-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Ready to Begin?</p>
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">Start Your Journey Today</h2>
          <a href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors">
            Email Us Directly <FiArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;
