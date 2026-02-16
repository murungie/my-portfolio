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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-400 rounded-full blur-3xl opacity-20 top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-400 rounded-full blur-3xl opacity-20 bottom-[-120px] right-[-120px] animate-pulse"></div>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.img
          src="/assets/prof.png"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-xl mx-auto mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Building Intelligent
          <span className="block text-yellow-300">
            Digital Systems & Brands
          </span>
        </h1>

        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
          Software Engineer specializing in scalable backend systems,
          AI-driven platforms, cloud infrastructure, SEO strategy,
          and digital brand growth.
        </p>

        {/* CTA */}
        <div className="flex justify-center items-center gap-8 flex-wrap mt-6">
          {/* View Projects */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/projects"
              className="px-8 py-3 rounded-full bg-white text-purple-700 font-semibold shadow-md hover:shadow-xl transition duration-300"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Work With Me */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Link
              to="/contact"
              className="group px-10 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-semibold shadow-lg hover:shadow-2xl transition duration-300 flex items-center gap-3"
            >
              Work With Me

              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block font-bold"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center pb-20 px-6">
        {[
          { value: "20+", label: "Projects Delivered" },
          { value: "10+", label: "Technologies" },
          { value: "5+", label: "Industries Served" },
          { value: "100%", label: "Client Focused" },
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-yellow-300">
              {stat.value}
            </h3>
            <p className="text-sm opacity-80">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative z-10 bg-white text-gray-900 py-24 rounded-t-[50px]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What I Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <Code className="w-10 h-10 text-indigo-600 mb-4 mx-auto" />
              <h3 className="font-semibold mb-3">
                Scalable Software Engineering
              </h3>
              <p className="text-sm text-gray-600">
                Backend systems, APIs, microservices, and cloud-native applications.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <BrainCircuit className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
              <h3 className="font-semibold mb-3">
                AI & Automation Solutions
              </h3>
              <p className="text-sm text-gray-600">
                AI integrations, ML models, workflow automation and intelligent dashboards.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <Briefcase className="w-10 h-10 text-pink-600 mb-4 mx-auto" />
              <h3 className="font-semibold mb-3">
                Digital Growth & Branding
              </h3>
              <p className="text-sm text-gray-600">
                SEO optimization, marketing strategy, brand identity, and performance analytics.
              </p>
            </div>
          </div>

          <Link
            to="/services"
            className="inline-block mt-12 text-indigo-600 font-semibold hover:underline"
          >
            Explore All Services →
          </Link>
        </div>
      </section>

      {/* Contact + Social Links */}
      <div className="relative z-10 mt-16 border-t border-white/30 pt-6 text-center w-full">
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Let's Connect
        </h3>

        <div className="flex justify-center gap-5 text-white text-xl">
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

          <a
            href="tel:+254712982405"
            className="hover:text-yellow-300 transition"
          >
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
