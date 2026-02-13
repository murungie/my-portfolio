import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    {
      name: "About",
      dropdown: [
        { name: "About Me", path: "/about" },
        { name: "Resume", path: "/cv" },
      ],
    },
    { name: "Contact", path: "/contact", cta: true },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">
      
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/image.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-indigo-500"
          />
          <div>
            <h1 className="font-semibold leading-tight text-blue-900">
              Murungi Ezra
            </h1>
            <p className="text-xs text-gray-500">Software Engineer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 text-sm font-bold text-green-900">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
  <button className="flex items-center gap-1 hover:text-indigo-600 transition">
    {item.name}
    <ChevronDown size={14} />
  </button>

  {/* Dropdown */}
  <div className="absolute left-0 top-full mt-2 w-44 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 
                  bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
    {item.dropdown.map((sub) => (
      <NavLink
        key={sub.name}
        to={sub.path}
        className="block px-4 py-3 text-sm hover:bg-gray-50"
      >
        {sub.name}
      </NavLink>
    ))}
  </div>
</div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  item.cta
                    ? "bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-500 transition"
                    : `transition hover:text-indigo-600 ${
                        isActive ? "text-indigo-600 font-semibold" : ""
                      }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-blue-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-green-200 px-6 py-5 space-y-4">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() =>
                    setMobileDropdownOpen(!mobileDropdownOpen)
                  }
                  className="flex items-center justify-between w-full font-semibold"
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>

                {mobileDropdownOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    {item.dropdown.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-gray-600 hover:text-indigo-600"
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block py-1 text-gray-700 hover:text-indigo-600"
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
      )}
    </header>
  );
}