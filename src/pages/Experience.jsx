import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Software Engineer / ICT Officer",
    company: "Murang'a County Government",
    period: "2023 – Present",
    tasks: [
      "Developed e-Government automation for Health and Agriculture sectors.",
      "Supported Afyake Health System for patient data management.",
      "Maintained municipal websites and internal ICT infrastructure.",
    ],
  },
  {
    role: "Associate Software Engineer (Freelancer)",
    company: "Self-Employed",
    period: "2020 – Present",
    tasks: [
      "Freelance fullstack development for SMEs and startups.",
      "Built web applications with Flask, PHP, MySQL, and React.",
      "Delivered academic writing and ICT consultancy services.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Tirotech Solutions",
    period: "2021",
    tasks: [
      "Assisted in developing client websites with PHP and WordPress.",
      "Implemented responsive UI/UX improvements for clients.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh]"
    >
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-indigo-700 to-blue-700 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30"></div>
        <h2 className="relative z-10 text-4xl font-bold">Experience</h2>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 py-12 relative border-l-4 border-blue-600 pl-6 space-y-10">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <Briefcase className="text-white w-3 h-3" />
            </div>

            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-sm text-gray-600">
              {job.company} | {job.period}
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
              {job.tasks.map((task, j) => (
                <li key={j}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
