import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const Home = async () => {
  let data = [];

  try {
    const result = await fetch(process.env.URL + "/api/house/get", {
      method: "GET",
      cache: "no-store",
    });

    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }

    data = await result.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <div className="h-screen">
      <div className="pt-10 md:pt-24 max-w-6xl mx-auto p-5">
        <div className="w-9/12 md:w-6/12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-700 leading-10">
            Best place to find your next{" "}
            <span className="text-slate-400">perfect</span> place
          </h1>
          <p className="text-slate-400 mt-2">
            Your direct path to home sweet home.
          </p>
        </div>
      </div>

      <div className="relative w-full h-96 mt-28 md:mt-32">
        <Image
          src="/images/hero.png"
          fill
          priority
          className="object-cover"
          alt="hero image"
        />
      </div>

      <div className="pt-10 md:pt-16 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-700">Recent Offers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          {data.length > 0 ? (
            data.map((house) => (
              <Link key={house._id} href={`/listing/${house._id}`}>
                <div className="px-3 flex flex-col  h-full bg-white shadow-md rounded-md">
                  {house.images && house.images[0].url ? (
                    <Image
                      src={house.images[0].url}
                      alt="house image"
                      width={500}
                      height={300}
                      className="rounded-md transition-transform hover:scale-105 w-full h-3/6 object-cover"
                    />
                  ) : (
                    <div className="rounded-md w-full h-3/6 bg-gray-200 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                  <div className="flex flex-col gap-2 mt-5">
                    <h2 className="text-lg font-semibold text-slate-600 mt-2">
                      {house.name}{" "}
                      <span className="text-slate-300 text-sm">
                        ({house.type.includes("rent") ? "Rent" : "Sell"}){" "}
                      </span>
                    </h2>
                    <p className="text-slate-400 text-sm">
                      <span className="inline-block">
                        <FaLocationDot />{" "}
                      </span>{" "}
                      {house.address}
                    </p>
                    <p className="text-slate-400 text-sm line-clamp-2">
                      {house.description}
                    </p>
                    <p className="text-slate-500 font-bold">
                      Birr {new Intl.NumberFormat("en-US").format(house.price)}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-6  ">
                    <p className="text-slate-400 text-sm">{house.beds} Beds</p>
                    <p className="text-slate-400 text-sm">{house.bath} Baths</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No houses available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
