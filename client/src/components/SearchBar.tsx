
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-2 w-full max-w-2xl">
      <div className="flex items-center flex-grow">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <input
          type="text"
          placeholder="Enter your location"
          className="flex-grow bg-transparent focus:outline-none text-gray-700"
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className="h-8 border-l border-gray-300 mx-2"></div>
      <div className="flex items-center flex-grow">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="flex-grow bg-transparent focus:outline-none text-gray-700"
        />
      </div>
    </div>
  );
};

export default SearchBar;
