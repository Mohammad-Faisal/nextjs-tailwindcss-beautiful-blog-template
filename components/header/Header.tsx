import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";
import { useTheme } from "next-themes";
import { FaRegMoon, FaSun } from "react-icons/fa";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="absolute w-screen dark:bg-slate-800 bg-gray-100">
      <div className="no-prose text-center flex justify-between p-5 lg:p-8 ">
        <Link href="/" passHref>
          <div className="flex gap-2 align-center text-center">
            <Image
              src="/static/logo.png"
              alt="Profile Image"
              height="30"
              width="30"
              className="cursor-pointer"
            />
            <span className="ml-3 text-lg xl:text-2xl md:text-xxl hidden md:block cursor-pointer dark:text-white">
              {process.env.NEXT_PUBLIC_OWNER_NAME}
            </span>
          </div>
        </Link>
        <nav className="flex gap-4 items-center">
          <button
            className="text-gray-900 dark:text-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <FaSun /> : <FaRegMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
