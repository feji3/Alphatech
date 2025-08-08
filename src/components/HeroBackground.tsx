const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Floating security orbs with pulse effect */}
      <div className="absolute -top-24 -left-10 w-64 sm:w-80 h-64 sm:h-80 bg-alpha-blue rounded-full blur-3xl opacity-20 animate-[float_6s_ease-in-out_infinite,pulse_3s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-4rem] right-[-3rem] w-72 sm:w-96 h-72 sm:h-96 bg-alpha-blue rounded-full blur-3xl opacity-15 animate-[float_8s_ease-in-out_infinite_reverse,pulse_4s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-alpha-blue rounded-full blur-3xl opacity-10 animate-[orbit_12s_linear_infinite]" />

      {/* Rotating magnifying glass with scanning effect */}
      <svg
        viewBox="0 0 300 300"
        className="absolute left-6 sm:left-16 top-10 sm:top-16 w-28 sm:w-40 opacity-20 text-alpha-charcoal/40 animate-[rotate_20s_linear_infinite,fade-pulse_3s_ease-in-out_infinite]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
          <circle cx="120" cy="120" r="70" />
          <path d="M168 168 L 250 250" />
          {/* Scanning line */}
          <path 
            d="M80 120 L 160 120" 
            strokeWidth="2" 
            className="text-alpha-blue animate-[scan_2s_ease-in-out_infinite]" 
            stroke="currentColor" 
          />
        </g>
      </svg>

      {/* Blinking surveillance eyes */}
      <svg
        viewBox="0 0 200 80"
        className="absolute right-6 sm:right-16 top-24 sm:top-28 w-28 sm:w-40 opacity-15 text-alpha-charcoal/40 animate-[float_7s_ease-in-out_infinite]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M10 40 C 40 10, 160 10, 190 40" />
          <path d="M10 40 C 40 70, 160 70, 190 40" />
          <circle cx="100" cy="40" r="12" className="text-alpha-blue animate-[blink_4s_ease-in-out_infinite]" stroke="currentColor" />
        </g>
      </svg>

      {/* Secondary scanning eye */}
      <svg
        viewBox="0 0 200 80"
        className="absolute left-10 sm:left-24 bottom-14 sm:bottom-20 w-24 sm:w-36 opacity-10 text-alpha-charcoal/40 animate-[float_9s_ease-in-out_infinite_reverse]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10 40 C 40 10, 160 10, 190 40" />
          <path d="M10 40 C 40 70, 160 70, 190 40" />
          <circle cx="100" cy="40" r="10" className="text-alpha-blue animate-[blink_3s_ease-in-out_infinite_1.5s]" stroke="currentColor" />
        </g>
      </svg>

      {/* Digital particles */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-alpha-blue rounded-full opacity-60 animate-[digital-drift_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-alpha-blue rounded-full opacity-40 animate-[digital-drift_10s_ease-in-out_infinite_2s]" />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-alpha-blue rounded-full opacity-50 animate-[digital-drift_12s_ease-in-out_infinite_4s]" />
    </div>
  );
};

export default HeroBackground;
