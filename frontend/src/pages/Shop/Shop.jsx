import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../../components/Item";
const Shop = () => {
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
      <div className="px-10 py-8">
        <div className="text-4xl text-darkBlue tracking-widest font-semibold">
          Choose a <span className="text-darkGreen text-4xl">PET </span> For
          Yourself.
        </div>
        <div className="py-20 px-18 flex flex-wrap gap-4 justify-center">
          {products.map(
            ({ Name, Price, imgUrl, Breed, Status, Color, PetID }) => (
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
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
