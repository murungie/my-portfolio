import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Rocket, Briefcase, BookOpen, Heart } from "lucide-react";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50"
    >
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-2 text-lg opacity-90">
            Murungi Ezra Muchui • Software Engineer & Professional IT Technologist
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Who I Am</h3>
          <p className="text-gray-700 leading-relaxed">
            I am <span className="font-semibold">Murungi Ezra Muchui</span>, a versatile
            <span className="text-blue-600 font-semibold"> Software Engineer </span> and ICT Officer with
            proven experience in <span className="font-semibold">Web & Mobile Development, AI/ML, Cybersecurity, and IT Automation</span>.  
            My career journey spans across e-Government projects, healthcare innovations, agriculture automation, and
            digital community platforms.  
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg">
            <Award className="text-yellow-500 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg">Honors & Awards</h3>
            <p className="text-gray-600 text-sm">
              Recognized for Cybersecurity training & AI-driven healthcare solutions.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg">
            <Star className="text-purple-500 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg">Certifications</h3>
            <p className="text-gray-600 text-sm">Cybersecurity Fundamentals • Intro to Python</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg">
            <Rocket className="text-blue-500 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg">Core Focus</h3>
            <p className="text-gray-600 text-sm">AI/ML • Web Apps • ICT Systems • e-Government</p>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-purple-700 mb-8">Professional Highlights</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
            <Briefcase className="text-blue-600 w-8 h-8 mt-1" />
            <div>
              <h4 className="font-semibold">ICT Officer – Murang’a County</h4>
              <p className="text-gray-600 text-sm">
                Led digital transformation projects, conducted cybersecurity awareness, and supported ICT systems across government departments.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
            <BookOpen className="text-green-600 w-8 h-8 mt-1" />
            <div>
              <h4 className="font-semibold">Research & Projects</h4>
              <p className="text-gray-600 text-sm">
                Developed AI-based allergy detection tools, municipal dashboards, and e-commerce systems empowering local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Passion */}
      <section className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">My Passion & Values</h3>
          <p className="text-white/90 leading-relaxed">
            I believe technology is most impactful when it empowers people.  
            My mission is to build solutions that bridge gaps in healthcare, agriculture, and governance, 
            while mentoring young innovators and promoting ethical tech practices.  
          </p>
        </div>
      </section>

      {/* Certifications & Links */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold text-blue-600 mb-6">
          Certifications & Links
        </h3>
        <div className="flex flex-wrap gap-6 items-center">
          {/* GitHub Badge */}
          <a
            href="https://github.com/murungie"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="w-6 h-6"
            />
            <span className="text-sm">View My GitHub</span>
          </a>

          {/* DataCamp Certificate */}
          <a
            href="https://www.datacamp.com/completed/statement-of-accomplishment/course/6ce784a87f2cd8dd5914ff08cd2c4e02978b604e"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow hover:bg-green-200 transition"
          >
            <img
              src="https://assets.datacamp.com/main-app/assets/logo-square-192.png"
              alt="DataCamp"
              className="w-6 h-6"
            />
            <span className="text-sm">Intro to Python (DataCamp)</span>
          </a>

          {/* IBM Cybersecurity Badge */}
          <a
            href="https://www.credly.com/badges/01a08735-ea50-4e24-8dea-2627a95a2e98"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow hover:bg-blue-200 transition"
          >
            <img
              src="https://images.credly.com/size/110x110/images/0e6b4e90-89fb-4c46-aac6-2c66b97fc6bd/Cybersecurity-Fundamentals.png"
              alt="IBM Cybersecurity Badge"
              className="w-6 h-6"
            />
            <span className="text-sm">Cybersecurity Fundamentals (IBM)</span>
          </a>
        </div>
      </section>
    </motion.main>
  );
}
