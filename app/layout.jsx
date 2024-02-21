import React from "react";
import "@styles/global.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const RootLayout = ({ children }) => {
  return (
    <html>
      <head></head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
