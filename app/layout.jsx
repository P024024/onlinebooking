"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import { UserContext } from "@provider/UserProvider";
import "@styles/global.css";

const RootLayout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({ username: "", email: "" });


  return (
    <html>
      <body>
        <UserContext.Provider value={{ user, setUser }}>
            <NavBar />
          <div>
            {children}
          </div>
            <Footer />
        </UserContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
