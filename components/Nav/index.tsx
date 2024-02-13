"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="p-4 bg-sky-300">
      <ul className="flex justify-center items-center gap-12 m-auto">
        <li>
          <Link
            className={pathname === "/" ? "font-extrabold" : "font-extralight"}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/about" ? "font-extrabold" : "font-extralight"
            }
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/contact" ? "font-extrabold" : "font-extralight"
            }
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
