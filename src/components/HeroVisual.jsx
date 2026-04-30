import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HeroVisual = () => {
  const cubeRef = useRef(null);
  const location = useLocation();
  const transitionProgress = useRef(0);
  
  // Interaction state
  const isDragging = useRef(false);
  const mouseRotation = useRef({ x: 0, y: 0 });
  const mouseVelocity = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Trigger burst effect on route change
  useEffect(() => {
    let start;
    const duration = 1000;
    const animateBurst = (time) => {
      if (!start) start = time;
      const progress = (time - start) / duration;
      if (progress < 1) {
        transitionProgress.current = Math.pow(1 - progress, 4); 
        requestAnimationFrame(animateBurst);
      } else {
        transitionProgress.current = 0;
      }
    };
    requestAnimationFrame(animateBurst);
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
      
      cubelet.dataset.randX = (Math.random() - 0.5) * 600; 
      cubelet.dataset.randY = (Math.random() - 0.5) * 600;
      cubelet.dataset.randZ = (Math.random() - 0.5) * 600;
      cubelet.dataset.randRotX = (Math.random() - 0.5) * 720;
      cubelet.dataset.randRotY = (Math.random() - 0.5) * 720;
      cubelet.dataset.randRotZ = (Math.random() - 0.5) * 720;

      cubelet.style.transform = `translate3d(${x * offset}px, ${y * offset}px, ${z * offset}px)`;
    });

    // Ensure cube is interactive by default and doesn't select text
    cube.style.pointerEvents = 'auto';
    cube.style.userSelect = 'none';
    cube.style.webkitUserSelect = 'none';

    // Interaction Listeners
    const handleStart = (e) => {
      // Don't start drag if clicking an interactable element
      if (e.target.closest('a, button, .project-card, .btn-primary, .btn-secondary')) return;

      const pos = e.touches ? e.touches[0] : e;
      
      // Only interact if not scattered and clicking in the right half (where the cube is)
      const sRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      if (sRatio > 0.15 || pos.clientX < window.innerWidth * 0.4) return;
      
      isDragging.current = true;
      lastMousePos.current = { x: pos.clientX, y: pos.clientY };
    };

    const handleMove = (e) => {
      if (!isDragging.current) return;
      const pos = e.touches ? e.touches[0] : e;
      const deltaX = pos.clientX - lastMousePos.current.x;
      const deltaY = pos.clientY - lastMousePos.current.y;
      
      mouseVelocity.current = { x: deltaX * 0.4, y: deltaY * 0.4 };
      mouseRotation.current.x += deltaY * 0.4;
      mouseRotation.current.y += deltaX * 0.4;
      
      lastMousePos.current = { x: pos.clientX, y: pos.clientY };
    };

    const handleEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousedown', handleStart);
    window.addEventListener('touchstart', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    const ease = 0.08;
    let animId;

    const animate = () => {
      targetScroll = window.scrollY;
      currentScroll += (targetScroll - currentScroll) * ease;

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = Math.min(Math.max(currentScroll / (maxScroll || 1), 0), 1);
      const scrollScatter = Math.sin(scrollRatio * Math.PI);
      const combinedScatter = Math.min(scrollScatter + transitionProgress.current, 1.5);
      
      // Apply inertia
      if (!isDragging.current) {
        mouseRotation.current.x += mouseVelocity.current.y;
        mouseRotation.current.y += mouseVelocity.current.x;
        mouseVelocity.current.x *= 0.92; // Slightly more damping
        mouseVelocity.current.y *= 0.92;
      }

      // Interaction intensity reduces as it scatters
      const interactionFade = Math.max(0, 1 - scrollRatio * 5);
      const userRotX = mouseRotation.current.x * interactionFade;
      const userRotY = mouseRotation.current.y * interactionFade;

      const overallRotationOffset = currentScroll * 0.1;
      const transitionRot = transitionProgress.current * 45;
      const scaleModifier = 1 + (combinedScatter * 0.3);

      // Add user rotation to the transform
      cube.style.transform = `
        rotateX(${-30 - currentScroll * 0.03 + transitionRot + userRotX}deg) 
        rotateY(${-45 - overallRotationOffset + transitionRot + userRotY}deg) 
        scale3d(${scaleModifier}, ${scaleModifier}, ${scaleModifier})
      `;

      // Update pointer events and cursor based on scroll
      const isInteractive = scrollRatio < 0.15;
      cube.style.pointerEvents = isInteractive ? 'auto' : 'none';
      if (isInteractive) {
        cube.style.cursor = isDragging.current ? 'grabbing' : 'grab';
      } else {
        cube.style.cursor = 'default';
      }

      cubelets.forEach((cubelet) => {
        const x = parseFloat(cubelet.dataset.x);
        const y = parseFloat(cubelet.dataset.y);
        const z = parseFloat(cubelet.dataset.z);
        const rx = parseFloat(cubelet.dataset.randX);
        const ry = parseFloat(cubelet.dataset.randY);
        const rz = parseFloat(cubelet.dataset.randZ);
        const rRotX = parseFloat(cubelet.dataset.randRotX);
        const rRotY = parseFloat(cubelet.dataset.randRotY);
        const rRotZ = parseFloat(cubelet.dataset.randRotZ);

        const transX = x * offset + (x * offset * combinedScatter * 5) + (rx * combinedScatter);
        const transY = y * offset + (y * offset * combinedScatter * 5) + (ry * combinedScatter);
        const transZ = z * offset + (z * offset * combinedScatter * 5) + (rz * combinedScatter);

        const rotX = combinedScatter * (x * 180 + rRotX);
        const rotY = combinedScatter * (y * 180 + rRotY);
        const rotZ = combinedScatter * (z * 180 + rRotZ);

        cubelet.style.transform = `
          translate3d(${transX}px, ${transY}px, ${transZ}px) 
          rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)
        `;
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousedown', handleStart);
      window.removeEventListener('touchstart', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, []);

  return (
    <div className="hero-visual">
      <div className="cube-wrapper">
        <div className="cube" id="rubiks-cube" ref={cubeRef}>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
