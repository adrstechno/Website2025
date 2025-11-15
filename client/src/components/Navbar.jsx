import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Workshop', path: '/workshop' },
    { name: 'Career', path: '/career' },
    { name: 'Gallery', path: '/gallery' },
    { 
      name: 'About Us', 
      dropdown: true,
      items: [
        { name: 'Our Mission', path: '/mission' },
        { name: 'Our Team', path: '/team' }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="fixed w-full z-50 bg-transparent transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              <img src="/logo.png" alt="ADRS Technology" className="h-10 w-auto dark:hidden" />
              <img src="/logo-dark.png" alt="ADRS Technology" className="h-10 w-auto hidden dark:block" />

              <motion.div
                className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="text-xl font-bold tracking-tight"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            ></motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => {
                    setHoveredLink(link.name);
                    setAboutDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    setAboutDropdownOpen(false);
                  }}
                  className="relative"
                >
                  <button className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-1">
                    {link.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {aboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-white/10 overflow-hidden"
                      >
                        {link.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setAboutDropdownOpen(false)}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              location.pathname === item.path
                                ? 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'
                                : 'text-secondary hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.path}
                    className="relative px-4 py-2 text-sm font-medium transition-colors block"
                  >
                    <span
                      className={
                        location.pathname === link.path
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'text-secondary hover:text-primary'
                      }
                    >
                      {link.name}
                    </span>

                    <AnimatePresence>
                      {hoveredLink === link.name && (
                        <>
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute -top-1 -right-1 w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"
                          />
                          <motion.div
                            initial={{ scaleY: 0, originY: 0 }}
                            animate={{ scaleY: 1 }}
                            exit={{ scaleY: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400"
                          />
                        </>
                      )}
                    </AnimatePresence>

                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-active-circle"
                        className="absolute inset-0 bg-purple-50 dark:bg-purple-500/10 rounded-lg -z-10"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* THEME TOGGLE + BUTTON (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-12">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
              }}
              className="relative p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all hover:scale-110 active:scale-95 mr-4"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === 'dark' ? (
                <HiSun className="w-5 h-5 text-yellow-500 transition-transform" />
              ) : (
                <HiMoon className="w-5 h-5 text-purple-600 transition-transform" />
              )}
            </button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="relative px-6 py-2.5 bg-purple-600 dark:bg-purple-500 text-white text-sm font-semibold rounded-lg overflow-hidden group whitespace-nowrap"
              >
                <span className="relative z-10">Get Started</span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                <div className="absolute inset-0 bg-purple-600 dark:bg-purple-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
              </Link>
            </motion.div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 relative bg-white/90 dark:bg-dark-secondary/80 rounded-md shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>

            <div className="w-7 h-6 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: '#8b5cf6' } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-colors"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-full h-0.5 bg-gray-800 dark:bg-gray-200"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: '#8b5cf6' } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-colors"
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-dark-secondary/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/5"
          >
            <div className="px-6 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="py-2 px-4 text-base font-semibold text-primary">
                      {link.name}
                    </div>
                    <div className="pl-4 space-y-1">
                      {link.items.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-2 px-4 rounded-lg text-sm transition-all ${
                            location.pathname === item.path
                              ? 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'
                              : 'text-secondary hover:bg-gray-100 dark:hover:bg-white/5'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-base transition-all ${
                        location.pathname === link.path
                          ? 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'
                          : 'text-secondary hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex items-center gap-4 pt-4"
              >
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                  {theme === 'dark' ? (
                    <HiSun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <HiMoon className="w-5 h-5 text-purple-600" />
                  )}
                </button>

                <Link
                  to="/contact"
                  className="flex-1 px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white text-center font-semibold rounded-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
