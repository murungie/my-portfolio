import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";

export default function GitHubProjects({ username = "murungie" }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error("GitHub API Error:", err));
  }, [username]);

  // Function to pick color for language badge
  const languageColor = (lang) => {
    switch (lang) {
      case "JavaScript":
        return "bg-yellow-300 text-yellow-800";
      case "Python":
        return "bg-green-300 text-green-800";
      case "PHP":
        return "bg-purple-300 text-purple-800";
      case "HTML":
        return "bg-orange-300 text-orange-800";
      case "CSS":
        return "bg-blue-300 text-blue-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
        <Github className="text-black" /> Latest GitHub Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {repos.length === 0 && (
          <p className="text-gray-500">Loading latest projects...</p>
        )}
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition block"
          >
            <h4 className="font-semibold text-lg text-blue-700">{repo.name}</h4>
            <p className="text-sm text-gray-600 mt-1 line-clamp-3">
              {repo.description || "No description provided"}
            </p>

            {/* Language badge */}
            {repo.language && (
              <span
                className={`inline-block mt-3 text-xs px-2 py-1 rounded-full ${languageColor(
                  repo.language
                )}`}
              >
                {repo.language}
              </span>
            )}

            {/* Stars + Forks */}
            <div className="flex items-center gap-4 text-gray-500 text-xs mt-3">
              <div className="flex items-center gap-1">
                <Star size={14} /> {repo.stargazers_count}
              </div>
              <div className="flex items-center gap-1">
                <GitFork size={14} /> {repo.forks_count}
              </div>
              <div>
                Updated: {new Date(repo.updated_at).toLocaleDateString()}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
