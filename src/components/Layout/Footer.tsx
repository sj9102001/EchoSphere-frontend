import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  return (
    <nav className=" bg-primaryColor md:max-w-44 h-[7vh]">
      <nav
        className="mx-auto flex md:flex-row items-center justify-evenly p-4"
        aria-label="Global"
      >
        <div className="text-sm font-semibold leading-6 ">Home</div>

        <div className="">
          <button className="btn">Feed</button>
        </div>
        <div className="text-sm font-semibold leading-6 ">Create</div>
        <div className="">
          <button className="btn">Chat</button>
        </div>
        <div className="">
          <button className="btn">Profile</button>
        </div>
      </nav>
    </nav>
  );
};

export default Footer;
