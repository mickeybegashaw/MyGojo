"use client";
import { useState } from "react";

const ListingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    type: [],
    beds: 1,
    bath: 1,
    price: 0,
    image: [],
  });

  // Handle text, number, and textarea changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, type: [...formData.type, value] });
    } else {
      setFormData({
        ...formData,
        type: formData.type.filter((item) => item !== value),
      });
    }
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, image: files });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

   
    try {
      const res = await fetch("/api/house", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("House listed successfully!");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col flex-1 p-5 gap-5"
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="md:p-2 border border-gray-400 rounded-lg"
        minLength="5"
        maxLength="62"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <textarea
        placeholder="Description"
        name="description"
        className="border md:p-2 rounded-lg resize-none border-gray-400 overflow-hidden h-40"
        required
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Address"
        name="address"
        className="md:p-2 border rounded-lg border-gray-400"
        minLength="5"
        maxLength="62"
        required
        value={formData.address}
        onChange={handleChange}
      />

      {/* Checkbox Section */}
      <div className="flex flex-col gap-2">
        {["Rent", "Sell", "Parking spot", "Furnished"].map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={option}
              onChange={handleCheckboxChange}
              checked={formData.type.includes(option)}
              className="w-5 h-5"
            />
            {option}
          </label>
        ))}
      </div>

      {/* Beds, Baths, and Price */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="beds"
            className="md:p-2 border rounded-lg w-16 border-gray-400"
            min="1"
            required
            value={formData.beds}
            onChange={handleChange}
          />
          <p>Beds</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="bath"
            className="md:p-2 border rounded-lg w-16 border-gray-400"
            min="1"
            required
            value={formData.bath}
            onChange={handleChange}
          />
          <p>Baths</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="price"
            className="md:p-2 border rounded-lg w-24 border-gray-400"
            min="0"
            required
            value={formData.price}
            onChange={handleChange}
          />
          <p>Price</p>
        </div>
      </div>

      {/* File Upload */}
      <input
        type="file"
        name="image"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="md:p-2 rounded border w-full border-gray-400"
      />

      <button
        type="submit"
        className="p-2 text-white text-xl bg-slate-600 rounded-md hover:bg-slate-500 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default ListingForm;
