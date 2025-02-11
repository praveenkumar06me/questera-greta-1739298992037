import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FaHome, FaUtensils, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="bg-orange-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Hungerrr
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 hover:text-orange-200">
              <FaHome />
              <span>Home</span>
            </Link>
            
            <Link to="/restaurants" className="flex items-center space-x-1 hover:text-orange-200">
              <FaUtensils />
              <span>Restaurants</span>
            </Link>
            
            <Link to="/cart" className="flex items-center space-x-1 hover:text-orange-200">
              <FaShoppingCart />
              <span>Cart ({cart.length})</span>
            </Link>
            
            {user ? (
              <>
                <Link to="/profile" className="flex items-center space-x-1 hover:text-orange-200">
                  <FaUser />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={logout}
                  className="bg-orange-700 px-4 py-2 rounded hover:bg-orange-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-orange-700 px-4 py-2 rounded hover:bg-orange-800"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}