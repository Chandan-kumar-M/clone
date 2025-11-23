
import React from 'react';

interface RestaurantCardProps {
  restaurant: {
    name: string;
    imageUrl: string;
    rating: number;
    cuisine: string;
    costForTwo: number;
  };
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
      <div className="relative h-48">
        <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-2 left-2 text-white text-lg font-bold">{restaurant.name}</div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-yellow-500 font-bold text-lg">{restaurant.rating.toFixed(1)} ★</div>
          <div className="text-gray-600">₹{restaurant.costForTwo} for two</div>
        </div>
        <div className="text-gray-700">{restaurant.cuisine}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
