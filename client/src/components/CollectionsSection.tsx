
import React from 'react';

const collections = [
  {
    title: "Live Cricket Screening",
    description: "26 places",
    imageUrl: "https://b.zmtcdn.com/data/collections/e2ceb703e837e4414e4dde3b940a4306_15821062collections.jpg",
  },
  {
    title: "Ramadan Specials",
    description: "13 places",
    imageUrl: "https://b.zmtcdn.com/data/collections/b90a32274496294ccbe15e10d9ad74e9_15821062collections.jpg",
  },
  {
    title: "Newly Opened",
    description: "16 places",
    imageUrl: "https://b.zmtcdn.com/data/collections/90999c2395ba9c96e3a484033f274c52_15821062collections.jpg",
  },
  {
    title: "Trending This Week",
    description: "30 places",
    imageUrl: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_15821062collections.jpg",
  },
];

const CollectionsSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">Collections</h2>
        <p className="text-lg text-gray-600 mb-8">Explore curated lists of top restaurants, cafes, pubs, and bars in your city, based on trends</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <img src={collection.imageUrl} alt={collection.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-xl font-bold">{collection.title}</h3>
                <p className="text-sm">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsSection;
