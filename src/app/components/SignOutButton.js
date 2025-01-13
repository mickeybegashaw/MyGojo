"use client";
import { signOutAction } from "../auth/serverAction"; 
const SignOutButton = () => {
  const handleSignOut = async () => {
    try {
      await signOutAction();  // Call the server action
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button onClick={handleSignOut} className="bg-blue-500 text-white p-1 rounded">
      Sign out
    </button>
  );
};

export default SignOutButton;
