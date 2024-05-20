import DotMenu from "@/ui/DotMenu";
import Image from "next/image";
import React from "react";

const Friends = () => {
  return (
    <div id="friendList" className="">
      <h1 className="font-bold text-xl ml-2 mb-2">Friends</h1>
      <ul className="w-full py-4 space-y-2 ">
        <li className="flex justify-between items-center hover:bg-primaryColor rounded-full p-2 transition-colors duration-300 ease-in-out ">
          <div className="flex gap-10 items-center">
            <Image
              src="/favicon.ico"
              width={70}
              height={70}
              alt="profile picture"
            />
            <div className="font-bold text-xl">Friend 1</div>
          </div>
          <button
            className="font-medium rounded-lg py-2 my-2  mr-2 active:bg-secAccentColor hover:bg-primaryColor
             transition-colors duration-300 active:transition-none ease-in-out"
          >
            <DotMenu />
          </button>
        </li>
        <li className="flex justify-between items-center hover:bg-primaryColor rounded-full p-2 transition-colors duration-300 ease-in-out">
          <div className="flex gap-10 items-center">
            <Image
              src="/favicon.ico"
              width={70}
              height={70}
              alt="profile picture"
            />
            <div className="font-bold text-xl">Friend 2</div>
          </div>
          <button
            className="font-medium rounded-lg py-2 my-2  mr-2 active:bg-secAccentColor hover:bg-primaryColor
            active:transition-none transition-colors duration-300 ease-in-out"
          >
            <DotMenu />
          </button>
        </li>
        <li className="flex justify-between items-center hover:bg-primaryColor rounded-full p-2 transition-colors duration-300 ease-in-out">
          <div className="flex gap-10 items-center">
            <Image
              src="/favicon.ico"
              width={70}
              height={70}
              alt="profile picture"
            />
            <div className="font-bold text-xl">Friend 3</div>
          </div>
          <button
            className="font-medium rounded-lg py-2 my-2  mr-2 active:bg-secAccentColor hover:bg-primaryColor active:transition-none
             transition-colors duration-300 ease-in-out"
          >
            <DotMenu />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Friends;
