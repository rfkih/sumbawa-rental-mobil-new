"use client";

import Image from "next/image";
import Link from "next/link";

const whatsapp = "6282340715003";
const link =  `https://wa.me/${whatsapp}?text=Halo,%20Saya%20Ingin%20menyewa%20mobil.`;;
const email = "sumbawarentalmobil@gmail.com"
const footerLinks = [
  {
    title: "Contact",
    links: [
      { title: `Email: ${email}`, url: `mailto:${email}` },
      { title: "Phone: +62 813-9008-5730", url: link},
    ],
  },
];

const Footer = () => (
  <section id="kontak">
    <footer className="flex flex-col text-black mt-10 border-t border-gray-200 bg-white">
      {/* ===== TOP SECTION ===== */}
      <div className="flex max-md:flex-col flex-wrap justify-between gap-10 sm:px-16 px-6 py-10">
        {/* ===== LEFT: LOGO + INFO ===== */}
        <div className="flex flex-col justify-start items-start gap-6 max-w-sm flex-1">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={40}
            className="object-contain"
          />
          <p className="text-base text-gray-600">
            © {new Date().getFullYear()} Sumbawa Car Rent <br />
            All Rights Reserved
          </p>
        </div>

        {/* ===== RIGHT: LANDSCAPE CONTACT SECTION ===== */}
        <div className="flex flex-col w-full flex-1">
          {/* Row: Contact, Alamat, Map (landscape on desktop, portrait on mobile) */}
          <div className="flex flex-col md:flex-row w-full gap-8">
            {/* CONTACT INFO */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
              <div className="flex flex-col gap-2 text-gray-600 text-sm">
                {footerLinks[0].links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="hover:text-primary-blue transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* ALAMAT */}
            <div className="flex-1 text-gray-700 text-sm leading-relaxed">
              <p className="font-semibold text-gray-800 mb-2">Alamat Kami:</p>
              <p>
                Jl. Lintas Sekongkang Bawah, <br />
                Sekongkang, Kab. Sumbawa Barat, <br />
                Nusa Tenggara Barat, Indonesia
              </p>
            </div>

            {/* MAPS */}
            <div className="flex-1 min-w-[250px]">
              <div className="w-full h-[200px] md:h-[180px] rounded-xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  title="Lokasi Sumbawa Rental Mobil Sekongkang Bawah"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.7082891853524!2d116.72303167588809!3d-8.45101808773645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb31b23e034e3%3A0x92781e344f43f0e!2sSekongkang%20Bawah%2C%20Kabupaten%20Sumbawa%20Barat%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1698912345678!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="flex justify-between items-center flex-wrap border-t border-gray-100 sm:px-16 px-6 py-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Sumbawa Rental Mobil. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-primary-blue">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-primary-blue">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  </section>
);

export default Footer;
