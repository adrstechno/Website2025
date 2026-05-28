import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold font-display text-white mb-3">{title}</h2>
    <div className="text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

const Terms = () => (
  <div className="bg-[#08090B] min-h-screen">
    <section className="pt-24 pb-10 text-center" style={{ background: "linear-gradient(180deg, #0B0D12 0%, #08090B 100%)" }}>
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold font-display text-white mb-3">Terms of Use</h1>
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
        <Section title="1. Acceptance of Terms">
          <p>By accessing or using the website of ADRS Technology Private Limited ("ADRS Techno"), you agree to be bound by these Terms of Use. If you do not agree, please do not use our website or services.</p>
        </Section>

        <Section title="2. Services">
          <p>ADRS Techno provides software development, AI automation, BPO operations, dedicated developer staffing, and related technology services. Specific service terms are defined in individual client agreements and statements of work.</p>
        </Section>

        <Section title="3. Intellectual Property">
          <p>All content on this website including text, graphics, logos, and software is the property of ADRS Techno and protected by applicable intellectual property laws.</p>
          <p>Work product created for clients under contract is transferred to the client upon full payment as specified in the project agreement. ADRS Techno retains no rights over client deliverables once paid for.</p>
        </Section>

        <Section title="4. Client Responsibilities">
          <p>Clients are responsible for providing accurate project requirements, timely feedback, and access to necessary systems. Delays caused by client inaction may affect project timelines without penalty to ADRS Techno.</p>
        </Section>

        <Section title="5. Payment Terms">
          <p>Payment schedules are defined per project contract. Standard terms include 30-50% upfront for fixed-price projects and monthly invoicing for T&M and dedicated team engagements. Late payments may incur interest charges.</p>
        </Section>

        <Section title="6. Confidentiality">
          <p>Both parties agree to maintain confidentiality of proprietary information shared during the engagement. NDAs are available upon request and are signed before any sensitive project discussion.</p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>ADRS Techno's liability for any claim arising from our services shall not exceed the amount paid by the client in the 3 months preceding the claim. We are not liable for indirect, consequential, or incidental damages.</p>
        </Section>

        <Section title="8. Warranty Disclaimer">
          <p>Our website and services are provided "as is" without warranties of any kind. We do not warrant that our services will be error-free or uninterrupted. Post-launch warranty periods are specified per project contract.</p>
        </Section>

        <Section title="9. Governing Law">
          <p>These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in Jabalpur, Madhya Pradesh, India, in accordance with the Arbitration and Conciliation Act.</p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>We reserve the right to modify these Terms at any time. Changes take effect upon posting on this website. Continued use of our services constitutes acceptance of updated terms.</p>
        </Section>

        <Section title="11. Contact">
          <p>
            <strong className="text-slate-200">ADRS Technology Private Limited</strong><br />
            71, Dadda Nagar, Near Katangi Highway, Jabalpur MP 482001, India<br />
            Email: <a href="mailto:info@adrstechno.com" className="text-blue-400">info@adrstechno.com</a>
          </p>
        </Section>
      </motion.div>

      <p className="text-center text-slate-500 text-sm mt-8">
        <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>
        {" · "}
        <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Contact Us</Link>
      </p>
    </div>
  </div>
);

export default Terms;


