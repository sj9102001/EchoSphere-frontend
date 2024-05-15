import React, { useState } from "react";

const Footer = () => {
  return (
    <nav className=" bg-bgColor border-t-2 sm:h-screen border-solid border-primaryColor">
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
