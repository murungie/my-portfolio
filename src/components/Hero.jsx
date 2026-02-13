import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f4f7fb] via-[#eef2f8] to-[#ffffff] py-28 px-6">

      {/* Floating Soft Lights */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-indigo-300 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 70, -70, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 28, repeat: Infinity }}
        style={{ top: "-150px", left: "-150px" }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] bg-purple-300 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 32, repeat: Infinity }}
        style={{ bottom: "-150px", right: "-150px" }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight"
        >
          I Build & Scale
          <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Digital Products
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          From AI-powered infrastructure and distributed systems to brand identity
          and digital growth — I design, engineer, and position products for
          long-term scalability and market impact.
        </motion.p>

        {/* Value Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center flex-wrap gap-3 text-sm text-gray-600"
        >
          <span className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
            AI Systems
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
            Cloud Architecture
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
            SaaS Engineering
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
            SEO & Growth
          </span>
          <span className="px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-gray-200 shadow-sm">
            Branding
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/projects"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition"
            >
              View Work →
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="px-10 py-4 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm hover:bg-gray-50 transition"
            >
              Let’s Talk
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}