import React from 'react';

import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/landing_page/HeroSection';
import FeatureSection from '../components/landing_page/FeatureSection';

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </React.Fragment>
  );
};

export default LandingPage;
