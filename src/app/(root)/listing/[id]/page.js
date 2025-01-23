import { FaLocationDot } from "react-icons/fa6";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
} from "react-icons/fa";
import ImageSlider from "@/app/components/imageSlider";
import Image from "next/image";
import { auth } from "../../../../../auth";
const Listing = async ({ params }) => {
  const session = await auth();
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
      <ImageSlider swipeImg={data.images.map((image) => image.url)} />
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
        {data?.posted_by?.id != session?.user?.id && (
          <div className="mt-16 bg-slate-300 w-full md:w-4/6 px-5 py-3 rounded-lg flex flex-col gap-2">
            <h3 className="font-bold ">House Listed by:</h3>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Image
                  src={data?.posted_by?.image}
                  width={30}
                  height={30}
                  alt="user profile picture"
                  className="rounded-full"
                />
                <span className="text-slate-600">{data?.posted_by?.name} </span>
              </div>
              <a
                href={`mailto:${data?.posted_by?.email}`}
                className="underline text-slate-600"
              >
                Send Email
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
