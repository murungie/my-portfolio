import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GitHubProjects from "../components/GitHubProjects";

const username = "murungie";

/* ---------------- FEATURED ---------------- */
const featuredProjects = [
  {
    id: "healthy-living-hub",
    title: "Healthy Living Hub",
    desc: "AI-powered skin & health analysis platform built with Flask & ML.",
    demo: "https://healthy-living-hub.vercel.app/",
    repo: "https://github.com/murungie",
    image: "/assets/Health.avif",
    tags: ["AI", "Flask", "ML", "Python"],
  },
  {
    id: "easy-poultry",
    title: "Easy Poultry System",
    desc: "Farm management dashboard for inventory & production tracking.",
    demo: null,
    repo: "#",
    image: "/assets/poulty.jpeg",
    tags: ["PHP", "MySQL", "Dashboard"],
  },
  {
    id: "portfolio",
    title: "Modern Portfolio",
    desc: "High-performance React portfolio with animation & cloud hosting.",
    demo: "#",
    repo: null,
    image: "/assets/profile.png",
    tags: ["React", "Tailwind", "Vercel"],
  },
];

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    name: "Daniel Mwangi",
    role: "Startup Founder",
    message:
      "Built our AI system from architecture to deployment. Highly strategic and technically strong.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sarah Wanjiru",
    role: "E-commerce Director",
    message:
      "Improved our SEO and digital presence massively. Traffic and conversions increased significantly.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "James Otieno",
    role: "Tech Lead",
    message:
      "Strong engineering mindset. Clean scalable systems and excellent communication.",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

const latestProjects = [
  {
    id: 1,
    title: "AI SaaS Automation Platform",
    desc: "Multi-tenant AI system for automating workflows, analytics & decision modeling.",
    tags: ["AI", "SaaS", "Cloud", "Microservices"],
  },
  {
    id: 2,
    title: "Enterprise Microservices Architecture",
    desc: "Distributed backend system with secure API gateway & service orchestration.",
    tags: ["Node.js", "Docker", "Kubernetes", "Security"],
  },
  {
    id: 3,
    title: "Digital Growth & Branding Suite",
    desc: "Full-scale branding, SEO optimization & digital performance tracking platform.",
    tags: ["SEO", "Branding", "Analytics", "Marketing"],
  },
  {
    id: 4,
    title: "Scalable Cloud Infrastructure Setup",
    desc: "Cloud-native infrastructure deployment with CI/CD & monitoring systems.",
    tags: ["AWS", "DevOps", "CI/CD", "Monitoring"],
  },
];

export default function Projects() { 
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-white via-[#f4f7fb] to-white text-gray-900"
    >
      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-semibold tracking-tight mb-6">
          Projects & Impact
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Delivering scalable systems, AI platforms, branding strategies,
          and growth-focused digital solutions.
        </p>
      </section>
      

       {/* LATEST PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-10">Latest Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {latestProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md rounded-2xl p-8 transition hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-3 text-sm">
                {project.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4 text-sm font-medium">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-800 hover:underline"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Client Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-5"
                />

                <p className="text-gray-600 text-sm leading-relaxed">
                  “{t.message}”
                </p>

                <h4 className="mt-6 font-semibold">{t.name}</h4>
                <span className="text-xs text-gray-500">
                  {t.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Ready to Build Something Exceptional?
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/contact"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:scale-105 transition"
          >
            Start a Project →
          </Link>

          <Link
            to="/services"
            className="px-10 py-4 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </motion.main>
  );
}