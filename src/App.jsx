import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import HeroVisual from './components/HeroVisual.jsx';
import SmoothWrapper from './components/SmoothWrapper.jsx';
import Home from './components/Home.jsx';
import WorkPage from './components/WorkPage.jsx';

function App() {
  const location = useLocation();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroVisual />
      
      <SmoothWrapper>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
        </AnimatePresence>
      </SmoothWrapper>
    </>
  );
}

export default App;
