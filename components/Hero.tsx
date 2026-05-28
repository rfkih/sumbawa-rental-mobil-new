"use client";

import Image from "next/image";

const WA_LINK =
  "https://wa.me/6282340715003?text=Halo,%20Saya%20Ingin%20menyewa%20mobil.";

const trustItems = [
  { value: "4.9★", label: "Rating" },
  { value: "200+", label: "Pelanggan" },
  { value: "24/7", label: "Layanan" },
  { value: "Driver", label: "Tersedia" },
];

const contextStrip = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Lokasi",
    value: "Sekongkang, Sumbawa Barat",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8l5 2v5h-5" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    label: "Layanan",
    value: "Harian · Mingguan · Bulanan",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    label: "Armada",
    value: "Hilux · Innova · Avanza",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
      </svg>
    ),
    label: "Konfirmasi",
    value: "Chat WhatsApp · Langsung Jalan",
  },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative pt-32 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative">
        {/* Main grid */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* ── LEFT ── */}
          <div className="relative z-10 flex flex-col items-start">
            <span className="eyebrow-new mb-5">
              Rental Mobil · Sumbawa Barat
            </span>

            <h1 className="text-[44px] sm:text-[58px] lg:text-[68px] xl:text-[74px] font-extrabold leading-[1.02] tracking-[-0.025em] text-ink mb-6">
              Sewa mobil dengan{" "}
              <span className="text-brand">mudah</span>,{" "}
              <span className="text-brand">cepat</span>, dan{" "}
              <span className="text-brand">terpercaya</span>.
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-lg mb-8">
              Nuansa Rinjani Rental menyediakan layanan sewa mobil di Sumbawa
              Barat untuk kebutuhan pribadi, perjalanan bisnis, dan operasional
              perusahaan dengan harga kompetitif.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => {
                  document
                    .getElementById("armada")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="btn-primary-new inline-flex items-center gap-2 bg-brand text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lift"
              >
                Pilih Mobil Anda
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-ink/15 text-ink font-bold text-sm px-6 py-3.5 rounded-xl hover:border-brand hover:text-brand transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-wa"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Tanya via WhatsApp
              </a>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-4 gap-4 w-full max-w-xs sm:max-w-sm">
              {trustItems.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <span className="text-lg sm:text-xl font-extrabold text-ink num-tabular">
                    {value}
                  </span>
                  <span className="text-[11px] text-muted font-medium mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="relative lg:h-[560px] h-[360px]">
            {/* Pentagon background */}
            <div className="hero-pentagon" />

            {/* Car image */}
            <div className="relative z-10 w-full h-full">
              <Image
                src="/hilux2.png"
                alt="Toyota Hilux — Nuansa Rinjani Rental"
                fill
                className="object-contain car-img drop-shadow-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating card: Tersedia hari ini */}
            <div className="hidden md:flex absolute bottom-6 -left-4 z-20 items-center gap-3 bg-white rounded-2xl shadow-card px-4 py-3 border border-line-soft">
              <span className="w-2.5 h-2.5 rounded-full bg-wa flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-xs font-semibold text-ink">
                  Tersedia hari ini
                </p>
                <p className="text-[11px] text-muted">Siap antar lokasi</p>
              </div>
            </div>

            {/* Floating card: price */}
            <div className="hidden md:block absolute top-10 -right-2 z-20 bg-brand text-white rounded-2xl shadow-lift px-5 py-3">
              <p className="text-[11px] font-semibold opacity-80 mb-0.5">
                Mulai dari
              </p>
              <p className="text-xl font-extrabold num-tabular">
                Rp450.000
                <span className="text-sm font-medium opacity-80">/hari</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Context strip ── */}
        <div className="mt-14 pt-8 border-t border-line-soft grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contextStrip.map(({ icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-xs font-bold text-muted uppercase tracking-wide mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold text-ink">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
