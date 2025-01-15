
const ListingForm = () => {
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
          />
          <textarea
            placeholder="Description"
            id="description"
            className="border md:p-2 rounded-lg resize-none border-gray-400  overflow-hidden h-40"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="md:p-2 border rounded-lg border-gray-400 "
            id="address"
            minLength="5"
            maxLength="62"
            required
          />
        </div>
        <div className=" flex flex-col gap-2 justify-between ">
          <div >
            <input type="checkbox" id="rent" className="w-5 border-gray-400 " />
            <span>Rent</span>
          </div>
          <div>
            <input type="checkbox" id="sell" className="w-5 border-gray-400 " />
            <span>Sell</span>
          </div>
          <div >
            <input type="checkbox" id="parking" className="w-5 border-gray-400 " />
            <span>Parking spot</span>
          </div>
          <div>
            <input type="checkbox" id="furnished" className="w-5 border-gray-400 " />
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
            />
            <p>Beds</p>
          </div>
          <div className="flex items-center gap-2 ">
            <input
              type="number"
              id="bathroom"
              className="md:p-2 border rounded-lg w-12 border-gray-400 "
              required
            />
            <p>Baths</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              id="price"
              className="md:p-2 border rounded-lg w-24 border-gray-400 "
              required
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
          />
        </div>
        <button className="p-2 text-white text-xl bg-slate-600 rounded-md hover:bg-slate-500 transition-all">Submit</button>
      </form>
  )
}

export default ListingForm
