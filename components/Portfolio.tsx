"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  { name: "CloudLinux", description: "Shared hosting OS to make your servers stable, secure, and profitable.", icon: "/logos/cloudlinux.svg" },
  { name: "AccelerateWP", description: "Automated WordPress optimization that speeds up sites on shared hosting.", icon: "/icons/awp.svg" },
  { name: "Imunify360", description: "Multi-layered security for Linux web servers with real-time protection.", icon: "/icons/imunify.svg" },
  { name: "ImunifyAV", description: "Advanced shared hosting security for Linux. Fast, reliable scanning.", icon: "/illustrations/group-260.svg" },
  { name: "KernelCare", description: "Rebootless security patching for every Linux distribution.", icon: "/illustrations/group-265.svg" },
  { name: "WordPress Services", description: "Maintenance, audits, and repair services for WordPress hosting clients.", icon: "/illustrations/group-259.svg" },
  { name: "Imunify Connect", description: "API for WordPress security, patching, and website performance.", icon: "/icons/connect.svg" },
  { name: "Imunify Email", description: "Multi-layered email security with real-time spam and threat filtering.", icon: "/illustrations/group-258.svg" },
  { name: "TuxCare Radar", description: "Automatic vulnerability patching for popular open-source software.", icon: "/illustrations/group-257.svg" },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="portfolio" ref={ref} className="section-pad bg-[#F8F9FB]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="heading-lg text-[#111827]">
            Our <span className="text-[#2563EB]">Portfolio</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-[#545769]">
            Wide range of products, services, and solutions for web hosting
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
              className="group flex items-start gap-4 rounded-[14px] border border-gray-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                <Image src={product.icon} alt={product.name} width={32} height={32} className="h-8 w-8 object-contain" />
              </div>
              <div className="min-w-0">
                <h3 className="mb-1 text-[15px] font-bold text-[#111827]">{product.name}</h3>
                <p className="text-[13px] leading-relaxed text-[#545769]">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <a href="#" className="inline-flex rounded-full bg-[#2563EB] px-7 py-3 text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/20">
            View All Products & Offers
          </a>
        </motion.div>
      </div>
    </section>
  );
}
