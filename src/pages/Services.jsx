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
        desc: "LLM integrations, automation pipelines, and intelligent workflows that enhance decision-making.",
      },
      {
        icon: Network,
        title: "Distributed Architecture",
        desc: "Event-driven microservices, API ecosystems, and scalable backend systems.",
      },
      {
        icon: Cloud,
        title: "Cloud-Native Infrastructure",
        desc: "Containerized deployments, CI/CD pipelines, and production-grade environments.",
      },
      {
        icon: Database,
        title: "Scalable Data Systems",
        desc: "High-performance databases, caching layers, and messaging systems built for growth.",
      },
      {
        icon: Shield,
        title: "Security & Observability",
        desc: "Zero-trust architecture, monitoring, logging, and production hardening.",
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
        desc: "Multi-tenant platforms engineered for scalability, performance, and long-term evolution.",
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
        desc: "Technical SEO, analytics integration, and conversion-driven performance optimization.",
      },
      {
        icon: Palette,
        title: "Brand & Identity Systems",
        desc: "Logo systems, visual identity frameworks, and UI direction aligned with strategy.",
      },
      {
        icon: Megaphone,
        title: "Product Launch Strategy",
        desc: "Go-to-market planning, funnel architecture, and measurable growth experimentation.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-[#f6f8fc] to-white text-gray-900">

      <Hero />

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          End-to-End Digital Product 
        </motion.h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          From infrastructure and AI systems to brand positioning and growth —
          I design, build, and scale modern digital products.
        </p>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-28">

        {categories.map((category, index) => (
          <div key={index}>

            {/* CATEGORY HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <p className="text-green-600 max-w-2xl">
                {category.description}
              </p>
            </motion.div>

            {/* SERVICES GRID */}
            <div className="grid md:grid-cols-3 gap-10 ">
              {category.services.map((service, i) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="group relative p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-green-200 shadow-xl hover:shadow-2xl transition-all duration-500 "
                  >
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      className="mb-6 text-indigo-600"
                    >
                      <Icon size={40} strokeWidth={1.5}  />
                    </motion.div>

                    <h4 className="text-lg font-semibold mb-3">
                      {service.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="text-center pb-32 px-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl px-16 py-20 shadow-xl"
        >
          <h2 className="text-4xl font-semibold mb-6">
            Let’s Build, Launch & Scale Your Product
          </h2>

          <p className="opacity-90 mb-10 max-w-2xl mx-auto">
            Whether you need infrastructure, AI integration, brand identity,
            or growth systems — I bring it together into one cohesive strategy.
          </p>

          <Link
            to="/contact"
            className="inline-flex px-12 py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-l