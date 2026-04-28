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

    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    const ease = 0.08;
    let animId;

    const animate = () => {
      targetScroll = window.scrollY;
      currentScroll += (targetScroll - currentScroll) * ease;

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = Math.min(Math.max(currentScroll / (maxScroll || 1), 0), 1);
      
      const scatterFactor = Math.sin(scrollRatio * Math.PI);
      const overallRotationOffset = currentScroll * 0.1;
      const scaleModifier = 1 + (scatterFactor * 0.3);

      cube.style.transform = `rotateX(${-30 - currentScroll * 0.03}deg) rotateY(${-45 - overallRotationOffset}deg) scale(${scaleModifier})`;

      cubelets.forEach((cubelet) => {
        const x = parseFloat(cubelet.dataset.x);
        const y = parseFloat(cubelet.dataset.y);
        const z = parseFloat(cubelet.dataset.z);

        const transX = x * offset + (x * offset * scatterFactor * 5);
        const transY = y * offset + (y * offset * scatterFactor * 5);
        const transZ = z * offset + (z * offset * scatterFactor * 5);

        const rotX = scatterFactor * x * 180;
        const rotY = scatterFactor * y * 180;
        const rotZ = scatterFactor * z * 180;

        cubelet.style.transform = `
          translate3d(${transX}px, ${transY}px, ${transZ}px) 
          rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)
        `;
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animId);
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
