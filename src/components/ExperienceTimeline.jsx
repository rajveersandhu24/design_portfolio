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

    // Use browser-native IntersectionObserver to trigger item highlight
    // rootMargin masks the bottom 30% of the viewport, effectively triggering
    // the active class when the element scrolls into the top 70% of the viewport.
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -30% 0px",
      threshold: 0
    };

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    itemsRef.current.forEach(item => {
      if (item) itemObserver.observe(item);
    });

    return () => {
      itemObserver.disconnect();
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
