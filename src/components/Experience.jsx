import React, { useEffect, useRef } from 'react';

const EXPERIENCE_TEXT =
  "Strategic UX and Visual Designer with 6+ years of experience in Enterprise SaaS, specializing in mobile migrations and scalable Design Systems. Translates complex requirements into intuitive, data-driven interfaces that drive user adoption. Bridges design and engineering through tokenization, Figma variables, and AI-assisted workflows, while enhancing products with refined visuals and micro-interactions.";

const Experience = () => {
  const sectionRef = useRef(null);
  const descRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const desc = descRef.current;
    if (!section || !desc) return;

    let animId;

    const highlightChars = () => {
      const descRect = desc.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Track the paragraph's vertical center relative to viewport
      const descCenter = descRect.top + descRect.height / 2;

      // Starts highlighting when paragraph is in the lower portion of viewport
      // Completes when paragraph reaches the center — perfect reading position
      const startAt = windowH * 0.75;
      const endAt = windowH * 0.45;
      const progress = Math.min(Math.max((startAt - descCenter) / (startAt - endAt), 0), 1);

      const totalChars = charsRef.current.length;
      const highlightedCount = Math.floor(progress * totalChars);

      charsRef.current.forEach((span, i) => {
        if (!span) return;
        if (i < highlightedCount) {
          span.style.color = 'var(--text-primary)';
          span.style.opacity = '1';
        } else {
          span.style.color = 'var(--text-secondary)';
          span.style.opacity = '0.3';
        }
      });

      animId = requestAnimationFrame(highlightChars);
    };

    animId = requestAnimationFrame(highlightChars);

    return () => cancelAnimationFrame(animId);
  }, []);

  const chars = EXPERIENCE_TEXT.split('');

  return (
    <section className="experience" id="about" ref={sectionRef}>
      <h2 className="experience-title">Work <span className="italic-accent">experience</span></h2>
      <p className="experience-desc" ref={descRef}>
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => (charsRef.current[i] = el)}
            className="scroll-word"
          >
            {char}
          </span>
        ))}
      </p>
    </section>
  );
};

export default Experience;
