"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "CloudLinux",
    description:
      "Shared hosting OS to make your servers stable, secure, and profitable.",
    icon: "/logos/cloudlinux.svg",
  },
  {
    name: "AccelerateWP",
    description:
      "Automated WordPress optimization that speeds up sites on shared hosting.",
    icon: "/icons/awp.svg",
  },
  {
    name: "Imunify360",
    description:
      "Multi-layered security for Linux web servers with real-time protection.",
    icon: "/icons/imunify.svg",
  },
  {
    name: "ImunifyAV",
    description:
      "Advanced shared hosting security for Linux. Fast, reliable scanning.",
    icon: "/illustrations/group-260.svg",
  },
  {
    name: "KernelCare",
    description:
      "Rebootless security patching for every Linux distribution.",
    icon: "/illustrations/group-265.svg",
  },
  {
    name: "WordPress Services",
    description:
      "Maintenance, audits, and repair services for WordPress hosting clients.",
    icon: "/illustrations/group-259.svg",
  },
  {
    name: "Imunify Connect",
    description:
      "API for WordPress security, patching, and website performance.",
    icon: "/icons/connect.svg",
  },
  {
    name: "Imunify Email",
    description:
      "Multi-layered email security with real-time spam and threat filtering.",
    icon: "/illustrations/group-258.svg",
  },
  {
    name: "TuxCare Radar",
    description:
      "Automatic vulnerability patching for popular open-source software.",
    icon: "/illustrations/group-257.svg",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="portfolio" ref={ref} className="bg-[#F3F4F6] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h2 className="mb-3 text-2xl font-bold text-[#111827] sm:text-3xl md:text-4xl">
            Our <span className="text-[#2563EB]">Portfolio</span>
          </h2>
          <p className="mx-auto max-w-md text-sm text-[#4B5563] sm:text-base">
            Wide range of products, services, and solutions for web hosting
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              className="group flex items-start gap-3.5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-[#2563EB]/25 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                <Image
                  src={product.icon}
                  alt={product.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="mb-0.5 text-sm font-bold text-[#111827] sm:text-base">
                  {product.name}
                </h3>
                <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8 text-center sm:mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#1D4ED8]"
          >
            View All Products & Offers
          </a>
        </motion.div>
      </div>
    </section>
  );
}
