"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#0B1120] to-[#111827] px-6 py-24"
    >
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float-1 absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#2563EB]/15 blur-[100px]" />
        <div className="animate-float-2 absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-[#1E40AF]/15 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to make your web servers
          <br />
          more stable, secure, and fast?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-gray-400">
          Start with a free trial of CloudLinux or ImunifyAV today.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#1E40AF] hover:shadow-xl hover:shadow-blue-500/20"
          >
            Get Started for Free
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Talk to an Expert
          </a>
        </div>
      </motion.div>
    </section>
  );
}
