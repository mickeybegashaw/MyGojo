import React from 'react'

const ListingForm = () => {
  return (
    <form className="flex flex-col  p-5 gap-5 md:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="name"
            className="md:p-2 border rounded-lg"
            id="name"
            minLength="5"
            maxLength="62"
            required
          />
          <textarea
            placeholder="Description"
            id="description"
            className="border md:p-2 rounded-lg resize-none overflow-hidden h-40"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="md:p-2 border rounded-lg"
            id="name"
            minLength="5"
            maxLength="62"
            required
          />
        </div>
        <div className=" flex flex-col justify-center">
          <div >
            <input type="checkbox" id="rent" className="w-5" />
            <span>Rent</span>
          </div>
          <div>
            <input type="checkbox" id="sell" className="w-5" />
            <span>Sell</span>
          </div>
          <div >
            <input type="checkbox" id="parking" className="w-5" />
            <span>Parking spot</span>
          </div>
          <div>
            <input type="checkbox" id="furnished" className="w-5" />
            <span>Furnished</span>
          </div>
        </div>

        <div className="flex gap-6 ">
          <div className="flex items-center gap-2">
            <input
              type="number"
              id="bedroom"
              className="md:p-2 border rounded-lg w-12"
              required
            />
            <p>Beds</p>
          </div>
          <div className="flex items-center gap-2 ">
            <input
              type="number"
              id="bathroom"
              className="md:p-2 border rounded-lg w-12"
              required
            />
            <p>Baths</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              id="price"
              className="md:p-2 border rounded-lg w-24"
              required
            />
            <p>Price</p>
          </div>
        </div>
        <div className="flex gap-4">
          <input
            className="md:p-2 rounded border w-full"
            type="file"
            id="image"
            accept="image/*"
            multiple
            required
          />
        </div>
      </form>
  )
}

export default ListingForm
