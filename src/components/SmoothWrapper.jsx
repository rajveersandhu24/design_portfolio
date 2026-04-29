import React, { useEffect, useRef } from 'react';

const SmoothWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Check if device is mobile/touch-enabled or screen is small
    const isMobile = window.innerWidth <= 1024 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    const smoothWrapper = wrapperRef.current;
    if (!smoothWrapper || isMobile) {
      if (isMobile) {
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
      }
      return;
    }

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    // Base ease is now 0.12 (even more responsive)
    // We'll dynamically adjust it to be lazier (0.06) at top/bottom
    const baseEase = 0.12;
    const edgeEase = 0.06;
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
      const bodyHeight = document.body.getBoundingClientRect().height;
      const windowH = window.innerHeight;
      const maxScroll = bodyHeight - windowH;
      
      // Calculate how close we are to the edges (0 at edges, 1 in middle)
      // We use a simple 1 - (distance from center / half_height)
      const center = maxScroll / 2;
      const distFromCenter = Math.abs(currentY - center);
      const normalizedDist = Math.min(distFromCenter / center, 1);
      
      // Edge factor is 1 at edges, 0 in middle. 
      // We want high ease in middle, low at edges.
      // Dynamic Ease = baseEase - (baseEase - edgeEase) * normalizedDist
      const dynamicEase = baseEase - (baseEase - edgeEase) * Math.pow(normalizedDist, 2);

      currentY += (targetY - currentY) * dynamicEase;

      if (Math.abs(targetY - currentY) > 0.01) {
        smoothWrapper.style.transform = `translate3d(0, -${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    // Internal virtual scroll Anchor link Hijack since wrapper transforms
    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;
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
