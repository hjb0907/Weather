import React, { useEffect } from 'react';

const Snow = () => {
  useEffect(() => {
    const snowDiv = document.createElement('div');
    snowDiv.className = 'snow';

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 12;
    const time = Math.random() * 8;

    snowDiv.style.position = 'absolute';
    snowDiv.style.left = x + 'px';
    snowDiv.style.top = y + 'px';
    snowDiv.style.width = size + 'px';
    snowDiv.style.height = size + 'px';
    snowDiv.style.backgroundColor = '#8eb2d087';
    snowDiv.style.filter = 'blur(5px)';
    snowDiv.style.borderRadius = '50%';
    snowDiv.style.animation = `fall ${time}s steps(5) infinite`;

    document.body.appendChild(snowDiv);

    return () => {
      document.body.removeChild(snowDiv);
    };
  }, []);

  return null; 
};

export default Snow;
