
import React, { useState } from 'react';

const RestaurantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Placeholder data - replace with API data
  const restaurant = {
    name: "The Big Chill Cakery",
    cuisine: "Bakery, Desserts, Fast Food",
    address: "Connaught Place, New Delhi",
    rating: 4.9,
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/5/3005/a97585cf689e95c408413b56779836e5.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/5/3005/65d5f8f533d9311e721612479e3afb33.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/5/3005/c3547b7445791448d132644265538260.jpg",
    ]
  };

  const tabs = ["Overview", "Order Online", "Reviews", "Menu"];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        {/* Image Gallery */}
        <div className="grid grid-cols-3 gap-2 h-96 mb-8">
          <div className="col-span-2">
            <img src={restaurant.images[0]} alt="Restaurant" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <img src={restaurant.images[1]} alt="Restaurant" className="w-full h-full object-cover rounded-lg" />
            <div className="relative">
                <img src={restaurant.images[2]} alt="Restaurant" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <span className="text-white text-2xl font-bold">+ {restaurant.images.length - 2} more</span>
                </div>
            </div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{restaurant.name}</h1>
              <p className="text-lg text-gray-600">{restaurant.cuisine}</p>
              <p className="text-gray-500">{restaurant.address}</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-green-600 text-white font-bold text-lg px-3 py-1 rounded-md">{restaurant.rating.toFixed(1)} ★</div>
                <div>
                    <p className="text-gray-600">1,234</p>
                    <p className="text-gray-500 text-sm">Dining Reviews</p>
                </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md">
            <div className="flex border-b border-gray-200">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`px-6 py-4 font-semibold text-lg ${activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-6">
                {activeTab === 'Overview' && <div>Overview Content</div>}
                {activeTab === 'Order Online' && <div>Order Online Content</div>}
                {activeTab === 'Reviews' && <div>Reviews Content</div>}
                {activeTab === 'Menu' && <div>Menu Content</div>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
