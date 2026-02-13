import React from "react";
import { Twitter, Linkedin, Facebook, Phone, Github } from "lucide-react"; // ✅ added Github icon

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Me</h3>
          <p className="text-gray-300">
            Passionate Software Engineer & ICT Officer specializing in
            fullstack development, AI/ML, and e-Government solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-yellow-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="/skills" className="hover:text-yellow-300 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-yellow-300 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-300 transition">
                Feedback and rating
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 mb-3">
            {/* Twitter */}
            <a
              href="https://x.com/muchuiezramuru2"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <Twitter />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/murungi-muchui-942850249"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <Linkedin />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/ezra.muchui.37/about"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <Facebook />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/murungie"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <Github />
            </a>
            {/* Phone */}
            <a href="tel:+254712982405" className="hover:text-yellow-300">
              <Phone />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/254712982405"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
            </a>
          </div>
          <p className="text-gray-300">Phone / WhatsApp: +254 712 982405</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bg-black/40 text-center py-3 text-gray-400 text-xs">
        © {new Date().getFullYear()} Murungi Ezra. All Rights Reserved.
      </div>
    </footer>
  );
}
