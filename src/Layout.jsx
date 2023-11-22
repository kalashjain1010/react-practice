import React from "react";
import Header from "./compoenet/header/page";
import Footer from "./compoenet/header/Footer";

function Layout({ children }) {
  return (
    <div className="bg-[#222425] h-screen text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
