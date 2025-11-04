import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/cv" },
  ];

  return (
    <header className="relative shadow-md top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      {/* Header Container */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* Profile Section */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setShowImage(true)}
        >
          <img
            src="/assets/image.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:scale-110 transition-transform duration-300"
          />
          <div>
            <h1 className="text-base sm:text-lg font-semibold leading-tight">
              Murungi Ezra
            </h1>
            <p className="text-xs sm:text-sm opacity-80">Software Engineer</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition ${
                      isActive ? "text-yellow-300" : "hover:text-yellow-200"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <nav className="md:hidden bg-purple-700/95 backdrop-blur-lg w-full px-4 py-4 space-y-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-medium ${
                      isActive ? "text-yellow-300" : "text-white hover:text-yellow-200"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Profile Image Modal */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
          onClick={() => setShowImage(false)}
        >
          <div className="relative">
            <img
              src="/assets/image.png"
              alt="Profile Large"
              className="max-w-[90vw] max-h-[90vh] rounded-full border-4 border-cyan-300 animate-[pulse-glow_3s_infinite]"
            />
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-3 right-3 bg-white text-black font-bold rounded-full px-3 py-1 shadow hover:bg-gray-200 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
