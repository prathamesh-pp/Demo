// components/navbar.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="container flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-700">
      <Link href="/" className="text-xl font-semibold text-[var(--color-brand-500)]">
        SocialConnect
      </Link>
      <div className="flex gap-4 text-sm">
        <Link href="/friends">Friends</Link>
        <Link href="/messages">Messages</Link>
        <Link href="/notifications">Notifications</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <button onClick={toggleTheme} className="btn btn-primary text-xs">
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
}
