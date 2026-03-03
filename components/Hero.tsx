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
          className="object-cover object-top"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/30 via-transparent to-[#0B1120]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 md:pt-24 lg:pt-32 lg:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-5 text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          >
            The Foundation
            <br />
            of Profitable Web Hosting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg"
          >
            We give web hosts the essential tools and solutions to deliver
            faster, more reliable, and secure websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#contact"
              className="w-full rounded-lg bg-[#2563EB] px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-600/25 sm:w-auto"
            >
              Get Started for Free
            </a>
            <a
              href="#contact"
              className="w-full rounded-lg border-2 border-white/25 px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-white/50 hover:bg-white/10 sm:w-auto"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-12 max-w-2xl lg:mt-16"
        >
          <p className="mb-5 text-center text-[11px] font-semibold tracking-widest text-gray-400/80 uppercase">
            Trusted by 200+ hosting providers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-10">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={24}
                className="h-4 w-auto object-contain opacity-50 brightness-0 invert sm:h-5"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
