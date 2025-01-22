import Image from "next/image";
import { auth } from "../../../../../auth";
import SignOutButton from "@/app/components/SignOutButton";
import Link from "next/link";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await auth();
  console.log(session);
  if (!session) {
    redirect("/account/login");
  }
  return (
    <main className="bg-slate-300 flex flex-col items-center h-screen">
      <div className=" w-full md:w-3/6  mt-20 flex flex-col gap-7 items-center">
        <h1 className="text-3xl text-slate-700 font-bold">Profile</h1>
        <Image
          src={session.user.image}
          width={80}
          height={80}
          alt="user profile picture"
          className="rounded-full"
        />
        <input
          className="w-4/5 p-3 border border-gray-400 rounded-lg"
          type="text"
          readOnly={true}
          value={session.user.name}
        />
        <input
          className="w-4/5 p-3 border border-gray-400 rounded-lg"
          type="text"
          readOnly={true}
          value={session.user.email}
        />
        <div className="flex gap-5 w-4/5 md:w-3/5">
          <SignOutButton />
          <Link
            href="/create-listing"
            className="bg-slate-500 text-white p-3 w-full rounded flex justify-center"
          >
            <button>Create Listing</button>
          </Link>
        </div>
        <Link href="/dashboard">
          <p className="underline text-slate-700">View my listings</p>
        </Link>
      </div>
    </main>
  );
};

export default Profile;
