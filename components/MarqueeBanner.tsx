"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  { name: "040 Hosting", logo: "/partners/040hosting.svg" },
  { name: "Axxess", logo: "/partners/axxess.svg" },
  { name: "CloudExter", logo: "/partners/cloudexter.svg" },
  { name: "EggyHosting", logo: "/partners/eggyhosting.svg" },
  { name: "HostPress", logo: "/partners/hostpress.svg" },
  { name: "Kualo", logo: "/partners/kualo.svg" },
  { name: "LocusHost", logo: "/partners/locushost.svg" },
  { name: "NettiGritty", logo: "/partners/nettigritty.svg" },
  { name: "Planetary", logo: "/partners/planetary.svg" },
];

export default function MarqueeBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-white py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-8 text-center text-sm font-medium text-[#4B5563]">
          Trusted by 200+ hosting providers and partners
        </p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <div className="animate-marquee flex w-max items-center">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="mx-10 flex shrink-0 items-center opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
