"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 md:py-24"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/cta-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Ready to make your web servers
          <br className="hidden sm:block" />
          more stable, secure, and fast?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-gray-300 sm:text-base">
          Start with a free trial of CloudLinux or ImunifyAV today.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#"
            className="w-full rounded-lg bg-[#2563EB] px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-600/25 sm:w-auto"
          >
            Get Started for Free
          </a>
          <a
            href="#"
            className="w-full rounded-lg border-2 border-white/25 px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/50 hover:bg-white/10 sm:w-auto"
          >
            Talk to an Expert
          </a>
        </div>
      </motion.div>
    </section>
  );
}
