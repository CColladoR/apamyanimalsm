import React from 'react';

// Using the raw GitHub link as images directly from blob pages don't work in img src tags usually.
// If the blob link was strictly required, we'd need a proxy, but raw is standard practice.
const LOGO_URL = "https://raw.githubusercontent.com/CColladoR/apa/main/logo_apa.png";

export const Logo: React.FC<{ className?: string }> = ({ className = "h-16" }) => {
  return (
    <img 
      src={LOGO_URL} 
      alt="APA Myanimalsm Logo" 
      className={`object-contain ${className}`}
      onError={(e) => {
        // Fallback if image fails
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement!.innerHTML += '<span class="text-xl font-bold font-brand text-teal-700">APA Myanimalsm</span>';
      }}
    />
  );
};