import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { restaurants } from '../data/restaurants';

export default function Restaurants() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Restaurants</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{restaurant.name}</h2>
              <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-orange-600">★ {restaurant.rating}</span>
                <span className="text-gray-600">{restaurant.deliveryTime} mins</span>
              </div>
              
              <Link
                to={`/menu/${restaurant.id}`}
                className="block text-center bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}