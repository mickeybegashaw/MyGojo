import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchForm from "./SearchForm";
import { auth } from "../../../auth";
import SignOut from "./SignOutButton";
import MenuSideBar from "./MenuSideBar";

const Header = async () => {
  const session = await auth();
  return (
    <header className="shadow-md w-screen fixed bg-slate-200 px-2 h-20 z-50">
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

        <div className="flex gap-5 items-center text-slate-500 ">
          <Link href="/">
            <span className="hidden md:inline hover:underline">Home</span>
          </Link>
          <Link href="/about">
            <span className="hidden md:inline hover:underline">About</span>
          </Link>
          {session ? (
         
              <Link href='/account/profile'>
              <span className="hidden md:inline hover:underline">
                <Image
                  src={session?.user?.image}
                  width={30}
                  height={30}
                  alt="user profile picture"
                  className="rounded-full"
                />
              </span>
              </Link>
              
          
          ) : (
            <span className="hidden md:inline hover:underline">
              <Link href="/account/login">Sign In</Link>
            </span>
          )}
          <span className="inline md:hidden  hover:underline">
            <MenuSideBar session={session} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
