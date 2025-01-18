const Listing = async ({ params }) => {
  let data;

  try {
    const res = await fetch(process.env.URL+`/api/house/${params.id}`, {
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
