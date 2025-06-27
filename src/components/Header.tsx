"use client"
import Link from "next/link";

import { useState } from "react";

export default function Header() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const navLinks = [
    { href: "/map", label: "Map" },
    { href: "/squad", label: "Squad" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/tournaments", label: "Tournaments" },
    { href: "/profile", label: "Profile" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-black flex flex-col">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2 border-b border-[#232a36] gap-2 sm:gap-0">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl sm:text-2xl font-bold text-[#9F9F9F]">
              Esports<span className="text-[#ed7612]">Neo</span>
            </span>
          </div>
          <button
            className="sm:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-[#9F9F9F]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span className="flex items-center text-yellow-300 font-semibold">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 4c-4.418 0-8 1.79-8 4v4a8 8 0 0016 0v-4c0-2.21-3.582-4-8-4z"
              />
            </svg>
            5,280 NeoCoins
          </span>
          <div className="relative">
            <svg
              className="w-6 h-6 text-[#9F9F9F]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </div>
          <Link href="/profile">
            <img
              src="/window.svg"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-[#9F9F9F]"
            />
          </Link>
        </div>
      </div>
      <nav
        className={`flex-col sm:flex-row flex gap-2 px-4 sm:px-6 py-2 bg-black ${
          menuOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-1 px-4 py-1 rounded font-medium focus:bg-[#31394a] ${
              pathname === link.href
                ? "bg-[#232a36] text-[#ed7612]"
                : "text-[#9F9F9F] hover:bg-[#232a36]"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/* Mobile user info */}
      <div className="flex sm:hidden items-center gap-4 px-4 pb-2">
        <span className="flex items-center text-yellow-300 font-semibold">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 4c-4.418 0-8 1.79-8 4v4a8 8 0 0016 0v-4c0-2.21-3.582-4-8-4z"
            />
          </svg>
          5,280 NeoCoins
        </span>
        <div className="relative">
          <svg
            className="w-6 h-6 text-[#9F9F9F]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
        <Link href="/profile">
          <img
            src="/window.svg"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-[#9F9F9F]"
          />
        </Link>
      </div>
    </header>
  );
}
