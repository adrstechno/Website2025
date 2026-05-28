import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { COMPANY, OFFICES, SOCIALS, WA } from "../constants/company";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us",    path: "/about" },
      { name: "Our Mission", path: "/mission" },
      { name: "Our Team",    path: "/team" },
      { name: "Career",      path: "/career" },
      { name: "Gallery",     path: "/gallery" },
      { name: "Blog",        path: "/blog" },
    ],
    Services: [
      { name: "Web Development",  path: "/services" },
      { name: "Mobile Apps",      path: "/services" },
      { name: "AI Automation",    path: "/ai-automation" },
      { name: "BPO Solutions",    path: "/bpo-solutions" },
      { name: "Cloud & DevOps",   path: "/services" },
      { name: "SaaS Development", path: "/services" },
    ],
    "Hire Developers": [
      { name: "Hire React Developers",   path: "/hire-developers#react" },
      { name: "Hire Flutter Developers", path: "/hire-developers#flutter" },
      { name: "Hire MERN Developers",    path: "/hire-developers#mern" },
      { name: "Hire AI Engineers",       path: "/hire-developers#ai" },
      { name: "Dedicated Teams",         path: "/hire-developers#dedicated-teams" },
    ],
    Resources: [
      { name: "Portfolio",       path: "/portfolio" },
      { name: "Technologies",    path: "/technologies" },
      { name: "Industries",      path: "/industries" },
      { name: "FAQ",             path: "/faq" },
      { name: "Send Resume",     path: "/apply" },
      { name: "Privacy Policy",  path: "/privacy-policy" },
      { name: "Terms of Use",    path: "/terms" },
    ],
  };

  const socials = [
    { href: SOCIALS.linkedin,  icon: <FaLinkedin />,  label: "LinkedIn" },
    { href: SOCIALS.github,    icon: <FaGithub />,    label: "GitHub" },
    { href: SOCIALS.instagram, icon: <FaInstagram />, label: "Instagram" },
    { href: WA.general,        icon: <BsWhatsapp />,  label: "WhatsApp" },
  ];

  return (
    <footer
      className="text-slate-400 border-t"
      style={{ background: "#060d1a", borderColor: "rgba(255,255,255,0.07)" }}
    >
      {/* Gradient top accent */}
      <div className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, #2563EB, #6366F1, #06B6D4)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 mb-14">

          {/* Brand column — full width on mobile, spans 2 on lg */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2 space-y-6">
            <div>
              <img src="/logo.png"      alt={COMPANY.legalName} className="h-9 w-auto object-contain dark:hidden" />
              <img src="/logo-dark.png" alt={COMPANY.legalName} className="h-9 w-auto object-contain hidden dark:block" />
            </div>

            <p className="text-sm text-slate-500 leading-relaxed">
              Enterprise software development, AI automation, BPO operations,
              and offshore dedicated teams for global businesses since {COMPANY.founded}.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 text-sm">
              <a href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <FiPhone className="w-3.5 h-3.5 flex-shrink-0 text-blue-500" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <FiMail className="w-3.5 h-3.5 flex-shrink-0 text-blue-500" />
                {COMPANY.email}
              </a>
            </div>

            {/* Offices */}
            <div className="space-y-3">
              {OFFICES.map((office, i) => (
                <a key={i} href={office.mapUrl} target="_blank" rel="noreferrer noopener"
                  className="flex items-start gap-2 text-xs text-slate-500 hover:text-blue-400 transition-colors leading-relaxed">
                  <FiMapPin className="w-3 h-3 mt-0.5 flex-shrink-0 text-blue-500" />
                  <span>
                    <span className="text-slate-400 font-semibold">{office.city} </span>
                    · {i === 0 ? 'HQ' : 'Regional'} · {office.address.split(',')[0]}
                  </span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-blue-400 transition-colors text-sm"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat} className="space-y-4">
              <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase font-display">{cat}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}
                      className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mb-10 p-7 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.25)" }}>
          <div>
            <p className="text-white font-semibold mb-1">Ready to start your project?</p>
            <p className="text-slate-400 text-sm">Free consultation · NDA available · Response within 24 hours</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors">
              Get Free Quote <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg text-slate-200 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}>
              Send Resume <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a href={WA.consult} target="_blank" rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg text-green-400"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
              <BsWhatsapp className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-3"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <p>© {currentYear} {COMPANY.legalName}. All rights reserved. Est. {COMPANY.founded}.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms"           className="hover:text-slate-400 transition-colors">Terms of Use</Link>
            <Link to="/faq"             className="hover:text-slate-400 transition-colors">FAQ</Link>
          </div>
          <p>Built with precision &amp; high-performance engineering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
