import SignInButton from "@/app/components/SignInButton";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
const Login = async () => {
  const session =await  auth()
  if (session) {
    redirect('/')
  }
  return (
    <div className="flex flex-col items-center ">
      <div className="w-5/6 md:w-4/6 shadow-lg mt-5">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-700 text-center">
          Login
        </h1>
        <div className="flex flex-col items-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
