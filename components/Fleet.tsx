"use client";

import { useState } from "react";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/6282340715003?text=Halo,%20Saya%20Ingin%20menyewa%20mobil.";

interface Car {
  key: string;
  name: string;
  sub: string;
  image: string;
  badge: string;
  category: string;
  price: string;
  priceNote: string;
  seats: string;
  transmission: string;
  fuel: string;
  features: string[];
  available: boolean;
  color: string; // gradient css
}

const cars: Car[] = [
  {
    key: "hilux",
    name: "Toyota Hilux",
    sub: "Tipe G 4×4 Manual 2.4 Diesel",
    image: "/hilux.png",
    badge: "Pickup 4×4",
    category: "pickup",
    price: "Rp750.000",
    priceNote: "/hari",
    seats: "5 Kursi",
    transmission: "Manual",
    fuel: "Diesel",
    features: [
      "4WD all-terrain",
      "AC double blower",
      "Asuransi lengkap",
      "Bisa + sopir",
    ],
    available: true,
    color: "from-blue-50 to-slate-100",
  },
  {
    key: "innova",
    name: "Toyota Innova",
    sub: "Tipe G Manual 4×2 2.4 Diesel",
    image: "/innova.png",
    badge: "SUV MPV",
    category: "mpv",
    price: "Rp600.000",
    priceNote: "/hari",
    seats: "7 Kursi",
    transmission: "Manual",
    fuel: "Diesel",
    features: [
      "Kabin luas & nyaman",
      "AC otomatis dingin",
      "Asuransi lengkap",
      "Bisa + sopir",
    ],
    available: true,
    color: "from-slate-50 to-zinc-100",
  },
  {
    key: "avanza",
    name: "Toyota Avanza",
    sub: "Tipe G Manual 4×2 1.5 Bensin",
    image: "/avanza.png",
    badge: "SUV MPV",
    category: "mpv",
    price: "Rp450.000",
    priceNote: "/hari",
    seats: "7 Kursi",
    transmission: "Manual",
    fuel: "Bensin",
    features: [
      "Irit & ekonomis",
      "AC dingin",
      "Asuransi dasar",
      "Bisa + sopir",
    ],
    available: true,
    color: "from-amber-50 to-orange-50",
  },
];

const filters = [
  { label: "Semua", value: "all" },
  { label: "Pickup 4×4", value: "pickup" },
  { label: "SUV MPV", value: "mpv" },
  { label: "Manual", value: "manual" },
];

interface ModalProps {
  car: Car;
  onClose: () => void;
}

function DetailModal({ car, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div
          className={`relative aspect-[16/9] bg-gradient-to-br ${car.color} flex items-center justify-center overflow-hidden`}
        >
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-contain p-6"
            sizes="512px"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-ink hover:bg-white transition-colors"
          >
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
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="chip">{car.badge}</span>
              {car.available && (
                <span className="chip bg-green-50 text-wa border-wa/10">
                  Tersedia
                </span>
              )}
            </div>
            <h2 className="text-2xl font-extrabold text-ink mt-2">
              {car.name}
            </h2>
            <p className="text-sm text-muted mt-0.5">{car.sub}</p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "👥", label: car.seats },
              { icon: "⚙️", label: car.transmission },
              { icon: "⛽", label: car.fuel },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="bg-cream rounded-2xl p-3 text-center"
              >
                <div className="text-lg mb-1">{icon}</div>
                <p className="text-xs font-semibold text-ink">{label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <ul className="flex flex-col gap-2">
            {car.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm">
                <span className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="#2B59FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 6l3 3 5-5" />
                  </svg>
                </span>
                <span className="text-ink">{f}</span>
              </li>
            ))}
          </ul>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-line-soft">
            <div>
              <p className="text-[11px] text-muted font-medium">Harga mulai</p>
              <p className="text-2xl font-extrabold text-ink num-tabular">
                {car.price}
                <span className="text-sm font-medium text-muted">
                  {car.priceNote}
                </span>
              </p>
            </div>
            <a
              href={`${WA_LINK.replace("menyewa%20mobil", `menyewa%20${encodeURIComponent(car.name)}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-new inline-flex items-center gap-2 bg-wa text-white font-bold text-sm px-5 py-3 rounded-xl"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan via WA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalCar, setModalCar] = useState<Car | null>(null);

  const filtered = cars.filter((c) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "manual")
      return c.transmission.toLowerCase() === "manual";
    return c.category === activeFilter;
  });

  return (
    <>
      <section id="armada" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow-new mb-4 block">Armada Kami</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-ink tracking-tight leading-tight mt-4">
                Pilih kendaraan
                <br className="hidden sm:block" /> terbaik Anda
              </h2>
              <p className="text-muted mt-3 max-w-md">
                Semua armada terawat, ber-AC, dan siap jalan kapan pun Anda
                butuhkan.
              </p>
            </div>
            {/* Filter chips */}
            <div className="flex flex-wrap gap-2">
              {filters.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActiveFilter(value)}
                  className={`chip transition-all ${
                    activeFilter === value
                      ? "bg-brand text-white border-brand"
                      : "hover:border-brand/30"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Car cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((car) => (
              <div
                key={car.key}
                className="car-card-new bg-white rounded-3xl border border-line-soft shadow-soft overflow-hidden flex flex-col"
              >
                {/* Image area */}
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${car.color} overflow-hidden`}
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain car-img p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="chip text-[11px]">{car.badge}</span>
                  </div>
                  {car.available && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-wa rounded-full px-2.5 py-1 border border-wa/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-wa" />
                        Tersedia
                      </span>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-xl font-extrabold text-ink">
                      {car.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{car.sub}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      {
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                          </svg>
                        ),
                        label: car.seats,
                      },
                      {
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                          </svg>
                        ),
                        label: car.transmission,
                      },
                      {
                        icon: (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 22V2l18 10-18 10z" />
                          </svg>
                        ),
                        label: car.fuel,
                      },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        className="bg-cream rounded-xl py-2 px-1 flex flex-col items-center gap-1"
                      >
                        <span className="text-brand">{icon}</span>
                        <span className="text-[11px] font-semibold text-ink">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-1.5">
                    {car.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-muted"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="#2B59FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-shrink-0"
                        >
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price + buttons */}
                  <div className="mt-auto pt-4 border-t border-line-soft flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-muted font-medium">
                        Mulai dari
                      </p>
                      <p className="text-xl font-extrabold text-ink num-tabular leading-tight">
                        {car.price}
                        <span className="text-xs font-medium text-muted">
                          {car.priceNote}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setModalCar(car)}
                        className="text-sm font-semibold text-brand border border-brand/20 px-4 py-2 rounded-xl hover:bg-brand-50 transition-colors"
                      >
                        Detail
                      </button>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-new inline-flex items-center gap-1.5 bg-wa text-white text-sm font-bold px-4 py-2 rounded-xl"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Pesan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail modal */}
      {modalCar && (
        <DetailModal car={modalCar} onClose={() => setModalCar(null)} />
      )}
    </>
  );
}
