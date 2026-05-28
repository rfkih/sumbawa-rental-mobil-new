"use client";

const WA_LINK =
  "https://wa.me/6282340715003?text=Halo,%20Saya%20Ingin%20menyewa%20mobil.";

const tiers = [
  {
    id: "harian",
    label: "Harian",
    desc: "Cocok untuk perjalanan singkat atau kebutuhan mendadak.",
    price: "Rp450.000",
    unit: "/ hari",
    items: [
      "Minimum 1 hari",
      "Armada pilihan",
      "AC & full service",
      "Asuransi dasar",
    ],
    highlighted: false,
  },
  {
    id: "mingguan",
    label: "Mingguan",
    badge: "Paling populer",
    desc: "Ideal untuk jangka menengah dengan harga lebih hemat.",
    price: "Rp350.000",
    unit: "/ hari",
    items: [
      "Minimum 7 hari",
      "Diskon spesial",
      "AC & full service",
      "Asuransi komprehensif",
      "Antar-jemput lokasi",
    ],
    highlighted: true,
  },
  {
    id: "bulanan",
    label: "Bulanan",
    desc: "Solusi efisien untuk operasional perusahaan atau jangka panjang.",
    price: "Rp300.000",
    unit: "/ hari",
    items
      "Minimum 30 hari",
      "Harga paling hemat",
      "AC & full service",
      "Asuransi komprehensif",
      "Prioritas armada",
      "Dedicated support",
    ],
    highlighted: false,
  },
];

export default function Layanan() {
  return (
    <section
      id="layanan"
      className="relative py-20 lg:py-24 bg-ink text-white overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-brand/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow-new justify-center mb-4" style={{ color: "#7B9FFF" }}>
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight mt-4 mb-4">
            Harga transparan, tanpa biaya tersembunyi
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Pilih paket yang sesuai kebutuhan — harian, mingguan, atau bulanan.
            Semua armada siap berangkat.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map(({ id, label, badge, desc, price, unit, items, highlighted }) => (
            <div
              key={id}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 transition-transform hover:-translate-y-1 ${
                highlighted
                  ? "bg-brand shadow-lift"
                  : "bg-white/5 border border-white/10 hover:bg-white/8"
              }`}
            >
              {/* Popular badge */}
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-white text-brand text-[11px] font-bold px-4 py-1.5 rounded-full shadow-soft">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {badge}
                  </span>
                </div>
              )}

              {/* Label + desc */}
              <div>
                <h3 className="text-xl font-extrabold mb-2">{label}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    highlighted ? "text-white/75" : "text-white/50"
                  }`}
                >
                  {desc}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold num-tabular leading-none">
                  {price}
                </span>
                <span
                  className={`text-sm font-medium mb-0.5 ${
                    highlighted ? "text-white/70" : "text-white/40"
                  }`}
                >
                  {unit}
                </span>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        highlighted ? "bg-white/20" : "bg-white/10"
                      }`}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    <span
                      className={
                        highlighted ? "text-white/90" : "text-white/60"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded-xl transition-all ${
                  highlighted
                    ? "bg-white text-brand hover:bg-brand-50"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                }`}
              >
                Pilih Paket Ini
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Corporate CTA strip */}
        <div className="mt-12 rounded-3xl bg-white/5 border border-white/10 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-lg">Butuh penawaran khusus?</p>
            <p className="text-white/50 text-sm mt-1">
              Untuk kebutuhan perusahaan, instansi, atau group booking — kami
              siapkan harga terbaik.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand text-white font-bold text-sm px-6 py-3 rounded-xl btn-primary-new shadow-lift"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
