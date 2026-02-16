import React from "react";
import {
  Twitter,
  Linkedin,
  Facebook,
  Phone,
  Mail,
  Github,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-3">

          {/* Contact Section */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">

            {/* Phone */}
            <a
              href="tel:+254712982405"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <Phone size={15} />
              <span className="break-all">+254 712 982 405</span>
            </a>

            {/* Email */}
            <a
              href="mailto:muchuiezramurungi@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              <Mail size={15} />
              <span className="break-all">
                muchuiezramurungi@gmail.com
              </span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-lg">
            <a
              href="https://x.com/muchuiezramuru2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/murungi-muchui-942850249"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.facebook.com/ezra.muchui.37/about"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://github.com/murungie"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Github size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
