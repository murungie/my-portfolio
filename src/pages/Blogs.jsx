import React from "react";
import { motion } from "framer-motion";

export default function Blogs() {
  // Your certifications (with links)
  const certifications = [
    {
      title: "Introduction to Python – DataCamp",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6ce784a87f2cd8dd5914ff08cd2c4e02978b604e",
      desc: "Completed DataCamp's Introduction to Python course.",
    },
    {
      title: "Cybersecurity Fundamentals – IBM (Credly)",
      link: "https://www.credly.com/badges/01a08735-ea50-4e24-8dea-2627a95a2e98",
      desc: "Certified in IBM Cybersecurity Fundamentals via Credly.",
    },
  ];

  // Existing blogs
  const blogs = [
    {
      title: "The Future of AI in Business",
      date: "Aug 2025",
      excerpt:
        "Exploring how artificial intelligence is reshaping business strategies, from customer experience to automation.",
    },
    {
      title: "Cybersecurity Awareness in SMEs",
      date: "Jun 2025",
      excerpt:
        "Why small and medium enterprises must adopt cybersecurity training and best practices to protect their data.",
    },
    {
      title: "Building Responsive Web Apps",
      date: "May 2025",
      excerpt:
        "A guide to designing and developing user-friendly applications with React and TailwindCSS.",
    },
  ];

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
        <h2 className="relative z-10 text-4xl font-bold">My Blogs & Certifications</h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Certifications Section */}
        <section>
          <h3 className="text-2xl font-semibold text-purple-700 mb-6">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
              >
                <h4 className="text-lg font-semibold text-blue-600">{cert.title}</h4>
                <p className="text-sm text-gray-600">{cert.desc}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm text-purple-600 hover:underline"
                >
                  View Certification →
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Posts Section */}
        <section>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Blogs</h3>
          <div className="space-y-6">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{blog.date}</p>
                <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                <a
                  href="https://github.com/murungie"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-purple-600 hover:text-purple-800 mt-3 inline-block"
                >
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        </section>
         {/* Acknowledgements */}
      <section className="relative z-10 mt-20 max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8">Acknowledgements</h3>

        <div className="flex flex-col items-center gap-6">
          {[
            {
              title: "Mentors",
              text: "Special thanks to my mentors who guided me through AI, cybersecurity, and professional growth.",
              color: "bg-blue-600",
            },
            {
              title: "Institutions",
              text: "Grateful to Murang’a County and universities for enabling impactful ICT projects.",
              color: "bg-purple-600",
            },
            {
              title: "Community",
              text: "Inspired by innovators and peers striving to use technology for social good.",
              color: "bg-pink-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${item.color} text-white px-6 py-4 rounded-full shadow-lg max-w-md w-full`}
            >
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm opacity-90">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      </div>
    </motion.main>
  );
}
