"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const tabs = [
  {
    id: "hosting",
    label: "Hosting Providers",
    items: [
      {
        title: "Grow revenue while reducing operational costs",
        description:
          "Whether you do shared hosting or VPS, save on resources by up to 30% while increasing average revenue per user with fewer headaches.",
      },
      {
        title: "Lower support costs",
        description:
          "Automated security and performance optimization means far fewer tickets. Reduce support time by 50% with built-in monitoring.",
      },
      {
        title: "Increase revenue per customer",
        description:
          "Advanced caching and WordPress optimization let you offer premium hosting plans at higher margins.",
      },
    ],
  },
  {
    id: "agencies",
    label: "Agencies & Developers",
    items: [
      {
        title: "Launch projects with confidence",
        description:
          "Reliable infrastructure eliminates hosting-related issues. Never worry about client site downtime or slow performance.",
      },
      {
        title: "Protect your reputation",
        description:
          "Enterprise-grade security means your client sites stay safe, reducing incident response time and maintaining trust.",
      },
      {
        title: "Differentiate from competitors",
        description:
          "Offer premium WordPress hosting with built-in acceleration that positions you above the competition.",
      },
    ],
  },
  {
    id: "owners",
    label: "Site Owners",
    items: [
      {
        title: "Protect your reputation",
        description:
          "Keep your website fast, secure, and always available so your customers&apos; visits never result in frustration.",
      },
      {
        title: "Differentiate from competitors",
        description:
          "Website speed directly impacts conversion. Faster load times help you outperform competitors in search rankings.",
      },
      {
        title: "Better performance, lower pricing",
        description:
          "Get enterprise-level hosting performance without the enterprise price tag. Smart resource allocation means lower costs.",
      },
    ],
  },
];

export default function BusinessValue() {
  const [activeTab, setActiveTab] = useState("hosting");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="solutions" ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
            Built with{" "}
            <span className="text-[#2563EB]">Your Business</span> in Mind
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <div className="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {activeData.items.map((item, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-3xl text-[#2563EB]">&ldquo;</div>
              <h3 className="mb-3 text-lg font-bold text-[#111827]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4B5563]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
