import SignInButton from "@/app/components/SignInButton";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const Register = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <div className="py-10 md:py-0 flex items-center flex-col-reverse md:flex-row-reverse ">
      <div className=" w-11/12 h-96 md:w-full md:h-screen bg-white flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-2xl  text-slate-700 text-center">
          Create an Account
        </h1>
        <form className="flex flex-col w-1/2 gap-4 my-10">
          <input
            type="text"
            placeholder="First Name"
            className="input p-2 border border-gray-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input p-2 border border-gray-300"
          />
          <input
            type="text"
            placeholder="Email"
            className="input p-2 border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="input p-2 border border-gray-300"
          />
        </form>
        <SignInButton />
        <Link href="/account/login">
          <p className="text-slate-600 mt-5 cursor-pointer hover:underline">
            Already have account?
          </p>
        </Link>
      </div>
      <div className="flex flex-col w-6/12 items-center">
        <Image
          src={"/images/logo.png"}
          width={400}
          height={300}
          alt="logo of myGojo"
        />
      </div>
    </div>
  );
};

export default Register;
