"use client";

const steps = [
  {
    num: "01",
    title: "Pilih Mobil",
    desc: "Lihat koleksi armada kami dan pilih kendaraan yang sesuai kebutuhan dan budget Anda.",
    icon: (
      <svg
        width="24"
        height="24"
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
  },
  {
    num: "02",
    title: "Chat WhatsApp",
    desc: "Hubungi kami via WhatsApp untuk konfirmasi ketersediaan, harga, dan detail penyewaan.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Ambil Mobil",
    desc: "Lakukan pembayaran dan ambil mobil di lokasi kami atau kami antar ke tempat Anda.",
    icon: (
      <svg
        width="24"
        height="24"
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
];

export default function CaraSewa() {
  return (
    <section className="relative bg-cream py-20 lg:py-24 overflow-hidden">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow-new justify-center mb-4">
            Cara Sewa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-ink tracking-tight mt-4 mb-4">
            Proses mudah, 3 langkah saja
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto">
            Dari pilih mobil hingga berangkat, semuanya bisa diselesaikan
            dalam hitungan menit.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map(({ num, title, desc, icon }) => (
            <div
              key={num}
              className="relative bg-white rounded-3xl shadow-soft p-8 flex flex-col gap-5 border border-line-soft hover:shadow-card transition-shadow"
            >
              {/* Step number (top-right) */}
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-brand/8 num-tabular select-none">
                {num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center text-white flex-shrink-0">
                {icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-extrabold text-ink mb-2">
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
