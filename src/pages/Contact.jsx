import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);

    // ✅ Replace with your actual Formspree endpoint
    const res = await fetch("https://formspree.io/f/mnnbkjzg", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("✅ Thank you! Your feedback has been sent.");
      form.reset();
    } else {
      setStatus("❌ Oops! There was a problem sending your message.");
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh]"
    >
      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-purple-700 to-blue-700 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-30"></div>
        <h2 className="relative z-10 text-4xl font-bold">Feedback & Rating</h2>
      </div>

      {/* Feedback Form */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <select
              name="rating"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
            >
              <option value="">Select Rating</option>
              <option value="⭐">⭐</option>
              <option value="⭐⭐">⭐⭐</option>
              <option value="⭐⭐⭐">⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Feedback
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-green-600">{status}</p>
        )}
      </div>
    </motion.main>
  );
}
