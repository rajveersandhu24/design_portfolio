import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HeroVisual = () => {
  const cubeRef = useRef(null);
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trigger burst effect on route change
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    cube.innerHTML = '';
    for (let i = 0; i < 27; i++) {
      const cubelet = document.createElement('div');
      cubelet.className = 'cubelet';
      const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
      faces.forEach(face => {
        const faceEl = document.createElement('div');
        faceEl.className = `face ${face}`;
        cubelet.appendChild(faceEl);
      });
      cube.appendChild(cubelet);
    }

    const cubelets = cube.querySelectorAll('.cubelet');
    const offset = 80;

    cubelets.forEach((cubelet, index) => {
      const x = (index % 3) - 1;
      const y = Math.floor((index / 3) % 3) - 1;
      const z = Math.floor(index / 9) - 1;

      cubelet.dataset.x = x;
      cubelet.dataset.y = y;
      cubelet.dataset.z = z;

      cubelet.style.transform = `translate3d(${x * offset}px, ${y * offset}px, ${z * offset}px)`;
    });

  }, []);

  return (
    <div className={`hero-visual ${isTransitioning ? 'is-transitioning' : ''}`}>
      <div className="cube-wrapper">
        <div className="cube" id="rubiks-cube" ref={cubeRef}>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
