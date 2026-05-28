import { useEffect, useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import CountUp from 'react-countup';
import CalendlyButton from './CalendlyButton';
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Code2,
  Smartphone,
  Bot,
  CloudCog,
  Headset,
  Workflow,
} from 'lucide-react';
import { HERO_STATS, WA } from '../constants/company';

/* Lazy-load Three.js GL canvas — keeps main bundle lean */
const HeroGL = lazy(() => import('./HeroGL'));

const domainSignals = [
  { label: 'Web Apps', icon: Code2 },
  { label: 'Mobile Apps', icon: Smartphone },
  { label: 'AI Automation', icon: Bot },
  { label: 'Cloud & DevOps', icon: CloudCog },
  { label: 'BPO Ops', icon: Headset },
  { label: 'Workflow Systems', icon: Workflow },
];

const Hero = () => {
  const wrapRef    = useRef(null);
  const badgeRef   = useRef(null);
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);
  const line3Ref   = useRef(null);
  const subRef     = useRef(null);
  const ctasRef    = useRef(null);
  const statsRef   = useRef(null);
  const sideRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(badgeRef.current,
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.6 })

        .fromTo(
          [line1Ref.current, line2Ref.current, line3Ref.current],
          { opacity: 0, y: 60, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, stagger: 0.12 },
          '-=0.3'
        )

        .fromTo(subRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )

        .fromTo(ctasRef.current.children,
          { opacity: 0, y: 20, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1 },
          '-=0.35'
        )

        .fromTo(statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.2'
        )
        .fromTo(
          sideRef.current,
          { opacity: 0, x: 28, scale: 0.98 },
          { opacity: 1, x: 0, scale: 1, duration: 0.7 },
          '-=0.5'
        );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0B0D12 0%, #08090B 40%, #11141A 70%, #0C0E14 100%)',
      }}
    >
      {/* Three.js WebGL background — lazy, no SSR fallback needed */}
      <Suspense fallback={null}>
        <HeroGL />
      </Suspense>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700,
          top: -200, left: -150,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          bottom: -100, right: -50,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(209,213,219,0.12) 0%, transparent 70%)',
          animationDelay: '3s',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-24 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px] gap-12 items-start">
          <div className="max-w-4xl">

          {/* Badge */}
          <div ref={badgeRef} style={{ opacity: 0 }} className="mb-8">
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse-slow mr-2" />
              Trusted by Global Businesses · Est. 2022
            </span>
          </div>

          {/* Headline — split into lines for per-line reveal */}
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight font-display text-white mb-6 overflow-hidden">
            <span ref={line1Ref} className="block" style={{ opacity: 0 }}>Build Scalable</span>
            <span ref={line2Ref} className="block" style={{ opacity: 0 }}>
              <span className="gradient-text">Digital Products</span>
            </span>
            <span ref={line3Ref} className="block" style={{ opacity: 0 }}>With ADRS Techno</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            style={{ opacity: 0 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            Software Development, AI Automation, BPO Operations &amp; Offshore
            Teams for Global Businesses — delivered with precision and speed.
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className="flex flex-wrap gap-4 mb-16">
            <CalendlyButton
              className="btn-glow group inline-flex items-center gap-2.5 px-7 py-4 bg-blue-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </CalendlyButton>

            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-300 hover:text-white transition-all"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              View Portfolio
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href={WA.consult}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2.5 px-5 py-4 rounded-xl font-bold text-sm text-green-400 hover:text-green-300 transition-colors"
              style={{
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.2)',
              }}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </div>

          {/* Trust stats — canonical numbers from constants */}
          <div
            ref={statsRef}
            style={{
              opacity: 0,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 14,
              overflow: 'hidden',
            }}
            className="grid grid-cols-2 sm:grid-cols-4"
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-5 sm:py-6 px-2 sm:px-4 text-center"
                style={i < HERO_STATS.length - 1 ? { borderRight: '1px solid rgba(255,255,255,0.06)' } : {}}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display stat-number leading-none">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium mt-1 tracking-wide leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
          </div>

          <div ref={sideRef} className="hidden lg:block" style={{ opacity: 0 }}>
            <div
              className="relative rounded-2xl p-6"
              style={{
                background: 'rgba(16,17,20,0.88)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-2">
                  Domain Expertise
                </p>
                <h3 className="text-xl font-bold text-white leading-snug">
                  Engineering + Operations for Growth Teams
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {domainSignals.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl p-3"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg mb-2 flex items-center justify-center text-[#E5E7EB]"
                        style={{ background: 'rgba(255,255,255,0.2)' }}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="text-xs text-slate-300 font-semibold leading-tight">{item.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-semibold mb-3">
                  Recent Outcomes
                </p>
                <div className="space-y-2.5">
                  {[
                    "MVP launch in 6 weeks",
                    "Ops automation effort reduced by 40%",
                    "24/7 support with distributed team model",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="absolute -right-4 -top-4 px-3 py-1.5 rounded-full text-[11px] font-bold text-[#E5E7EB]"
                style={{ background: 'rgba(255,255,255,0.22)', border: '1px solid rgba(229,231,235,0.4)' }}
              >
                AI + SaaS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #08090B)' }}
      />
    </section>
  );
};

export default Hero;


