"use client";

import Link from "next/link";
import Image from "next/image";

const sections = ["Beranda", "Armada", "Tentang", "Kontak"];

const NavBar = () => (
  <header className="w-full fixed top-0 z-50">
    <nav
      className="
        max-w-[1440px] mx-auto flex justify-between items-center
        sm:px-16 px-6 py-3
        bg-white/80 backdrop-blur-md shadow-sm
        transition-all duration-300
      "
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={180}
          height={40}
          priority
          className="object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 font-medium text-gray-800">
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault(); // 🔥 stop instant jump
              const section = document.getElementById(item.toLowerCase());
              section?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="hover:text-primary-blue transition-colors cursor-pointer"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  </header>
);

export default NavBar;
