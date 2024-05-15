import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:flex absolute h-full flex-row ">
      <header>
        <Navbar />
      </header>
      {children}
      <footer className="sm:hidden">
        <Footer />
      </footer>
    </div>
  );
}
