import React from 'react';

export const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-5">
    <div className="text-xs sm:text-[11pt] font-bold uppercase tracking-wide text-black border-b border-black pb-0.5 mb-2">
      {title}
    </div>
    {children}
  </div>
);

export const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex gap-2 text-sm sm:text-[10.5pt] leading-[1.5] text-black ml-3">
    <span className="mt-[3px] shrink-0">•</span>
    <span>{children}</span>
  </div>
);

export const Link: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-[#1055CC] hover:underline">
    {children}
  </a>
);
