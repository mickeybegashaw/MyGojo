"use server";
import { signOut } from "../../../auth";
import { signIn } from "../../../auth";

// Define the server-side action to handle Google Sign-In
export async function signInAction() {
  await signIn("google");
}
export async function signOutAction() {
  await signOut("google");
}
