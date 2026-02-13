import { motion } from "framer-motion";

export default function GeometryIcon({ children, color }) {
  return (
    <motion.div
      animate={{ rotate: [0, 12, 0], y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${color}`}
    >
      {children}
    </motion.div>
  );
}