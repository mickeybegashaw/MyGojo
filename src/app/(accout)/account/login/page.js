import SignInButton from "@/app/components/SignInButton";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const Login = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <div className="py-10 md:py-0 flex items-center flex-col-reverse md:flex-row ">
      <div className=" w-11/12 h-96 md:w-6/12 md:h-screen bg-white flex flex-col justify-center items-center">
        <h1 className="text-xl  text-slate-700 text-center">
          Login to your Account
        </h1>
        <form className="flex flex-col w-8/12 gap-4 my-5">
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
        <Link href="/account/register">
          <p className="text-slate-600 mt-5 cursor-pointer hover:underline">
            Don't have account?
          </p>
        </Link>
      </div>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-3xl   text-slate-500">Welcome back</h1>
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

export default Login;
