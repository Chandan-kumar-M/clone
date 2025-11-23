
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="/" className={`text-lg font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Get the App</a>
          {/* Add other nav links here */}
        </div>
        <div className="flex items-center space-x-4">
          <button className={`text-lg font-medium ${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-red-500`}>Log in</button>
          <button className={`text-lg font-medium ${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-red-500`}>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
