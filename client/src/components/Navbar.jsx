// // import { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { HiSun, HiMoon } from 'react-icons/hi';
// // import { useTheme } from '../context/ThemeContext';

// // const Navbar = () => {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [hoveredLink, setHoveredLink] = useState(null);
// //   const location = useLocation();
// //   const { theme, toggleTheme } = useTheme();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 20);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

// //   const navLinks = [
// //     { name: 'Home', path: '/' },
// //     { name: 'Services', path: '/services' },
// //     { name: 'Products', path: '/products' },
// //     { name: 'Workshop', path: '/workshop' },
// //     { name: 'Career', path: '/career' },
// //     { name: 'Gallery', path: '/gallery' },
// //     { 
// //       name: 'About Us', 
// //       dropdown: true,
// //       items: [
// //         { name: 'Our Mission', path: '/mission' },
// //         { name: 'Our Team', path: '/team' }
// //       ]
// //     },
// //     { name: 'Contact', path: '/contact' },
// //   ];

// //   return (
// //     <motion.nav
// //       initial={{ y: -100, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
// //       className="fixed w-full z-50 bg-transparent transition-all duration-500"
// //     >
// //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-20">
          
// //           {/* LOGO */}
// //           <Link to="/" className="flex items-center space-x-3 group relative">
// //             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
// //               <img src="/logo.png" alt="ADRS Technology" className="h-10 w-auto dark:hidden" />
// //               <img src="/logo-dark.png" alt="ADRS Technology" className="h-10 w-auto hidden dark:block" />

// //               <motion.div
// //                 className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl"
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 whileHover={{ opacity: 1, scale: 1.2 }}
// //                 transition={{ duration: 0.3 }}
// //               />
// //             </motion.div>

// //             <motion.div
// //               className="text-xl font-bold tracking-tight"
// //               whileHover={{ x: 5 }}
// //               transition={{ type: 'spring', stiffness: 300 }}
// //             ></motion.div>
// //           </Link>

// //           {/* DESKTOP NAV */}
// //           <div className="hidden lg:flex items-center space-x-1 flex-1">
// //             {navLinks.map((link, index) =>
// //               link.dropdown ? (
// //                 <motion.div
// //                   key={link.name}
// //                   initial={{ opacity: 0, y: -20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1, duration: 0.5 }}
// //                   onMouseEnter={() => {
// //                     setHoveredLink(link.name);
// //                     setAboutDropdownOpen(true);
// //                   }}
// //                   onMouseLeave={() => {
// //                     setHoveredLink(null);
// //                     setAboutDropdownOpen(false);
// //                   }}
// //                   className="relative"
// //                 >
// //                   <button className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors flex items-center gap-1">
// //                     {link.name}
// //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                     </svg>
// //                   </button>

// //                   <AnimatePresence>
// //                     {aboutDropdownOpen && (
// //                       <motion.div
// //                         initial={{ opacity: 0, y: 10 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         exit={{ opacity: 0, y: 10 }}
// //                         transition={{ duration: 0.2 }}
// //                         className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-white/10 overflow-hidden"
// //                       >
// //                         {link.items.map((item, idx) => (
// //                           <Link
// //                             key={idx}
// //                             to={item.path}
// //                             onClick={() => setAboutDropdownOpen(false)}
// //                             className={`block px-4 py-3 text-sm transition-colors ${
// //                               location.pathname === item.path
// //                                 ? 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'
// //                                 : 'text-secondary hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary'
// //                             }`}
// //                           >
// //                             {item.name}
// //                           </Link>
// //                         ))}
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </motion.div>
// //               ) : (
// //                 <motion.div
// //                   key={link.path}
// //                   initial={{ opacity: 0, y: -20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1, duration: 0.5 }}
// //                   onMouseEnter={() => setHoveredLink(link.name)}
// //                   onMouseLeave={() => setHoveredLink(null)}
// //                 >
// //                   <Link
// //                     to={link.path}
// //                     className="relative px-4 py-2 text-sm font-medium transition-colors block"
// //                   >
// //                     <span
// //                       className={
// //                         location.pathname === link.path
// //                           ? 'text-purple-600 dark:text-purple-400'
// //                           : 'text-secondary hover:text-primary'
// //                       }
// //                     >
// //                       {link.name}
// //                     </span>

