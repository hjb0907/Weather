import React from 'react';

const Star = () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const size = Math.random() * 12;
  const time = Math.random() * 8;

  return (
    <div
      className="star"
      style={{
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
        width: size + 'px',
        height: size + 'px',
        backgroundColor: '#ffe658',
        filter: 'blur(2px)',
        borderRadius: '50%',
        animation: `blink ${time}s steps(5) infinite`
      }}
    />
  );
};

export default Star;
