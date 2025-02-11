import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Food background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Delicious Food,
            <br />
            Delivered to You
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl">
            Order from the best local restaurants with easy, on-demand delivery.
          </p>
          
          <Link
            to="/restaurants"
            className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Explore Restaurants
          </Link>
        </motion.div>
      </div>
    </div>
  );
}