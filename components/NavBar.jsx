'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { UserContext } from "@provider/UserProvider";

const NavBar = () => {
  const router = useRouter()
  const { user, setUser } = useContext(UserContext)
  return (
    <header className="p-4 bg-black">
      <nav className="flex justify-between items-center w-[92%] mx-auto ">
        <div>
          <Link href="/">
            <h2 className="text-yellow-600 font-bold cursor-pointer">OnlineBooking</h2>
          </Link>
        </div>
        <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <Link href="/" className="hover:text-gray-500 text-white">Dashboard
            </Link>
            <Link href="/" className="hover:text-gray-500 text-white">Docs
            </Link>
            <Link href="/movie" className="hover:text-gray-500 text-white">Movies
            </Link>
            <Link href="/" className="hover:text-gray-500 text-white">Pubs
            </Link>
            <Link href="/contactus" className="hover:text-gray-500 text-white">Contact us
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
          {
            user.email ?
              <div className='flex gap-4'>
                <Link href="/profile" ><img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                  class="w-8 rounded-full"
                  alt="Avatar" /></Link>
                <button onClick={
                  () => {
                    const conf = confirm('Are you sure you want to logout?')
                    if (!conf) return
                    setUser({ username: '', email: '' })
                    router.push('/login')
                  }

                } className="hover:text-gray-500 text-white">Logout</button>


              </div> :
              <div className='flex gap-4'>
                <Link href="/login" className="hover:text-gray-500 text-white">Login</Link>
                <Link href="/signup" className="hover:text-gray-500 text-white">Register</Link>
              </div>
          }
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
