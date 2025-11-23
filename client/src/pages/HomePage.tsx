
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CollectionsSection from '../components/CollectionsSection';
import LocalitiesSection from '../components/LocalitiesSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CollectionsSection />
      <LocalitiesSection />
    </div>
  );
};

export default HomePage;
