/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Deep tech blue
        secondary: "#6d28d9", // Purple AI tone
        neon: "#00ffff", // Cyan glowing tech accent
      },
      boxShadow: {
        glow: "0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.3)",
      },
      animation: {
        "pulse-glow": "pulseGlow 3s infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 25px rgba(0, 255, 255, 0.7), 0 0 50px rgba(0, 255, 255, 0.5)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "grid-tech": "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-size": "20px 20px",
      },
    },
  },
  plugins: [],
}
