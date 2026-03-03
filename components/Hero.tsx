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
      {/* Background */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/20 via-transparent to-[#0B1120]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8" style={{ paddingTop: "clamp(3rem, 8vw, 5.5rem)", paddingBottom: "clamp(2.5rem, 6vw, 4rem)" }}>
        <div className="mx-auto max-w-[640px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-xl mb-5 text-white"
          >
            The Foundation
            <br />
            of Profitable Web Hosting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mx-auto mb-8 max-w-[480px] text-[15px] leading-relaxed text-gray-300 sm:text-base"
          >
            We give web hosts the essential tools and solutions to deliver
            faster, more reliable, and secure websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="w-full rounded-full bg-[#2563EB] px-8 py-3.5 text-center text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/25 sm:w-auto"
            >
              Get Started for Free
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border-2 border-white/25 px-8 py-3.5 text-center text-[14px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10 sm:w-auto"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-14 max-w-[520px]"
        >
          <p className="mb-4 text-center text-[11px] font-semibold tracking-[0.15em] text-gray-400/70 uppercase">
            Trusted by 200+ hosting providers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.logo}
                alt={p.name}
                width={72}
                height={20}
                className="h-[14px] w-auto object-contain opacity-40 brightness-0 invert sm:h-4"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
