"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden" style={{ padding: "clamp(2.5rem, 4.5vw, 4rem) clamp(1.25rem, 4vw, 3rem)" }}>
      <div className="absolute inset-0">
        <Image src="/cta-bg.jpg" alt="" fill className="object-cover" sizes="100vw" quality={85} />
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="relative z-10 mx-auto max-w-[640px] text-center">
        <h2 className="heading-lg mb-5 text-white">
          Ready to make your web servers<br className="hidden sm:block" /> more stable, secure, and fast?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-[15px] text-gray-300">
          Start with a free trial of CloudLinux or ImunifyAV today.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="w-full rounded-full bg-[#2563EB] px-8 py-3.5 text-center text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/25 sm:w-auto">
            Get Started for Free
          </a>
          <a href="#" className="w-full rounded-full border-2 border-white/25 px-8 py-3.5 text-center text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10 sm:w-auto">
            Talk to an Expert
          </a>
        </div>
      </motion.div>
    </section>
  );
}
