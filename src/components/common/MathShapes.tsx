import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const MathShapes: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Golden Ratio Spiral / Arc */}
      <motion.svg
        className="absolute -top-12 -right-12 w-96 h-96 text-gold/15"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        initial={{ rotate: 0, scale: 0.95 }}
        animate={
          shouldReduceMotion
            ? { rotate: 0, scale: 1 }
            : { rotate: 360, scale: 1.05 }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 60, repeat: Infinity, ease: 'linear' }
        }
      >
        <path d="M 100 100 A 10 10 0 0 1 110 100 A 20 20 0 0 1 110 80 A 30 30 0 0 1 80 80 A 50 50 0 0 1 80 130 A 80 80 0 0 1 160 130" />
        <circle cx="100" cy="100" r="90" strokeDasharray="3 3" opacity="0.6" />
      </motion.svg>

      {/* Geometric Sacred Polygon / Tetrahedron Projection */}
      <motion.svg
        className="absolute top-1/3 -left-16 w-80 h-80 text-sageGreen/20"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ y: 0, rotate: 0 }}
        animate={
          shouldReduceMotion
            ? { y: 0, rotate: 0 }
            : { y: [-15, 15, -15], rotate: [0, 45, 0] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 25, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <polygon points="50,10 90,80 10,80" />
        <polygon points="50,90 90,20 10,20" opacity="0.5" />
        <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="2 2" />
      </motion.svg>

      {/* Floating Mathematical Symbols */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-2xl font-serif text-darkGreen/15"
        initial={{ y: 0, opacity: 0.2 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.2 }
            : { y: [-10, 10, -10], opacity: [0.15, 0.35, 0.15] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        a² + b² = c²
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 text-3xl font-serif text-gold/25"
        initial={{ y: 0, opacity: 0.2 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.25 }
            : { y: [10, -10, 10], opacity: [0.2, 0.45, 0.2] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }
        }
      >
        π ≈ 3.14159
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-16 text-3xl font-serif text-sageGreen/25"
        initial={{ rotate: 0 }}
        animate={
          shouldReduceMotion
            ? { rotate: 0 }
            : { rotate: [-8, 8, -8] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 9, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        f(x) = ax + b
      </motion.div>

      {/* Coordinate Grid Accents */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#263B35 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />
    </div>
  );
};
