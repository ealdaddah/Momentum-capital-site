import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-blue-900 tracking-tight">
            Momentum Capital Ventures
          </h1>
          <p className="text-lg text-blue-700 max-w-xl mx-auto">
            Investing in innovation with clarity, discipline, and momentum.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-900">About</h2>
          <p className="text-gray-700 text-lg">
            Momentum Capital Ventures is an early-stage investment platform focused on opportunity, agility, and alignment. We're actively building toward a future where innovation meets thoughtful capital.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-900">Portfolio</h2>
          <p className="text-gray-700 text-lg italic">
            Select investments and strategic partnerships will appear here soon.
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Momentum Capital Ventures. All rights reserved.
      </footer>
    </main>
  );
}
