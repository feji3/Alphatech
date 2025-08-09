const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Enhanced floating security orbs with intense glow */}
      <div className="absolute -top-32 -left-16 w-80 sm:w-96 h-80 sm:h-96 bg-alpha-blue rounded-full blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite,pulse_3s_ease-in-out_infinite] shadow-[0_0_200px_rgba(66,98,132,0.8)]" />
      <div className="absolute bottom-[-6rem] right-[-4rem] w-96 sm:w-[28rem] h-96 sm:h-[28rem] bg-alpha-blue rounded-full blur-3xl opacity-35 animate-[float_8s_ease-in-out_infinite_reverse,pulse_4s_ease-in-out_infinite_1s] shadow-[0_0_250px_rgba(66,98,132,0.9)]" />
      <div className="absolute top-1/2 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-alpha-blue rounded-full blur-3xl opacity-30 animate-[orbit_12s_linear_infinite] shadow-[0_0_180px_rgba(66,98,132,0.7)]" />
      <div className="absolute top-1/4 right-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-alpha-blue rounded-full blur-3xl opacity-25 animate-[float_10s_ease-in-out_infinite_3s] shadow-[0_0_160px_rgba(66,98,132,0.8)]" />
      <div className="absolute bottom-1/4 left-1/6 w-48 sm:w-64 h-48 sm:h-64 bg-alpha-blue rounded-full blur-3xl opacity-28 animate-[orbit_15s_linear_infinite_reverse] shadow-[0_0_140px_rgba(66,98,132,0.9)]" />

      {/* Additional intense glow orbs */}
      <div className="absolute top-16 right-32 w-32 h-32 bg-alpha-blue rounded-full blur-2xl opacity-50 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_120px_rgba(66,98,132,1)]" />
      <div className="absolute bottom-24 left-48 w-40 h-40 bg-alpha-blue rounded-full blur-2xl opacity-45 animate-[pulse_2.5s_ease-in-out_infinite_1s] shadow-[0_0_150px_rgba(66,98,132,0.95)]" />

      {/* Enhanced rotating magnifying glass with intense scanning effect */}
      <svg
        viewBox="0 0 300 300"
        className="absolute left-4 sm:left-16 top-8 sm:top-16 w-32 sm:w-44 opacity-45 text-alpha-charcoal/60 animate-[rotate_20s_linear_infinite,fade-pulse_3s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(66,98,132,0.8)]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
          <circle cx="120" cy="120" r="70" className="drop-shadow-[0_0_15px_rgba(66,98,132,0.6)]" />
          <path d="M168 168 L 250 250" className="drop-shadow-[0_0_12px_rgba(66,98,132,0.5)]" />
          {/* Intense scanning lines with enhanced glow */}
          <path 
            d="M80 120 L 160 120" 
            strokeWidth="6" 
            className="text-alpha-blue animate-[scan_2s_ease-in-out_infinite] drop-shadow-[0_0_25px_currentColor]" 
            stroke="currentColor" 
          />
          <path 
            d="M120 80 L 120 160" 
            strokeWidth="5" 
            className="text-alpha-blue animate-[scan_2.5s_ease-in-out_infinite_0.5s] drop-shadow-[0_0_20px_currentColor]" 
            stroke="currentColor" 
          />
          {/* Additional diagonal scanning lines */}
          <path 
            d="M95 95 L 145 145" 
            strokeWidth="4" 
            className="text-alpha-blue animate-[scan_3s_ease-in-out_infinite_1s] drop-shadow-[0_0_18px_currentColor]" 
            stroke="currentColor" 
          />
        </g>
      </svg>

      {/* Enhanced blinking surveillance eyes with intense visibility */}
      <svg
        viewBox="0 0 200 80"
        className="absolute right-4 sm:right-16 top-20 sm:top-28 w-32 sm:w-44 opacity-35 text-alpha-charcoal/60 animate-[float_7s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(66,98,132,0.7)]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
          <path d="M10 40 C 40 10, 160 10, 190 40" className="drop-shadow-[0_0_10px_rgba(66,98,132,0.5)]" />
          <path d="M10 40 C 40 70, 160 70, 190 40" className="drop-shadow-[0_0_10px_rgba(66,98,132,0.5)]" />
          <circle cx="100" cy="40" r="16" className="text-alpha-blue animate-[blink_4s_ease-in-out_infinite] drop-shadow-[0_0_30px_currentColor]" stroke="currentColor" strokeWidth="4" />
          {/* Enhanced pupil with glow */}
          <circle cx="100" cy="40" r="8" className="text-alpha-blue fill-current animate-[pulse_2s_ease-in-out_infinite] drop-shadow-[0_0_20px_currentColor]" opacity="0.8" />
        </g>
      </svg>

      {/* Secondary scanning eye with enhanced intensity */}
      <svg
        viewBox="0 0 200 80"
        className="absolute left-8 sm:left-24 bottom-12 sm:bottom-20 w-28 sm:w-40 opacity-30 text-alpha-charcoal/60 animate-[float_9s_ease-in-out_infinite_reverse] drop-shadow-[0_0_12px_rgba(66,98,132,0.6)]"
        focusable="false"
        aria-hidden
      >
        <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
          <path d="M10 40 C 40 10, 160 10, 190 40" className="drop-shadow-[0_0_8px_rgba(66,98,132,0.4)]" />
          <path d="M10 40 C 40 70, 160 70, 190 40" className="drop-shadow-[0_0_8px_rgba(66,98,132,0.4)]" />
          <circle cx="100" cy="40" r="14" className="text-alpha-blue animate-[blink_3s_ease-in-out_infinite_1.5s] drop-shadow-[0_0_25px_currentColor]" stroke="currentColor" strokeWidth="3.5" />
          <circle cx="100" cy="40" r="7" className="text-alpha-blue fill-current animate-[pulse_1.8s_ease-in-out_infinite_0.7s] drop-shadow-[0_0_15px_currentColor]" opacity="0.7" />
        </g>
      </svg>

      {/* Enhanced digital particles with intense glow and movement */}
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-alpha-blue rounded-full opacity-90 animate-[digital-drift_8s_ease-in-out_infinite] shadow-[0_0_25px_currentColor]" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-alpha-blue rounded-full opacity-75 animate-[digital-drift_10s_ease-in-out_infinite_2s] shadow-[0_0_20px_currentColor]" />
      <div className="absolute top-2/3 right-1/3 w-3.5 h-3.5 bg-alpha-blue rounded-full opacity-85 animate-[digital-drift_12s_ease-in-out_infinite_4s] shadow-[0_0_22px_currentColor]" />
      <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-alpha-blue rounded-full opacity-80 animate-[digital-drift_14s_ease-in-out_infinite_6s] shadow-[0_0_18px_currentColor]" />
      <div className="absolute bottom-1/2 right-1/6 w-2.5 h-2.5 bg-alpha-blue rounded-full opacity-70 animate-[digital-drift_16s_ease-in-out_infinite_8s] shadow-[0_0_15px_currentColor]" />
      <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-alpha-blue rounded-full opacity-65 animate-[digital-drift_18s_ease-in-out_infinite_10s] shadow-[0_0_12px_currentColor]" />
      
      {/* Enhanced scanning beams with intense glow */}
      <div className="absolute top-1/2 right-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-alpha-blue to-transparent opacity-60 animate-[scan_3s_ease-in-out_infinite_1s] shadow-[0_0_30px_rgba(66,98,132,0.8)]" />
      <div className="absolute bottom-1/3 left-1/2 w-24 sm:w-36 h-1 bg-gradient-to-r from-transparent via-alpha-blue to-transparent opacity-50 animate-[scan_4s_ease-in-out_infinite_2s] shadow-[0_0_25px_rgba(66,98,132,0.7)]" />
      <div className="absolute top-1/4 left-1/4 w-20 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-alpha-blue to-transparent opacity-45 animate-[scan_5s_ease-in-out_infinite_3s] shadow-[0_0_20px_rgba(66,98,132,0.6)]" />
      
      {/* Vertical scanning beams */}
      <div className="absolute top-1/3 left-1/3 w-0.5 h-24 sm:h-36 bg-gradient-to-b from-transparent via-alpha-blue to-transparent opacity-40 animate-[scan_6s_ease-in-out_infinite_2.5s] shadow-[0_0_18px_rgba(66,98,132,0.5)]" />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-32 sm:h-48 bg-gradient-to-b from-transparent via-alpha-blue to-transparent opacity-35 animate-[scan_7s_ease-in-out_infinite_4s] shadow-[0_0_15px_rgba(66,98,132,0.4)]" />
    </div>
  );
};

export default HeroBackground;
