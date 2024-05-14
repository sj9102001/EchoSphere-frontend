import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex ">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
