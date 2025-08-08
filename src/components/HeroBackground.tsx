const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Enhanced floating security orbs with stronger pulse effect */}
      <div className="absolute -top-32 -left-16 w-80 sm:w-96 h-80 sm:h-96 bg-alpha-blue rounded-full blur-3xl opacity-30 animate-[float_6s_ease-in-out_infinite,pulse_3s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-6rem] right-[-4rem] w-96 sm:w-[28rem] h-96 sm:h-[28rem] bg-alpha-blue rounded-full blur-3xl opacity-25 animate-[float_8s_ease-in-out_infinite_reverse,pulse_4s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-alpha-blue rounded-full blur-3xl opacity-20 animate-[orbit_12s_linear_infinite]" />
      <div className="absolute top-1/4 right-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-alpha-blue rounded-full blur-3xl opacity-15 animate-[float_10s_ease-in-out_infinite_3s]" />
      <div className="absolute bottom-1/4 left-1/6 w-48 sm:w-64 h-48 sm:h-64 bg-alpha-blue rounded-full blur-3xl opacity-18 animate-[orbit_15s_linear_infinite_reverse]" />

      {/* Enhanced rotating magnifying glass with stronger scanning effect */}
      <svg
        viewBox="0 0 300 300"
        className="absolute left-4 sm:left-16 top-8 sm:top-16 w-32 sm:w-44 opacity-35 text-alpha-charcoal/50 animate-[rotate_20s_linear_infinite,fade-pulse_3s_ease-in-out_infinite]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round">
          <circle cx="120" cy="120" r="70" />
          <path d="M168 168 L 250 250" />
          {/* Enhanced scanning line with glow effect */}
          <path 
            d="M80 120 L 160 120" 
            strokeWidth="4" 
            className="text-alpha-blue animate-[scan_2s_ease-in-out_infinite] drop-shadow-[0_0_8px_currentColor]" 
            stroke="currentColor" 
          />
          <path 
            d="M120 80 L 120 160" 
            strokeWidth="3" 
            className="text-alpha-blue animate-[scan_2.5s_ease-in-out_infinite_0.5s] drop-shadow-[0_0_6px_currentColor]" 
            stroke="currentColor" 
          />
        </g>
      </svg>

      {/* Enhanced blinking surveillance eyes with stronger visibility */}
      <svg
        viewBox="0 0 200 80"
        className="absolute right-4 sm:right-16 top-20 sm:top-28 w-32 sm:w-44 opacity-25 text-alpha-charcoal/50 animate-[float_7s_ease-in-out_infinite]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
          <path d="M10 40 C 40 10, 160 10, 190 40" />
          <path d="M10 40 C 40 70, 160 70, 190 40" />
          <circle cx="100" cy="40" r="14" className="text-alpha-blue animate-[blink_4s_ease-in-out_infinite] drop-shadow-[0_0_10px_currentColor]" stroke="currentColor" strokeWidth="3" />
        </g>
      </svg>

      {/* Secondary scanning eye with enhanced visibility */}
      <svg
        viewBox="0 0 200 80"
        className="absolute left-8 sm:left-24 bottom-12 sm:bottom-20 w-28 sm:w-40 opacity-20 text-alpha-charcoal/50 animate-[float_9s_ease-in-out_infinite_reverse]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
          <path d="M10 40 C 40 10, 160 10, 190 40" />
          <path d="M10 40 C 40 70, 160 70, 190 40" />
          <circle cx="100" cy="40" r="12" className="text-alpha-blue animate-[blink_3s_ease-in-out_infinite_1.5s] drop-shadow-[0_0_8px_currentColor]" stroke="currentColor" strokeWidth="2.5" />
        </g>
      </svg>

      {/* Enhanced digital particles with more movement */}
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-alpha-blue rounded-full opacity-80 animate-[digital-drift_8s_ease-in-out_infinite] shadow-[0_0_12px_currentColor]" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-alpha-blue rounded-full opacity-60 animate-[digital-drift_10s_ease-in-out_infinite_2s] shadow-[0_0_8px_currentColor]" />
      <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-alpha-blue rounded-full opacity-70 animate-[digital-drift_12s_ease-in-out_infinite_4s] shadow-[0_0_10px_currentColor]" />
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-alpha-blue rounded-full opacity-65 animate-[digital-drift_14s_ease-in-out_infinite_6s] shadow-[0_0_8px_currentColor]" />
      <div className="absolute bottom-1/2 right-1/6 w-1.5 h-1.5 bg-alpha-blue rounded-full opacity-55 animate-[digital-drift_16s_ease-in-out_infinite_8s] shadow-[0_0_6px_currentColor]" />
      
      {/* Additional scanning elements */}
      <div className="absolute top-1/2 right-1/2 w-32 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-alpha-blue to-transparent opacity-40 animate-[scan_3s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-1/3 left-1/2 w-24 sm:w-36 h-0.5 bg-gradient-to-r from-transparent via-alpha-blue to-transparent opacity-30 animate-[scan_4s_ease-in-out_infinite_2s]" />
    </div>
  );
};

export default HeroBackground;
