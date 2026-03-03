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
      {/* Top announcement bar */}
      <div className="bg-[#0B1120] px-4 py-2 text-center text-sm text-gray-300">
        Save up to 40%{" "}
        <span className="text-white">
          — try CloudLinux OS + ImunifyAV bundle for hosting providers
        </span>
      </div>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-1">
            <Image
              src="/logos/cloudlinux-logo.svg"
              alt="CloudLinux"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4B5563] transition-colors hover:text-[#111827]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1E40AF]"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-gray-100 md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-[#4B5563] hover:bg-gray-50 hover:text-[#111827]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 rounded-lg bg-[#2563EB] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Get Started Free
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
