import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg">
    <div className="flex items-center gap-2 text-white text-2xl font-bold">
      <span>🌦️</span>
      <span>Weatherly</span>
    </div>
    <div className="flex gap-4">
      <Link href="/" className="text-white hover:text-yellow-200 transition">Home</Link>
      <Link href="/about" className="text-white hover:text-yellow-200 transition">About</Link>
      <Link href="/contact" className="text-white hover:text-yellow-200 transition">Contact</Link>
    </div>
  </nav>
);

export default Navbar;