// //                     <AnimatePresence>
// //                       {hoveredLink === link.name && (
// //                         <>
// //                           <motion.div
// //                             initial={{ scale: 0, opacity: 0 }}
// //                             animate={{ scale: 1, opacity: 1 }}
// //                             exit={{ scale: 0, opacity: 0 }}
// //                             className="absolute -top-1 -right-1 w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"
// //                           />
// //                           <motion.div
// //                             initial={{ scaleY: 0, originY: 0 }}
// //                             animate={{ scaleY: 1 }}
// //                             exit={{ scaleY: 0 }}
// //                             transition={{ duration: 0.2 }}
// //                             className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400"
// //                           />
// //                         </>
// //                       )}
// //                     </AnimatePresence>

// //                     {location.pathname === link.path && (
// //                       <motion.div
// //                         layoutId="navbar-active-circle"
// //                         className="absolute inset-0 bg-purple-50 dark:bg-purple-500/10 rounded-lg -z-10"
// //                         initial={false}
// //                         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
// //                       />
// //                     )}
// //                   </Link>
// //                 </motion.div>
// //               )
// //             )}
// //           </div>

// //           {/* THEME TOGGLE + BUTTON (DESKTOP) */}
// //           <div className="hidden lg:flex items-center gap-12">
// //             <button
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 e.stopPropagation();
// //                 toggleTheme();
// //               }}
// //               className="relative z-30 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all hover:scale-110 active:scale-95 mr-6"
// //               aria-label="Toggle theme"
// //               type="button"
// //             >
// //               {theme === 'dark' ? (
// //                 <HiSun className="w-5 h-5 text-yellow-500 transition-transform" />
// //               ) : (
// //                 <HiMoon className="w-5 h-5 text-purple-600 transition-transform" />
// //               )}
// //             </button>

// //             <motion.div className="relative z-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
// //               <Link
// //                 to="/contact"
// //                 className="relative px-6 py-2.5 bg-purple-600 dark:bg-purple-500 text-white text-sm font-semibold rounded-lg overflow-hidden group whitespace-nowrap"
// //               >
// //                 <span className="relative z-10">Get Started</span>

// //                 <motion.div
// //                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
// //                   initial={{ x: '-100%' }}
// //                   whileHover={{ x: '100%' }}
// //                   transition={{ duration: 0.6 }}
// //                 />

// //                 <div className="absolute inset-0 bg-purple-600 dark:bg-purple-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none" />
// //               </Link>
// //             </motion.div>
// //           </div>

// //           {/* MOBILE BUTTON */}
// //           <button
// //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //             className="lg:hidden p-2 relative bg-white/90 dark:bg-dark-secondary/80 rounded-md shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
// //             aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
// //             aria-expanded={mobileMenuOpen}
// //             aria-controls="mobile-menu"
// //             type="button"
// //           >
// //             <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>

// //             <div className="w-7 h-6 flex flex-col justify-between">
// //               <motion.span
// //                 animate={mobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: '#8b5cf6' } : { rotate: 0, y: 0 }}
// //                 className="w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-colors"
// //               />
// //               <motion.span
// //                 animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
// //                 className="w-full h-0.5 bg-gray-800 dark:bg-gray-200"
// //               />
// //               <motion.span
// //                 animate={mobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: '#8b5cf6' } : { rotate: 0, y: 0 }}
// //                 className="w-full h-0.5 bg-gray-800 dark:bg-gray-200 transition-colors"
// //               />
// //             </div>
// //           </button>
// //         </div>
// //       </div>

