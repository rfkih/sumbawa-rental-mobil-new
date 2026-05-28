"use client";

import Image from "next/image";

const stats = [
  { value: "8+", label: "Tahun Pengalaman" },
  { value: "3", label: "Jenis Armada" },
  { value: "200+", label: "Pelanggan Puas" },
  { value: "24/7", label: "Siap Melayani" },
];

const whyUs = [
  {
    title: "Armada terawat & siap jalan",
    desc: "Semua kendaraan menjalani pengecekan rutin sebelum diserahkan ke pelanggan.",
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
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Harga transparan, tanpa biaya tersembunyi",
    desc: "Harga yang kami tawarkan sudah final — tidak ada biaya tambahan di luar kesepakatan.",
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
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: "Layanan 24/7 responsif",
    desc: "Tim kami selalu siap menjawab pertanyaan dan membantu kapan pun Anda butuhkan.",
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function AboutSections() {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Image ── */}
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
              {/* Glass label overlay */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/85 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-soft border border-white/60">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2B59FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-sm font-bold text-ink">Sejak 2018</span>
              </div>
            </div>

            {/* Floating testimonial card */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card border border-line-soft p-4 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#FBBF24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold text-ink">4.9</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                "Pelayanan cepat, mobil bersih dan terawat. Sangat recommended!"
              </p>
              <p className="text-xs font-semibold text-ink mt-2">
                — Budi S., Pelanggan
              </p>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="eyebrow-new mb-4">Tentang Kami</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-ink tracking-tight leading-tight mt-4">
                Mitra perjalanan
                <br />
                terpercaya Anda di{" "}
                <span className="text-brand">Sumbawa Barat</span>
              </h2>
            </div>

            <p className="text-muted leading-relaxed">
              <strong className="text-ink">Nuansa Rinjani Rental</strong>{" "}
              adalah layanan penyewaan mobil modern yang memudahkan Anda
              menemukan kendaraan terbaik untuk setiap kebutuhan — mulai dari
              perjalanan pribadi, bisnis, hingga liburan keluarga. Kami
              berkomitmen menghadirkan layanan cepat, aman, dan terpercaya
              dengan armada yang terawat dan siap jalan.
            </p>

            <p className="text-muted leading-relaxed">
              Berbasis di Sekongkang, Sumbawa Barat, kami melayani pelanggan
              dengan sistem pemesanan mudah via WhatsApp — dari konfirmasi
              hingga antar-jemput kendaraan, semuanya dapat diselesaikan dalam
              hitungan menit.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-cream rounded-2xl p-4 text-center border border-line-soft"
                >
                  <p className="text-3xl font-extrabold text-brand num-tabular">
                    {value}
                  </p>
                  <p className="text-xs text-muted font-medium mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Why us */}
            <div className="flex flex-col gap-4 pt-2">
              {whyUs.map(({ title, desc, icon }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-ink text-sm">{title}</p>
                    <p className="text-xs text-muted mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
