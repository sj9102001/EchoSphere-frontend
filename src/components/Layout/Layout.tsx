import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:flex h-screen  flex-row smo ">
      <header>
        <Navbar />
      </header>
      <div className="h-[calc(100vh-9rem)] w-full sm:h-full overflow-auto scroll-smooth">
        {children}
      </div>
      <footer className="sm:hidden">
        <Footer />
      </footer>
    </div>
  );
}
