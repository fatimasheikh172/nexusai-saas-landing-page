import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] cursor-pointer'
    : '';

  return (
    <div
      className={`glass rounded-xl p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
