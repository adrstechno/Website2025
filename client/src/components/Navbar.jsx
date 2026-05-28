import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import CalendlyButton from "./CalendlyButton";

const primaryNavLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Hire Developers", path: "/hire-developers" },
];

const navGroups = [
  {
    name: "Company",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Our Mission", path: "/mission" },
      { name: "Our Team", path: "/team" },
      { name: "Industries", path: "/industries" },
      { name: "Technologies", path: "/technologies" },
      { name: "Gallery", path: "/gallery" },
      { name: "Career", path: "/career" },
    ],
  },
  {
    name: "Resources",
    items: [
      { name: "Blog", path: "/blog" },
      { name: "FAQ", path: "/faq" },
      { name: "Contact", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms", path: "/terms" },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navStyle = scrolled
    ? {
        background: "rgba(8, 9, 11, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }
    : { background: "transparent" };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300" style={navStyle}>
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-4"
          style={{
            paddingTop: scrolled ? "10px" : "16px",
            paddingBottom: scrolled ? "10px" : "16px",
          }}
        >
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" className="h-9 w-auto dark:hidden object-contain" alt="ADRS Techno" />
            <img src="/logo-dark.png" className="h-9 w-auto hidden dark:block object-contain" alt="ADRS Techno" />
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  location.pathname === link.path
                    ? "text-[#E5E7EB] bg-white/[0.05]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="w-px h-5 bg-white/10 mx-1" />

            {navGroups.map((group) => (
              <DesktopDropdown key={group.name} group={group} currentPath={location.pathname} />
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://wa.me/919201347033?text=Hi%20ADRS%20Techno%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="hidden sm:flex p-2 rounded-lg text-emerald-400 hover:text-emerald-300 transition-colors"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <BsWhatsapp className="w-4 h-4" />
            </a>

            <CalendlyButton
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 text-black font-semibold text-sm rounded-lg transition-colors bg-[#E5E7EB] hover:bg-white"
              showIcon={false}
            >
              Book Consultation
            </CalendlyButton>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {mobileOpen ? <FiX className="w-5 h-5 text-white" /> : <FiMenu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto"
            style={{ background: "rgba(8,9,11,0.98)", backdropFilter: "blur(20px)" }}
          >
            {/* ── Drawer header — logo + close button ── */}
            <div
              className="flex items-center justify-between px-6 border-b flex-shrink-0"
              style={{ height: 64, borderColor: "rgba(255,255,255,0.08)" }}
            >
              {/* Logo */}
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src="/logo.png"      className="h-8 w-auto dark:hidden object-contain" alt="ADRS Techno" />
                <img src="/logo-dark.png" className="h-8 w-auto hidden dark:block object-contain" alt="ADRS Techno" />
              </Link>

              {/* Close button — prominent, easy to tap */}
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center rounded-xl transition-colors active:scale-95"
                style={{
                  width: 44, height: 44,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <FiX className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="px-6 py-6 flex-1">
              <div className="space-y-1">
                {primaryNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-4 border-b text-lg font-semibold transition-colors ${
                      location.pathname === link.path
                        ? "border-[#E5E7EB]/70 text-[#E5E7EB]"
                        : "border-slate-800/60 text-slate-100 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {navGroups.map((group) => (
                  <MobileDropdown
                    key={group.name}
                    group={group}
                    currentPath={location.pathname}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  to="/hire-developers"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-bold"
                  style={{ background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.35)" }}
                >
                  <FiPhone className="w-4 h-4" /> Hire Developers
                </Link>

                <CalendlyButton
                  onBeforeOpen={() => setMobileOpen(false)}
                  className="block w-full py-4 text-black text-center font-bold rounded-xl transition-colors bg-[#E5E7EB] hover:bg-white"
                  showIcon={false}
                >
                  Book Free Consultation
                </CalendlyButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DesktopDropdown = ({ group, currentPath }) => {
  const [open, setOpen] = useState(false);
  const isActive = group.items.some((item) => item.path === currentPath);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors rounded-md ${
          isActive ? "text-[#E5E7EB]" : "text-slate-300 hover:text-white hover:bg-white/5"
        }`}
      >
        {group.name}
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.14 }}
            className="absolute top-full left-0 mt-1 w-64 rounded-xl overflow-hidden"
            style={{
              background: "rgba(13, 15, 19, 0.98)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {group.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2.5 text-sm border-b last:border-0 transition-colors ${
                  currentPath === item.path
                    ? "text-[#E5E7EB] bg-white/[0.05]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileDropdown = ({ group, currentPath, onClose }) => {
  const [open, setOpen] = useState(false);
  const hasActiveItem = group.items.some((item) => item.path === currentPath);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between py-4 border-b text-lg font-semibold text-slate-100 ${
          hasActiveItem ? "border-[#E5E7EB]/70 text-[#E5E7EB]" : "border-slate-800/60"
        }`}
      >
        {group.name}
        <svg className={`w-4 h-4 transition-transform text-slate-500 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="pl-4" style={{ background: "rgba(255,255,255,0.02)" }}>
          {group.items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`block py-3 px-4 text-sm border-b last:border-0 transition-colors ${
                currentPath === item.path ? "text-[#E5E7EB]" : "text-slate-400 hover:text-[#E5E7EB]"
              }`}
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
