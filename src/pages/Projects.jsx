import React from "react";
import { motion } from "framer-motion";
import GitHubProjects from "../components/GitHubProjects"; // ✅ Add this line
const projects = [
  { title: "Skin Allergy Detection System", desc: "Flask + AI for image recognition in healthcare." },
  { title: "Poultry Management System", desc: "Inventory & production tracking with PHP/MySQL." },
  { title: "Municipal ICT Dashboard", desc: "Analytics for e-Government services." },
];

export default function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh]"
    >
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-blue-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30"></div>
        <h2 className="relative z-10 text-4xl font-bold">Projects</h2>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
          >
            <h3 className="font-semibold text-lg text-green-600">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      {/* GitHub Latest Projects Section */}
    <GitHubProjects username="murungie" />

    </motion.main>

  );
}
