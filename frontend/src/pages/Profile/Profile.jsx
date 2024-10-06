import React, { useEffect, useState } from 'react';
import Item from '../../components/Item';
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [user, setUser] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();
  const Newuser = {
    name: "John Doe",
    email: "johndoe@example.com",
    id:"5c4545w",
    number: "+1234567890",
  };

  useEffect(() => {
    
    localStorage.setItem("user", JSON.stringify(Newuser));

    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Set current date and time
    const now = new Date();
    setCurrentTime(now.toLocaleString());

    // Retrieve pet data from localStorage
    const storedPets = localStorage.getItem("pet");
    if (storedPets) {
      // Assuming the pet data is a single object; parse it into an array
      setPets([JSON.parse(storedPets)]);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Show loading while user data is fetched
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 ps-10">User Profile</h1>

      <div className="bg-white ps-8 rounded-lg shadow-lg p-10 flex justify-between flex-wrap">
        <div className="mb-4 flex flex-col gap-5 text-2xl">
          <p className="text-gray-600"><strong>Name:</strong> {user.name}</p>
          <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-600"><strong>Phone Number:</strong> {user.number}</p>
        </div>

        <div>
          <p className="text-lg text-gray-600"><strong>Date and Time:</strong> {currentTime}</p>
        </div>
        
        <button onClick={()=>{
          navigate("/AddPet")
        }} className="bg-green rounded-xl px-5 py-1 max-h-10 text-white font-semibold hover:bg-darkGreen transition ease-linear hover:scale-95">
          <i className="text-darkBlue ri-add-fill me-1"></i>{" "}
          <span className="text-black  sm:text-sm ">Add Pet</span>
        </button>
        
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 ps-10 mt-10">My Pets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <Item
              key={pet.title} // Unique key based on title
              title={pet.title}
              images={pet.images} // Use the images array directly
              price={pet.price}
              breed={pet.breed}
              id={pet.vendor} // Using vendor ID as a unique identifier
              gender={pet.gender}
              adobtAvailabilty={pet.adoptAvailability} // Correct property
            />
          ))
        ) : (
          <p className="text-gray-600">No pets available.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
