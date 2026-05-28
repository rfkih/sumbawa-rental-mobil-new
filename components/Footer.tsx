"use client";

import Image from "next/image";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/6282340715003?text=Halo,%20Saya%20Ingin%20menyewa%20mobil.";
const EMAIL = "sumbawarentalmobil@gmail.com";
const PHONE = "+62 823-4071-5003";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-cream border-t border-line-soft">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        {/* ── Dark CTA banner ── */}
        <div className="relative bg-ink text-white rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden mb-14">
          {/* Glow blob */}
          <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-brand/25 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Left: headline */}
            <div>
              <span
                className="eyebrow-new mb-4"
                style={{ color: "#7B9FFF" }}
              >
                Siap berangkat?
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 mb-3">
                Hubungi kami sekarang dan pesan dalam 1 menit
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md">
                Tim kami siap membantu 24/7. Hubungi via WhatsApp, email, atau
                kunjungi lokasi kami langsung.
              </p>
            </div>

            {/* Right: contact rails */}
            <div className="flex flex-col gap-3">
              {/* WhatsApp */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-wa hover:bg-wa-700 transition-colors rounded-2xl px-5 py-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/70 mb-0.5">
                    WhatsApp
                  </p>
                  <p className="font-bold text-white">{PHONE}</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto opacity-60"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white/10 hover:bg-white/15 transition-colors rounded-2xl px-5 py-4 border border-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 mb-0.5">
                    Email
                  </p>
                  <p className="font-bold text-white text-sm">{EMAIL}</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto opacity-40"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>

              {/* Lokasi */}
              <div className="flex items-center gap-4 bg-white/10 rounded-2xl px-5 py-4 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
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
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 mb-0.5">
                    Lokasi
                  </p>
                  <p className="font-bold text-white text-sm leading-snug">
                    Jl. Lintas Sekongkang Bawah,
                    <br />
                    Sekongkang, Sumbawa Barat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Lower section ── */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          {/* Left: logo + info */}
          <div className="flex flex-col gap-6">
            <Image
              src="/logo.png"
              alt="Nuansa Rinjani Rental"
              width={160}
              height={40}
              className="object-contain h-10 w-auto"
            />

            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Layanan sewa mobil terpercaya di Sumbawa Barat. Armada terawat,
              harga bersaing, dan pelayanan 24/7 siap membantu perjalanan Anda.
            </p>

            <div className="flex flex-col gap-2 text-sm text-muted">
              <div className="flex items-start gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0 text-brand"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Jl. Lintas Sekongkang Bawah, Sekongkang, Kab. Sumbawa Barat,
                  NTB 84457
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 text-brand"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Senin – Minggu, 24 jam</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/nuansarinjanirental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-ink-2 flex items-center justify-center text-white hover:bg-brand transition-colors"
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/nuansarinjanirental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-ink-2 flex items-center justify-center text-white hover:bg-brand transition-colors"
                aria-label="Facebook"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-ink-2 flex items-center justify-center text-white hover:bg-wa transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="rounded-3xl overflow-hidden min-h-[300px] shadow-card border border-line-soft">
            <iframe
              title="Lokasi Nuansa Rinjani Rental"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0723920403298!2d116.7518609!3d-8.9654771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dccf3cced3286ed%3A0x429ebeb325350a2a!2sNuansa%20Rinjani%20Rental!5e0!3m2!1sid!2sid!4v1762065484840!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ minHeight: "300px", border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-line-soft">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
          <p>
            &copy; {year} Nuansa Rinjani Rental. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-brand transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-brand transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
