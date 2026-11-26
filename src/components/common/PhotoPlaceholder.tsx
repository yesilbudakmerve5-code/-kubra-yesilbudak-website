/// <reference types="vite/client" />
import React from 'react';

interface PhotoPlaceholderProps {
  className?: string;
  imgSrc?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  className = '',
  imgSrc,
}) => {
  // Resolve image source; fallback to teacher portrait in public folder.
  const src = imgSrc ?? `${import.meta.env.BASE_URL}images/kubra-yesilbudak.png`;

  return (
    <div className={`relative group ${className}`}>
      {/* Pastel cream background */}
      <div className="absolute inset-0 bg-cream-100"></div>
      {/* Subtle radial pastel overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, #e0f2e9 0%, transparent 40%), radial-gradient(circle at 70% 70%, #f5f1e6 0%, transparent 45%)`,
        }}
      ></div>

      {/* Outer frame with double gold border and curved top */}
      <div
        className="relative p-1.5 bg-white overflow-hidden rounded-t-[2rem] rounded-b-[0.5rem]"
        style={{ border: '2px solid #B8860B' }} // matte dark gold
      >
        <div
          className="overflow-hidden rounded-t-[1.9rem] rounded-b-[0.4rem]"
          style={{ border: '2px solid #FFD700' }} // Lighter gold
        >
          <img
            src={src}
            alt="Kübra Yeşilbudak Yılmaz"
            className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-500 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
