"use client";
import { signInAction } from "../auth/serverAction";
import { FcGoogle } from "react-icons/fc";

const SignInButton = () => {
  const handleSignIn = async () => {
    try {
      await signInAction();  // Call the server action
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button onClick={handleSignIn} className=" p-3 border rounded">
      <p> <span className="inline-block"> <FcGoogle size={20}/> </span> SignIn with Google </p>
    </button>
  );
};

export default SignInButton;
