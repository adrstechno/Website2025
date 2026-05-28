import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiShield, FiX, FiZap } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import ContactForm from "./ContactForm";
import CalendlyButton from "./CalendlyButton";
import { useModal } from "../context/ModalContext";
import { CALENDLY_URL, WA } from "../constants/company";

const tabs = [
  { id: "general", label: "General" },
  { id: "services", label: "Services" },
  { id: "schedule", label: "Schedule Call" },
  { id: "hire", label: "Hire Developers" },
  { id: "legal", label: "Legal & Security" },
];

const tabContent = {
  general: {
    title: "General Consultation",
    subtitle: "Share your goals and we will suggest the right execution plan.",
    bullets: ["Free consultation call", "Response in 24 hours", "Scope and timeline clarity"],
  },
  services: {
    title: "Services Discovery",
    subtitle: "Discuss web, mobile, AI, and automation services for your business.",
    bullets: ["Technical discovery", "Feature prioritization", "Delivery roadmap"],
  },
  schedule: {
    title: "Schedule a 30-Min Call",
    subtitle: "Open our live calendar and book an available slot instantly.",
    bullets: ["Real-time slot availability", "Automatic meeting invite", "30-minute focused consultation"],
  },
  hire: {
    title: "Hire Dedicated Developers",
    subtitle: "Tell us the role and timeline, and we will match vetted profiles quickly.",
    bullets: ["Profiles in 24-48 hours", "Timezone aligned developers", "Flexible engagement model"],
  },
  legal: {
    title: "Legal and Security",
    subtitle: "We can walk through NDA, IP ownership, and security process before kickoff.",
    bullets: ["NDA before discussion", "Client-owned IP", "Secure development standards"],
  },
};

const ConsultationModal = () => {
  const { isOpen, activeTab, setActiveTab, closeModal } = useModal();
  const content = tabContent[activeTab] || tabContent.general;
  const handleOverlayMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4"
          style={{ background: "rgba(3,4,6,0.75)", backdropFilter: "blur(6px)" }}
          onMouseDown={handleOverlayMouseDown}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-5xl rounded-2xl overflow-hidden"
            style={{ background: "#0F1014", border: "1px solid rgba(255,255,255,0.1)" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400 font-semibold">Book Consultation</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{content.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close consultation modal"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)" }}
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                    style={
                      activeTab === tab.id
                        ? { background: "#E5E7EB", color: "#111827" }
                        : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }
                    }
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <p className="text-slate-400 text-sm mb-6">{content.subtitle}</p>
                <ul className="space-y-3 mb-6">
                  {content.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.24)" }}
                      >
                        <FiZap className="w-3 h-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-xl p-4 mb-3"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm mb-1">
                    <FiShield className="w-4 h-4" />
                    Confidential by default
                  </div>
                  <p className="text-slate-400 text-xs">NDA available before project discussion and architecture review.</p>
                </div>

                <a
                  href={WA.consult}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
                >
                  <BsWhatsapp className="w-4 h-4" />
                  Prefer WhatsApp? Start chat now
                </a>
              </div>

              <div className="p-5 sm:p-6">
                {activeTab === "schedule" ? (
                  <div
                    className="h-full rounded-xl p-5 flex flex-col justify-between"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div>
                      <p className="text-white font-semibold text-lg mb-2">Book Directly with Calendly</p>
                      <p className="text-slate-400 text-sm mb-5">
                        Click below to open the calendar popup and confirm your meeting instantly.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <CalendlyButton
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E5E7EB] text-[#111827] font-bold text-sm rounded-lg hover:bg-white transition-colors"
                        showIcon={false}
                      >
                        Open Calendly
                      </CalendlyButton>
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="block text-center text-xs text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        Popup blocked? Open booking page in new tab
                      </a>
                    </div>
                  </div>
                ) : (
                  <ContactForm compact key={activeTab} />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
