import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us',  path: '/about' },
      { name: 'Services',  path: '/services' },
      { name: 'Products',  path: '/products' },
      { name: 'Contact',   path: '/contact' },
    ],
    Solutions: [
      { name: 'SaaS Platform',   path: '/products' },

      { name: 'Cloud Solutions', path: '/services' },
      { name: 'Enterprise Tools',path: '/products' },
    ],
    Resources: [
      { name: 'Documentation', path: '#' },
      { name: 'API Reference',  path: '#' },
      { name: 'Support',        path: '/contact' },
      { name: 'Blog',           path: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy',  path: '#' },
      { name: 'Terms of Service',path: '#' },
      { name: 'Security',        path: '#' },
    ],
  };

  const socials = [
    { href: "https://www.linkedin.com/company/adrs-technology/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://github.com/adrstechno",                     icon: <FaGithub />,   label: "GitHub" },
    { href: "https://www.instagram.com/adrstechno",              icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <footer className="bg-white dark:bg-[#0B1120] text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-[#1E293B] transition-colors duration-300">

      {/* Blue top accent */}
      <div className="h-[3px] bg-blue-600" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center">
              <img src="/logo.png" alt="ADRS" className="h-9 w-auto object-contain dark:hidden" />
              <img src="/logo-dark.png" alt="ADRS" className="h-9 w-auto object-contain hidden dark:block" />
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Enterprise-grade software, BPO, and automation solutions for modern businesses worldwide.
            </p>

            <div className="text-xs text-slate-600 dark:text-slate-500 space-y-3">
              <div>
                <span className="text-slate-900 dark:text-slate-300 font-semibold block mb-1">Address</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=71,+Dadda+nagar+Near+katangi+highway+Jabalpur+MP+482001"
                  target="_blank" rel="noreferrer noopener"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-relaxed"
                >
                  71, Dadda nagar Near katangi highway,<br />Jabalpur MP 482001
                </a>
              </div>
              <div>
                <span className="text-slate-900 dark:text-slate-300 font-semibold block mb-1">Phone</span>
                <a href="tel:+919076927464" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 90769 27464
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noreferrer noopener"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat} className="space-y-4">
              <h3 className="text-slate-900 dark:text-white font-bold text-xs tracking-[0.15em] uppercase font-display">
                {cat}
              </h3>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-[#1E293B] flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {currentYear} ADRS Technology Private Limited. All rights reserved.</p>
          <p>Built with precision &amp; high-performance engineering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

