import React from 'react';

import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/landing_page/HeroSection';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
    </React.Fragment>
  );
};

export default LandingPage;
