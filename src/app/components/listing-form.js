"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
const ListingForm = ({session}) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
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
  const CLOUD_NAME = "dgldnbore";
  const UPLOAD_PRESET = "MyGojoNext";

  const uploadImageToCloudinary = async () => {
    if (!formData.image || formData.image.length === 0) {
      setError("image is not uploaded properly");
    }

    try {
      const uploadedImages = [];
      for (const file of formData.image) {
        const form = new FormData();
        form.append("file", file);
        form.append("upload_preset", UPLOAD_PRESET);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: form,
          }
        );

        if (!res.ok) {
          throw new Error("Failed to upload image to Cloudinary");
        }

        const data = await res.json();
        uploadedImages.push({
          id: data.public_id,
          url: data.secure_url,
        });
      }
      return uploadedImages;
    } catch (error) {
      console.error(error);
      setError("Failed to upload images");
      return [];
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const { name, address, description, price, beds, bath, image, type } =
      formData;
    if (
      !name ||
      !description ||
      !address ||
      !type ||
      !beds ||
      !bath ||
      !price ||
      !image
    ) {
      setError("All fields are required");
      return;
    }
    const uploadedImage = await uploadImageToCloudinary();
    const newData = {
      name,
      description,
      address,
      type,
      price,
      beds,
      bath,
      images: uploadedImage,
      posted_by: session.user.id
    };
    try {
      const res = await fetch("/api/house/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });

      const data = await res.json();
      if (res.ok) {
        setLoading(false);
        setError("");
        setFormData({
          name: "",
          description: "",
          address: "",
          type: [],
          beds: 1,
          bath: 1,
          price: 0,
          image: [],
        });
        setSuccess("House listed successfully!");
        setTimeout(() => {
          redirect(`/listing/${data._id}`);
        }, 100);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Un error occurred");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col flex-1 p-5 gap-5 -z-30"
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
        required
        onChange={handleFileChange}
        className="md:p-2 rounded border w-full border-gray-400"
      />
      {loading && <p>Uploading... Please wait.</p>}
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
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
