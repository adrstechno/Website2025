/**
 * CalendlyButton — Triggers a Calendly popup modal on click.
 *
 * Usage:
 *   <CalendlyButton>Book a Call</CalendlyButton>
 *   <CalendlyButton url="https://calendly.com/yourname/15min" className="...">
 *     Schedule 15 min →
 *   </CalendlyButton>
 *
 * No backend required. The popup is handled entirely by Calendly's JS SDK.
 */
import { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { CALENDLY_URL } from '../constants/company';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const STYLE_HREF = 'https://assets.calendly.com/assets/external/widget.css';

/* Preload assets when the component mounts — popup opens instantly */
const ensureCalendlyLoaded = () => {
  if (!document.querySelector(`link[href="${STYLE_HREF}"]`)) {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = STYLE_HREF;
    document.head.appendChild(link);
  }
  if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
    const script   = document.createElement('script');
    script.src     = SCRIPT_SRC;
    script.async   = true;
    document.head.appendChild(script);
  }
};

const CalendlyButton = ({
  url        = CALENDLY_URL,
  children,
  className  = '',
  showIcon   = true,
  onBeforeOpen,
  /* Optional prefill */
  prefillName  = '',
  prefillEmail = '',
}) => {
  useEffect(() => { ensureCalendlyLoaded(); }, []);

  const openPopup = (e) => {
    e.preventDefault();
    if (typeof onBeforeOpen === 'function') {
      onBeforeOpen();
    }
    if (!window.Calendly) {
      /* Fallback: open in new tab if SDK not yet loaded */
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    window.Calendly.initPopupWidget({
      url,
      prefill: { name: prefillName, email: prefillEmail },
      utm:     {},
    });
  };

  const defaultClass =
    'btn-glow inline-flex items-center gap-2.5 px-7 py-4 bg-blue-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-colors';

  return (
    <button
      type="button"
      onClick={openPopup}
      className={className || defaultClass}
      aria-label="Open scheduling calendar"
    >
      {showIcon && <Calendar className="w-4 h-4 flex-shrink-0" />}
      {children || 'Book Free Consultation'}
    </button>
  );
};

export default CalendlyButton;
