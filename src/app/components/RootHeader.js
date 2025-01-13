import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchForm from "./SearchForm";
import SignIn from "./SignInButton";
import { auth } from "../../../auth";
import SignOut from "./SignOutButton";

const Header = async () => {
  const session = await auth();
  return (
    <header className="shadow-md bg-slate-200 px-2 h-20">
      <div className="flex justify-between h-full max-w-6xl items-center mx-auto">
        <div>
          <Link href="/">
            <img
              src={"/images/logo.png"}
              className="w-32 md:w-52"
              alt="MyGojo logo"
            />
          </Link>
        </div>
        <div>
          <SearchForm />
        </div>

        <div className="flex gap-5 text-slate-500 ">
          <Link href="/">
            <span className="hidden md:inline">Home</span>
          </Link>
          <Link href="/about">
            <span className="hidden md:inline">About</span>
          </Link>
          {session ? (
            <>
              <span className="hidden md:inline">
                <SignOut />
              </span>
              <span className="hidden md:inline">
                <Image src={session?.user?.image} width={25} height={25} alt="user profile picture" className="rounded-full"/>
              </span>
            </>
          ) : (
            <span className="hidden md:inline">
              <SignIn />
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
