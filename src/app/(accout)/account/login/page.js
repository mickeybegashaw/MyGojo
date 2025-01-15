import SignInButton from "@/app/components/SignInButton";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import Image from "next/image";
const Login = async () => {
  const session =await  auth()
  if (session) {
    redirect('/')
  }
  return (
    <div className="flex items-center ">
      <div className=" w-6/12 h-screen bg-white flex flex-col items-center">
        <h1 className="text-xl  text-slate-700 text-center">
          Login to your Account
        </h1>
          <SignInButton />
      </div>
      <div className="flex flex-col w-full items-center">
        <h1 className="text-3xl   text-slate-500">Welcome back</h1>
        <Image src={'/images/logo.png'} width={400} height={300} alt="logo of myGojo"/>
      </div>
    </div>
  );
};

export default Login;
