import { motion } from "framer-motion";
import {
  Brain,
  Network,
  Database,
  Shield,
  Cloud,
  Cpu,
  TrendingUp,
  Palette,
  Megaphone,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import Hero from "../components/Hero";

/* ---------- SERVICE CATEGORIES ---------- */
const categories = [
  {
    title: "Engineering & Architecture",
    description:
      "Scalable systems designed for performance, intelligence, and resilience.",

    services: [
      {
        icon: Brain,
        title: "AI-Integrated Platforms",
        desc: "LLM integrations and intelligent automation systems.",

        includes: [
          "ChatGPT/OpenAI integrations",
          "AI workflow automation",
          "AI customer support systems",
          "Document processing AI",
          "Custom AI dashboards",
        ],

        pricing: "Starting from $1,500",
      },

      {
        icon: Network,
        title: "Distributed Architecture",
        desc: "Scalable backend ecosystems engineered for reliability.",

        includes: [
          "Microservices architecture",
          "REST & GraphQL APIs",
          "Backend system design",
          "Event-driven systems",
          "Scalability optimization",
        ],

        pricing: "Starting from $2,000",
      },

      {
        icon: Cloud,
        title: "Cloud-Native Infrastructure",
        desc: "Modern deployment pipelines and cloud environments.",

        includes: [
          "Docker containerization",
          "CI/CD pipelines",
          "AWS/GCP deployments",
          "Server configuration",
          "Production infrastructure",
        ],

        pricing: "Starting from $1,200",
      },

      {
        icon: Database,
        title: "Scalable Data Systems",
        desc: "High-performance databases and optimized storage systems.",

        includes: [
          "PostgreSQL/MySQL setup",
          "Database optimization",
          "Redis caching",
          "Data architecture",
          "Backup & recovery systems",
        ],

        pricing: "Starting from $900",
      },

      {
        icon: Shield,
        title: "Security & Observability",
        desc: "Monitoring, logging, and infrastructure protection systems.",

        includes: [
          "System monitoring",
          "Application logging",
          "Security hardening",
          "API protection",
          "Performance monitoring",
        ],

        pricing: "Starting from $800",
      },
    ],
  },

  {
    title: "Product Engineering",

    description:
      "Building complete, maintainable digital products ready for real-world scale.",

    services: [
      {
        icon: Cpu,
        title: "SaaS Product Engineering",

        desc: "Complete SaaS platforms from architecture to deployment.",

        includes: [
          "Multi-tenant SaaS systems",
          "Authentication systems",
          "Admin dashboards",
          "Billing integrations",
          "Scalable backend architecture",
        ],

        pricing: "Starting from $3,500",
      },
    ],
  },

  {
    title: "Growth & Brand Systems",

    description:
      "Scaling visibility, strengthening identity, and positioning products for market success.",

    services: [
      {
        icon: TrendingUp,
        title: "Digital Growth & SEO",

        desc: "Optimization systems that improve visibility and conversions.",

        includes: [
          "Technical SEO",
          "Analytics integration",
          "Performance optimization",
          "Keyword strategy",
          "Conversion optimization",
        ],

        pricing: "Starting from $600",
      },

      {
        icon: Palette,
        title: "Brand & Identity Systems",

        desc: "Visual identity systems aligned with business strategy.",

        includes: [
          "Logo design",
          "Brand guidelines",
          "UI design systems",
          "Typography & colors",
          "Visual consistency setup",
        ],

        pricing: "Starting from $700",
      },

      {
        icon: Megaphone,
        title: "Product Launch Strategy",

        desc: "Go-to-market systems and launch planning.",

        includes: [
          "Launch funnels",
          "Marketing strategy",
          "Product positioning",
          "Growth experimentation",
          "Audience targeting",
        ],

        pricing: "Starting from $1,000",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9fc] to-white text-gray-900">

      <Hero />

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          End-to-End Digital Product Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          From scalable infrastructure and AI systems to product engineering,
          branding, and growth — modern digital solutions designed to scale
          businesses efficiently.
        </motion.p>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-32">

        {categories.map((category, index) => (
          <div key={index}>

            {/* CATEGORY HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >

              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {category.title}
              </h3>

              <p className="text-green-600 text-lg max-w-2xl leading-relaxed">
                {category.description}
              </p>

            </motion.div>

            {/* SERVICES GRID */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

              {category.services.map((service, i) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-3xl border border-green-200 bg-white/80 backdrop-blur-xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
                  >

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.08 }}
                      className="relative z-10 mb-6 text-indigo-600"
                    >
                      <Icon size={42} strokeWidth={1.6} />
                    </motion.div>

                    {/* Title */}
                    <h4 className="relative z-10 text-2xl font-semibold mb-4">
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="relative z-10 text-gray-600 leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    {/* Included Services */}
                    <div className="relative z-10 space-y-3 mb-10">

                      {service.includes.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-green-500 mt-1 flex-shrink-0"
                          />

                          <span className="text-sm text-gray-700 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}

                    </div>

                    {/* Bottom Section */}
                    <div className="relative z-10 mt-auto flex items-center justify-between pt-6 border-t border-gray-100">

                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                          Pricing
                        </p>

                        <p className="text-lg font-semibold text-indigo-600">
                          {service.pricing}
                        </p>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-purple-600 transition-all duration-300"
                      >
                        Get Quote
                      </Link>

                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="pb-32 px-6">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-r from-indigo-600 to-purple-600 px-10 md:px-20 py-20 text-center text-white shadow-2xl"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s Build, Launch & Scale Your Product
          </h2>

          <p className="max-w-3xl mx-auto text-lg opacity-90 leading-relaxed mb-10">
            Whether you need infrastructure, AI integration, product
            engineering, brand identity, or scalable growth systems — everything
            is designed to work together as one cohesive digital ecosystem.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-indigo-600 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start a Project →
          </Link>

        </motion.div>

      </section>

    </main>
  );
}
