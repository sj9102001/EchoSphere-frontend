import Button from "@/ui/Button";
import Logo from "@/ui/Logo";
import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/react"


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  function toggleSidebar() {
    setShowSidebar((prevState) => {
      return !prevState;
    });
  }
  return (
    <nav className=" bg-bgColor sm:border-r-2 sm:border-solid sm:border-primaryColor border-b-2 sm:h-screen border-solid border-primaryColor">
      <div className="flex h-24 sm:h-full sm:w-40 lg:w-64 sm:flex-col sm:justify-end ">
        <div className=" w-full">
          <Logo></Logo>
        </div>
        <div className="hidden sm:block sm:flex-row h-full sm:text-lg  lg:text-2xl space-y-10 sm:pl-6 sm:pt-6">
          <div className="">Home</div>
          <div className="">Feed</div>
          <div className="">Create</div>
          <div className="">Chat</div>
          <div className="">Profile</div>
        </div>
        <div className="sm:flex-col sm:justify-center items-center sm:items-start flex w-full  gap-5 p-5 sm:gap-8 sm:p-6 sm:pb-16 ">
          <button onClick={() => signOut()} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
          <div className="">
            <button
              onClick={toggleSidebar}
              type="button"
              className="-m-1 inline-flex items-center justify-center rounded-md p-2.5 text-textColor"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showSidebar && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primaryColor px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Logo></Logo>
              </a>
              <button
                onClick={toggleSidebar}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-textColor"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-textColor hover:bg-gray-800"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-textColor hover:bg-gray-800"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-textColor hover:bg-gray-800"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <Link href="/login" className="">
                    LOGIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
