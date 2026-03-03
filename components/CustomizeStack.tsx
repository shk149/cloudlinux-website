"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stackProducts = [
  { name: "CloudLinux", default: true },
  { name: "AccelerateWP", default: true },
  { name: "Mike Cache", default: false },
  { name: "ImunifyAV", default: false },
  { name: "Imunify360", default: false },
  { name: "ImunifyAV+", default: false },
  { name: "Imunify Connect", default: false },
];

const featureCategories = [
  {
    title: "Performance & Stability",
    color: "#2563EB",
    features: [
      "Ensure fair per-hosting-account resource allocation",
      "Avoid page errors and timeouts from resource limits",
      "Database server monitoring",
      "Retain more processes per account",
      "Handle multiple concurrent PHP requests more efficiently",
    ],
  },
  {
    title: "Security",
    color: "#2563EB",
    features: [
      "Enterprise-class malware defense",
      "Real-time security vulnerability patching",
      "Web application firewall",
      "Intrusion detection and prevention",
    ],
  },
  {
    title: "Lifecycle",
    color: "#2563EB",
    features: [
      "Live patching for PHP and OpenSSL",
      "Extended lifecycle support for older distributions",
    ],
  },
  {
    title: "Program Value",
    color: "#2563EB",
    features: [
      "Up to 40% VPS savings with bundles",
      "White-label PHP version with your brand's name",
    ],
  },
];

export default function CustomizeStack() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    stackProducts.filter((p) => p.default).map((p) => p.name)
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const toggleProduct = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  return (
    <section ref={ref} className="bg-gradient-to-b from-[#F0F5FF] to-[#E8EFF9] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#111827] md:text-4xl">
            Customize <span className="text-[#2563EB]">Your Stack</span>
          </h2>
          <p className="mx-auto max-w-lg text-[#4B5563]">
            Select products to see what capabilities you gain and what you might
            be missing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]"
        >
          {/* Left - Select Products */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-[#111827]">
              Select Products
            </h3>
            <div className="flex flex-col gap-2">
              {stackProducts.map((product) => (
                <label
                  key={product.name}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-all ${
                    selectedProducts.includes(product.name)
                      ? "border-[#2563EB]/40 bg-white shadow-sm"
                      : "border-gray-200 bg-white/60 hover:border-[#2563EB]/20 hover:bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.name)}
                    onChange={() => toggleProduct(product.name)}
                    className="h-4 w-4 rounded border-gray-300 text-[#2563EB] accent-[#2563EB]"
                  />
                  <span className="text-sm font-medium text-[#111827]">
                    {product.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Right - What You Gain */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-[#111827]">
              What You Gain
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {featureCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <h4 className="mb-3 text-sm font-bold text-[#2563EB]">
                    {category.title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {category.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[#4B5563]"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
