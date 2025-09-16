import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cpu,
  MonitorCheck,
  Wrench,
  Headphones,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";

// Skills bars
const bars = [
  { name: "Java", level: 85, color: "bg-blue-500" },
  { name: "Python", level: 80, color: "bg-yellow-500" },
  { name: "JavaScript", level: 75, color: "bg-green-500" },
  { name: "PHP", level: 70, color: "bg-purple-500" },
  { name: "React.js", level: 80, color: "bg-pink-500" },
  { name: "Laravel", level: 70, color: "bg-indigo-500" },
];

// Circular domains
const circles = [
  { name: "AI / ML", level: 70, color: "text-purple-600" },
  { name: "Data Analysis", level: 75, color: "text-blue-600" },
  { name: "Cybersecurity", level: 65, color: "text-red-600" },
  { name: "e-Government", level: 80, color: "text-green-600" },
];

// Tools
const tools = [
  { icon: <Database size={28} />, name: "MySQL", desc: "Relational DBMS" },
  { icon: <Code size={28} />, name: "Flask", desc: "Python microframework" },
  { icon: <Cpu size={28} />, name: "Docker", desc: "Containerization basics" },
  { icon: <Code size={28} />, name: "Git", desc: "Version control" },
  { icon: <Cpu size={28} />, name: "Linux", desc: "Server management" },
];

// ICT Competencies
const ictSkills = [
  {
    icon: <ClipboardList size={28} />,
    title: "Testing Programs",
    desc: "Testing simple computer programs according to instructions and specifications.",
  },
  {
    icon: <Cpu size={28} />,
    title: "System Installation",
    desc: "Installing and configuring computer systems.",
  },
  {
    icon: <Headphones size={28} />,
    title: "User Support",
    desc: "Providing user support and assistance.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Maintenance",
    desc: "Repairing and maintaining ICT equipment and peripherals.",
  },
  {
    icon: <MonitorCheck size={28} />,
    title: "Performance Monitoring",
    desc: "Monitoring the performance of ICT equipment.",
  },
  {
    icon: <Code size={28} />,
    title: "Application Support",
    desc: "Providing support for application systems.",
  },
  {
    icon: <AlertTriangle size={28} />,
    title: "Fault Reporting",
    desc: "Identifying and reporting any faults for necessary action.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Equipment Register",
    desc: "Maintaining an up-to-date equipment register.",
  },
];

export default function Skills() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh]"
    >
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-700 to-purple-700 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30"></div>
        <h2 className="relative z-10 text-4xl font-bold">Skills</h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Languages & Frameworks */}
        <section>
          <h3 className="text-2xl font-semibold text-blue-600 mb-6">
            Languages & Frameworks
          </h3>
          <div className="space-y-4">
            {bars.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-2 ${skill.color} rounded`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Domains */}
        <section>
          <h3 className="text-2xl font-semibold text-purple-600 mb-6">Domains</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {circles.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow"
              >
                <svg className="w-20 h-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="35"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke="currentColor"
                    className={d.color}
                    fill="none"
                    strokeDasharray="220"
                    strokeDashoffset={220 - (220 * d.level) / 100}
                    initial={{ strokeDashoffset: 220 }}
                    animate={{
                      strokeDashoffset: 220 - (220 * d.level) / 100,
                    }}
                    transition={{ duration: 1 }}
                  />
                </svg>
                <p className="mt-2 font-semibold">{d.name}</p>
                <span className="text-sm text-gray-600">{d.level}%</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tools & Tech */}
        <section>
          <h3 className="text-2xl font-semibold text-green-600 mb-6">
            Tools & Tech
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg shadow hover:shadow-lg text-center"
              >
                <div className="flex justify-center mb-3 text-blue-600">
                  {tool.icon}
                </div>
                <h4 className="font-semibold">{tool.name}</h4>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional ICT Skills */}
        <section>
          <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
            Professional ICT Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ictSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg flex flex-col items-start"
              >
                <div className="mb-3 text-indigo-600">{skill.icon}</div>
                <h4 className="font-semibold mb-1">{skill.title}</h4>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  );
}
