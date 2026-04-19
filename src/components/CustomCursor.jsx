import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const customCursor = document.querySelector('.custom-cursor');
    if (!customCursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 1;
      cursorY += (mouseY - cursorY) * 1;
      customCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const interactables = document.querySelectorAll('a, button, .project-card, .view-all');
    const onEnter = () => customCursor.classList.add('hover-active');
    const onLeave = () => customCursor.classList.remove('hover-active');

    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default CustomCursor;
