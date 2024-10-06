import React, { useState, useEffect } from 'react';

const AddPet = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    vendor: '', // This will be set from local storage
    tags: '',
    breed: '',
    age: '',
    weight: '',
    color: '',
    adoptAvailability: false,
    price: '',
    gender: '',
    size: '',
    vendorLocation: '',
    humanFriendlyLevel: '',
    energyLevel: '',
    easeOfTraining: '',
    images: '',
    thumbnail: '',
  });

  const categories = ['Reptile', 'Mammal', 'Bird', 'Fish', 'Amphibian']; // Example categories

  useEffect(() => {
    // Get vendor ID from local storage
    const vendorId = 
    JSON.parse(localStorage.getItem('user'))
    if (vendorId) {
      setFormData((prevData) => ({
        ...prevData,
        vendor: vendorId.id,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleTagsChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: e.target.value.split(',').map(tag => tag.trim()), // Convert comma-separated string to array
    }));
  };

  const handleImagesChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      images: e.target.value.split(',').map(image => image.trim()), // Convert comma-separated string to array
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
localStorage.setItem("pet",JSON.stringify(formData))
    // You can add your form submission logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-green rounded-xl px-5 py-2 text-black font-semibold hover:bg-darkGreen transition ease-linear hover:scale-95 mb-4">Add Pet</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        
        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        {/* Vendor ID */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vendor">Vendor ID</label>
          <input
            type="text"
            name="vendor"
            value={formData.vendor}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
          />
        </div>

        {/* Breed */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="breed">Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleTagsChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Color */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Adopt Availability */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="adoptAvailability"
            checked={formData.adoptAvailability}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <label className="block text-gray-700 text-sm font-bold">Adopt Availability</label>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Size */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">Size</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Vendor Location */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vendorLocation">Vendor Location</label>
          <input
            type="text"
            name="vendorLocation"
            value={formData.vendorLocation}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Human Friendly Level */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="humanFriendlyLevel">Human Friendly Level</label>
          <input
            type="text"
            name="humanFriendlyLevel"
            value={formData.humanFriendlyLevel}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Energy Level */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="energyLevel">Energy Level</label>
          <input
            type="text"
            name="energyLevel"
            value={formData.energyLevel}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Ease of Training */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="easeOfTraining">Ease of Training</label>
          <input
            type="text"
            name="easeOfTraining"
            value={formData.easeOfTraining}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">Images (comma separated)</label>
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleImagesChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Thumbnail */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="thumbnail">Thumbnail</label>
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="bg-green text-black  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
          >
            Add Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPet;
