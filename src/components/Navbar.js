"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Schedule", href: "/schedule" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="IT Fest Logo"
              className="h-10 w-auto"
            />
            <span className="hidden sm:block text-lg font-semibold tracking-wide text-white"></span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-base font-medium tracking-wide"
                >
                  <span
                    className={`transition ${
                      active ? "text-white" : "group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Register Button */}
            <Link
              href="/register"
              className="ml-4 px-6 py-2 rounded-xl text-sm font-semibold
                bg-gradient-to-r from-blue-500 to-purple-600
                hover:scale-105 transition-all duration-300
                shadow-lg shadow-purple-500/30"
            >
              Register
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-300 hover:text-white transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 flex flex-col items-center py-6 space-y-6">

          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-medium transition ${
                  active ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/register"
            onClick={() => setMenuOpen(false)}
            className="px-8 py-3 rounded-xl font-semibold
              bg-gradient-to-r from-blue-500 to-purple-600
              hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
          >
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}