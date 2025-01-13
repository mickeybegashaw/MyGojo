"use client";
import { signInAction } from "../auth/serverAction";
const SignInButton = () => {
  const handleSignIn = async () => {
    try {
      await signInAction();  // Call the server action
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button onClick={handleSignIn} className="bg-blue-500 text-white p-1 rounded">
      Sign In
    </button>
  );
};

export default SignInButton;
