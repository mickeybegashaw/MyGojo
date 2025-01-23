import { auth } from "../../../../auth";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
const Dashboard = async() => {
 const session = await auth()
  let data;
  try {
    const res = await fetch(process.env.URL + `/api/house/userid?user_id=${session.user.id}`, {
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
    <main className="bg-slate-300 flex flex-col items-center h-svh">
      <div className="mt-5 w-11/12">
        <h1 className="text-slate-700 text-3xl font-bold text-center ">Dashboard</h1>
        <div>
          <h2 className="text-slate-600 text-xl">My listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          {data.length > 0 ? (
            data.map((house) => (
              <Link key={house._id} href={`/dashboard/listing/${house._id}`}>
                <div className="px-3 py-2 flex flex-col  h-fit bg-white shadow-md rounded-md">
                  {house.images && house.images[0].url ? (
                    <Image
                      src={house.images[0].url}
                      alt="house image"
                      width={400}
                      height={300}
                      className="rounded-md transition-transform hover:scale-105 w-full h-1/2 object-contain"
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
            <p>You don't have any listing</p>
          )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
