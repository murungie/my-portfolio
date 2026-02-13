import React from "react";
import { Twitter, Linkedin, Facebook, Phone, Mail, Github } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Left: Contact info */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Phone */}
          <a
            href="tel:+254712982405"
            className="flex items-center gap-1 hover:text-yellow-300 transition"
          >
            <Phone size={14} />
            <span>+254 712 982 405</span>
          </a>

          {/* Email */}
          <a
            href="mailto:muchuiezramurungi@gmail.com"
            className="flex items-center gap-1 hover:text-yellow-300 transition"
          >
            <Mail size={14} />
            <span>muchuiezramurungi@gmail.com</span>
          </a>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/muchuiezramuru2"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <Twitter size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/murungi-muchui-942850249"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <Linkedin size={16} />
          </a>

          <a
            href="https://www.facebook.com/ezra.muchui.37/about"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <Facebook size={16} />
          </a>

          <a
            href="https://github.com/murungie"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}