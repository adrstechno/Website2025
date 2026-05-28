/**
 * CalendlyInline — Embeds Calendly scheduling widget directly in the page.
 *
 * Usage:
 *   <CalendlyInline url="https://calendly.com/yourname/30min" />
 *
 * No backend required — Calendly handles scheduling on their servers.
 * The script is loaded once and cached by the browser.
 */
import { useEffect, useRef } from 'react';
import { CALENDLY_URL } from '../constants/company';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const STYLE_HREF = 'https://assets.calendly.com/assets/external/widget.css';

const loadCalendlyAssets = () => {
  /* Inject CSS once */
  if (!document.querySelector(`link[href="${STYLE_HREF}"]`)) {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = STYLE_HREF;
    document.head.appendChild(link);
  }

  /* Return a promise that resolves when the JS is ready */
  return new Promise((resolve) => {
    if (window.Calendly) { resolve(); return; }
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      /* Script tag exists but not finished — wait for load */
      const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
      existing.addEventListener('load', resolve);
      return;
    }
    const script   = document.createElement('script');
    script.src     = SCRIPT_SRC;
    script.async   = true;
    script.onload  = resolve;
    document.head.appendChild(script);
  });
};

const CalendlyInline = ({
  url        = CALENDLY_URL,
  height     = 700,
  /* Prefill options (optional) */
  prefillName  = '',
  prefillEmail = '',
  /* Style overrides */
  style = {},
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let mounted = true;

    loadCalendlyAssets().then(() => {
      if (!mounted || !containerRef.current) return;
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
        prefill: {
          name:  prefillName,
          email: prefillEmail,
        },
        utm: {},
      });
    });

    return () => { mounted = false; };
  }, [url]);

  return (
    <div
      ref={containerRef}
      style={{
        minWidth: 320,
        height,
        borderRadius: 16,
        overflow: 'hidden',
        ...style,
      }}
      aria-label="Schedule a meeting with ADRS Techno"
    />
  );
};

export default CalendlyInline;
