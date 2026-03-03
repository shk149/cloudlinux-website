"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "hosting",
    label: "Hosting Providers",
    items: [
      {
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        ),
        title: "Grow revenue while reducing costs",
        points: [
          "Save on resources by up to 30% with smart allocation",
          "Increase average revenue per user with premium plans",
          "Fewer server headaches with automated management",
        ],
      },
      {
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        ),
        title: "Lower support costs dramatically",
        points: [
          "Automated security reduces tickets by 50%+",
          "Built-in monitoring catches issues before users do",
          "Self-healing infrastructure means fewer escalations",
        ],
      },
      {
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        ),
        title: "Increase revenue per customer",
        points: [
          "Advanced caching for premium hosting tiers",
          "WordPress optimization justifies higher pricing",
          "Bundle products to maximize plan value",
        ],
      },
    ],
  },
  {
    id: "agencies",
    label: "Agencies & Developers",
    items: [
      { icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>), title: "Launch projects with confidence", points: ["Reliable infrastructure eliminates hosting issues", "Never worry about client site downtime", "Consistent performance across all projects"] },
      { icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>), title: "Protect your reputation", points: ["Enterprise-grade security keeps client sites safe", "Reduce incident response time significantly", "Maintain trust with proactive protection"] },
      { icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>), title: "Differentiate from competitors", points: ["Offer premium hosting with built-in acceleration", "Position above competition with superior security", "Deliver faster sites that convert better"] },
    ],
  },
  {
    id: "owners",
    label: "Site Owners",
    items: [
      { icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" /></svg>), title: "Keep your website fast and secure", points: ["Always-on protection for your online presence", "Faster page loads improve visitor experience", "Automatic security updates without downtime"] },
      { icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), title: "Outperform competitors in search", points: ["Website speed directly impacts conversion rates", "Faster load times improve SEO rankings", "Better Core Web Vitals scores"] },
      { icon: (<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: "Enterprise performance, fair pricing", points: ["Get enterprise-level hosting without the price tag", "Smart resource allocation means lower costs", "No hidden fees or surprise overages"] },
    ],
  },
];

export default function BusinessValue() {
  const [activeTab, setActiveTab] = useState("hosting");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="solutions" ref={ref} className="section-pad bg-white">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <h2 className="heading-lg text-[#111827]">
            Built with <span className="text-[#2563EB]">Your Business</span> in Mind
          </h2>
        </motion.div>

        {/* Tabs — horizontal scroll on mobile, row on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 flex justify-center"
        >
          <div className="flex gap-1 overflow-x-auto rounded-full border border-gray-200 bg-gray-50 p-1 max-sm:w-full max-sm:scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-full px-5 py-2 text-[13px] font-semibold whitespace-nowrap transition-all duration-200 sm:text-[14px] ${
                  activeTab === tab.id
                    ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20"
                    : "text-[#545769] hover:text-[#111827]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards — 3 side by side on md+, single column on mobile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {activeData.items.map((item, i) => (
              <div
                key={i}
                className="rounded-[14px] border border-gray-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] sm:p-6"
              >
                <div className="mb-3 inline-flex rounded-xl bg-blue-50 p-2.5 text-[#2563EB]">
                  {item.icon}
                </div>
                <h3 className="mb-2.5 text-[15px] font-bold leading-snug text-[#111827] sm:text-[16px]">
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-[13px] leading-relaxed text-[#545769] sm:text-[14px]">
                      <svg className="mt-[3px] h-4 w-4 shrink-0 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
