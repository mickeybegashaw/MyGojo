import { FaLocationDot } from "react-icons/fa6";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
} from "react-icons/fa";
import ImageSlider from "@/app/components/imageSlider";
const Listing = async ({ params }) => {
  let data;
  const { id } = await params;
  try {
    const res = await fetch(process.env.URL + `/api/house/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    data = await res.json();
  } catch (error) {
    console.error(error);
    return <div>Failed to load data.</div>;
  }

  return (
    <div>
      <ImageSlider swipeImg={data.images} />
      <div className="p-5 max-w-4xl mt-10 mx-auto">
        <h1 className="mb-3 text-2xl font-semibold">
          {data.name}-{" "}
          <span className="text-slate-600 text-xl">
            {" "}
            {data.price.toLocaleString("en-US")} Birr
          </span>
        </h1>
        <p className="mb-5 text-slate-500 text-sm">
          <span className="inline-block">
            <FaLocationDot />{" "}
          </span>{" "}
          {data.address}
        </p>
        <span className="text-white py-3 px-9 bg-slate-700 rounded">
          {data.type.includes("rent") ? "For Rent" : "For Sell"}
        </span>
        <p className="mt-5">
          <strong>Description :</strong> {data.description}
        </p>
        <ul className="text-slate-500 mt-4 flex flex-wrap gap-5 md:gap-10">
          <li className="flex items-center gap-1 whitespace-nowrap ">
            <FaBed />
            {data.beds > 1 ? `${data.beds} Beds` : `${data.beds} Bed`}
          </li>
          <li className="flex items-center gap-1 whitespace-nowrap ">
            <FaBath />
            {data.bath > 1 ? `${data.beds} Baths` : `${data.beds} Bath`}
          </li>
          <li className="flex items-center gap-1 whitespace-nowrap ">
            <FaParking />
            {data.type.includes("parking spot") ? "Parking" : "No parking"}
          </li>
          <li className="flex items-center gap-1 whitespace-nowrap ">
            <FaChair />
            {data.type.includes("Furnished") ? "Furnished" : "Not Furnished"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Listing;
