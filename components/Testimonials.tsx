"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad bg-white">
      <div className="mx-auto max-w-[720px]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center">
          <h2 className="heading-lg mb-6 text-[#111827]">
            What <span className="text-[#2563EB]">Our Customers</span> Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="rounded-[14px] border border-gray-200/80 bg-[#F9FAFB] p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-12"
        >
          <div className="mb-5 text-4xl leading-none text-[#2563EB]">&ldquo;</div>
          <p className="mb-8 text-[15px] leading-[1.7] text-[#545769] italic sm:text-[17px]">
            Hands down, the best decision that a web hosting company can make is
            to incorporate the CloudLinux OS and ImunifyAV bundle to their VPS
            services. There is nothing more on the market that could make your
            web hosting plans faster, reliable... and safer.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-sm font-bold text-white">N</div>
            <div className="text-left">
              <p className="text-[14px] font-bold text-[#111827]">Nelson Ollivier</p>
              <p className="text-[12px] text-[#545769]">Hosting Infrastructure Manager</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.35 }} className="mt-8 text-center">
          <a href="#" className="inline-flex rounded-full border-2 border-[#2563EB] px-6 py-2.5 text-[14px] font-bold uppercase tracking-wider text-[#2563EB] transition-all duration-200 hover:bg-[#2563EB] hover:text-white">
            Read the Success Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
