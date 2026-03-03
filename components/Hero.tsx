"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1120] via-[#111827] to-[#111827] px-6 py-24 md:py-32">
      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-1 absolute -top-20 right-[10%] h-[500px] w-[500px] rounded-full bg-[#2563EB]/15 blur-[120px]" />
        <div className="animate-float-2 absolute -bottom-20 left-[5%] h-[400px] w-[400px] rounded-full bg-[#1E40AF]/20 blur-[100px]" />
        <div className="animate-float-3 absolute top-1/3 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[80px]" />
        <div className="animate-float-2 absolute top-[20%] left-[20%] h-[200px] w-[200px] rounded-full bg-cyan-400/8 blur-[60px]" />
      </div>

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          The Foundation
          <br />
          of Profitable{" "}
          <span className="bg-gradient-to-r from-[#2563EB] via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Web Hosting
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          We give web hosts the essential tools and solutions to deliver faster,
          more reliable, and secure websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#1E40AF] hover:shadow-xl hover:shadow-blue-500/20"
          >
            Get Started for Free
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Talk to an Expert
          </a>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
