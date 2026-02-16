import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/assets/image.png"
            alt="Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-indigo-500 shrink-0"
          />
          <div className="truncate">
            <h1 className="font-semibold text-blue-900 text-sm sm:text-base truncate">
              Murungi Ezra
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-500">
              Software Engineer
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-semibold text-gray-700">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button className="flex items-center gap-1 hover:text-indigo-600 transition">
                  {item.name}
                  <ChevronDown size={14} />
                </button>

                {/* Desktop Dropdown */}
                <div className="absolute left-0 top-full mt-3 w-44 
                                opacity-0 invisible 
                                group-hover:opacity-100 group-hover:visible
                                transition-all duration-200
                                bg-white rounded-xl shadow-xl 
                                border border-gray-100 overflow-hidden">
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-indigo-600 transition"
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

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-6 py-5 space-y-4 shadow-md">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === item.name ? null : item.name
                    )
                  }
                  className="flex items-center justify-between w-full font-semibold text-gray-700"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileDropdownOpen === item.name
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {mobileDropdownOpen === item.name && (
                  <div className="mt-2 space-y-2 pl-4">
                    {item.dropdown.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-gray-600 hover:text-indigo-600 transition"
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
                className={({ isActive }) =>
                  item.cta
                    ? "block bg-indigo-600 text-white text-center px-4 py-2 rounded-full hover:bg-indigo-500 transition"
                    : `block py-1 text-gray-700 hover:text-indigo-600 transition ${
                        isActive ? "text-indigo-600 font-semibold" : ""
                      }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </div>
      </div>
    </header>
  );
}
