"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "CloudLinux",
    description:
      "Shared hosting OS to make your servers incredibly stable, secure, and profitable.",
    icon: "/logos/cloudlinux.svg",
  },
  {
    name: "AccelerateWP",
    description:
      "Automated WordPress optimization suite that speeds up sites on shared hosting.",
    icon: "/icons/awp.svg",
  },
  {
    name: "Imunify360",
    description:
      "Automated, multi-layered security for Linux web servers with real-time protection.",
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
      "Automated, rebootless security patching for every Linux distribution.",
    icon: "/illustrations/group-265.svg",
  },
  {
    name: "WordPress Services",
    description:
      "Offer maintenance, site audits, and repair services to WordPress hosting clients.",
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
      "Automated, multi-layered email security providing real-time spam and threat filtering.",
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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" ref={ref} className="bg-[#F3F4F6] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
            Our <span className="text-[#2563EB]">Portfolio</span>
          </h2>
          <p className="mx-auto max-w-xl text-[#4B5563]">
            Wide range of products, services, and solutions for web hosting
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: "easeOut",
              }}
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#2563EB]/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                  src={product.icon}
                  alt={product.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold text-[#111827]">
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed text-[#4B5563]">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#1E40AF]"
          >
            View All Products & Offers
          </a>
        </motion.div>
      </div>
    </section>
  );
}
