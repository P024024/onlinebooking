import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    
      <nav className="bg-black text-white flex justify-between p-3 items-center">
        
            <div>
              <Link href='/'>
                <p 
                  className="text-2xl font-bold cursor-pointer"
                >Online Ticketing Services</p>
              </Link>
            </div>

            <div className="gap-4 flex">
            <Link href="/">
                Home
              </Link>
        
              <Link href="/login">
                Sign In
              </Link>
            
              <Link href="/signup">
                Signup
              </Link>
            </div>

      </nav>
  );
};

export default NavBar;
