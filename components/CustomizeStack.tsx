"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stackProducts = [
  "CloudLinux",
  "AccelerateWP",
  "Mike Cache",
  "ImunifyAV",
  "Imunify360",
  "ImunifyAV+",
  "Imunify Connect",
];

const featureCategories = [
  {
    title: "Performance & Stability",
    icon: "gauge",
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
    icon: "shield",
    features: [
      "Enterprise-class malware defense",
      "Real-time security vulnerability patching",
      "Web application firewall",
      "Intrusion detection and prevention",
    ],
  },
  {
    title: "Lifecycle",
    icon: "refresh",
    features: [
      "Live patching for PHP and OpenSSL",
      "Extended lifecycle support for older distributions",
    ],
  },
  {
    title: "Program Value",
    icon: "star",
    features: [
      "Up to 40% VPS savings with bundles",
      "White-label PHP version with your brand's name",
    ],
  },
];

export default function CustomizeStack() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([
    "CloudLinux",
    "AccelerateWP",
  ]);
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
    <section ref={ref} className="bg-white px-6 py-24">
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
          className="mt-12 grid gap-12 lg:grid-cols-2"
        >
          {/* Left - Select Products */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#111827]">
              Select Products
            </h3>
            <div className="flex flex-col gap-3">
              {stackProducts.map((product) => (
                <label
                  key={product}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-5 py-4 transition-all hover:border-[#2563EB]/30 hover:bg-blue-50/30"
                >
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product)}
                    onChange={() => toggleProduct(product)}
                    className="h-4 w-4 rounded border-gray-300 text-[#2563EB] accent-[#2563EB]"
                  />
                  <span className="text-sm font-medium text-[#111827]">
                    {product}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Right - What You Gain */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-[#111827]">
              What You Gain
            </h3>
            <div className="flex flex-col gap-6">
              {featureCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#2563EB]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
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
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
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
