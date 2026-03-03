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
    <section className="relative overflow-hidden" style={{ padding: "clamp(3.5rem, 7vw, 5.5rem) clamp(1.25rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/30 via-transparent to-[#0B1120]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[680px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-xl mb-4 text-white"
          >
            The Foundation of Profitable Web Hosting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mx-auto mb-7 max-w-[480px] text-[15px] leading-relaxed text-gray-300"
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
              className="w-full rounded-full bg-[#2563EB] px-7 py-3 text-center text-[13px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/25 sm:w-auto sm:px-8 sm:py-3.5 sm:text-[14px]"
            >
              Get Started for Free
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border-2 border-white/25 px-7 py-3 text-center text-[13px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-3.5 sm:text-[14px]"
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
          className="mx-auto mt-10 max-w-[680px] sm:mt-12"
        >
          <p className="mb-3 text-center text-[10px] font-semibold tracking-[0.15em] text-gray-400/60 uppercase sm:text-[11px]">
            Trusted by 200+ hosting providers
          </p>
          <div className="flex items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.logo}
                alt={p.name}
                width={72}
                height={20}
                className="h-3 w-auto object-contain opacity-40 brightness-0 invert sm:h-[15px]"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
