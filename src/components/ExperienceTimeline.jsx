import React, { useEffect, useRef } from 'react';

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

const ExperienceTimeline = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = false;

    const highlightItems = () => {
      if (!isVisible) return;

      const windowH = window.innerHeight;
      const triggerPoint = windowH * 0.7; // Start highlighting when item is at 70% of viewport

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;

        if (itemCenter < triggerPoint) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    const onScroll = () => {
      requestAnimationFrame(highlightItems);
    };

    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) {
        window.addEventListener('scroll', onScroll, { passive: true });
        highlightItems();
      } else {
        window.removeEventListener('scroll', onScroll);
      }
    }, { threshold: 0 });

    observer.observe(container);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="timeline-section" ref={containerRef}>
      <div className="timeline-container">
        <h3 className="timeline-title">EXPERIENCE</h3>
        <div className="timeline-list">
          <div className="timeline-line"></div>
          {TIMELINE_DATA.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              ref={el => itemsRef.current[index] = el}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="company-name">
                  {item.company} — <span className="role-name">{item.role}</span>
                </h4>
                <p className="period-text">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
