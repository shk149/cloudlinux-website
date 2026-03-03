"use client";

import { motion } from "framer-motion";
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

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            The Foundation
            <br />
            of Profitable Web Hosting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg"
          >
            We give web hosts the essential tools and solutions to deliver
            faster, more reliable, and secure websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#1E40AF] hover:shadow-xl hover:shadow-blue-500/20"
            >
              Get Started for Free
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>

        {/* Partner logos inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <p className="mb-6 text-center text-xs font-medium tracking-wide text-gray-400 uppercase">
            Trusted by 200+ hosting providers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={32}
                className="h-6 w-auto object-contain opacity-60 brightness-0 invert md:h-7"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
