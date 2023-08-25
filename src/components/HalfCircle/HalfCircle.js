import React from 'react';

const HalfCircle = ({ radius, strokeWidth }) => {
  const centerX = radius;
  const centerY = radius;
  const arcRadius = radius - strokeWidth / 2;
  const pathData = `M${centerX},${centerY} A${arcRadius},${arcRadius} 0 0 0 ${centerX},${radius * 2}`;

  return (
    <svg width={radius * 2} height={radius} viewBox={`0 0 ${radius * 2} ${radius}`}>
      <path d={pathData} fill="none" stroke="black" strokeWidth={strokeWidth} />
    </svg>
  );
};

export default HalfCircle;
