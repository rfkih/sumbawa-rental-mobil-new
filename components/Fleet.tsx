"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

const WA_BASE = "https://wa.me/6282340715003?text=Halo,%20Saya%20Ingin%20menyewa%20";

const carImages: Record<string, string> = {
  hilux: "/hilux.png",
  innova: "/innova.png",
  avanza: "/avanza.png",
};

const carColors: Record<string, string> = {
  hilux: "from-blue-50 to-slate-100",
  innova: "from-slate-50 to-zinc-100",
  avanza: "from-amber-50 to-orange-50",
};

const filterValues = ["all", "pickup", "mpv", "manual"];
const carCategories: Record<string, string> = {
  hilux: "pickup",
  innova: "mpv",
  avanza: "mpv",
};

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#2B59FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6l3 3 5-5" />
    </svg>
  );
}

function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Fleet() {
  const { t } = useLang();
  const f = t.fleet;
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalKey, setModalKey] = useState<string | null>(null);

  const filtered = f.cars.filter((car) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "manual") return car.trans.toLowerCase() === "manual";
    return carCategories[car.key] === activeFilter;
  });

  const modalCar = f.cars.find((c) => c.key === modalKey) ?? null;

  return (
    <>
      <section id="armada" className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow-new mb-4 block">{f.eyebrow}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-ink tracking-tight leading-tight mt-4">
                {f.title}
              </h2>
              <p className="text-muted mt-3 max-w-md text-sm sm:text-base">{f.subtitle}</p>
            </div>
            {/* Filter chips */}
            <div className="flex flex-wrap gap-2">
              {f.filters.map((label, i) => (
                <button
                  key={filterValues[i]}
                  onClick={() => setActiveFilter(filterValues[i])}
                  className={`chip transition-all ${
                    activeFilter === filterValues[i]
                      ? "bg-brand text-white border-brand"
                      : "hover:border-brand/30"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Car cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((car) => (
              <div
                key={car.key}
                className="car-card-new bg-white rounded-3xl border border-line-soft shadow-soft overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${carColors[car.key]} overflow-hidden`}>
                  <Image
                    src={carImages[car.key]}
                    alt={car.name}
                    fill
                    className="object-contain car-img p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="chip text-[11px]">{car.chip}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-wa rounded-full px-2.5 py-1 border border-wa/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-wa" />
                      {f.avail}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-xl font-extrabold text-ink">{car.name}</h3>
                    <p className="text-xs text-muted mt-0.5">{car.sub}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      { label: `${car.seats} ${t.fleet.perday === "/hari" ? "kursi" : "seats"}` },
                      { label: car.trans },
                      { label: car.fuel },
                    ].map(({ label }) => (
                      <div key={label} className="bg-cream rounded-xl py-2 px-1">
                        <span className="text-[11px] font-semibold text-ink">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-1.5">
                    {car.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-4 h-4 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                          <CheckIcon />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="mt-auto pt-4 border-t border-line-soft">
                    <div className="flex items-baseline justify-between mb-3">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-muted">{f.from}</p>
                      <p className="text-xl font-extrabold text-ink num-tabular">
                        {car.price}<span className="text-sm font-medium text-muted">{f.perday}</span>
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setModalKey(car.key)}
                        className="px-3 py-2.5 rounded-xl border border-line text-sm font-bold text-ink hover:border-brand hover:text-brand transition-colors"
                      >
                        {f.btnDetail}
                      </button>
                      <a
                        href={`${WA_BASE}${car.wa}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary-new inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-brand text-white text-sm font-bold shadow-lift"
                      >
                        {f.btnBook}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-8 text-sm text-muted text-center">
            {f.moreCta}{" "}
            <a href={`${WA_BASE}mobil.`} target="_blank" rel="noopener noreferrer" className="text-brand font-bold hover:underline underline-offset-4">
              {f.moreLink}
            </a>
          </p>
        </div>
      </section>

      {/* Detail Modal */}
      {modalCar && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
          onClick={() => setModalKey(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className={`relative aspect-[16/9] bg-gradient-to-br ${carColors[modalCar.key]} flex items-center justify-center overflow-hidden flex-shrink-0`}>
              <Image src={carImages[modalCar.key]} alt={modalCar.name} fill className="object-contain p-6" sizes="512px" />
              <button
                onClick={() => setModalKey(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-ink hover:bg-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col gap-5 overflow-y-auto">
              <div>
                <span className="chip">{modalCar.chip}</span>
                <h2 className="text-2xl font-extrabold text-ink mt-2">{modalCar.name}</h2>
                <p className="text-sm text-muted mt-0.5">{modalCar.sub}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: `${modalCar.seats} ${t.fleet.perday === "/hari" ? "kursi" : "seats"}` },
                  { label: modalCar.trans },
                  { label: modalCar.fuel },
                ].map(({ label }) => (
                  <div key={label} className="bg-cream rounded-2xl p-3 text-center">
                    <p className="text-xs font-semibold text-ink">{label}</p>
                  </div>
                ))}
              </div>

              <ul className="flex flex-col gap-2">
                {modalCar.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-ink">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-2 border-t border-line-soft">
                <div>
                  <p className="text-[11px] text-muted font-medium">{f.from}</p>
                  <p className="text-2xl font-extrabold text-ink num-tabular">
                    {modalCar.price}<span className="text-sm font-medium text-muted">{f.perday}</span>
                  </p>
                </div>
                <a
                  href={`${WA_BASE}${modalCar.wa}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-new inline-flex items-center gap-2 bg-wa text-white font-bold text-sm px-5 py-3 rounded-xl"
                >
                  <WAIcon />
                  {f.modalBook}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
