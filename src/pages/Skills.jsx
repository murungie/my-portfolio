import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { Code, Cloud, Database, Brain, Shield,TrendingUp, Palette } from "lucide-react";

/* ---------------- RADAR DATA ---------------- */
const radarData = [
  { subject: "Frontend", A: 85 },
  { subject: "Backend", A: 90 },
  { subject: "Cloud", A: 88 },
  { subject: "DevOps", A: 82 },
  { subject: "AI Systems", A: 80 },
  { subject: "Architecture", A: 92 },
];

/* ---------------- STACK GROUPS ---------------- */
const stackGroups = [
  {
    title: "Frontend Engineering",
    icon: Code,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 88 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    skills: [
      { name: "Node.js / NestJS", level: 92 },
      { name: "GraphQL / REST", level: 88 },
      { name: "Microservices", level: 90 },
      { name: "System Design", level: 93 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    title: "AI & Intelligent Systems",
    icon: Brain,
    skills: [
      { name: "LLM APIs", level: 82 },
      { name: "Vector Databases", level: 78 },
      { name: "Automation Pipelines", level: 85 },
      { name: "AI Integration", level: 84 },
    ],
  },
  {
    title: "Security & Reliability",
    icon: Shield,
    skills: [
      { name: "OAuth / JWT", level: 85 },
      { name: "Observability", level: 82 },
      { name: "Zero Trust", level: 78 },
      { name: "Load Balancing", level: 88 },
    ],
  },
  {
  title: "Digital Growth & Marketing",
  icon: TrendingUp,
  skills: [
    { name: "Technical SEO", level: 85 },
    { name: "Google Analytics & Tracking", level: 88 },
    { name: "Conversion Rate Optimization", level: 82 },
    { name: "Content Strategy", level: 80 },
    { name: "Funnel Architecture", level: 83 },
  ],
},
{
  title: "Branding & Identity Systems",
  icon: Palette,
  skills: [
    { name: "Logo Systems", level: 85 },
    { name: "Visual Identity Design", level: 88 },
    { name: "UI/UX Branding", level: 90 },
    { name: "Design Systems", level: 86 },
    { name: "Product Positioning", level: 84 },
  ],
},
];

/* ---------------- COMPONENT ---------------- */
export default function Skills() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-[#f5f7fa] to-white overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -z-10" />

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold tracking-tight text-gray-900"
        >
          Engineering Capabilities
        </motion.h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          A modern, AI-first stack designed for scalable, cloud-native systems.
        </p>
      </section>

      {/* RADAR CHART */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-12"
        >
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Core Engineering Strengths
          </h2>

          <div className="h-[400px]">
            <ResponsiveContainer>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </section>

      {/* STACK GROUPS */}
      <section className="max-w-7xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-10">
        {stackGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-indigo-600">
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-semibold">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-6">
                {group.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700">
                        {skill.name}
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}