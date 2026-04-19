import React, { useEffect, useRef } from 'react';

const SmoothWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const smoothWrapper = wrapperRef.current;
    if (!smoothWrapper) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    // Smooth but not sluggish — cinematic pace without feeling stuck
    const ease = 0.04;
    let animationFrameId;

    const setBodyHeight = () => {
      document.body.style.height = `${smoothWrapper.getBoundingClientRect().height}px`;
    };

    // Initial height calculation with multiple retries for dynamic content
    setTimeout(setBodyHeight, 200);
    setTimeout(setBodyHeight, 800);
    setTimeout(setBodyHeight, 1500);

    window.addEventListener('resize', setBodyHeight);

    // Watch for DOM changes that affect content height
    const heightObserver = new MutationObserver(setBodyHeight);
    heightObserver.observe(smoothWrapper, { childList: true, subtree: true, attributes: true });

    const onScroll = () => {
      targetY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);

    // Initial positioning
    smoothWrapper.style.transform = `translate3d(0, -${currentY}px, 0)`;

    const animateScroll = () => {
      currentY += (targetY - currentY) * ease;
      const rubiksCube = document.getElementById('rubiks-cube');

      if (Math.abs(targetY - currentY) > 0.01) {
        smoothWrapper.style.transform = `translate3d(0, -${currentY}px, 0)`;

        if (rubiksCube) {
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          // Calculate curved scroll ratio (0..1 bound)
          const scrollRatio = Math.min(Math.max(currentY / (maxScroll || 1), 0), 1);
          // Scatter uses a bell curve: starts assembled (0), scatters in middle (1), re-assembles at bottom (0)
          const scatterFactor = Math.sin(scrollRatio * Math.PI);

          const cubelets = rubiksCube.querySelectorAll('.cubelet');
          const overallRotationOffset = currentY * 0.1;
          const scaleModifier = 1 + (scatterFactor * 0.3); // organically swells 30% halfway down, shrinks at bottom

          // Seamless launch angles matching index.css exactly
          rubiksCube.style.transform = `rotateX(${-30 - currentY * 0.03}deg) rotateY(${-45 - overallRotationOffset}deg) scale(${scaleModifier})`;
          const offset = 80;

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
        }
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    // Internal virtual scroll Anchor link Hijack since wrapper transforms
    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const absoluteY = targetEl.getBoundingClientRect().top + currentY;
        window.scrollTo({
          top: absoluteY - 100,
          behavior: 'smooth'
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));

    return () => {
      window.removeEventListener('resize', setBodyHeight);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
      heightObserver.disconnect();
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
    };
  }, [children]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      {children}
    </div>
  );
};

export default SmoothWrapper;
