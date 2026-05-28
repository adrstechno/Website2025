import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold font-display text-white mb-3">{title}</h2>
    <div className="text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => (
  <div className="bg-[#08090B] min-h-screen">
    <section className="pt-24 pb-10 text-center" style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold font-display text-white mb-3">Privacy Policy</h1>
        <p className="text-slate-400 text-sm">Last updated: May 1, 2025</p>
      </div>
    </section>

    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-8 sm:p-10"
        style={{ background: "rgba(17,17,20,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <Section title="1. Introduction">
          <p>ADRS Technology Private Limited ("ADRS Techno", "we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website adrstechno.com or use our services.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong className="text-slate-200">Personal Information:</strong> Name, email address, phone number, company name, and project details you provide through contact forms.</p>
          <p><strong className="text-slate-200">Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and referring URLs collected automatically.</p>
          <p><strong className="text-slate-200">Cookies:</strong> Small files stored on your device to improve user experience and analyze traffic patterns.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send project updates, invoices, and support communications</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal obligations</li>
            <li>Send newsletters and marketing emails (with your consent)</li>
          </ul>
        </Section>

        <Section title="4. Data Sharing">
          <p>We do not sell your personal data. We may share your information with:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Service providers who assist in delivering our services (e.g., cloud hosting, email)</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>
        </Section>

        <Section title="5. Data Retention">
          <p>We retain personal information for as long as necessary to provide services and comply with legal obligations. Project-related data is retained for a minimum of 5 years for compliance purposes. You may request deletion of your personal data at any time.</p>
        </Section>

        <Section title="6. Your Rights">
          <p>You have the right to: access your personal data, correct inaccurate data, request deletion, withdraw consent, and data portability. To exercise these rights, contact us at <a href="mailto:privacy@adrstechno.com" className="text-blue-400">privacy@adrstechno.com</a>.</p>
        </Section>

        <Section title="7. Security">
          <p>We implement industry-standard security measures including SSL encryption, access controls, and regular security audits to protect your information. However, no method of transmission over the internet is 100% secure.</p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>We may update this Privacy Policy periodically. We will notify you of significant changes by email or a prominent notice on our website. Continued use of our services after changes constitutes acceptance.</p>
        </Section>

        <Section title="9. Contact Us">
          <p>For privacy-related inquiries, contact us at:</p>
          <p className="mt-2">
            <strong className="text-slate-200">ADRS Technology Private Limited</strong><br />
            71, Dadda Nagar, Near Katangi Highway, Jabalpur MP 482001, India<br />
            Email: <a href="mailto:info@adrstechno.com" className="text-blue-400">info@adrstechno.com</a><br />
            Phone: <a href="tel:+919201347033" className="text-blue-400">+91 9201347033</a>
          </p>
        </Section>
      </motion.div>

      <p className="text-center text-slate-500 text-sm mt-8">
        <Link to="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">Terms of Use</Link>
        {" · "}
        <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Contact Us</Link>
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;


