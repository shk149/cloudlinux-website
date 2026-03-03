"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-12 text-3xl font-bold text-[#111827] md:text-4xl">
            What <span className="text-[#2563EB]">Our Customers</span> Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-10 text-center shadow-sm md:p-14"
        >
          <div className="mb-6 text-5xl text-[#2563EB]">&ldquo;</div>
          <p className="mb-8 text-lg leading-relaxed text-[#4B5563] italic">
            Hands down, the best decision that a web hosting company can make is
            to incorporate the CloudLinux OS and ImunifyAV bundle to their VPS
            services. There is nothing more on the market that could make your
            web hosting plans faster, reliable... and safer.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-lg font-bold text-white">
              N
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#111827]">
                Nelson Ollivier
              </p>
              <p className="text-xs text-[#4B5563]">
                Hosting Infrastructure Manager
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#2563EB] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#2563EB] transition-all hover:bg-[#2563EB] hover:text-white"
          >
            Read the Success Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
