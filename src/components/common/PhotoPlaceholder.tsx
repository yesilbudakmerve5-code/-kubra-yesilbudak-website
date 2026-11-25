import React from 'react';

interface PhotoPlaceholderProps {
  className?: string;
  imgSrc?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({ 
  className = '', 
  imgSrc 
}) => {
  if (imgSrc) {
    return (
      <div className={`relative group ${className}`}>
        <div className="absolute -inset-2 bg-gradient-to-tr from-gold/30 via-sageGreen/20 to-darkGreen/20 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
        <img
          src={imgSrc}
          alt="Kübra Yeşilbudak Yılmaz"
          className="relative w-full h-full object-cover rounded-2xl shadow-xl border border-gold/40"
        />
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Decorative Outer Aura / Frame */}
      <div className="absolute -inset-2.5 bg-gradient-to-tr from-gold/25 via-sageGreen/20 to-darkGreen/15 rounded-3xl blur-md opacity-60 group-hover:opacity-85 transition duration-500" />
      
      {/* Main Container */}
      <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl bg-gradient-to-b from-cream-50 via-cream to-cream-100 border border-gold/40 flex flex-col items-center justify-center p-6 text-center shadow-sm overflow-hidden group">
        
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#263B35 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Minimal Geometric Composition (SVG) */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <svg
            className="w-56 h-56 sm:w-64 sm:h-64 text-darkGreen/20"
            viewBox="0 0 200 200"
            fill="none"
          >
            {/* Concentric circles / Compass arcs */}
            <circle cx="100" cy="100" r="85" stroke="#B79B70" strokeWidth="0.8" opacity="0.4" strokeDasharray="4 3" />
            <circle cx="100" cy="100" r="65" stroke="#8A9B83" strokeWidth="0.75" opacity="0.5" />
            <circle cx="100" cy="100" r="45" stroke="#263B35" strokeWidth="0.75" opacity="0.3" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="25" stroke="#B79B70" strokeWidth="0.75" opacity="0.6" />

            {/* Coordinate crosshairs */}
            <line x1="100" y1="12" x2="100" y2="188" stroke="#8A9B83" strokeWidth="0.6" opacity="0.4" strokeDasharray="3 3" />
            <line x1="12" y1="100" x2="188" y2="100" stroke="#8A9B83" strokeWidth="0.6" opacity="0.4" strokeDasharray="3 3" />

            {/* Diagonal geometry */}
            <line x1="38" y1="38" x2="162" y2="162" stroke="#B79B70" strokeWidth="0.5" opacity="0.25" />
            <line x1="38" y1="162" x2="162" y2="38" stroke="#B79B70" strokeWidth="0.5" opacity="0.25" />

            {/* Golden Ratio Arc */}
            <path
              d="M 100 100 A 20 20 0 0 1 120 100 A 40 40 0 0 1 120 60 A 65 65 0 0 1 55 60 A 85 85 0 0 1 55 145"
              stroke="#B79B70"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* Equilateral Inscribed Polygon */}
            <polygon
              points="100,35 156,133 44,133"
              stroke="#263B35"
              strokeWidth="0.8"
              opacity="0.3"
            />
            <polygon
              points="100,165 44,67 156,67"
              stroke="#8A9B83"
              strokeWidth="0.8"
              opacity="0.25"
            />

            {/* Center Focal Point */}
            <circle cx="100" cy="100" r="3" fill="#B79B70" opacity="0.8" />
          </svg>

          {/* Understated mathematical caption */}
          <div className="absolute bottom-2 text-center pointer-events-none">
            <span className="text-[10px] uppercase tracking-[0.25em] text-darkGreen/40 font-serif">
              Geometrik Denge & Uyum
            </span>
          </div>
        </div>

        {/* Outer Corner Accents */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/40 pointer-events-none" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/40 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/40 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/40 pointer-events-none" />
      </div>
    </div>
  );
};
