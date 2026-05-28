"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "id" | "en";

const translations = {
  id: {
    // Navbar
    nav: {
      beranda: "Beranda",
      armada: "Armada",
      layanan: "Layanan",
      tentang: "Tentang",
      kontak: "Kontak",
      whatsapp: "WhatsApp",
      chat: "Chat WhatsApp",
    },

    // Hero
    hero: {
      eyebrow: "Rental Mobil · Sumbawa Barat",
      title1: "Sewa mobil dengan ",
      title2: "mudah",
      title3: ", ",
      title4: "cepat",
      title5: ", dan ",
      title6: "terpercaya",
      title7: ".",
      subtitle:
        "Nuansa Rinjani Rental menyediakan layanan sewa mobil di Sumbawa Barat untuk kebutuhan pribadi, perjalanan bisnis, dan operasional perusahaan dengan harga kompetitif.",
      cta1: "Pilih Mobil Anda",
      cta2: "Tanya via WhatsApp",
      trust: [
        { value: "4.9★", label: "Rating" },
        { value: "200+", label: "Pelanggan" },
        { value: "24/7", label: "Layanan" },
        { value: "Driver", label: "Tersedia" },
      ],
      floatAvail: "Tersedia hari ini",
      floatSub: "Siap antar lokasi",
      floatFrom: "Mulai dari",
      ctx: [
        { label: "Lokasi", value: "Sekongkang, Sumbawa Barat" },
        { label: "Layanan", value: "Harian · Mingguan · Bulanan" },
        { label: "Armada", value: "Hilux · Innova · Avanza" },
        { label: "Konfirmasi", value: "Chat WhatsApp · Langsung Jalan" },
      ],
    },

    // Cara Sewa
    cara: {
      eyebrow: "Cara Sewa",
      title: "Tiga langkah, kunci di tangan Anda.",
      subtitle:
        "Tidak perlu antri, tidak perlu paperwork rumit. Cukup pilih mobil, kabari kami via WhatsApp, dan tim kami siapkan kendaraan untuk Anda.",
      steps: [
        {
          num: "01",
          title: "Pilih mobil",
          desc: "Lihat armada kami — Hilux, Innova, atau Avanza — dan pilih yang paling sesuai dengan rencana perjalanan Anda.",
        },
        {
          num: "02",
          title: "Chat WhatsApp",
          desc: "Klik tombol WhatsApp, sebutkan tanggal & durasi sewa. Tim kami konfirmasi ketersediaan dan harga dalam hitungan menit.",
        },
        {
          num: "03",
          title: "Ambil mobil",
          desc: "Datang ke kantor kami di Sekongkang atau request pickup. Mobil siap dengan tangki penuh dan dokumen lengkap.",
        },
      ],
    },

    // Fleet
    fleet: {
      eyebrow: "Armada Kami",
      title: "Mobil terawat untuk setiap rencana.",
      subtitle:
        "Pickup 4×4 untuk medan berat di Sumbawa, MPV nyaman untuk keluarga atau perjalanan dinas. Pilih dan pesan dalam satu langkah.",
      filters: ["Semua", "Pickup 4×4", "SUV / MPV", "Manual"],
      avail: "Tersedia",
      from: "Mulai dari",
      perday: "/hari",
      btnDetail: "Detail",
      btnBook: "Pesan",
      moreCta: "Butuh tipe lain?",
      moreLink: "Tanya armada via WhatsApp →",
      modalBook: "Pesan via WA",
      cars: [
        {
          key: "hilux",
          name: "Toyota Hilux",
          sub: "Tipe G Manual 4×4 2.4L",
          chip: "4×4 · Manual",
          price: "Rp750.000",
          seats: "5",
          trans: "Manual",
          fuel: "Solar",
          features: [
            "AC dingin, audio Bluetooth",
            "Asuransi all-risk Astra",
            "Driver tersedia (opsional)",
          ],
          wa: "Toyota%20Hilux",
        },
        {
          key: "innova",
          name: "Toyota Innova",
          sub: "Tipe G Manual 4×2 2.4L",
          chip: "MPV · 7 Kursi",
          price: "Rp600.000",
          seats: "7",
          trans: "Manual",
          fuel: "Solar",
          features: [
            "Kabin luas, cocok keluarga",
            "AC double-blower",
            "Driver tersedia (opsional)",
          ],
          wa: "Toyota%20Innova",
        },
        {
          key: "avanza",
          name: "Toyota Avanza",
          sub: "Tipe G Manual 4×2 1.5L",
          chip: "MPV · Hemat BBM",
          price: "Rp450.000",
          seats: "7",
          trans: "Manual",
          fuel: "Bensin",
          features: [
            "Hemat BBM, lincah di kota",
            "AC dingin",
            "Driver tersedia (opsional)",
          ],
          wa: "Toyota%20Avanza",
        },
      ],
    },

    // Layanan
    layanan: {
      eyebrow: "Pilihan Paket",
      title: "Harga transparan, tanpa biaya tersembunyi.",
      subtitle:
        "Pilih paket yang sesuai kebutuhan — harian, mingguan, atau bulanan. Semua armada siap berangkat.",
      popular: "Paling Populer",
      pickPlan: "Pilih Paket Ini",
      corpTitle: "Butuh penawaran khusus?",
      corpSub:
        "Untuk kebutuhan perusahaan, instansi, atau group booking — kami siapkan harga terbaik.",
      corpCta: "Hubungi Kami",
      tiers: [
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
          desc: "Ideal untuk jangka menengah dengan harga lebih hemat.",
          price: "Rp450.000",
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
          price: "Rp450.000",
          unit: "/ hari",
          items: [
            "Minimum 30 hari",
            "Harga paling hemat",
            "AC & full service",
            "Asuransi komprehensif",
            "Prioritas armada",
            "Dedicated support",
          ],
          highlighted: false,
        },
      ],
    },

    // About
    about: {
      eyebrow: "Tentang Kami",
      since: "Sejak 2018",
      sinceV: "Melayani Sumbawa Barat & sekitarnya",
      quote: '"Mobil bersih, driver ramah, harga jujur."',
      quoteAuthor: "— Dimas, tamu Lakey 2025",
      title: "Layanan rental yang ",
      titleHighlight: "jujur, terawat, dan tepat waktu.",
      p1: "Nuansa Rinjani Rental adalah platform penyewaan mobil yang memudahkan Anda menemukan kendaraan terbaik untuk setiap kebutuhan — mulai dari perjalanan pribadi, bisnis, hingga liburan keluarga.",
      p2: "Kami berbasis di Sekongkang, Sumbawa Barat, dan melayani pelanggan dari Mataram hingga Bali, termasuk kru tambang Batu Hijau, wisatawan Lakey, dan ekspedisi Tambora.",
      stats: [
        { value: "8+", label: "Tahun pengalaman" },
        { value: "3", label: "Jenis armada utama" },
        { value: "200+", label: "Pelanggan puas" },
        { value: "24/7", label: "Bantuan via WA" },
      ],
      whyUs: [
        {
          title: "Mobil terawat & asuransi Astra",
          desc: "Service rutin, dokumen lengkap, asuransi all-risk untuk ketenangan perjalanan.",
        },
        {
          title: "Harga transparan, tanpa biaya tersembunyi",
          desc: "Apa yang Anda lihat adalah yang Anda bayar — termasuk asuransi & pajak.",
        },
        {
          title: "Tim lokal, respon menit-an",
          desc: "WhatsApp kami dibalas cepat, dalam Bahasa Indonesia atau English.",
        },
      ],
    },

    // Footer
    footer: {
      eyebrow: "Siap berangkat?",
      title: "Hubungi kami sekarang.",
      titleHighlight: "Mobil siap, harga jujur.",
      subtitle:
        "Tim Nuansa Rinjani Rental online setiap hari. Cek ketersediaan armada dan dapatkan konfirmasi harga dalam menit.",
      officeLabel: "Lokasi kantor",
      officeValue: "Sekongkang Bawah, Sumbawa Barat",
      about:
        "Penyedia layanan sewa mobil di Sumbawa Barat untuk perjalanan pribadi, dinas, dan operasional perusahaan. Berbasis di Sekongkang Bawah.",
      address:
        "Jl. Lintas Sekongkang Bawah,\nSekongkang, Kab. Sumbawa Barat,\nNusa Tenggara Barat, Indonesia",
      hours: "Senin – Minggu · 07:00 – 22:00 WITA",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },

  en: {
    nav: {
      beranda: "Home",
      armada: "Fleet",
      layanan: "Services",
      tentang: "About",
      kontak: "Contact",
      whatsapp: "WhatsApp",
      chat: "Chat WhatsApp",
    },

    hero: {
      eyebrow: "Car Rental · West Sumbawa",
      title1: "Rent a car with ",
      title2: "ease",
      title3: ", ",
      title4: "speed",
      title5: ", and ",
      title6: "trust",
      title7: ".",
      subtitle:
        "Nuansa Rinjani Rental provides car hire in West Sumbawa for personal trips, business travel, and corporate operations at competitive rates.",
      cta1: "Choose Your Car",
      cta2: "Ask via WhatsApp",
      trust: [
        { value: "4.9★", label: "Rating" },
        { value: "200+", label: "Customers" },
        { value: "24/7", label: "Service" },
        { value: "Driver", label: "Available" },
      ],
      floatAvail: "Available today",
      floatSub: "Delivery to your location",
      floatFrom: "Starting from",
      ctx: [
        { label: "Location", value: "Sekongkang, West Sumbawa" },
        { label: "Service", value: "Daily · Weekly · Monthly" },
        { label: "Fleet", value: "Hilux · Innova · Avanza" },
        { label: "Booking", value: "WhatsApp · Ready to go" },
      ],
    },

    cara: {
      eyebrow: "How to Rent",
      title: "Three steps, keys in hand.",
      subtitle:
        "No queues, no complicated paperwork. Just pick a car, message us on WhatsApp, and our team will have the vehicle ready for you.",
      steps: [
        {
          num: "01",
          title: "Pick a car",
          desc: "Browse our fleet — Hilux, Innova, or Avanza — and choose the one that best fits your travel plans.",
        },
        {
          num: "02",
          title: "Chat on WhatsApp",
          desc: "Tap the WhatsApp button and tell us your dates & duration. Our team confirms availability and price in minutes.",
        },
        {
          num: "03",
          title: "Pick up the car",
          desc: "Come to our Sekongkang office or request a pickup. Car is ready with a full tank and complete documents.",
        },
      ],
    },

    fleet: {
      eyebrow: "Our Fleet",
      title: "Well-kept cars for every plan.",
      subtitle:
        "4×4 pickups for rough Sumbawa terrain, comfortable MPVs for family or business trips. Choose and book in one step.",
      filters: ["All", "4×4 Pickup", "SUV / MPV", "Manual"],
      avail: "Available",
      from: "Starting from",
      perday: "/day",
      btnDetail: "Details",
      btnBook: "Book",
      moreCta: "Need another model?",
      moreLink: "Ask via WhatsApp →",
      modalBook: "Book via WA",
      cars: [
        {
          key: "hilux",
          name: "Toyota Hilux",
          sub: "G Manual 4×4 2.4L",
          chip: "4×4 · Manual",
          price: "Rp750,000",
          seats: "5",
          trans: "Manual",
          fuel: "Diesel",
          features: [
            "Cold A/C, Bluetooth audio",
            "Astra all-risk insurance",
            "Driver available (optional)",
          ],
          wa: "Toyota%20Hilux",
        },
        {
          key: "innova",
          name: "Toyota Innova",
          sub: "G Manual 4×2 2.4L",
          chip: "MPV · 7 Seats",
          price: "Rp650,000",
          seats: "7",
          trans: "Manual",
          fuel: "Diesel",
          features: [
            "Spacious cabin, family-friendly",
            "Double-blower A/C",
            "Driver available (optional)",
          ],
          wa: "Toyota%20Innova",
        },
        {
          key: "avanza",
          name: "Toyota Avanza",
          sub: "G Manual 4×2 1.5L",
          chip: "MPV · Fuel Efficient",
          price: "500,000",
          seats: "7",
          trans: "Manual",
          fuel: "Petrol",
          features: [
            "Fuel-efficient, nimble in the city",
            "Cold A/C",
            "Driver available (optional)",
          ],
          wa: "Toyota%20Avanza",
        },
      ],
    },

    layanan: {
      eyebrow: "Service Packages",
      title: "Transparent pricing, no hidden fees.",
      subtitle:
        "Choose the plan that suits you — daily, weekly, or monthly. All vehicles ready to go.",
      popular: "Most Popular",
      pickPlan: "Choose This Plan",
      corpTitle: "Need a custom quote?",
      corpSub:
        "For corporate, institutional, or group bookings — we'll prepare the best rates for you.",
      corpCta: "Contact Us",
      tiers: [
        {
          id: "daily",
          label: "Daily",
          desc: "Perfect for short trips or last-minute needs.",
          price: "Rp500,000",
          unit: "/ day",
          items: [
            "Minimum 1 day",
            "Choice of fleet",
            "A/C & full service",
            "Basic insurance",
          ],
          highlighted: false,
        },
        {
          id: "weekly",
          label: "Weekly",
          desc: "Ideal for medium-length stays at a better rate.",
          price: "Rp450,000",
          unit: "/ day",
          items: [
            "Minimum 7 days",
            "Special discount",
            "A/C & full service",
            "Comprehensive insurance",
            "Pick-up & drop-off",
          ],
          highlighted: true,
        },
        {
          id: "monthly",
          label: "Monthly",
          desc: "Efficient solution for corporate ops or long-term personal use.",
          price: "Rp400,000",
          unit: "/ day",
          items: [
            "Minimum 30 days",
            "Best price available",
            "A/C & full service",
            "Comprehensive insurance",
            "Priority fleet access",
            "Dedicated support",
          ],
          highlighted: false,
        },
      ],
    },

    about: {
      eyebrow: "About Us",
      since: "Since 2018",
      sinceV: "Serving West Sumbawa & beyond",
      quote: '"Clean car, friendly driver, honest price."',
      quoteAuthor: "— Dimas, Lakey guest 2025",
      title: "A rental service that is ",
      titleHighlight: "honest, well-kept, and on time.",
      p1: "Nuansa Rinjani Rental is a car-hire provider that makes it easy to find the right vehicle for every occasion — from personal trips and business travel to family holidays.",
      p2: "We're based in Sekongkang, West Sumbawa, and serve customers from Mataram to Bali — including Batu Hijau mining crews, Lakey surf travellers, and Tambora expeditions.",
      stats: [
        { value: "8+", label: "Years of experience" },
        { value: "3", label: "Main vehicle types" },
        { value: "200+", label: "Happy customers" },
        { value: "24/7", label: "WhatsApp support" },
      ],
      whyUs: [
        {
          title: "Well-kept cars & Astra insurance",
          desc: "Regular servicing, complete documents, all-risk coverage for peace of mind.",
        },
        {
          title: "Transparent pricing, no hidden fees",
          desc: "What you see is what you pay — including insurance & tax.",
        },
        {
          title: "Local team, replies in minutes",
          desc: "Our WhatsApp is answered quickly, in Indonesian or English.",
        },
      ],
    },

    footer: {
      eyebrow: "Ready to roll?",
      title: "Get in touch now.",
      titleHighlight: "Cars ready, honest price.",
      subtitle:
        "The Nuansa Rinjani Rental team is online every day. Check fleet availability and get pricing confirmed in minutes.",
      officeLabel: "Office location",
      officeValue: "Sekongkang Bawah, West Sumbawa",
      about:
        "Car rental service in West Sumbawa for personal trips, business travel, and corporate operations. Based in Sekongkang Bawah.",
      address:
        "Jl. Lintas Sekongkang Bawah,\nSekongkang, West Sumbawa Regency,\nWest Nusa Tenggara, Indonesia",
      hours: "Mon – Sun · 07:00 – 22:00 WITA",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
} as const;

export type Translations = typeof translations.id;

interface LangContextType {
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({
  lang: "id",
  t: translations.id,
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const stored = localStorage.getItem("nrr.lang") as Lang | null;
    if (stored === "id" || stored === "en") setLangState(stored);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    try { localStorage.setItem("nrr.lang", l); } catch (_) {}
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as Translations, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
