import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:flex absolute h-full  flex-row ">
      <header className="grow-0">
        <Navbar />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="sm:hidden grow-0 ">
        <Footer />
      </footer>
    </div>
  );
}
