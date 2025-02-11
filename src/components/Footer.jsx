import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hungerrr</h3>
            <p className="text-gray-300">
              Delivering happiness to your doorstep, one meal at a time.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:support@quickbite.com" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <FaEnvelope />
                <span>support@quickbite.com</span>
              </a>
              <a href="https://instagram.com/quickbite_food" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <FaInstagram />
                <span>@quickbite_food</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Hungerrr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}