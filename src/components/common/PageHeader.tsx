import React from 'react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="border-b border-sageGreen/20 bg-gradient-to-b from-cream-100 to-cream py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {badge && (
          <div className="inline-block px-3 py-1 rounded-full bg-sageGreen/20 border border-sageGreen/40 text-darkGreen text-xs font-semibold uppercase tracking-wider mb-3">
            {badge}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-darkGreen tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-darkGreen/75 font-sans max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
