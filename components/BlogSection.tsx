"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const posts = [
  {
    title:
      "Per-Site CageFS Isolation Now Available in Beta for CloudLinux Customers",
    description:
      "We are announcing the beta release of Per-Site CageFS Isolation, a new feature designed to enhance security within each account on CloudLinux-powered shared hosting.",
    image: "/illustrations/image-6.svg",
  },
  {
    title:
      "CloudLinux OS 9 Now Supports Extended Lifecycle for PHP Versions",
    description:
      "We are announcing the latest release of PHP Extended Lifecycle Support, providing continued security patches for PHP 7.4 and 8.0 end-of-life versions.",
    image: "/illustrations/image-7.svg",
  },
  {
    title:
      "New AccelerateWP Features Boost WordPress Performance by 300%",
    description:
      "The latest AccelerateWP update introduces object caching and CDN integration that dramatically improves WordPress loading times on shared hosting.",
    image: "/illustrations/image-8.svg",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" ref={ref} className="relative overflow-hidden bg-[#0B1120] px-6 py-24">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#2563EB]/8 blur-[100px]" />
        <div className="absolute -top-20 -right-20 h-[250px] w-[250px] rounded-full bg-[#1E40AF]/8 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Left - Title + illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              What&apos;s <span className="text-[#60A5FA]">New</span>
            </h2>
            <p className="mb-8 text-gray-400">
              See the latest articles from our blog
            </p>
            {/* Server illustration */}
            <div className="hidden lg:block">
              <Image
                src="/illustrations/image-9.svg"
                alt="Server infrastructure"
                width={280}
                height={200}
                className="h-auto w-full max-w-[280px] opacity-80"
              />
            </div>
          </motion.div>

          {/* Right - Blog cards */}
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="group flex cursor-pointer gap-5 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8"
              >
                <div className="hidden shrink-0 items-center justify-center rounded-lg bg-white/10 p-3 sm:flex">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold leading-snug text-white transition-colors group-hover:text-[#60A5FA]">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
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
