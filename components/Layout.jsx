import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavLinks from "./NavLinks";

export default function Layout({ children }) {
  return (
    <>
      <NavLinks />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