// //       {/* MOBILE MENU */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <motion.div id="mobile-menu"
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: 'auto' }}
// //             exit={{ opacity: 0, height: 0 }}
// //             transition={{ duration: 0.3 }}
// //             className="lg:hidden bg-white/95 dark:bg-dark-secondary/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/5"
// //           >
// //             <div className="px-6 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
// //               {navLinks.map((link, index) =>
// //                 link.dropdown ? (
// //                   <motion.div
// //                     key={link.name}
// //                     initial={{ opacity: 0, x: -20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     exit={{ opacity: 0, x: -20 }}
// //                     transition={{ delay: index * 0.05 }}
// //                   >
// //                     <div className="py-2 px-4 text-base font-semibold text-primary">
// //                       {link.name}
// //                     </div>
// //                     <div className="pl-4 space-y-1">
// //                       {link.items.map((item, idx) => (
// //                         <Link
// //                           key={idx}
// //                           to={item.path}
// //                           onClick={() => setMobileMenuOpen(false)}
// //                           className={`block py-2 px-4 rounded-lg text-sm transition-all ${
// //                             location.pathname === item.path
// //                               ? 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'
// //                               : 'text-secondary hover:bg-gray-100 dark:hover:bg-white/5'
// //                           }`}
// //                         >
// //                           {item.name}
// //                         </Link>
// //                       ))}
// //                     </div>
// //                   </motion.div>
// //                 ) : (
// //                   <motion.div
// //                     key={link.path}
// //                     initial={{ opacity: 0, x: -20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     exit={{ opacity: 0, x: -20 }}
// //                     transition={{ delay: index * 0.05 }}
// //                   >
// //                     <Link
// //                       to={link.path}
// //                       onClick={() => setMobileMenuOpen(false)}
// //                       className={`block py-3 px-4 rounded-lg text-base transition-all ${
// //                         location.pathname === link.path
// //                           ? 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'
// //                           : 'text-secondary hover:bg-gray-100 dark:hover:bg-white/5'
// //                       }`}
// //                     >
// //                       {link.name}
// //                     </Link>
// //                   </motion.div>
// //                 )
// //               )}

// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: navLinks.length * 0.05 }}
// //                 className="flex items-center gap-4 pt-4"
// //               >
// //                 <button
// //                   onClick={toggleTheme}
// //                   className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
// //                 >
// //                   {theme === 'dark' ? (
// //                     <HiSun className="w-5 h-5 text-yellow-500" />
// //                   ) : (
// //                     <HiMoon className="w-5 h-5 text-purple-600" />
// //                   )}
// //                 </button>

// //                 <Link
// //                   to="/contact"
// //                   className="flex-1 px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white text-center font-semibold rounded-lg"
// //                 >
// //                   Get Started
// //                 </Link>
// //               </motion.div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;

// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { HiSun, HiMoon } from 'react-icons/hi';
// import { useTheme } from '../context/ThemeContext';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const location = useLocation();
//   const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/services' },
//     { name: 'Products', path: '/products' },
//     { name: 'Workshop', path: '/workshop' },
//     { name: 'Career', path: '/career' },
//     { name: 'Gallery', path: '/gallery' },
//     {
//       name: 'About Us',
//       dropdown: true,
//       items: [
//         { name: 'Our Mission', path: '/mission' },
//         { name: 'Our Team', path: '/team' }
//       ]
//     },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -18, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       className={`fixed w-full z-50 transition-all duration-300
//         ${scrolled ? 'backdrop-blur-lg bg-white/30 dark:bg-black/40 shadow-sm' : 'bg-transparent'}
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <motion.div
//               whileHover={{ scale: 1.06 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//               className="relative flex items-center gap-3"
//             >
//               <div className="relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
//                 <img src="/logo.png" alt="ADRS" className="h-8 w-auto dark:hidden" />
//                 <img src="/logo-dark.png" alt="ADRS" className="h-8 w-auto hidden dark:block" />
//                 {/* subtle glow */}
//                 <motion.span
//                   aria-hidden
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   whileHover={{ scale: 1.4, opacity: 0.12 }}
//                   className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-400 blur-xl pointer-events-none"
//                 />
//               </div>

//               <div className="hidden md:flex flex-col leading-tight">
//                 <span className="text-sm font-bold text-gray-900 dark:text-white">ADRS</span>
//                 <span className="text-xs text-gray-500 dark:text-gray-300 -mt-0.5">Innovations & Tech</span>
//               </div>
//             </motion.div>
//           </Link>

