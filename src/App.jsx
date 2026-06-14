import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import HeroVisual from './components/HeroVisual.jsx';
import SmoothWrapper from './components/SmoothWrapper.jsx';
import Home from './components/Home.jsx';
import WorkPage from './components/WorkPage.jsx';
import HealthcareCaseStudy from './components/HealthcareCaseStudy.jsx';
import LearningPlatformCaseStudy from './components/LearningPlatformCaseStudy.jsx';
import FitnessAppCaseStudy from './components/FitnessAppCaseStudy.jsx';
import CoreUiMobileDslCaseStudy from './components/CoreUiMobileDslCaseStudy.jsx';
import DesignSystemCaseStudy from './components/DesignSystemCaseStudy.jsx';
import BroadcastCaseStudy from './components/BroadcastCaseStudy.jsx';


function App() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/case-study/');

  return (
    <>
      <CustomCursor />
      <Navbar />
      {!isCaseStudy && <HeroVisual />}
      
      <SmoothWrapper>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/case-study/healthcare" element={<HealthcareCaseStudy />} />
            <Route path="/case-study/learning-platform" element={<LearningPlatformCaseStudy />} />
            <Route path="/case-study/fitness-app" element={<FitnessAppCaseStudy />} />
            <Route path="/case-study/core-ui-mobile-dsl" element={<CoreUiMobileDslCaseStudy />} />
            <Route path="/case-study/design-system" element={<DesignSystemCaseStudy />} />
            <Route path="/work/design-system" element={<DesignSystemCaseStudy />} />
            <Route path="/projects/design-system" element={<DesignSystemCaseStudy />} />
            <Route path="/case-study/broadcasts-alerts" element={<BroadcastCaseStudy />} />

          </Routes>
        </AnimatePresence>
      </SmoothWrapper>
    </>
  );
}

export default App;
