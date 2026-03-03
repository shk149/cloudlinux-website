"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const posts = [
  {
    title: "Per-Site CageFS Isolation Now Available in Beta for CloudLinux Customers",
    description:
      "We are announcing the beta release of Per-Site CageFS Isolation, a new feature designed to enhance security within each account on CloudLinux-powered shared hosting.",
    image: "/illustrations/image-6.svg",
  },
  {
    title: "CloudLinux OS 9 Now Supports Extended Lifecycle for PHP Versions",
    description:
      "We are announcing the latest release of PHP Extended Lifecycle Support, providing continued security patches for PHP 7.4 and 8.0 end-of-life versions.",
    image: "/illustrations/image-7.svg",
  },
  {
    title: "New AccelerateWP Features Boost WordPress Performance by 300%",
    description:
      "The latest AccelerateWP update introduces object caching and CDN integration that dramatically improves WordPress loading times on shared hosting.",
    image: "/illustrations/image-8.svg",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
            What&apos;s <span className="text-[#2563EB]">New</span>
          </h2>
          <p className="text-[#4B5563]">
            See the latest articles from our blog
          </p>
        </motion.div>

        {/* Blog cards - staggered */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-[#F3F4F6] p-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={200}
                  height={120}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-base font-bold leading-snug text-[#111827] transition-colors group-hover:text-[#2563EB]">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4B5563]">
                  {post.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