//           {/* DESKTOP NAV */}
//           <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
//             {navLinks.map((link, index) =>
//               link.dropdown ? (
//                 <motion.div
//                   key={link.name}
//                   onMouseEnter={() => { setHoveredLink(link.name); setAboutDropdownOpen(true); }}
//                   onMouseLeave={() => { setHoveredLink(null); setAboutDropdownOpen(false); }}
//                   className="relative"
//                   initial={{ opacity: 0, y: -6 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.04 }}
//                 >
//                   <button
//                     aria-haspopup="true"
//                     aria-expanded={aboutDropdownOpen}
//                     className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2 hover:text-purple-600 transition-colors"
//                   >
//                     {link.name}
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   <AnimatePresence>
//                     {aboutDropdownOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 6 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 6 }}
//                         transition={{ duration: 0.16 }}
//                         className="absolute top-full left-0 mt-3 w-52 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-white/6 overflow-hidden"
//                       >
//                         <div className="absolute -top-2 left-6 w-3 h-3 bg-white dark:bg-gray-800 rotate-45 transform border-l border-t border-gray-100 dark:border-white/6" />
//                         {link.items.map((item, idx) => (
//                           <Link
//                             key={idx}
//                             to={item.path}
//                             onClick={() => setAboutDropdownOpen(false)}
//                             className={`block px-4 py-3 text-sm transition-colors ${
//                               location.pathname === item.path
//                                 ? 'bg-purple-50 dark:bg-purple-600/10 text-purple-600 dark:text-purple-300'
//                                 : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
//                             }`}
//                           >
//                             {item.name}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key={link.path}
//                   onMouseEnter={() => setHoveredLink(link.name)}
//                   onMouseLeave={() => setHoveredLink(null)}
//                   initial={{ opacity: 0, y: -6 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.04 }}
//                 >
//                   <Link to={link.path} className="relative px-4 py-2 text-sm font-medium block">
//                     <span className={location.pathname === link.path ? 'text-purple-600 dark:text-purple-300' : 'text-gray-700 dark:text-gray-200 hover:text-purple-600'}>
//                       {link.name}
//                     </span>

//                     {/* active pill */}
//                     {location.pathname === link.path && (
//                       <motion.span
//                         layoutId="nav-pill"
//                         className="absolute inset-0 rounded-lg -z-10"
//                         initial={false}
//                         transition={{ type: 'spring', stiffness: 300, damping: 28 }}
//                         style={{
//                           background: 'rgba(139,92,246,0.06)',
//                           backdropFilter: 'blur(6px)'
//                         }}
//                       />
//                     )}

//                     {/* hover underline */}
//                     <AnimatePresence>
//                       {hoveredLink === link.name && (
//                         <motion.div
//                           initial={{ scaleX: 0, opacity: 0 }}
//                           animate={{ scaleX: 1, opacity: 1 }}
//                           exit={{ scaleX: 0, opacity: 0 }}
//                           transition={{ duration: 0.18 }}
//                           className="absolute left-3 right-3 bottom-2 h-0.5 bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 rounded"
//                         />
//                       )}
//                     </AnimatePresence>
//                   </Link>
//                 </motion.div>
//               )
//             )}
//           </div>

//           {/* THEME TOGGLE + BUTTON (DESKTOP) */}
//           <div className="hidden lg:flex items-center gap-4">
//             <button
//               onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleTheme(); }}
//               className="relative z-10 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition transform hover:scale-105"
//               aria-label="Toggle theme"
//               type="button"
//             >
//               <motion.div
//                 initial={{ rotate: 0 }}
//                 animate={{ rotate: theme === 'dark' ? 360 : 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex items-center justify-center"
//               >
//                 {theme === 'dark' ? <HiSun className="w-5 h-5 text-yellow-400" /> : <HiMoon className="w-5 h-5 text-purple-600" />}
//               </motion.div>
//             </button>

