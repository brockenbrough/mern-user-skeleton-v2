import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-teal-700/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-2xl mx-auto px-6 py-3 flex gap-6">
        <a href="/" className="text-white hover:text-teal-100 font-medium transition-colors">Start</a>
        <a href="/home" className="text-white hover:text-teal-100 font-medium transition-colors">Home</a>
        <a href="/privateUserProfile" className="text-white hover:text-teal-100 font-medium transition-colors">Profile</a>
      </div>
    </nav>
  );
}