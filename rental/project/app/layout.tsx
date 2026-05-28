import "./globals.css";
import { Footer, NavBar } from "@components";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.nuansarinjanirental.com"),
  title: "Nuansa Rinjani Rental | Sewa Mobil Sumbawa Barat",
  description:
    "Sewa mobil di Sumbawa Barat dengan mudah, cepat, dan terpercaya. Layanan harian, mingguan, dan bulanan untuk kebutuhan pribadi, bisnis, dan perusahaan.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        {/* ✅ Organization schema for Google to pick up your logo */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nuansa Rinjani Rental",
              url: "https://www.nuansarinjanirental.com",
              logo: "https://www.nuansarinjanirental.com/logo.png",
              sameAs: [
                "https://www.instagram.com/nuansarinjanirental",
                "https://www.facebook.com/nuansarinjanirental",
              ],
            }),
          }}
        />

        {/* ✅ Favicon links */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
