import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Profile() {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-6">
          <img
            src={user.avatar || "https://images.unsplash.com/photo-1633332755192-727a05c4013d"}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600">Phone</label>
                <p className="font-medium">{user.phone || "Not provided"}</p>
              </div>
              <div>
                <label className="block text-gray-600">Address</label>
                <p className="font-medium">{user.address || "Not provided"}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600">Dietary Restrictions</label>
                <p className="font-medium">{user.dietary || "None"}</p>
              </div>
              <div>
                <label className="block text-gray-600">Favorite Cuisine</label>
                <p className="font-medium">{user.favoriteCuisine || "Not specified"}</p>
              </div>
            </div>
          </div>
        </div>
        
        <button className="mt-8 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
}