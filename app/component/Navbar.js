"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import Swal from 'sweetalert2'



const Navbar = () => {

  const [dropdown, setdropdown] = useState(false)

  const { data: session } = useSession()

  const handle = () => {
    setdropdown(!dropdown)
  }

  const handleLogout = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out!",
    icon: "warning",
    width: "min(85vw, 320px)",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout"
  }).then(async (result) => {
    if (result.isConfirmed) {
      await signOut({ callbackUrl: "/" });
    }
  });
};
 



  const pathname = usePathname();
  return (
    <nav className="bg-black text-white flex flex-wrap sm:flex-nowrap justify-between items-center px-3 sm:px-6 py-2 sm:py-3 w-full gap-2 border-b border-gray-800">

      {/* Logo */}
      <Link href={"/"} className='flex gap-2 items-center shrink-0'>
        <span className='text-base sm:text-lg md:text-xl font-bold font-mono tracking-tight'>Get Me A Coffee!</span>
        <img className='w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover origin-center' src="https://media1.tenor.com/m/_F-yPXWere8AAAAd/coffee-coffee-time.gif" alt="Coffee gif" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-2 sm:gap-3 items-center">
        <li className="flex gap-2 sm:gap-3 justify-center items-center">
          {!session && <Link href={"/"} className={`text-xs sm:text-sm md:text-base font-medium text-white px-2.5 sm:px-3 py-1 rounded-md border border-gray-400 hover:border-gray-400 hover:bg-white/10 transition-all duration-200 cursor-pointer ${pathname === "/" ? "bg-gray-600" : ""}`}>Home</Link>}
          {!session && <Link href={"/login"} className={`flex items-center justify-center text-xs sm:text-sm md:text-base font-medium leading-5 text-white px-2.5 sm:px-3 py-1 rounded-xl bg-green-600 border border-green-500 shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg active:scale-95 cursor-pointer ${pathname === "/login" ? "underline" : ""}`}>Login</Link>}
        </li>

        {/* Dropdown Button */}
        {session && <li className="flex flex-col relative">
          <button
            onBlur={() => {
              setTimeout(() => {
                setdropdown(false)
              }, 200)
            }}
            onClick={handle}
            id="dropdownHoverButton"
            className="flex items-center justify-center gap-1 sm:gap-2
              text-xs sm:text-sm md:text-base font-medium leading-5 text-white
              px-2 sm:px-3 py-1
              rounded-xl
              bg-linear-to-r from-purple-600 to-indigo-600
              shadow-lg shadow-purple-900/30
              border border-white/10
              transition-all duration-200
              hover:from-purple-500 hover:to-indigo-500
              hover:shadow-xl hover:shadow-purple-700/40
              hover:scale-[1.01]
              active:scale-95"
            type="button"
          >
            <span className="max-w-21.25 sm:max-w-35 md:max-w-50 truncate">
              Welcome {session.user.name || session.user.email}
            </span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 ms-1 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 9-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          <div
            id="dropdownHover"
            className={`z-50 ${dropdown ? "" : "hidden"} absolute right-0 min-w-40 top-full mt-2 justify-center bg-gray-800 border border-gray-700 rounded-lg shadow-xl`}
          >
            <ul
              className="p-1.5 text-xs sm:text-sm text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <Link href={"/"} className={`inline-flex items-center w-full p-2 hover:bg-white/10 rounded cursor-pointer ${pathname === "/" ? "underline font-semibold" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/Dashboard"} className={`inline-flex items-center w-full p-2 hover:bg-white/10 rounded cursor-pointer ${pathname === "/Dashboard" ? "underline font-semibold" : ""}`}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href={"/about"} className={`inline-flex items-center w-full p-2 hover:bg-white/10 rounded cursor-pointer ${pathname === "/about" ? "underline font-semibold" : ""}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className={`inline-flex items-center w-full p-2 hover:bg-white/10 rounded cursor-pointer ${pathname === `/${session.user.name}` ? "underline font-semibold" : ""}`}>
                  Your page
                </Link>
              </li>
              {/* Logout in dropdown ONLY on small screens (< md) */}
              <li className="pt-1 mt-1 border-t border-gray-700 md:hidden">
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center w-full p-2 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded cursor-pointer transition-colors font-medium"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </li>}

        {/* Standalone Logout button ONLY on desktop/larger screens (md and above) */}
        {session && <li className="hidden md:block">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center text-xs sm:text-sm md:text-base font-medium leading-5 text-white px-2.5 sm:px-3 py-1 rounded-xl bg-red-600 border border-red-500 shadow-md transition-all duration-200 hover:bg-red-700 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            Logout
          </button>
        </li>}

      </ul>

    </nav>


  )
}

export default Navbar