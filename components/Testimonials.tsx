"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-10 text-2xl font-bold text-[#111827] sm:text-3xl md:text-4xl">
            What <span className="text-[#2563EB]">Our Customers</span> Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-7 text-center shadow-sm sm:p-10 md:p-12"
        >
          <div className="mb-4 text-4xl text-[#2563EB]">&ldquo;</div>
          <p className="mb-7 text-sm leading-relaxed text-[#4B5563] italic sm:text-base md:text-lg md:leading-relaxed">
            Hands down, the best decision that a web hosting company can make is
            to incorporate the CloudLinux OS and ImunifyAV bundle to their VPS
            services. There is nothing more on the market that could make your
            web hosting plans faster, reliable... and safer.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-sm font-bold text-white">
              N
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#111827]">Nelson Ollivier</p>
              <p className="text-xs text-[#4B5563]">Hosting Infrastructure Manager</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-7 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#2563EB] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#2563EB] transition-all hover:bg-[#2563EB] hover:text-white"
          >
            Read the Success Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
