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
    features: [
      "Ensure fair per-hosting-account resource allocation",
      "Avoid page errors and timeouts from resource limits",
      "Database server monitoring",
      "Retain more processes per account",
      "Handle multiple concurrent PHP requests efficiently",
    ],
  },
  {
    title: "Security",
    features: [
      "Enterprise-class malware defense",
      "Real-time security vulnerability patching",
      "Web application firewall",
      "Intrusion detection and prevention",
    ],
  },
  {
    title: "Lifecycle",
    features: [
      "Live patching for PHP and OpenSSL",
      "Extended lifecycle support for older distributions",
    ],
  },
  {
    title: "Program Value",
    features: [
      "Up to 40% VPS savings with bundles",
      "White-label PHP version with your brand",
    ],
  },
];

export default function CustomizeStack() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    stackProducts.filter((p) => p.default).map((p) => p.name)
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const toggleProduct = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  return (
    <section ref={ref} className="bg-gradient-to-b from-[#EFF4FB] to-[#E4EBF5] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-2xl font-bold text-[#111827] sm:text-3xl md:text-4xl">
            Customize <span className="text-[#2563EB]">Your Stack</span>
          </h2>
          <p className="mx-auto max-w-md text-sm text-[#4B5563] sm:text-base">
            Select products to see what capabilities you gain
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid gap-8 lg:grid-cols-[260px_1fr]"
        >
          {/* Left - Select Products */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#111827]">
              Select Products
            </h3>
            <div className="flex flex-col gap-2">
              {stackProducts.map((product) => (
                <label
                  key={product.name}
                  className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-sm transition-all ${
                    selectedProducts.includes(product.name)
                      ? "border-[#2563EB]/30 bg-white shadow-sm"
                      : "border-gray-200/80 bg-white/50 hover:border-[#2563EB]/15 hover:bg-white/80"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.name)}
                    onChange={() => toggleProduct(product.name)}
                    className="h-3.5 w-3.5 rounded border-gray-300 accent-[#2563EB]"
                  />
                  <span className="text-[13px] font-medium text-[#111827]">
                    {product.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Right - What You Gain */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-[#111827]">
              What You Gain
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {featureCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
                >
                  <h4 className="mb-2.5 text-xs font-bold text-[#2563EB] sm:text-sm">
                    {category.title}
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {category.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-1.5 text-xs leading-relaxed text-[#4B5563] sm:text-[13px]"
                      >
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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
