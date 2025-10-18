import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, BrainCircuit, Globe, Code } from "lucide-react";

export default function GitHubProjects({ username = "murungie" }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        else setRepos([]);
      })
      .catch((err) => {
        console.error("GitHub API Error:", err);
        setRepos([]);
      });
  }, [username]);

  // Smart language detection fallback
  const detectLanguage = (repo) => {
    if (repo.language) return repo.language;
    const name = (repo.name || "").toLowerCase();
    if (name.includes("flask") || name.includes("model") || name.includes("ml") || name.includes("tensor")) return "Python";
    if (name.includes("php") || name.includes("poultry")) return "PHP";
    if (name.includes("react") || name.includes("dashboard") || name.includes("vue")) return "JavaScript";
    if (name.includes("api") || name.includes("server") || name.includes("node")) return "Backend";
    return "Unknown";
  };

  // icon for language
  const languageIcon = (lang) => {
    switch ((lang || "").toLowerCase()) {
      case "javascript":
        return <Code className="text-yellow-500" />;
      case "python":
        return <BrainCircuit className="text-blue-500" />;
      case "php":
        return <Code className="text-purple-500" />;
      case "backend":
        return <GitFork className="text-green-600" />;
      default:
        return <Globe className="text-gray-400" />;
    }
  };

  const badgeStyle = (lang) => {
    switch ((lang || "").toLowerCase()) {
      case "javascript":
        return "bg-yellow-200 text-yellow-800";
      case "python":
        return "bg-blue-200 text-blue-800";
      case "php":
        return "bg-purple-200 text-purple-800";
      case "backend":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <Github /> Latest GitHub Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repos.length === 0 && <p className="text-gray-500 dark:text-gray-400">Loading latest projects...</p>}

        {repos.map((repo) => {
          const lang = detectLanguage(repo);
          return (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{repo.name}</h4>
                {languageIcon(lang)}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {repo.description || "No description provided."}
              </p>

              <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className={`inline-block px-2 py-1 rounded-full ${badgeStyle(lang)}`}>{lang}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Star size={14} /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks_count}</span>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
