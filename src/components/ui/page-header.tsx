
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

const PageHeader = ({ title, subtitle, imageSrc }: PageHeaderProps) => {
  return (
    <div className="relative w-full py-24 overflow-hidden bg-gradient-to-r from-brand-800 to-brand-600">
      {imageSrc && (
        <div className="absolute inset-0 opacity-20 z-0">
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/80"></div>
        </div>
      )}
      
      <div className="container relative z-10">
        <h1 className="text-5xl md:text-7xl font-corinthia text-white text-center mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-white/80 text-center max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
