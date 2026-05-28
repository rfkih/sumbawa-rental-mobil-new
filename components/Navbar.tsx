"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/6282340715003?text=Halo,%20Saya%20Ingin%20menyewa%20mobil.";
const PHONE = "+62 823-4071-5003";

const navItems = [
  { label: "Beranda", href: "beranda" },
  { label: "Armada", href: "armada" },
  { label: "Layanan", href: "layanan" },
  { label: "Tentang", href: "tentang" },
  { label: "Kontak", href: "kontak" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NavBar() {
  const [active, setActive] = useState("beranda");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"id" | "en">("id");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as "id" | "en" | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function toggleLang() {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
    localStorage.setItem("lang", next);
  }

  return (
    <header className="w-full fixed top-0 z-50 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-[1440px] mx-auto">
        {/* Pill nav container */}
        <div className="bg-white/85 backdrop-blur-xl border border-line-soft shadow-soft rounded-2xl pl-4 pr-2 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Nuansa Rinjani Rental"
              width={160}
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Center nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`nav-link text-sm font-semibold text-ink hover:text-brand transition-colors${
                  active === href ? " active text-brand" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language toggle pill — hidden on very small */}
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-0 rounded-full border border-line text-[11px] font-bold overflow-hidden"
            >
              <span
                className={`px-3 py-1.5 transition-colors ${
                  lang === "id"
                    ? "bg-brand text-white"
                    : "bg-transparent text-muted"
                }`}
              >
                ID
              </span>
              <span
                className={`px-3 py-1.5 transition-colors ${
                  lang === "en"
                    ? "bg-brand text-white"
                    : "bg-transparent text-muted"
                }`}
              >
                EN
              </span>
            </button>

            {/* Phone number — hidden below lg */}
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-ink px-3 py-1.5"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              {PHONE}
            </a>

            {/* WhatsApp CTA — hidden on mobile */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-brand text-white text-[13px] font-bold px-4 py-2 rounded-xl btn-primary-new"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* Mobile lang toggle */}
            <button
              onClick={toggleLang}
              className="sm:hidden text-[11px] font-bold px-2.5 py-1.5 rounded-lg border border-line text-ink"
            >
              {lang.toUpperCase()}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-xl bg-brand-50 gap-1.5"
              aria-label="Menu"
            >
              <span
                className={`block w-4.5 h-0.5 bg-ink rounded transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
                style={{ width: "18px", height: "2px" }}
              />
              <span
                className={`block h-0.5 bg-ink rounded transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
                style={{ width: "18px", height: "2px" }}
              />
              <span
                className={`block h-0.5 bg-ink rounded transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
                style={{ width: "18px", height: "2px" }}
              />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-line-soft shadow-card rounded-2xl overflow-hidden">
            <div className="px-4 pt-4 pb-2 flex flex-col gap-1">
              {navItems.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => {
                    scrollTo(href);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-sm font-semibold transition-colors ${
                    active === href
                      ? "bg-brand-50 text-brand"
                      : "text-ink hover:bg-brand-50"
                  }`}
                >
                  {label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              ))}
            </div>
            <div className="px-4 pb-4 pt-2 border-t border-line-soft flex flex-col gap-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold px-4 py-3 rounded-xl btn-primary-new"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 border border-line text-ink text-sm font-semibold px-4 py-2.5 rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                {PHONE}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
