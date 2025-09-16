import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
    <header className="relative shadow top-0 z-30">
      {/* Background gradient + image overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Profile + Title */}
        <div className="flex items-center gap-4">
          <img
            src="/assets/profile.png"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h1 className="text-xl font-semibold">Murungi Ezra</h1>
            <p className="text-sm opacity-80">Software Engineer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition ${
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <nav className="md:hidden bg-green-700/90 backdrop-blur px-6 py-4 space-y-3">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium transition ${
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
      )}
    </header>
  );
}