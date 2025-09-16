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
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col items-center text-center min-h-[100vh] px-6 
                 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-3xl mx-auto pt-20">
        <img
          src="/assets/profile.png"
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mb-6 mx-auto"
        />
        <h1 className="text-4xl font-bold mb-2">
          Hi, I'm <span className="text-yellow-300">Murungi Ezra</span>
        </h1>
        <p className="text-lg opacity-90 mb-12 animate-pulse">
          Software Engineer • Professional IT Technologist • AI/ML Enthusiast
        </p>
      </div>

      {/* Section Previews */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl text-left">
        {/* About Preview */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition">
          <User className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold text-lg">About Me</h3>
          <p className="text-sm text-gray-600">
            Passionate software engineer and ICT officer building impactful
            digital solutions in healthcare, agriculture, and governance.
          </p>
          <Link
            to="/About"
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
            to="/Skills"
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
            to="/Projects"
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
            to="/Experience"
            className="inline-block mt-3 text-sm text-pink-600 font-medium hover:underline"
          >
            My Journey →
          </Link>
        </div>

        {/* Blogs Preview */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow hover:shadow-xl transition md:col-span-2">
          <BookOpen className="w-8 h-8 text-yellow-600 mb-3" />
          <h3 className="font-semibold text-lg">Blogs</h3>
          <p className="text-sm text-gray-600">
            Sharing insights on technology, AI, software development, and
            cybersecurity for businesses and communities.
          </p>
          <Link
            to="/Blogs"
            className="inline-block mt-3 text-sm text-yellow-600 font-medium hover:underline"
          >
            Read Blogs →
          </Link>
        </div>
      </div>

      {/* Acknowledgements */}
      <section className="relative z-10 mt-20 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-yellow-300 mb-8">Acknowledgements</h3>

        <div className="flex flex-col items-center gap-6">
          {[
            {
              title: "Mentors",
              text: "Special thanks to my mentors who guided me through AI, cybersecurity, and professional growth.",
              color: "bg-blue-600",
            },
            {
              title: "Institutions",
              text: "Grateful to Murang’a County and universities for enabling impactful ICT projects.",
              color: "bg-purple-600",
            },
            {
              title: "Community",
              text: "Inspired by innovators and peers striving to use technology for social good.",
              color: "bg-pink-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${item.color} text-white px-6 py-4 rounded-full shadow-lg max-w-md`}
            >
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm opacity-90">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact + Social Links */}
      <div className="relative z-10 mt-16 border-t border-white/40 pt-6 text-center">
        <h3 className="text-lg font-semibold mb-3">Let's Connect</h3>
        <div className="flex justify-center gap-6 text-white text-xl">
          <a
            href="https://x.com/muchuiezramuru2"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/murungi-muchui-942850249"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.facebook.com/ezra.muchui.37/about"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <Facebook />
          </a>
          <a href="tel:+254712982405" className="hover:text-yellow-300 transition">
            <Phone />
          </a>
          <a
            href="https://wa.me/254712982405"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
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
