"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Products", href: "#portfolio" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#blog" },
  { label: "Support", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement */}
      <div className="bg-[#0B1120] px-4 py-2 text-center">
        <p className="text-[13px] leading-snug text-gray-400">
          Save up to 40%{" "}
          <span className="font-semibold text-white">
            — try CloudLinux OS + ImunifyAV bundle
          </span>
        </p>
      </div>

      <nav className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#" className="shrink-0">
            <Image
              src="/logos/cloudlinux-logo.svg"
              alt="CloudLinux"
              width={150}
              height={34}
              className="h-7 w-auto"
              priority
            />
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[#545769] transition-colors duration-200 hover:text-[#111827]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#2563EB] px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/20 lg:inline-flex"
          >
            Get Started Free
          </a>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>
              ) : (
                <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-100 lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#545769] transition-colors hover:bg-gray-50 hover:text-[#111827]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 rounded-full bg-[#2563EB] px-4 py-3 text-center text-[15px] font-semibold text-white"
                >
                  Get Started Free
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
