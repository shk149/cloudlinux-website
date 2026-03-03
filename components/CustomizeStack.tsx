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
  { title: "Performance & Stability", features: ["Ensure fair per-hosting-account resource allocation", "Avoid page errors and timeouts from resource limits", "Database server monitoring", "Retain more processes per account", "Handle multiple concurrent PHP requests efficiently"] },
  { title: "Security", features: ["Enterprise-class malware defense", "Real-time security vulnerability patching", "Web application firewall", "Intrusion detection and prevention"] },
  { title: "Lifecycle", features: ["Live patching for PHP and OpenSSL", "Extended lifecycle support for older distributions"] },
  { title: "Program Value", features: ["Up to 40% VPS savings with bundles", "White-label PHP version with your brand"] },
];

export default function CustomizeStack() {
  const [selected, setSelected] = useState<string[]>(stackProducts.filter((p) => p.default).map((p) => p.name));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-pad bg-gradient-to-b from-[#EEF2FA] to-[#E4EAF4]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-6 text-center">
          <h2 className="heading-lg text-[#111827]">
            Customize <span className="text-[#2563EB]">Your Stack</span>
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[15px] text-[#545769]">
            Select products to see what capabilities you gain
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.15 }} className="grid gap-5 lg:grid-cols-[260px_1fr]">
          <div>
            <h3 className="mb-3 text-[12px] font-bold uppercase tracking-wider text-[#111827]">Select Products</h3>
            <div className="flex flex-col gap-2">
              {stackProducts.map((p) => (
                <label key={p.name} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 transition-all duration-200 ${selected.includes(p.name) ? "border-[#2563EB]/30 bg-white shadow-sm" : "border-gray-200/70 bg-white/50 hover:bg-white/80"}`}>
                  <input type="checkbox" checked={selected.includes(p.name)} onChange={() => setSelected((s) => s.includes(p.name) ? s.filter((x) => x !== p.name) : [...s, p.name])} className="h-4 w-4 rounded accent-[#2563EB]" />
                  <span className="text-[14px] font-medium text-[#111827]">{p.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-[14px] border border-gray-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:p-7">
            <h3 className="mb-5 text-[12px] font-bold uppercase tracking-wider text-[#111827]">What You Gain</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {featureCategories.map((cat) => (
                <div key={cat.title}>
                  <h4 className="mb-2 text-[14px] font-bold text-[#2563EB]">{cat.title}</h4>
                  <ul className="flex flex-col gap-1.5">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] leading-relaxed text-[#545769]">
                        <svg className="mt-[3px] h-3.5 w-3.5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
