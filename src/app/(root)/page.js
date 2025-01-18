import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  let data = [];

  try {
    const result = await fetch(process.env.URL+"/api/house/get", {
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
    <div className="bg-slate-50 h-screen">
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
          src={"/images/hero.png"}
          layout="fill"
          objectFit="cover"
          priority
          alt="hero image"
        />
      </div>

      <div className="pt-10 md:pt-16 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-700">Recent Offers</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {data.length > 0 ? (
            data.map((house) => (
                <Link href={`/listing/${house._id}`}>
              <div key={house._id} className="p-4 h-full bg-white shadow-md rounded-md">
                {house.images && house.images[0] ? (
                  <img
                    src={house.images[0]}
                    alt="house image"
                    
                    className="rounded-md w-full h-3/6"
                  />
                ) : (
                  <div className="rounded-md w-full h-3/6 bg-gray-200 flex items-center justify-center">
                    No Image
                  </div>
                )}
                <h2 className="text-lg font-semibold text-slate-700 mt-2">
                  {house.name}
                </h2>
                <p className="text-slate-500">{house.description}</p>
                <p className="text-slate-700 font-bold">${house.price}</p>
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
