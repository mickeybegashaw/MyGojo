import { FaLocationDot } from "react-icons/fa6";

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
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
};

export default Listing;
