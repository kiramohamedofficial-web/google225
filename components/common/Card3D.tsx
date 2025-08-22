
import React from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

const Card3D: React.FC<Card3DProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:[transform:translateY(-0.5rem)_rotateX(5deg)_rotateY(3deg)] ${className}`}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default Card3D;