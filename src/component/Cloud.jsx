import React, { useEffect } from 'react';

const Cloud = () => {
  useEffect(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.5;
    const size = Math.random() * 100 + 50;
    const speed = Math.random() * 20 + 10;

    const cloudDiv = document.createElement('div');
    cloudDiv.className = 'cloud';

    cloudDiv.style.position = 'absolute';
    cloudDiv.style.left = x + 'px';
    cloudDiv.style.top = y + 'px';
    cloudDiv.style.width = size + 'px';
    cloudDiv.style.height = size * 0.6 + 'px';
    cloudDiv.style.backgroundColor = 'rgba(255,255,255,0.5)';
    cloudDiv.style.borderRadius = '50%';
    cloudDiv.style.filter = 'blur(5px)';
    cloudDiv.style.zIndex = 0;
    cloudDiv.style.animation = `moveCloud ${speed}s linear infinite`;

    document.body.appendChild(cloudDiv);

    return () => {
      document.body.removeChild(cloudDiv);
    };
  }, []);

  return null; // Cloud elements will be managed directly in the DOM, not returned from the component
};

export default Cloud;
