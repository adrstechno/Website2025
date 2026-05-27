import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { MdDevices, MdSecurity, MdFactory, MdAssignment, MdEvent, MdAutoAwesome } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";
import Hero from "../components/Hero";
import CountUp from "react-countup";

/* ── Reusable section label ── */
const SectionLabel = ({ number, text }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-display tabular-nums">{number}</span>
    <span className="h-[1px] w-8 bg-blue-600 dark:bg-blue-400" />
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-display">{text}</span>
  </div>
);

const Home = () => {

  const services = [
    { number: "01", title: "Web & Mobile Development", description: "Custom application development, technical consulting, UI/UX engineering, and cloud-ready architectures.", icon: <MdDevices /> },
    { number: "02", title: "Security Consultation", description: "Advanced penetration testing, vulnerability analysis, threat detection, and enterprise-grade security solutions.", icon: <MdSecurity /> },
    { number: "03", title: "Industrial Automation", description: "Automation-driven systems for warehousing, supply chain, robotics, and smart manufacturing operations.", icon: <MdFactory /> },
  ];

  const products = [
    { number: "01", title: "Test Series",  description: "Full-featured assessment and testing platform for training and certification.", icon: <MdAssignment /> },
    { number: "02", title: "ADRS LMS",     description: "Learning management system for course delivery, progress tracking, and reporting.", icon: <PiGraduationCapFill /> },
    { number: "03", title: "Adrs Spark",   description: "Low-code automation platform that accelerates workflows and smart integrations.", icon: <MdAutoAwesome /> },
    { number: "04", title: "GoEventify",   description: "Event management suite for ticketing, scheduling, check-in, and real-time analytics.", icon: <MdEvent /> },
  ];

  const stats = [
    { number: 117, suffix: "+", label: "Projects Completed" },
    { number: 50,  suffix: "+", label: "Happy Clients" },
    { number: 50,  suffix: "+", label: "Team Members" },
    { number: 2024, suffix: "", label: "Year Founded", noCount: true },
  ];

  return (
    <>
      <div className="bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300">

        {/* ───────────── HERO ───────────── */}
        <Hero />

        {/* ───────────── ABOUT ───────────── */}
        <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <SectionLabel number="00" text="Who We Are" />
                <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight mb-6">
                  Enterprise Tech Built<br />for the Real World
                </h2>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg mb-8">
                  Established in 2024, ADRS Techno Pvt. Ltd. delivers enterprise-grade software, automation systems,
                  and digital transformation solutions. We empower businesses globally by translating complex tech
                  challenges into operational value.
                </p>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400"
                >
                  Learn More About Us
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Right — mosaic stats grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="grid grid-cols-2 gap-px bg-slate-200 dark:bg-[#1E293B] border border-slate-200 dark:border-[#1E293B]"
              >
                {[
                  { value: "2024", label: "Year Founded" },
                  { value: "50+",  label: "Specialists" },
                  { value: "50+",  label: "Enterprise Clients" },
                  { value: "117+", label: "Projects Delivered" },
                ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-[#111827] p-8">
                    <div className="text-4xl font-extrabold font-display text-blue-600 dark:text-blue-400 mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───────────── SERVICES ───────────── */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
              <div>
                <SectionLabel number="01" text="Services" />
                <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                  What We Do
                </h2>
              </div>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex-shrink-0"
              >
                All Services <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Horizontal service rows */}
            <div className="space-y-px bg-slate-200 dark:bg-[#1E293B] border border-slate-200 dark:border-[#1E293B]">
              {services.map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white dark:bg-[#0B1120] hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300 p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12"
                >
                  <div className="text-5xl font-black font-display text-slate-200 dark:text-[#1E293B] group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors w-16 flex-shrink-0">
                    {svc.number}
                  </div>
                  <div className="text-3xl text-slate-300 dark:text-[#1E293B] group-hover:text-white transition-colors flex-shrink-0">
                    {svc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-white transition-colors mb-1.5">
                      {svc.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 group-hover:text-blue-100 transition-colors text-sm leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <FiArrowUpRight className="w-6 h-6 text-slate-200 dark:text-slate-700 group-hover:text-white transition-colors flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── PRODUCTS ───────────── */}
        <section className="py-24 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
              <div>
                <SectionLabel number="02" text="Products" />
                <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                  Our Digital Products
                </h2>
              </div>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex-shrink-0"
              >
                All Products <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 2×2 product mosaic */}
            <div className="grid md:grid-cols-2 gap-px bg-slate-200 dark:bg-[#1E293B]">
              {products.map((prod, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white dark:bg-[#111827] hover:bg-[#F8FAFC] dark:hover:bg-[#131C2E] transition-colors p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-sm font-black font-display text-slate-200 dark:text-[#1E293B]">{prod.number}</span>
                    <span className="text-2xl text-blue-600 dark:text-blue-400">{prod.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-3">{prod.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{prod.description}</p>
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-[#1E293B]">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <FiArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── STATS BANNER ───────────── */}
        <section className="py-20 bg-white dark:bg-[#111827] border-t border-b border-slate-200 dark:border-[#1E293B]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-[#1E293B]">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="py-10 px-8 text-center"
                >
                  <div className="text-5xl sm:text-6xl font-extrabold font-display text-blue-600 dark:text-blue-400 leading-none">
                    {stat.noCount ? (
                      `${stat.number}${stat.suffix}`
                    ) : (
                      <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} enableScrollSpy scrollSpyOnce separator="," />
                    )}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mt-1.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── CTA PANEL ───────────── */}
        <section className="py-24 bg-[#F8FAFC] dark:bg-[#0B1120]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-blue-600 p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
            >
              <div>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-3">Ready to Start?</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
                  Transform Your<br />Business Today
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold text-sm uppercase tracking-wider hover:bg-blue-50 transition-colors"
                >
                  Contact Us <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-blue-400 text-white font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

    </>
  );
};

export default Home;

