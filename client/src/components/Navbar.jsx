import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const { theme, toggleTheme }        = useTheme();
  const location                      = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: "Home",     path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Career",   path: "/career" },
    { name: "Gallery",  path: "/gallery" },
    {
      name: "About",
      dropdown: true,
      items: [
        { name: "Our Mission", path: "/mission" },
        { name: "Our Team",    path: "/team" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ── Top blue accent stripe ── */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-blue-600 z-[60]" />

      {/* ── Main navbar ── */}
      <nav
        className={`fixed top-[3px] w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-[#1E293B] shadow-sm"
            : "py-5 bg-white/98 dark:bg-[#0B1120]/98"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <img src="/logo.png"      className="h-9 w-auto dark:hidden object-contain" alt="ADRS" />
            <img src="/logo-dark.png" className="h-9 w-auto hidden dark:block object-contain" alt="ADRS" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <DesktopDropdown key={i} link={link} location={location} />
              ) : (
                <Link
                  key={i}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="navBar"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-600 dark:bg-blue-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 border border-slate-200 dark:border-[#1E293B] hover:bg-slate-100 dark:hover:bg-[#1E293B] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <HiSun  className="w-4 h-4 text-blue-400" />
                : <HiMoon className="w-4 h-4 text-blue-600" />}
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 border border-slate-200 dark:border-[#1E293B] hover:bg-slate-100 dark:hover:bg-[#1E293B] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <FiX    className="w-5 h-5 text-slate-700 dark:text-white" />
                : <FiMenu className="w-5 h-5 text-slate-700 dark:text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="fixed inset-0 z-[55] bg-white dark:bg-[#0B1120] pt-[62px] flex flex-col overflow-y-auto"
          >
            <div className="px-6 py-8 flex-1">
              <div className="space-y-0.5">
                {navLinks.map((link, i) =>
                  link.dropdown ? (
                    <MobileDropdown key={i} link={link} />
                  ) : (
                    <Link
                      key={i}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-slate-100 dark:border-[#1E293B] text-lg font-semibold font-display transition-colors ${
                        location.pathname === link.path
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {link.name}
                      <FiArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    </Link>
                  )
                )}
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-4 bg-blue-600 text-white text-center font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ── Desktop dropdown ── */
const DesktopDropdown = ({ link, location }) => {
  const [open, setOpen] = useState(false);
  const isActive = link.items.some(i => i.path === location.pathname);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors ${
          isActive
            ? "text-blue-600 dark:text-blue-400"
            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        {link.name}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full left-0 mt-0.5 w-44 bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] shadow-xl"
          >
            {link.items.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`block px-4 py-3 text-sm border-b border-slate-100 dark:border-[#1E293B] last:border-0 transition-colors ${
                  location.pathname === item.path
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1E293B]"
                }`}
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

/* ── Mobile dropdown ── */
const MobileDropdown = ({ link }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 border-b border-slate-100 dark:border-[#1E293B] text-lg font-semibold font-display text-slate-800 dark:text-slate-100"
      >
        {link.name}
        <svg
          className={`w-4 h-4 transition-transform text-slate-300 dark:text-slate-600 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="pl-5 bg-slate-50 dark:bg-[#131C2E]">
          {link.items.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="block py-3 px-4 text-base text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-[#1E293B] last:border-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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

