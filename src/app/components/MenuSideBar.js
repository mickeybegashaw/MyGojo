"use client";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SignOut from "./SignOutButton";
import SignIn from "./SignInButton";

const MenuSideBar = ({ session }) => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div>
      <span onClick={() => setOpenSideBar(true)} className="cursor-pointer">
        <IoMdMenu size={30} />
      </span>

      {openSideBar && (
        <>
          <div
            onClick={() => setOpenSideBar(false)}
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
          ></div>

          <div
            className={`bg-slate-300 p-5 fixed right-0 top-0 w-3/4 h-full shadow-lg transform transition-transform duration-[3000ms] ${
              openSideBar ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
          >
            {session && (
              <>
                <Image
                  src={session?.user?.image}
                  width={30}
                  height={30}
                  alt="User profile picture"
                  className="rounded-full"
                />
                <p className="text-slate-400">{session?.user?.name}</p>
              </>
            )}
            <div className="flex flex-col gap-2 mt-2 ">
              <Link href="/">
                <p>Home</p>
              </Link>
              <Link href="/about">
                <p>About</p>
              </Link>
              {session ? <SignOut /> : <SignIn />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuSideBar;
