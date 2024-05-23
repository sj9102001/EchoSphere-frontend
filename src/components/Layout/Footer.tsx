import React, { useState } from "react";
import Link from "next/link";
import ModalButton from "./ModalButton";

const Footer = () => {
  return (
    <nav className=" bg-bgColor border-t-2 sm:h-screen border-solid border-primaryColor">
      <nav
        className="mx-auto flex md:flex-row items-center justify-evenly p-4"
        aria-label="Global"
      >
        <Link href="/" className="block">
          Home
        </Link>
        <Link href="/feed" className="block">
          Feed
        </Link>
        <div className="">Create</div>
        <Link href="/chat" className="block">
          Chat
        </Link>
        <Link href="/profile" className="block">
          Profile
        </Link>
        <ModalButton />
      </nav>
    </nav>
  );
};

export default Footer;
