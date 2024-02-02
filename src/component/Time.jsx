import React, { useState, useEffect } from 'react';
import { useInterval } from 'react-use';
import moment from 'moment';
import 'moment/locale/ko';
import thunderimg from '../img/thunder.png';
import sunimg from '../img/sun.png';

class Star {
  constructor(x = 0, y = 0, size = 0, time = 0) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.time = time;
  }

  set() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 12;
    this.time = Math.random() * 8;

    const starDiv = document.createElement('div');
    starDiv.className = 'star';

    starDiv.style.position = 'absolute';
    starDiv.style.left = this.x + 'px';
    starDiv.style.top = this.y + 'px';
    starDiv.style.width = this.size + 'px';
    starDiv.style.height = this.size + 'px';
    starDiv.style.backgroundColor = '#ffe658';
    starDiv.style.filter = 'blur(2px)';
    starDiv.style.borderRadius = '50%';
    starDiv.style.animation = `blink ${this.time}s steps(5) infinite`;

    document.body.appendChild(starDiv);
  }
}

class Snow {
  constructor(x = 0, y = 0, size = 0, time = 0) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.time = time;
  }

  set() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = Math.random() * 12;
    this.time = Math.random() * 8;

    const snowDiv = document.createElement('div');
    snowDiv.className = 'snow';

    snowDiv.style.position = 'absolute';
    snowDiv.style.left = this.x + 'px';
    snowDiv.style.top = this.y + 'px';
    snowDiv.style.width = this.size + 'px';
    snowDiv.style.height = this.size + 'px';
    snowDiv.style.backgroundColor = '#8eb2d087';
    snowDiv.style.filter = 'blur(5px)';
    snowDiv.style.borderRadius = '50%';
    snowDiv.style.animation = `fall ${this.time}s steps(5) infinite`;

    document.body.appendChild(snowDiv);
  }
}

class Raindrop {
  constructor(x = 0, y = 0, length = 0, speed = 0) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.speed = speed;
  }

  set() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * -window.innerHeight;
    this.length = Math.random() * 15 + 5;
    this.speed = Math.random() * 5 + 2;

    const dropDiv = document.createElement('div');
    dropDiv.className = 'raindrop';

    dropDiv.style.position = 'absolute';
    dropDiv.style.left = this.x + 'px';
    dropDiv.style.top = this.y + 'px';
    dropDiv.style.width = '1px';
    dropDiv.style.height = this.length + 'px';
    dropDiv.style.backgroundColor = 'rgba(6, 119, 163, 0.836)';
    dropDiv.style.animation = `fall ${this.speed}s linear infinite`;

    document.body.appendChild(dropDiv);
  }
}

class Cloud {
  constructor(x = 0, y = 0, size = 0, speed = 0) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  set() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight * 0.5;
    this.size = Math.random() * 100 + 50;
    this.speed = Math.random() * 20 + 10;

    const cloudDiv = document.createElement('div');
    cloudDiv.className = 'cloud';

    cloudDiv.style.position = 'absolute';
    cloudDiv.style.left = this.x + 'px';
    cloudDiv.style.top = this.y + 'px';
    cloudDiv.style.width = this.size + 'px';
    cloudDiv.style.height = this.size * 0.6 + 'px';
    cloudDiv.style.backgroundColor = 'rgba(255,255,255,0.5)';
    cloudDiv.style.borderRadius = '50%';
    cloudDiv.style.filter = 'blur(5px)';
    cloudDiv.style.zIndex = 0;
    cloudDiv.style.animation = `moveCloud ${this.speed}s linear infinite`;

    document.body.appendChild(cloudDiv);
  }
}

