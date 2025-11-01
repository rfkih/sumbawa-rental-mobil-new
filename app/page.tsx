import { HomeProps } from "@types";
import { AboutSections, Hero, Fleet } from "@components";
import Script from "next/script";


export const metadata = {
  metadataBase: new URL("https://sumbawa-rental-mobil.vercel.app"),
  title: "Sumbawa Rental Mobil | Sewa Mobil Sumbawa Barat",
  description:
    "Sewa mobil di Sumbawa Barat dengan mudah, cepat, dan terpercaya. Layanan harian, mingguan, dan bulanan untuk kebutuhan pribadi, bisnis, dan perusahaan.",
  keywords: [
    "rental mobil sumbawa barat",
    "sewa mobil sekongkang",
    "rental mobil di sumbawa",
    "car hire sumbawa",
    "rental innova sumbawa",
    "rental avanza sumbawa",
    "rental hilux sumbawa",
    "rental mobil bulanan sumbawa",
    "rental mobil harian sumbawa",
    "rental mobil di sekongkang"
  ],
  openGraph: {
    title: "Sumbawa Rental Mobil",
    description:
      "Layanan rental mobil di Sumbawa Barat untuk kebutuhan pribadi, bisnis, dan operasional perusahaan Anda.",
    url: "https://sumbawa-rental-mobil.vercel.app",
    siteName: "Sumbawa Rental Mobil",
    images: [
      {
        url: "/hilux2.png",
        width: 1200,
        height: 630,
        alt: "Toyota Hilux putih - Sumbawa Rental Mobil",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default async function Home({ searchParams }: HomeProps) {


  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Katalog Mobil</h1>
          <p>Temukan mobil yang Anda inginkan di sini!</p>
        </div>
        <section>
          <div>
            <Fleet/>
          </div>
          <div>
            <AboutSections/>
          </div>
        </section>
      </div>
      <Script
        id="car-rental-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CarRental",
            name: "Sumbawa Rental Mobil",
            image: "https://sumbawa-rental-mobil.vercel.app/hilux2.png",
            description:
              "Sewa mobil di Sumbawa Barat dengan mudah, cepat, dan terpercaya. Tersedia layanan harian, mingguan, dan bulanan.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl. Lintas Sekongkang Bawah",
              addressLocality: "Sekongkang",
              addressRegion: "Nusa Tenggara Barat",
              postalCode: "84457",
              addressCountry: "ID",
            },
            telephone: "+62 812-3456-7890",
            url: "https://sumbawa-rental-mobil.vercel.app",
            priceRange: "Rp350.000 - Rp1.000.000 per hari",
          }),
        }}
      />
    </main>
  );
}
