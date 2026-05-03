import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HealthcareCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page">
      <div className="case-study-content">
        <div className="breadcrumb">
          <Link to="/" className="home-link">
            <span className="arrow">&larr;</span> Home
          </Link>
          <span className="separator">/</span>
          <span className="current">Healthcare App Case Study</span>
        </div>

        <section className="cs-hero">
          <div className="cs-header-content">
            <div className="cs-title-group">
              <span className="cs-badge">Care+</span>
              <h1 className="cs-title">Healthcare Mobile App</h1>
              <p className="cs-subtitle">Case Study</p>
            </div>
            <h2 className="cs-main-statement">
              Making appointment simple, Easy and Fast for patients.
            </h2>
          </div>
        </section>

        {/* CREATIVE APP SHOWCASE HERO */}
        <section className="cs-app-showcase reveal-on-scroll">
          <div className="showcase-glow"></div>
          <div className="showcase-blob blob-1"></div>
          <div className="showcase-blob blob-2"></div>
          <div className="accent-dot dot-1"></div>
          <div className="accent-dot dot-2"></div>
          <div className="accent-dot dot-3"></div>

          <div className="showcase-inner">
            <div className="showcase-image-wrapper">
              <div
                className="mockup-container"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
                }}
              >
                <img src={new URL('../assets/healthcare_app_images/healthcare_app.png', import.meta.url).href} alt="Care+ App Mockup" className="main-mockup" />
                <div className="mockup-reflection"></div>
              </div>
              <div className="floating-card card-1">
                <span className="card-icon">⚡</span>
                <p>Fast Booking</p>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🏥</span>
                <p>Top Doctors</p>
              </div>
            </div>

            <div className="showcase-info">
              <div className="glass-panel">
                <div className="glass-header">
                  <span className="glass-tag">Innovation</span>
                  <h3>The Vision</h3>
                </div>
                <p>A seamless bridge between healthcare providers and patients, designed for clarity, speed, and absolute reliability.</p>
                <div className="app-stats">
                  <div className="app-stat">
                    <span className="stat-num">5/5</span>
                    <label>UX Rating</label>
                  </div>
                  <div className="app-stat">
                    <span className="stat-num">100%</span>
                    <label>Accessibility</label>
                  </div>
                </div>
                <div className="glass-footer">
                  <div className="feature-pill">Intuitive UI</div>
                  <div className="feature-pill">Secure Data</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-challenges-solutions">
          <div className="cs-grid-2">
            <div className="cs-block">
              <h3 className="cs-block-title">Challenges</h3>
              <p className="cs-block-intro">
                How do you improve the management of appointment for the doctors and patients so that they can have access to medical care smoothly.
              </p>
              <ul className="cs-list">
                <li>Staff often get frustrated, and medical practices suffer significant financial losses due to inefficiency of processes currently in place.</li>
                <li>The management of the current system of appointment is not beneficial for the employees/nurses.</li>
                <li>The time take for this process is quite dependent of individuals.</li>
              </ul>
            </div>
            <div className="cs-block">
              <h3 className="cs-block-title">Solutions</h3>
              <p className="cs-block-intro">
                To address these challenges, designing a app that can work on any device and can be accessed by anyone. The app will provide basic medical care information and enable users to contact the hospital in case of an emergency or to book an appointment.
              </p>
              <ul className="cs-list">
                <li>The nurses can access the admin application to view the booked appointments.</li>
                <li>Secondly, they can forward the same reminder to the doctor for upcoming appointments.</li>
                <li>Finally, developing a complex app would be a challenge and inconvenient for those who don't under how technology works.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cs-section cs-persona">
          <h2 className="cs-section-title">User Persona</h2>
          <p className="cs-section-desc">
            Here are some steps taken to conduct the user research:
            Identify the target audience, Conducting interviews (quantitative data), Creating surveys gathered from quantitative data such as health conditions, access to healthcare, and technology usage.
          </p>

          <div className="cs-persona-card">
            <div className="cs-persona-header">
              <div className="cs-persona-avatar">
                {/* Placeholder for Aisha's avatar */}
                <div className="avatar-placeholder">👩🏽‍🦰</div>
              </div>
              <div className="cs-persona-info">
                <h4>Name: Aisha</h4>
                <p>Age: 40</p>
                <p>Occupation: Homemaker</p>
                <p>Location: India</p>
              </div>
              <div className="cs-persona-stats">
                <div className="stat-box">
                  <span className="stat-value">6</span>
                  <span className="stat-label">INTERVIEWS</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">10</span>
                  <span className="stat-label">QUESTIONS</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">18-45</span>
                  <span className="stat-label">AGE GROUP</span>
                </div>
              </div>
            </div>

            <div className="cs-persona-details">
              <div className="detail-group">
                <h5>Background:</h5>
                <p>Aisha lives in Ibadan with her husband and two children. Her husband works in a factory and she takes care of the household. She has basic education and is fluent in English and Yoruba. She is interested in taking care of her family's health and wants to have access to medical information quickly and easily.</p>
              </div>
              <div className="detail-group">
                <h5>Goals and Needs:</h5>
                <p>Aisha wants a convenient and reliable way to access medical information and services. She wants to be able to quickly get information on common health issues, find nearby clinics and hospitals, and get guidance on how to take care of her family's health. She is also interested in being able to make appointments and communicate with medical professionals if needed. Aisha prefers to use a simple and easy-to-use interface, and is comfortable with using her mobile phone for these services.</p>
              </div>
              <div className="detail-group">
                <h5>Frustrations:</h5>
                <p>Aisha finds it challenging to navigate the complex healthcare system in Nigeria, and often faces long wait times at clinics and hospitals. She also feels overwhelmed by the amount of information available online, and is unsure which sources to trust. She wants a solution that is quick, reliable, and easy to use, without having to spend a lot of money.</p>
              </div>
              <div className="detail-group">
                <h5>Technical Abilities:</h5>
                <p>Aisha is comfortable using a basic mobile phone, but may not be familiar with using smartphones or more advanced technology. She is, however, willing to learn and adapt to new technology if it is beneficial to her and her family's health.</p>
              </div>
              <div className="detail-group">
                <h5>Values and Motivations:</h5>
                <p>Aisha values the health and wellbeing of her family above all else. She is motivated to take action to prevent illnesses and keep her family healthy. She also values convenience and affordability, and wants to be able to access medical services without having to travel long distances or spend a lot of money</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cs-section cs-research">
          <h2 className="cs-section-title">Research & Survey Results</h2>
          <p className="cs-section-desc">
            Interviewing people from diverse backgrounds and age groups, including those with limited access to healthcare services. Primary pain points for these users were:
          </p>
          <ul className="cs-list cs-list-large">
            <li>Limited access to healthcare services due to factors such as geographic location, high costs, and lack of transportation.</li>
            <li>Difficulty in understanding medical jargon and identifying symptoms.</li>
            <li>Forgetting to take medications on time.</li>
            <li>Limited availability of health records and difficulties in sharing them with healthcare providers.</li>
          </ul>
        </section>

        <section className="cs-section cs-process">
          <h2 className="cs-section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>Design Process</h2>

          <div className="cs-process-grid">
            <div className="process-step-card">
              <div className="process-step-number">01</div>
              <div className="process-step-header">
                <div className="process-step-icon">🔎</div>
                <h3 className="process-step-title">Understand</h3>
              </div>
              <p className="process-step-desc">Defining the core challenge and proposing an accessible, app-based solution.</p>
            </div>
            
            <div className="process-step-card">
              <div className="process-step-number">02</div>
              <div className="process-step-header">
                <div className="process-step-icon">👥</div>
                <h3 className="process-step-title">Research</h3>
              </div>
              <p className="process-step-desc">Conducting user research, building personas, and mapping empathy to identify pain points.</p>
            </div>
            
            <div className="process-step-card">
              <div className="process-step-number">03</div>
              <div className="process-step-header">
                <div className="process-step-icon">🏗️</div>
                <h3 className="process-step-title">Analyse</h3>
              </div>
              <p className="process-step-desc">Developing the user flow and structuring the information architecture for simplicity.</p>
            </div>
            
            <div className="process-step-card">
              <div className="process-step-number">04</div>
              <div className="process-step-header">
                <div className="process-step-icon">🎨</div>
                <h3 className="process-step-title">Design</h3>
              </div>
              <p className="process-step-desc">Creating wireframes, visual designs, and high-fidelity prototypes for all screens.</p>
            </div>
            
            <div className="process-step-card">
              <div className="process-step-number">05</div>
              <div className="process-step-header">
                <div className="process-step-icon">🧪</div>
                <h3 className="process-step-title">Testing</h3>
              </div>
              <p className="process-step-desc">Validating with usability testing and refining the interface based on real feedback.</p>
            </div>
          </div>
        </section>

        <section className="cs-section cs-style-guide">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Style Guide</h2>
          <div className="cs-style-grid">
            <div className="style-card style-typography">
              <span className="style-label">FONT FAMILY</span>
              <h3 className="style-font-name">Fira Sans</h3>
              <p>Fira typefaces aim to cover the legibility needs for a large range of handsets varying in screen quality and rendering. The Fira font family comes in 3 widths, all accompanied by italic styles.</p>
            </div>
            <div className="style-card style-weights">
              <div className="weight-info">
                <h3>5 weights</h3>
                <h3>2 Styles</h3>
                <span className="hex-code">#FFFFFF</span>
              </div>
            </div>
            <div className="style-card style-color-primary">
              <span className="style-label">PRIMARY COLOR</span>
              <h3 className="color-preview-text">Aa</h3>
              <span className="hex-code">#044389</span>
            </div>
            <div className="style-card style-type-scale">
              <div className="scale-grid">
                <div>
                  <h1 style={{ fontSize: '2.5rem', fontWeight: 600, margin: 0 }}>Head 1</h1>
                  <span className="scale-details">42/48 Semibold</span>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>Head 3</h2>
                  <span className="scale-details">24/32 px Semibold</span>
                </div>
                <div>
                  <span style={{ fontSize: '1rem', fontWeight: 500, display: 'block' }}>Body large</span>
                  <span className="scale-details">16/24 px Medium</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 400, display: 'block' }}>Body</span>
                  <span className="scale-details">14/18 px regular</span>
                </div>
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: 0 }}>Head 2</h2>
                  <span className="scale-details">32/40 Semibold</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 500, margin: 0 }}>Title</h3>
                  <span className="scale-details">18/24 px Medium</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 400, display: 'block' }}>Small</span>
                  <span className="scale-details">12/16 px regular</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.625rem', fontWeight: 400, display: 'block' }}>Outline</span>
                  <span className="scale-details">10/14 px regular</span>
                </div>
              </div>
              <div className="alphabet-preview" style={{ marginTop: '2rem', fontFamily: 'monospace' }}>
                <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p>1 2 3 4 5 6 7 8 9 0</p>
                <p>$ & * - + @ ? . , /</p>
              </div>
            </div>
            <div className="style-card style-color-secondary">
              <span className="style-label">ACCENT COLOR</span>
              <h3 className="color-preview-text">Aa</h3>
              <span className="hex-code">#EB5E28</span>
            </div>
          </div>
        </section>

        <section className="cs-section cs-main-screens">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Main Screens</h2>
          <p className="cs-section-desc" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
            These are the main screens where the user can view upcoming appointment, explore doctors according to the treatment, explore his bookings and view his profile where documents can be uploaded.
          </p>
          <div className="cs-screens-grid grid-3">
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Home_screen.png', import.meta.url).href} alt="Home Screen" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Explore_screen.png', import.meta.url).href} alt="Explore Screen" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/My_Bookings_screen.png', import.meta.url).href} alt="My Bookings Screen" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/My_profile_screen.png', import.meta.url).href} alt="My Profile Screen" className="screen-img" />
            </div>
          </div>
        </section>

        <section className="cs-section cs-add-appointment">
          <h2 className="cs-section-title" style={{ textAlign: 'center' }}>Add Appointment Screens</h2>
          <p className="cs-section-desc" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
            Users can book an appointment by just completing a simple and short process and boom, the appointment is booked. How simple was that?
          </p>
          <div className="cs-screens-grid grid-3">
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Home.png', import.meta.url).href} alt="Home" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Select_Symptom.png', import.meta.url).href} alt="Select Symptom" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Select_Practitioner.png', import.meta.url).href} alt="Select Practitioner" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Select_Date_&_Time.png', import.meta.url).href} alt="Select Date & Time" className="screen-img" />
            </div>
            <div className="screen-card">
              <img src={new URL('../assets/healthcare_app_images/Mobile Screens/Appointment_Booked.png', import.meta.url).href} alt="Appointment Booked" className="screen-img" />
            </div>
          </div>
        </section>

        <section className="cs-section cs-conclusion">
          <div className="cs-grid-2 align-center">
            <div className="conclusion-text">
              <h2 className="cs-section-title" style={{ fontSize: '4rem', marginBottom: '32px' }}>Conclusion</h2>
              <p className="cs-block-intro" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Care + appointment booking application will help a lot of people as it will be a bridge for them to book the appointments easily and the workload of managing it in offline will be reduced. There will be 3 kind of applications, 1 for the patient where he/she can book the appointment, then the appointment will be forwarded the nurse app and after validating, the nurse can forward the request with approval to the doctor with the documents submitted by the user.
              </p>
            </div>
            <div className="conclusion-image">
              <img src={new URL('../assets/healthcare_app_images/conclusion_image.png', import.meta.url).href} alt="Care+ Conclusion Mockup" className="conclusion-mockup" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HealthcareCaseStudy;
