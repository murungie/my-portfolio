import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GitHubProjects from "../components/GitHubProjects";

const featuredProjects = [
  {
    id: "healthy-living-hub",
    title: "Healthy Living Hub",
    desc: "AI-driven skin & health checker using Flask & ML. Hosted on Vercel.",
    demo: "https://healthy-living-hub.vercel.app/",
    repo: "https://github.com/murungie/skin-allergy-detection-model",
    image: "/assets/Health.avif",
    tags: ["AI", "Flask", "Python"],
  },
  {
    id: "easy-poultry",
    title: "Easy Poultry System",
    desc: "Poultry farm management (inventory, production) built with PHP & MySQL.",
    demo: null,
    repo: "https://github.com/murungie/EasyPoultry",
    image: "/assets/poulty.jpeg",
    tags: ["PHP", "MySQL", "Dashboard"],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing projects, blogs and contact details.",
    demo: "https://murungimuchui.vercel.app/",
    repo: null,
    image: "/assets/profile.png",
    tags: ["React", "Tailwind", "Vercel"],
  },
  {
    id: "simple-store",
    title: "Simple Store",
    desc: "E-commerce starter (Coming Soon).",
    demo: null,
    repo: null,
    image: "/assets/store-placeholder.png", // fallback asset (add if available) or placeholder will appear
    tags: ["E-commerce"],
    comingSoon: true,
  },
];

export default function Projects() {
  const [upcoming, setUpcoming] = useState([]);
  const username = "murungie";

  useEffect(() => {
    // Fetch user's repos and pick top 3 newest that aren't in featuredProjects
    const featuredNames = featuredProjects
      .map((p) => (p.repo ? p.repo.split("/").pop().toLowerCase() : p.title.toLowerCase().replace(/\s+/g, "-")))
      .filter(Boolean);

    fetch(`https://api.github.com/users/${username}/repos?per_page=50&sort=created`)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) return setUpcoming([]);
        const filtered = data
          .filter((r) => !featuredNames.includes(r.name.toLowerCase()))
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 3)
          .map((r) => ({
            id: r.id,
            name: r.name,
            desc: r.description || "Details coming soon.",
            repo: r.html_url,
            created_at: r.created_at,
            language: r.language || null,
          }));
        setUpcoming(filtered);
      })
      .catch((err) => {
        console.error("Failed to fetch upcoming repos:", err);
        setUpcoming([]);
      });
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 pb-16"
    >
      {/* Hero */}
      <div className="relative h-56 bg-gradient-to-r from-green-600 to-blue-600 text-white flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl font-bold">Projects & Work</h1>
      </div>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((p) => (
            <motion.a
              key={p.id}
              href={p.demo || p.repo || "#"}
              target={p.demo || p.repo ? "_blank" : "_self"}
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x300?text=Project";
                  }}
                />
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  {p.comingSoon && (
                    <span className="ml-2 inline-block text-xs px-2 py-1 rounded-full bg-blue-200 text-blue-800 font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3 text-sm">
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-block text-sm font-medium text-gray-400">No demo</span>
                  )}

                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-sm font-medium text-gray-800 dark:text-gray-100 hover:underline"
                    >
                      View Code
                    </a>
                  ) : (
                    <span className="inline-block text-sm font-medium text-gray-400">Source private</span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Upcoming Projects (from GitHub) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Projects</h2>
        {upcoming.length === 0 ? (
          <p className="text-gray-500">No upcoming projects found yet. New repositories will appear here.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {upcoming.map((u) => (
              <motion.a
                key={u.id}
                href={u.repo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{u.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">Upcoming</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{u.desc}</p>
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
                  <span>{u.language || "Unknown"}</span>
                  <span>{new Date(u.created_at).toLocaleDateString()}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </section>

      {/* Latest GitHub Projects (component) */}
      <GitHubProjects username={username} />
    </motion.main>
  );
}
