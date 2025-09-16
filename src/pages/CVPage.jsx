import React from "react";
import { motion } from "framer-motion";
import { FileText, Award, GraduationCap, Briefcase } from "lucide-react";

export default function CVPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh]"
    >
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-gray-800 to-blue-800 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30"></div>
        <h2 className="relative z-10 text-4xl font-bold flex items-center gap-2">
          <FileText size={36} /> My CV
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Education */}
        <section>
          <h3 className="text-2xl font-semibold text-blue-600 flex items-center gap-2">
            <GraduationCap /> Education
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-semibold">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-gray-600">Murang’a University of Technology | 2019 – 2023</p>
            </div>
            <div>
              <p className="font-semibold">Relevant Certifications</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Cybersecurity Awareness – Kenya School of Government</li>
                <li>Machine Learning Basics – Coursera</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-2xl font-semibold text-green-600 flex items-center gap-2">
            <Briefcase /> Experience
          </h3>
          <div className="mt-4 space-y-6">
            <div>
              <p className="font-semibold">Software Engineer / ICT Officer</p>
              <p className="text-sm text-gray-600">Murang’a County Government | 2023 – Present</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Developed e-Government systems (Health & Agriculture).</li>
                <li>Supported Afyake health platform.</li>
                <li>Maintained ICT infrastructure and municipal websites.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Freelance Software Engineer</p>
              <p className="text-sm text-gray-600">2020 – Present</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Built applications in Flask, PHP, React, MySQL.</li>
                <li>Delivered IT consultancy for SMEs & startups.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-semibold text-purple-600 flex items-center gap-2">
            <Award /> Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <span className="px-4 py-2 bg-purple-100 rounded-lg">Python</span>
            <span className="px-4 py-2 bg-blue-100 rounded-lg">Java</span>
            <span className="px-4 py-2 bg-green-100 rounded-lg">JavaScript</span>
            <span className="px-4 py-2 bg-yellow-100 rounded-lg">PHP</span>
            <span className="px-4 py-2 bg-pink-100 rounded-lg">React</span>
            <span className="px-4 py-2 bg-indigo-100 rounded-lg">MySQL</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">Flask</span>
            <span className="px-4 py-2 bg-red-100 rounded-lg">Cybersecurity Basics</span>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-2xl font-semibold text-yellow-600 flex items-center gap-2">
            <Award /> Achievements
          </h3>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Developed a skin allergy detection system using Flask and AI.</li>
            <li>Created a poultry farm management system for local farmers.</li>
            <li>Conducted cybersecurity awareness sessions for staff.</li>
            <li>Recognized for academic excellence in ICT coursework.</li>
          </ul>
        </section>
        <section>
          <h3 className="text-2xl font-semibold text-yellow-600 flex items-center gap-2">
            <FileText /> Full CV (Preview)
          </h3>
          <div className="mt-4 h-[700px] border rounded-lg shadow overflow-hidden">
            <iframe
              src="/documents/cv.pdf#toolbar=0"
              title="CV Preview"
              width="100%"
              height="100%"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>


        {/* Download Button */}
        <div className="text-center">
          <a
            href="/documents/cv.pdf"
            download
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Full CV
          </a>
        </div>
      </div>
    </motion.main>
  );
}
