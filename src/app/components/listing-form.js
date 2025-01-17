"use client";
import { useState } from "react";
const ListingForm = () => {
  const [formData, setFormdata] = useState({
    name: "",
    description: "",
    address: "",
    type: [],
    beds: 1,
    bath: 1,
    price: 0,
    image: [],
  });
  const handelChange=(e)=>{
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  }
  return (
    <form className="flex flex-col flex-1 p-5 gap-5 ">
      <div className="flex flex-col gap-10 flex-1">
        <input
          type="text"
          placeholder="name"
          className="md:p-2 border border-gray-400 rounded-lg"
          id="name"
          minLength="5"
          maxLength="62"
          required
          onchange={handelChange}
        />
        <textarea
          placeholder="Description"
          id="description"
          className="border md:p-2 rounded-lg resize-none border-gray-400  overflow-hidden h-40"
          required
          onchange={handelChange}
        />
        <input
          type="text"
          placeholder="Address"
          className="md:p-2 border rounded-lg border-gray-400 "
          id="address"
          minLength="5"
          maxLength="62"
          required
          onchange={handelChange}
        />
      </div>
      <div className=" flex flex-col gap-2 justify-between ">
        <div>
          <input
            type="checkbox"
            id="rent"
            className="w-5 border-gray-400 "
            onchange={handelChange}
          />
          <span>Rent</span>
        </div>
        <div>
          <input
            type="checkbox"
            id="sell"
            onchange={handelChange}
            className="w-5 border-gray-400 "
          />
          <span>Sell</span>
        </div>
        <div>
          <input
            type="checkbox"
            id="parking"
            onchange={handelChange}
            className="w-5 border-gray-400 "
          />
          <span>Parking spot</span>
        </div>
        <div>
          <input
            type="checkbox"
            id="furnished"
            onchange={handelChange}
            className="w-5 border-gray-400 "
          />
          <span>Furnished</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2">
          <input
            type="number"
            id="bedroom"
            className="md:p-2 border rounded-lg w-12 border-gray-400 "
            required
            onchange={handelChange}
          />
          <p>Beds</p>
        </div>
        <div className="flex items-center gap-2 ">
          <input
            type="number"
            id="bathroom"
            className="md:p-2 border rounded-lg w-12 border-gray-400 "
            required
            onchange={handelChange}

          />
          <p>Baths</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            id="price"
            className="md:p-2 border rounded-lg w-24 border-gray-400 "
            required
            onchange={handelChange}
          />
          <p>Price</p>
        </div>
      </div>
      <div className="flex gap-4">
        <input
          className="md:p-2 rounded border w-full border-gray-400 "
          type="file"
          id="image"
          accept="image/*"
          multiple
          required
          onchange={handelChange}
        />
      </div>
      <button type="submit" className="p-2 text-white text-xl bg-slate-600 rounded-md hover:bg-slate-500 transition-all">
        Submit
      </button>
    </form>
  );
};

export default ListingForm;
