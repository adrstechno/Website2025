/* ContactForm upgraded to React Hook Form + Zod + GSAP */
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { gsap } from 'gsap';
import { CheckCircle, AlertCircle, ArrowRight, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ── Zod schema ── */
const schema = z.object({
  name:        z.string().min(2, 'Name must be at least 2 characters'),
  email:       z.string().email('Enter a valid email address'),
  phone:       z.string().optional(),
  company:     z.string().optional(),
  projectType: z.string().optional(),
  budget:      z.string().optional(),
  message:     z.string().min(10, 'Please add at least 10 characters'),
});

const PROJECT_TYPES = ['Web Development','Mobile App','AI Automation','SaaS Product','BPO Services','Cloud / DevOps','Hire Developers','Other'];
const BUDGETS = ['< $1,000','$1,000 – $5,000','$5,000 – $20,000','$20,000 – $50,000','$50,000+',"Let's discuss"];

const iStyle = { background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, color:'#f1f5f9', width:'100%', padding:'11px 14px', fontSize:'0.875rem', transition:'border-color 0.2s', outline:'none' };
const fBorder = (e) => (e.target.style.borderColor = 'rgba(229,231,235,0.55)');
const bBorder = (e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)');

const Field = ({ label, error, children }) => (
  <div>
    <label style={{ display:'block', fontSize:'0.7rem', fontWeight:700, color:'#94a3b8', marginBottom:5, textTransform:'uppercase', letterSpacing:'0.08em' }}>{label}</label>
    {children}
    {error && <p style={{ fontSize:'0.7rem', color:'#D1D5DB', marginTop:3 }}>{error}</p>}
  </div>
);

const ContactForm = ({ compact = false }) => {
  const formRef    = useRef(null);
  const successRef = useRef(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted]     = useState(false);

  useEffect(() => {
    if (formRef.current) gsap.fromTo(formRef.current, { opacity:0, y:20 }, { opacity:1, y:0, duration:0.55, ease:'power3.out', delay:0.1 });
  }, []);

  const onSubmit = async (data) => {
    setServerError('');
    try {
      const ep = import.meta.env.VITE_CONTACT_ENDPOINT;
      if (ep) {
        const res = await fetch(ep, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ ...data, _source:'contact-form' }) });
        if (!res.ok) throw new Error('server');
      } else { await new Promise(r => setTimeout(r, 900)); }
      setSubmitted(true); reset();
      if (successRef.current) gsap.fromTo(successRef.current, { opacity:0, scale:0.93 }, { opacity:1, scale:1, duration:0.4, ease:'back.out(1.5)' });
    } catch { setServerError('Something went wrong. Please try WhatsApp or email us directly.'); }
  };

  if (submitted) return (
    <div ref={successRef} className="text-center py-10 rounded-2xl" style={{ background:'rgba(17,17,20,0.5)', border:'1px solid rgba(255,255,255,0.08)' }}>
      <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
      <p className="text-slate-400 text-sm mb-5">We'll get back to you within 24 hours.</p>
      <button onClick={() => setSubmitted(false)} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Send another →</button>
    </div>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4" style={{ opacity:0 }}>
      {/* sm:grid-cols-2 — stacks to 1 col on phones < 640px */}
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <Field label="Full Name *" error={errors.name?.message}><input {...register('name')} style={iStyle} placeholder="John Smith" onFocus={fBorder} onBlur={bBorder} /></Field>
        <Field label="Company" error={errors.company?.message}><input {...register('company')} style={iStyle} placeholder="Acme Corp" onFocus={fBorder} onBlur={bBorder} /></Field>
      </div>
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <Field label="Email *" error={errors.email?.message}><input type="email" {...register('email')} style={iStyle} placeholder="you@company.com" onFocus={fBorder} onBlur={bBorder} /></Field>
        <Field label="Phone / WhatsApp" error={errors.phone?.message}><input type="tel" {...register('phone')} style={iStyle} placeholder="+1 000 000 0000" onFocus={fBorder} onBlur={bBorder} /></Field>
      </div>
      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Project Type" error={errors.projectType?.message}><select {...register('projectType')} style={iStyle}><option value="">Select...</option>{PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}</select></Field>
          <Field label="Budget" error={errors.budget?.message}><select {...register('budget')} style={iStyle}><option value="">Select...</option>{BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}</select></Field>
        </div>
      )}
      <Field label="Message *" error={errors.message?.message}><textarea rows={compact ? 3 : 4} {...register('message')} style={iStyle} placeholder="Tell us about your project, goals, and timeline..." onFocus={fBorder} onBlur={bBorder} /></Field>
      {serverError && (
        <div className="flex items-start gap-2 p-3 rounded-lg text-sm text-red-400" style={{ background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.2)' }}>
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />{serverError}
        </div>
      )}
      <button type="submit" disabled={isSubmitting} className="btn-glow w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60">
        {isSubmitting ? <><Loader className="w-4 h-4 animate-spin" /> Sending...</> : <>Send Message <ArrowRight className="w-4 h-4" /></>}
      </button>
      <p className="text-xs text-slate-500 text-center">
        By submitting, you agree to our <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>. We never share your data.
      </p>
    </form>
  );
};

export default ContactForm;





