import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Tailwind CSS styles are assumed to be imported globally

interface UserProfile {
  name: string;
  username: string;
  email: string;
  password?: string; // Optional for security reasons
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePicture?: string; // Optional for image storage
}

const Settings: React.FC = () => {
  const { tab } = useParams<{ tab: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | any>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<UserProfile>();

  useEffect(() => {
    // Fetch user profile data from API or local storage
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleSave = (data: UserProfile) => {
    // Update user profile in API or local storage
    localStorage.setItem('userProfile', JSON.stringify(data));
    // Optionally, navigate to a success page or refresh the page
    navigate('/profile'); 
  };

  // Handle profile picture upload (simplified)
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      // Handle image upload logic here (e.g., using a library like `react-dropzone`)
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePicture: reader.result as string });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  

  return (
    <div className="container mx-auto">
      <div className="flex">
        <ul className="flex space-x-4 border-b border-gray-200">
          <li className={`cursor-pointer ${tab === 'editProfile' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
            <button onClick={() => navigate('../settings/EditProfile')}>Edit Profile</button>
          </li>
          <li className={`cursor-pointer ${tab === 'preferences' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
            <button onClick={() => navigate('../settings/Preferences')}>Preferences</button>
          </li>
          <li className={`cursor-pointer ${tab === 'security' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
            <button onClick={() => navigate('../settings/Security')}>Security</button>
          </li>
        </ul>
      </div>

      {/* Edit Profile Section */}
      {tab === 'editProfile' && (
        <div className="mt-6">
          <form onSubmit={handleSubmit(handleSave)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  {...register('name', { required: true })}
                  defaultValue={profile.name}
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  {...register('username', { required: true })}
                  defaultValue={profile.username}
                />
                {errors.username && <span className="text-red-500">Username is required</span>}
              </div>
              {/* ... other fields ... */}

              <div>
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </form>
        </div>
      )}

      {/* Other tabs (Preferences, Security) */}
      {/* ... */}
    </div>
  );
};

export default Settings;
