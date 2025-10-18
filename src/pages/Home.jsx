import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  ShieldCheck,
  BrainCircuit,
  Twitter,
  Linkedin,
  Facebook,
  Phone,
  BookOpen,
  Briefcase,
  PenTool,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col items-center text-center min-h-screen px-4 md:px-8 
                 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-x-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-3xl mx-auto pt-20 px-2">
        <img
          src="/assets/profile.png"
          alt="Profile"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg mb-6 mx-auto"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-snug">
          Hi, I'm <span className="text-yellow-300">Murungi Ezra</span>
        </h1>
        <p className="text-base md:text-lg opacity-90 mb-12 animate-pulse">
          Software Engineer • Professional IT Technologist • AI/ML Enthusiast
        </p>
      </div>

      {/* Section Previews */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl text-left w-full px-2 md:px-4">
        
        {/* About Preview */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition">
          <User className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold text-lg">About Me</h3>
          <p className="text-sm text-gray-600">
            Passionate software engineer and ICT officer building impactful
            digital solutions in healthcare, agriculture, and governance.
          </p>
          <Link
            to="/about"
            className="inline-block mt-3 text-sm text-blue-600 font-medium hover:underline"
          >
            Learn More →
          </Link>
        </div>

        {/* Skills Preview */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition">
          <Code className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="font-semibold text-lg">Skills</h3>
          <p className="text-sm text-gray-600">
            Skilled in fullstack development, AI/ML, data analysis,
            cybersecurity, and system integration.
          </p>
          <Link
            to="/skills"
            className="inline-block mt-3 text-sm text-purple-600 font-medium hover:underline"
          >
            Explore Skills →
          </Link>
        </div>

        {/* Projects Preview */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition">
          <PenTool className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="font-semibold text-lg">Projects</h3>
          <p className="text-sm text-gray-600">
            From AI-powered healthcare apps to municipal ICT dashboards, I
            design practical tech solutions.
          </p>
          <Link
            to="/projects"
            className="inline-block mt-3 text-sm text-green-600 font-medium hover:underline"
          >
            View Projects →
          </Link>
        </div>

        {/* Experience Preview */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition">
          <Briefcase className="w-8 h-8 text-pink-600 mb-3" />
          <h3 className="font-semibold text-lg">Experience</h3>
          <p className="text-sm text-gray-600">
            ICT Officer at Murang’a County, freelance developer, and intern
            experience in software solutions.
          </p>
          <Link
            to="/experience"
            className="inline-block mt-3 text-sm text-pink-600 font-medium hover:underline"
          >
            My Journey →
          </Link>
        </div>

        {/* Blogs Preview */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition sm:col-span-2">
          <BookOpen className="w-8 h-8 text-yellow-600 mb-3" />
          <h3 className="font-semibold text-lg">Blogs</h3>
          <p className="text-sm text-gray-600">
            Sharing insights on technology, AI, software development, and
            cybersecurity for businesses and communities.
          </p>
          <Link
            to="/blogs"
            className="inline-block mt-3 text-sm text-yellow-600 font-medium hover:underline"
          >
            Read Blogs →
          </Link>
        </div>
      </div>

      {/* Contact + Social Links */}
      <div className="relative z-10 mt-16 border-t border-white/30 pt-6 text-center w-full">
        <h3 className="text-lg md:text-xl font-semibold mb-3">Let's Connect</h3>
        <div className="flex justify-center gap-5 text-white text-xl">
          <a href="https://x.com/muchuiezramuru2" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/in/murungi-muchui-942850249" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition">
            <Linkedin />
          </a>
          <a href="https://www.facebook.com/ezra.muchui.37/about" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition">
            <Facebook />
          </a>
          <a href="tel:+254712982405" className="hover:text-yellow-300 transition">
            <Phone />
          </a>
          <a
            href="https://wa.me/254712982405"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-6 h-6 inline-block"
            />
          </a>
        </div>
        <p className="mt-3 text-sm text-white/80">
          Phone / WhatsApp: +254 712 982405
        </p>
      </div>
    </motion.main>
  );
}
