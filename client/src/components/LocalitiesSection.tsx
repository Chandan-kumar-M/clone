
import React from 'react';

const localities = [
  { name: "Connaught Place", places: 388 },
  { name: "Sector 29", places: 254 },
  { name: "Sector 18, Noida", places: 451 },
  { name: "Rajouri Garden", places: 596 },
  { name: "DLF Cyber City", places: 205 },
  { name: "Golf Course Road", places: 243 },
  { name: "DLF Phase 4", places: 406 },
  { name: "Nehru Place", places: 261 },
  { name: "Malviya Nagar", places: 771 },
];

const LocalitiesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
        Popular localities in and around <span className="font-bold">Delhi NCR</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {localities.map((locality, index) => (
          <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <div className="flex-grow">
              <h3 className="text-xl font-medium text-gray-800">{locality.name}</h3>
              <p className="text-gray-600">{locality.places} places</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
         <div className="flex items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer bg-gray-50">
            <div className="flex-grow text-center">
              <h3 className="text-xl font-medium text-gray-600">see more</h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
      </div>
    </div>
  );
};

export default LocalitiesSection;
