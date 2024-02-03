import React, { useEffect } from 'react';

const Raindrop = () => {
  useEffect(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * -window.innerHeight;
    const length = Math.random() * 15 + 5;
    const speed = Math.random() * 5 + 2;

    const dropDiv = document.createElement('div');
    dropDiv.className = 'raindrop';

    dropDiv.style.position = 'absolute';
    dropDiv.style.left = x + 'px';
    dropDiv.style.top = y + 'px';
    dropDiv.style.width = '1px';
    dropDiv.style.height = length + 'px';
    dropDiv.style.backgroundColor = 'rgba(6, 119, 163, 0.836)';
    dropDiv.style.animation = `fall ${speed}s linear infinite`;

    document.body.appendChild(dropDiv);

    return () => {
      document.body.removeChild(dropDiv);
    };
  }, []);

  return null; // Raindrop elements will be managed directly in the DOM, not returned from the component
};

export default Raindrop;