//             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
//               <Link
//                 to="/contact"
//                 className="relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm font-semibold rounded-lg shadow-lg overflow-hidden"
//                 aria-label="Get Started"
//               >
//                 <span className="relative z-10">Get Started</span>
//                 <motion.div
//                   className="absolute inset-0 opacity-0 pointer-events-none"
//                   whileHover={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                   style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.08))' }}
//                 />
//               </Link>
//             </motion.div>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="lg:hidden p-2 rounded-md bg-white/90 dark:bg-gray-800/80 shadow-sm hover:shadow-md transition"
//             aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
//             aria-expanded={mobileMenuOpen}
//             aria-controls="mobile-menu"
//             type="button"
//           >
//             <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
//             <div className="w-7 h-6 flex flex-col justify-between">
//               <motion.span animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0 }} className="block h-0.5 bg-gray-800 dark:bg-gray-200" />
//               <motion.span animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 bg-gray-800 dark:bg-gray-200" />
//               <motion.span animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0 }} className="block h-0.5 bg-gray-800 dark:bg-gray-200" />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             id="mobile-menu"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.28 }}
//             className="lg:hidden bg-white dark:bg-gray-900/95 border-t border-gray-100 dark:border-white/5 pt-4 pb-6"
//           >
//             <div className="px-6 space-y-3">
//               {navLinks.map((link, index) =>
//                 link.dropdown ? (
//                   <div key={link.name}>
//                     <div className="text-base font-semibold text-gray-800 dark:text-gray-100 px-2 py-2">{link.name}</div>
//                     <div className="pl-4 space-y-1">
//                       {link.items.map((item, idx) => (
//                         <Link
//                           key={idx}
//                           to={item.path}
//                           onClick={() => setMobileMenuOpen(false)}
//                           className={`block py-2 px-2 rounded-lg text-sm transition ${
//                             location.pathname === item.path ? 'bg-purple-50 dark:bg-purple-600/10 text-purple-600' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
//                           }`}
//                         >
//                           {item.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className={`block py-3 px-3 rounded-lg text-base font-medium ${
//                       location.pathname === link.path ? 'bg-purple-50 dark:bg-purple-600/10 text-purple-600' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 )
//               )}

//               <div className="pt-3 border-t border-gray-100 dark:border-white/5 mt-3 flex items-center gap-3">
//                 <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition">
//                   {theme === 'dark' ? <HiSun className="w-5 h-5 text-yellow-400" /> : <HiMoon className="w-5 h-5 text-purple-600" />}
//                 </button>
//                 <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center rounded-lg font-semibold">
//                   Get Started
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Workshop", path: "/workshop" },
    { name: "Career", path: "/career" },
    { name: "Gallery", path: "/gallery" },
    {
      name: "About Us",
      dropdown: true,
      items: [
        { name: "Our Mission", path: "/mission" },
        { name: "Our Team", path: "/team" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* LEFT SIDE - LOGO + TEXT */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" className="h-10 dark:hidden" />
          <img src="/logo-dark.png" className="h-10 hidden dark:block" />

         
        </Link>

        {/* CENTER – DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <Dropdown key={i} link={link} location={location} />
            ) : (
              <Link
                key={i}
                to={link.path}
                className={`text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-purple-600"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* RIGHT – THEME TOGGLE + MOBILE MENU */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-black/10 dark:border-white/10 
            bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-white/5 transition"
          >
            {theme === "dark" ? (
              <HiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <HiMoon className="w-5 h-5 text-purple-500" />
            )}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
          >
            <div className="w-7 h-6 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-black dark:bg-white transition ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-black dark:bg-white transition ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-black dark:bg-white transition ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 text-white backdrop-blur-xl 
            border-t border-white/10 shadow-xl"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <MobileDropdown key={i} link={link} setOpen={setMobileMenuOpen} />
                ) : (
                  <Link
                    key={i}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 rounded-lg text-gray-300 hover:bg-white/10"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* DESKTOP DROPDOWN */
const Dropdown = ({ link, location }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-sm text-gray-700 dark:text-gray-200 hover:text-purple-600 flex items-center gap-1">
        {link.name}
        <svg className="w-4 h-4" fill="none" stroke="currentColor">
          <path d="M19 9l-7 7-7-7" strokeWidth="2" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-3 w-44 bg-white dark:bg-gray-900 
            border border-black/10 dark:border-white/10 shadow-xl rounded-xl overflow-hidden"
          >
            {link.items.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 
                hover:bg-gray-100 dark:hover:bg-white/10"
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

/* MOBILE DROPDOWN */
const MobileDropdown = ({ link, setOpen }) => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setDropOpen(!dropOpen)}
        className="w-full py-3 px-2 flex justify-between items-center text-gray-300"
      >
        {link.name}
        <span>{dropOpen ? "−" : "+"}</span>
      </button>

      {dropOpen && (
        <div className="pl-4 space-y-1">
          {link.items.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block py-2 px-2 text-gray-400 hover:text-white"
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
