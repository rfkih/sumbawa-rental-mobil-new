"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

const whyIcons = [
  <svg key="check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  <svg key="dollar" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
  <svg key="msg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
];

export default function AboutSections() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">

          {/* LEFT: Image */}
          <div className="relative">
            <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-card">
              <Image
                src="/tentang.jpg"
                alt="Tentang Nuansa Rinjani Rental"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Glass label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-white/85 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/40 shadow-soft">
                <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="14" r="3"/><path d="M21 14h-4l-3-3 3-3h4z"/><path d="M14 14H10"/></svg>
                </div>
                <div className="leading-tight">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-muted">{a.since}</p>
                  <p className="text-sm font-extrabold text-ink">{a.sinceV}</p>
                </div>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card border border-line-soft p-4 max-w-[210px]">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FBBF24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <span className="text-xs font-bold text-ink ml-1">4.9</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">{a.quote}</p>
              <p className="text-xs font-semibold text-ink mt-2">{a.quoteAuthor}</p>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="eyebrow-new mb-4 block">{a.eyebrow}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-ink tracking-tight leading-tight mt-4">
                {a.title}<span className="text-brand">{a.titleHighlight}</span>
              </h2>
            </div>

            <p className="text-muted leading-relaxed">{a.p1}</p>
            <p className="text-muted leading-relaxed">{a.p2}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {a.stats.map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-line-soft p-4 text-center">
                  <p className="text-3xl font-extrabold text-ink num-tabular leading-none">{value}</p>
                  <p className="text-xs text-muted font-medium mt-1.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Why us */}
            <ul className="flex flex-col gap-4 pt-2">
              {a.whyUs.map(({ title, desc }, i) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand flex-shrink-0 mt-0.5">
                    {whyIcons[i]}
                  </div>
                  <div>
                    <p className="font-extrabold text-ink text-sm">{title}</p>
                    <p className="text-xs text-muted mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
