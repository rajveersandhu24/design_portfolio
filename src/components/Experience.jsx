import React, { useEffect, useRef, useState } from 'react';

const EXPERIENCE_TEXT =
  "Strategic UX and Visual Designer with 6+ years of experience in Enterprise SaaS, specializing in mobile migrations and scalable Design Systems. Translates complex requirements into intuitive, data-driven interfaces that drive user adoption. Bridges design and engineering through tokenization, Figma variables, and AI-assisted workflows, while enhancing products with refined visuals and micro-interactions.";

const TIMELINE_DATA = [
  {
    company: "MangoApps Pvt Ltd",
    role: "Visual Designer",
    period: "SEPTEMBER 2023 – PRESENT"
  },
  {
    company: "Iauro Systems Pvt Ltd",
    role: "UI/UX Designer",
    period: "NOVEMBER 2020 – AUGUST 2023"
  },
  {
    company: "Accucia Softwares Pvt Ltd",
    role: "UI/UX Designer & Graphic Designer",
    period: "JULY 2019 – OCTOBER 2020"
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const descRef = useRef(null);
  const charsRef = useRef([]);
  const timelineRef = useRef(null);
  const timelineItemsRef = useRef([]);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const desc = descRef.current;
    const timeline = timelineRef.current;
    if (!section || !desc || !timeline) return;

    let isVisible = false;

    const onScrollUpdate = () => {
      if (!isVisible) return;
      
      const windowH = window.innerHeight;
      
      // 1. HIGHLIGHT TEXT CHARACTERS
      const descRect = desc.getBoundingClientRect();
      const descCenter = descRect.top + descRect.height / 2;
      const textStart = windowH * 0.85;
      const textEnd = windowH * 0.35;
      const textProgress = Math.min(Math.max((textStart - descCenter) / (textStart - textEnd), 0), 1);
      const totalChars = charsRef.current.length;
      const highlightedCount = Math.floor(textProgress * totalChars);

      charsRef.current.forEach((span, i) => {
        if (!span) return;
        if (i < highlightedCount) {
          span.classList.add('active');
        } else {
          span.classList.remove('active');
        }
      });

      // 2. HIGHLIGHT TIMELINE ITEMS & LINE
      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollTrigger = windowH * 0.65;

      // Calculate overall line progress
      const currentScroll = scrollTrigger - timelineTop;
      const progress = Math.min(Math.max(currentScroll / timelineHeight, 0), 1);
      setLineProgress(progress);

      // Highlight individual items
      timelineItemsRef.current.forEach((item, i) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        if (itemCenter < scrollTrigger) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    const onScroll = () => {
      requestAnimationFrame(onScrollUpdate);
    };

    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) {
        window.addEventListener('scroll', onScroll, { passive: true });
        onScrollUpdate();
      } else {
        window.removeEventListener('scroll', onScroll);
      }
    }, { threshold: 0 });

    observer.observe(section);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const chars = EXPERIENCE_TEXT.split('');

  return (
    <section className="experience" id="experience" ref={sectionRef}>
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

      <div className="timeline-container" ref={timelineRef}>
        <h3 className="timeline-title-mini">EXPERIENCE</h3>
        <div className="timeline-list">
          <div className="timeline-line-bg">
            <div 
              className="timeline-line-fill" 
              style={{ transform: `scaleY(${lineProgress})` }}
            ></div>
          </div>
          {TIMELINE_DATA.map((item, index) => (
            <div 
              key={index} 
              className="timeline-item"
              ref={el => timelineItemsRef.current[index] = el}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p className="period-text">{item.period}</p>
                <h4 className="company-name">{item.company}</h4>
                <p className="role-name">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
