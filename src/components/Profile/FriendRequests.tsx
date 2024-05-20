import Image from "next/image";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="">
      <h1 className="font-bold text-xl ml-2 mb-2">Friend Requests</h1>
      <ul className="w-full space-y-4 py-4 border-b-[1px] border-primaryColor mb-4">
        <li className="flex justify-between items-center hover:bg-primaryColor rounded-full p-2 transition-colors duration-300 ease-in-out group ">
          <div className="flex gap-10 items-center">
            <Image
              src="/favicon.ico"
              width={70}
              height={70}
              alt="profile picture"
            />
            <div className="font-bold text-xl">Person 1</div>
          </div>
          <div className="space-x-2 mr-6">
            <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-4 py-2 my-2 bg-primaryColor hover:bg-secAccentColor focus:ring-accentColor transition duration-300 ease-in-out group-hover:border-gray-600 group-hover:transition-none group-hover:border-[1px] ">
              Confirm
            </button>
            <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-4 py-2 my-2 bg-primaryColor hover:bg-errorColor focus:ring-accentColor transition duration-300 ease-in-out group-hover:border-gray-600 group-hover:transition-none group-hover:border-[1px] ">
              Remove
            </button>
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-primaryColor rounded-full p-2 transition-colors duration-300 ease-in-out group">
          <div className="flex gap-10 items-center">
            <Image
              src="/favicon.ico"
              width={70}
              height={70}
              alt="profile picture"
            />
            <div className="font-bold text-xl">Person 2</div>
          </div>
          <div className="space-x-2 mr-6">
            <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-4 py-2 my-2 bg-primaryColor hover:bg-secAccentColor focus:ring-accentColor transition duration-300 ease-in-out group-hover:border-gray-600 group-hover:transition-none group-hover:border-[1px] ">
              Confirm
            </button>
            <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-4 py-2 my-2 bg-primaryColor hover:bg-errorColor focus:ring-accentColor transition duration-300 ease-in-out group-hover:border-gray-600 group-hover:transition-none group-hover:border-[1px] ">
              Remove
            </button>
          </div>
        </li>
        <li className="flex justify-between items-center hover:bg-primaryColor rounded-full p-2 transition-colors duration-300 ease-in-out group">
          <div className="flex gap-10 items-center">
            <Image
              src="/favicon.ico"
              width={70}
              height={70}
              alt="profile picture"
            />
            <div className="font-bold text-xl">Person 3</div>
          </div>
          <div className="space-x-2 mr-6">
            <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-4 py-2 my-2 bg-primaryColor hover:bg-secAccentColor focus:ring-accentColor transition duration-300 ease-in-out group-hover:border-gray-600 group-hover:transition-none group-hover:border-[1px] ">
              Confirm
            </button>
            <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-4 py-2 my-2 bg-primaryColor hover:bg-errorColor focus:ring-accentColor transition duration-300 ease-in-out group-hover:border-gray-600 group-hover:transition-none group-hover:border-[1px] ">
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default FriendRequests;
