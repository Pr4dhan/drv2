"use client";
// import Image from "next/image";
import Link from "next/link";
// import LogoLight from "@/assets/logo.png";
// import LogoDark from "@/assets/logo-dark.png";

export default function Footer() {
  return (
    <footer className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ul className="text-base flex items-center justify-center flex-row gap-6 md:gap-10 py-6 mb-4 border-b border-gray-200">
            <li>
              <Link
                href="./"
                className="text-gray-500 hover:text-gray-900 font-bold dark:hover:text-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-500 hover:text-gray-900 font-bold dark:hover:text-gray-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/expert"
                className="text-gray-500 hover:text-gray-900 font-bold dark:hover:text-gray-100"
              >
                Expertise
              </Link>
            </li>
          </ul>
          <span className="text-sm text-gray-500 text-center block">
            © {new Date().getFullYear()}
            <a href="https://www.anuradhapradhan.com/">
              {" "}
              Dr Anuradha Pradhan.
            </a>{" "}
            All rights reserved.
          </span>
        </div>
      </div>
      <h1
        className="
          max-w-7xl mx-auto text-center font-black leading-none
          text-stone-100
          dark:text-transparent dark:bg-clip-text
          bg-gradient-to-t
          dark:bg-gradient-to-b
          dark:from-[#8c8c8c] dark:via-[#2b2b2b] dark:to-[#010101]
          opacity-90
          text-4xl md:text-[6rem]
          -z-[1]"
      >
        DrAnuradhaPradhan
      </h1>
    </footer>
  );
}
