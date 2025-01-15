import ListingForm from "@/app/components/listing-form";
const CreateListing = () => {
  return (
    <main className="p-3 bg-slate-50 flex flex-col w-screen items-center">
      <div className=" w-11/12 md:w-8/12">
        <h1 className="text-center text-2xl text-slate-500 md:text-3xl font-semibold my-3 md:my-7">
          Create a listing
        </h1>
        <ListingForm />
      </div>
    </main>
  );
};

export default CreateListing;
