"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const posts = [
  { title: "Per-Site CageFS Isolation Now Available in Beta for CloudLinux", description: "The beta release of Per-Site CageFS Isolation enhances security within each account on CloudLinux-powered shared hosting.", image: "/illustrations/image-6.svg" },
  { title: "CloudLinux OS 9 Supports Extended Lifecycle for PHP Versions", description: "PHP Extended Lifecycle Support provides continued security patches for PHP 7.4 and 8.0 end-of-life versions.", image: "/illustrations/image-7.svg" },
  { title: "AccelerateWP Features Boost WordPress Performance by 300%", description: "Object caching and CDN integration dramatically improves WordPress loading times on shared hosting.", image: "/illustrations/image-8.svg" },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="blog" ref={ref} className="section-pad bg-[#0B1120]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_2fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <h2 className="heading-lg text-white">
              What&apos;s <span className="text-[#60A5FA]">New</span>
            </h2>
            <p className="mt-2 mb-6 text-[15px] text-gray-400">Latest from our blog</p>
            <div className="hidden lg:block">
              <Image src="/illustrations/image-9.svg" alt="" width={220} height={160} className="w-full max-w-[200px] opacity-60" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.12 + i * 0.08 }}
                className="group flex cursor-pointer gap-4 rounded-[14px] border border-white/8 bg-white/[0.04] p-4 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.07]"
              >
                <div className="hidden shrink-0 items-center justify-center rounded-xl bg-white/8 p-3 sm:flex">
                  <Image src={post.image} alt="" width={56} height={42} className="h-10 w-auto object-contain" />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 text-[15px] font-bold leading-snug text-white transition-colors duration-200 group-hover:text-[#60A5FA]">{post.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-400">{post.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
