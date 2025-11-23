
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-8xl font-bold mb-4">zomato</h1>
        <p className="text-3xl mb-8">Discover the best food & drinks in your city</p>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;
