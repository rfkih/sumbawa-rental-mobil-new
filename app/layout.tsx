import "./globals.css";
import type { Metadata } from "next";
import { Footer, NavBar } from "@components";
import Script from "next/script";

const SITE_URL = "https://www.nuansarinjanirental.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nuansa Rinjani Rental | Sewa Mobil Sumbawa Barat",
    template: "%s | Nuansa Rinjani Rental",
  },
  description:
    "Sewa mobil di Sumbawa Barat dengan mudah, cepat, dan terpercaya. Layanan harian, mingguan, dan bulanan untuk kebutuhan pribadi, bisnis, dan perusahaan. Berbasis di Sekongkang.",
  keywords: [
    "rental mobil sumbawa barat",
    "sewa mobil sekongkang",
    "rental mobil di sumbawa",
    "car hire sumbawa",
    "rental innova sumbawa",
    "rental avanza sumbawa",
    "rental hilux sumbawa",
    "sewa hilux sumbawa barat",
    "rental mobil bulanan sumbawa",
    "rental mobil harian sumbawa",
    "rental mobil di sekongkang",
    "nuansa rinjani rental",
    "sewa mobil lakey",
    "sewa mobil tambora",
    "rental kru tambang batu hijau",
  ],
  authors: [{ name: "Nuansa Rinjani Rental" }],
  creator: "Nuansa Rinjani Rental",
  publisher: "Nuansa Rinjani Rental",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Nuansa Rinjani Rental | Sewa Mobil Sumbawa Barat",
    description:
      "Layanan sewa mobil di Sumbawa Barat — Toyota Hilux, Innova, Avanza. Harian, mingguan, bulanan. Pesan via WhatsApp, siap antar-jemput.",
    url: SITE_URL,
    siteName: "Nuansa Rinjani Rental",
    images: [
      {
        url: `${SITE_URL}/hilux2.png`,
        width: 1200,
        height: 630,
        alt: "Nuansa Rinjani Rental — Sewa Mobil Sumbawa Barat",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuansa Rinjani Rental | Sewa Mobil Sumbawa Barat",
    description:
      "Sewa mobil di Sumbawa Barat — Hilux, Innova, Avanza. Harian, mingguan, bulanan. WhatsApp 24/7.",
    images: [`${SITE_URL}/hilux2.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nuansa Rinjani Rental",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+62-823-4071-5003",
  email: "sumbawarentalmobil@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Lintas Sekongkang Bawah",
    addressLocality: "Sekongkang",
    addressRegion: "Nusa Tenggara Barat",
    postalCode: "84457",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.instagram.com/nuansarinjanirental",
    "https://www.facebook.com/nuansarinjanirental",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CarRental"],
  name: "Nuansa Rinjani Rental",
  image: `${SITE_URL}/hilux2.png`,
  description:
    "Penyedia jasa sewa mobil di Sumbawa Barat untuk kebutuhan pribadi, bisnis, dan operasional perusahaan. Tersedia Toyota Hilux, Innova, dan Avanza.",
  url: SITE_URL,
  telephone: "+62-823-4071-5003",
  email: "sumbawarentalmobil@gmail.com",
  priceRange: "Rp350.000 - Rp750.000",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Transfer Bank",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Lintas Sekongkang Bawah",
    addressLocality: "Sekongkang",
    addressRegion: "Nusa Tenggara Barat",
    postalCode: "84457",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.9654771,
    longitude: 116.7518609,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "07:00",
      closes: "22:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-823-4071-5003",
    contactType: "customer service",
    contactOption: "TollFree",
    availableLanguage: ["Indonesian", "English"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="relative text-ink font-sans antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
