"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const posts = [
  {
    title: "Per-Site CageFS Isolation Now Available in Beta for CloudLinux Customers",
    description:
      "The beta release of Per-Site CageFS Isolation enhances security within each account on CloudLinux-powered shared hosting.",
    image: "/illustrations/image-6.svg",
  },
  {
    title: "CloudLinux OS 9 Supports Extended Lifecycle for PHP Versions",
    description:
      "PHP Extended Lifecycle Support provides continued security patches for PHP 7.4 and 8.0 end-of-life versions.",
    image: "/illustrations/image-7.svg",
  },
  {
    title: "AccelerateWP Features Boost WordPress Performance by 300%",
    description:
      "Object caching and CDN integration dramatically improves WordPress loading times on shared hosting.",
    image: "/illustrations/image-8.svg",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="blog" ref={ref} className="relative overflow-hidden bg-[#0B1120] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              What&apos;s <span className="text-[#60A5FA]">New</span>
            </h2>
            <p className="mb-6 text-sm text-gray-400 sm:text-base">
              Latest articles from our blog
            </p>
            <div className="hidden lg:block">
              <Image
                src="/illustrations/image-9.svg"
                alt="Server infrastructure"
                width={240}
                height={180}
                className="h-auto w-full max-w-[240px] opacity-70"
              />
            </div>
          </motion.div>

          {/* Right - Blog cards */}
          <div className="flex flex-col gap-4">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="group flex cursor-pointer gap-4 rounded-lg border border-white/8 bg-white/5 p-4 transition-all hover:border-white/15 hover:bg-white/8"
              >
                <div className="hidden shrink-0 items-center justify-center rounded-lg bg-white/8 p-2.5 sm:flex">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={64}
                    height={48}
                    className="h-11 w-auto object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1.5 text-sm font-bold leading-snug text-white transition-colors group-hover:text-[#60A5FA] sm:text-base">
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
                    {post.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
