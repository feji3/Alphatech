import { useEffect, useState } from "react";

const HeroBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t1 = scrollY * 0.15;
  const t2 = scrollY * -0.1;
  const t3 = scrollY * 0.05;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft gradient orbs (brand accent) */}
      <div
        className="absolute -top-24 -left-10 w-64 sm:w-80 h-64 sm:h-80 bg-alpha-blue rounded-full blur-3xl opacity-20 animate-fade-in"
        style={{ transform: `translateY(${t1}px)` }}
      />
      <div
        className="absolute bottom-[-4rem] right-[-3rem] w-72 sm:w-96 h-72 sm:h-96 bg-alpha-blue rounded-full blur-3xl opacity-20 animate-fade-in"
        style={{ transform: `translateY(${t2}px)` }}
      />

      {/* Magnifying glass outline */}
      <svg
        viewBox="0 0 300 300"
        className="absolute left-6 sm:left-16 top-10 sm:top-16 w-28 sm:w-40 opacity-20 text-alpha-charcoal/40 animate-fade-in"
        style={{ transform: `translateY(${t3}px) rotate(${scrollY * 0.02}deg)` }}
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
          <circle cx="120" cy="120" r="70" />
          <path d="M168 168 L 250 250" />
        </g>
      </svg>

      {/* Subtle "eye" motifs */}
      <svg
        viewBox="0 0 200 80"
        className="absolute right-6 sm:right-16 top-24 sm:top-28 w-28 sm:w-40 opacity-15 text-alpha-charcoal/40 animate-fade-in"
        style={{ transform: `translateY(${t2 * -0.5}px)` }}
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M10 40 C 40 10, 160 10, 190 40" />
          <path d="M10 40 C 40 70, 160 70, 190 40" />
          <circle cx="100" cy="40" r="12" className="text-alpha-blue" stroke="currentColor" />
        </g>
      </svg>

      {/* Secondary eye */}
      <svg
        viewBox="0 0 200 80"
        className="absolute left-10 sm:left-24 bottom-14 sm:bottom-20 w-24 sm:w-36 opacity-10 text-alpha-charcoal/40 animate-fade-in"
        style={{ transform: `translateY(${t1 * 0.6}px)` }}
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10 40 C 40 10, 160 10, 190 40" />
          <path d="M10 40 C 40 70, 160 70, 190 40" />
          <circle cx="100" cy="40" r="10" className="text-alpha-blue" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
};

export default HeroBackground;
