import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import Item from "./Item";

const LovedAnimals = () => {
  const [products, setProducts] = useState([]); // Initialize state to hold fetched products

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/pets");
      setProducts(response.data);
      console.log(response);
      // Update state with fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <p className="text-center font-bold text-darkBlue text-3xl tracking-widest">
        Last Visited Animals
      </p>
      <div className="py-10 px-8 flex flex-wrap gap-5 justify-center">
        {products
          .slice(1, 9)
          .map(({ Name, Price, imgUrl, Breed, Status, Color, PetID }) => (
            <Item
              key={PetID} // Use id as the key for better performance
              title={Name}
              images={imgUrl} // Ensure images is an array
              price={Price}
              breed={Breed}
              id={PetID}
              Color={Color}
              adobtAvailabilty={Status}
            />
          ))}
      </div>
    </>
  );
};

export default LovedAnimals;
