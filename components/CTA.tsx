"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-6 py-24"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/cta-bg.jpg"
          alt=""
          fill
          className="object-cover"
          quality={80}
        />
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
        <p className="mx-auto mb-10 max-w-xl text-gray-300">
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
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/50 hover:bg-white/10"
          >
            Talk to an Expert
          </a>
        </div>
      </motion.div>
    </section>
  );
}