const Time = ({
  weather,
  showStars,
  showSnows,
  setShowSnows,
  setShowStars,
  showRain,
  setShowRain,
  showClouds,
  setShowClouds,
  showSun,
  setShowSun,
  showThunder,
  setShowThunder,
}) => {
  const [seconds, setSeconds] = useState(moment().format('HH:mm:ss'));

  useInterval(() => {
    setSeconds(moment().format('HH:mm:ss'));
  }, 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = moment().format('HH:mm:ss');
      if (currentTime >= '20:00:00') {
        setShowStars(true);
        setShowSnows(false);
        setShowRain(false);
        setShowClouds(false);
        setShowSun(false);
        setShowThunder(false);
        clearInterval(intervalId);
      } else if (weather.weather[0]?.id.toString()[0] === '2') {
        setShowStars(false);
        setShowSnows(false);
        setShowRain(true);
        setShowClouds(false);
        setShowSun(false);
        setShowThunder(true);
        clearInterval(intervalId);
      } else if (weather.weather[0]?.id.toString()[0] === '6') {
        setShowStars(false);
        setShowSnows(true);
        setShowRain(false);
        setShowClouds(false);
        setShowSun(false);
        setShowThunder(false);
        clearInterval(intervalId);
      } else if (weather.weather[0]?.id.toString()[0] === '5') {
        setShowStars(false);
        setShowSnows(false);
        setShowRain(true);
        setShowClouds(false);
        setShowSun(false);
        setShowThunder(false);
        clearInterval(intervalId);
      } else if (weather.weather[0]?.id === 800) {
        setShowStars(false);
        setShowSnows(false);
        setShowRain(false);
        setShowClouds(false);
        setShowSun(true);
        setShowThunder(false);
        clearInterval(intervalId);
      } else if (weather.weather[0]?.id.toString()[0] === '8') {
        setShowStars(false);
        setShowSnows(false);
        setShowRain(false);
        setShowClouds(true);
        setShowSun(false);
        setShowThunder(false);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [weather]);

  useEffect(() => {
    if (showStars) {
      for (let i = 0; i < 15; i++) {
        const newStar = new Star();
        newStar.set();
      }
    } else {
      const stars = document.querySelectorAll('.star');
      stars.forEach((star) => star.remove());
    }
  }, [showStars]);

  useEffect(() => {
    if (showSnows) {
      for (let i = 0; i < 15; i++) {
        const newSnow = new Snow();
        newSnow.set();
      }
    } else {
      const snows = document.querySelectorAll('.snow');
      snows.forEach((snow) => snow.remove());
    }
  }, [showSnows]);

  useEffect(() => {
    if (showRain) {
      for (let i = 0; i < 100; i++) {
        const newRaindrop = new Raindrop();
        newRaindrop.set();
      }
    } else {
      const raindrops = document.querySelectorAll('.raindrop');
      raindrops.forEach((raindrop) => raindrop.remove());
    }
  }, [showRain]);

  useEffect(() => {
    if (showClouds) {
      for (let i = 0; i < 5; i++) {
        const newCloud = new Cloud();
        newCloud.set();
      }
    } else {
      const clouds = document.querySelectorAll('.cloud');
      clouds.forEach((cloud) => cloud.remove());
    }
  }, [showClouds]);

  useEffect(() => {
    const thunderInterval = setInterval(() => {
      if (showThunder) {
        const numberOfThunders = 3;
  
        const container = document.getElementById('time');
        
        container.innerHTML = '';
  
        for (let i = 0; i < numberOfThunders; i++) {
          const thunderElement = document.createElement('img');
          thunderElement.src = thunderimg;
          thunderElement.alt = 'thunder';
          thunderElement.style.position = 'absolute';
          thunderElement.style.left = Math.random() * window.innerWidth + 'px';
          thunderElement.style.top = Math.random() * window.innerHeight + 'px';
          thunderElement.style.display = 'block';
          thunderElement.style.width = '150px';
          thunderElement.style.animation = `fadeIn 5s linear infinite`;
          
          container.appendChild(thunderElement);
        }
      }
    }, 2000);
  
    return () => clearInterval(thunderInterval);
  }, [showThunder]);
  

  
  return (
    <div className="time" id="time">
      {showStars && <div className="star"></div>}
      {showSnows && <div className="snow"></div>}
      {showRain && <div className="raindrop"></div>}
      {showClouds && <div className="cloud"></div>}
      {showSun && <div className="sun"><img src={sunimg} alt="sun" /></div>}
      {showThunder && <img id="thunder" src={thunderimg} alt="thunder"/>}
    </div>
  );
};

export default Time;
