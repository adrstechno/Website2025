import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Products', path: '/products' },
      { name: 'Contact', path: '/contact' },
    ],
    Solutions: [
      { name: 'SaaS Platform', path: '/products' },
      { name: 'PaaS Infrastructure', path: '/services' },
      { name: 'Cloud Solutions', path: '/services' },
      { name: 'Enterprise Tools', path: '/products' },
    ],
    Resources: [
      { name: 'Documentation', path: '#' },
      { name: 'API Reference', path: '#' },
      { name: 'Support', path: '/contact' },
      { name: 'Blog', path: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Security', path: '#' },
    ],
  };

  return (
    <footer className="section-bg-alt border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="ADRS Technology" className="h-10 w-auto" />
            </div>
            <div className="text-lg font-bold mb-4">
              <span className="text-primary">ADRS</span>
              <span className="text-purple-600 dark:text-purple-400"> Technology</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed mb-6">
              Enterprise-grade SaaS & PaaS solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-primary font-semibold mb-4 text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-secondary hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
          <p>© {currentYear} ADRS Technology. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Built with precision and care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
