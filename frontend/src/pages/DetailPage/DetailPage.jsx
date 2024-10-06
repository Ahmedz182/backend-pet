import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import Axios

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imgSrc, setImgSrc] = useState(""); // Start with an empty string

  const handleError = () => {
    // Set to default image on error
    setImgSrc(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP9_jE5QAFKzRmc2OCwy1bkZBG825XT6u2A&s"
    );
  };

  useEffect(() => {
    // Scroll to the top of the page on component load
    window.scrollTo(0, 0);
    // Fetch product details from the API
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/pet?id=${id}`
        );
        setProduct(response.data);
        setImgSrc(response.data.imgUrl); // Set imgSrc after product data is fetched
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]); // Dependency array includes 'id' to run effect when id changes

  // If product is not found yet, return a loading message
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Product Image */}
        <div className="flex justify-center mb-8">
          <img
            alt={product.Name}
            src={imgSrc}
            onError={handleError}
            className="rounded-lg w-full max-w-md object-cover shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.Name}</h1>
          {product.Status === "Available" && ( // Check availability directly
            <button className="bg-green rounded-xl px-5 py-2 text-black font-semibold hover:bg-darkGreen transition ease-linear hover:scale-95 mb-4">
              <i className="text-darkBlue   ri-mickey-line me-1"></i>{" "}
              <span className="text-darkBlue  sm:text-sm">Adopt Now</span>
            </button>
          )}
        </div>

        {/* Product Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="text-lg">
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Breed:</span>{" "}
              {product.Breed}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Vendor ID:</span>{" "}
              {product.VendorID}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Age:</span>{" "}
              {product.Age} years
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Color:</span>{" "}
              {product.Color}
            </p>
          </div>

          <div className="text-lg">
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Size:</span>{" "}
              {product.Size}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Energy Level:</span>{" "}
              {product.EnergyLevel}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">Friendliness:</span>{" "}
              {product.Friendliness}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">
                Ease of Training:
              </span>{" "}
              {product.EaseOfTraining}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-700">
                Adopt Availability:
              </span>{" "}
              {product.Status}
            </p>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800">
            Price: <span className="text-green-500">Rs {product.Price}</span>
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            Contact Information
          </h2>
          <p className="text-gray-700">For more details, contact the vendor:</p>
          <p className="text-blue-600 text-lg font-semibold">
            Vendor ID: {product.VendorID}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
