"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="tentang"
      className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 sm:px-16 px-6 py-20"
    >
      {/* Left: Image */}
      <div className="flex-1 relative w-full h-[320px] md:h-[400px]">
        <Image
          src="/tentang.jpg"
          alt="Tentang Kami"
          fill
          className="object-cover rounded-2xl shadow-lg"
          priority
        />
      </div>

      {/* Right: Text */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Tentang <span className="text-primary-blue">Nuansa Rinjani Rental</span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          <strong>Nuansa Rinjani Rental</strong> adalah platform penyewaan mobil modern yang
          memudahkan Anda menemukan kendaraan terbaik untuk setiap kebutuhan —
          mulai dari perjalanan pribadi, bisnis, hingga liburan keluarga.
          Kami berkomitmen menghadirkan layanan cepat, aman, dan terpercaya
          dengan berbagai pilihan armada yang terawat dan siap jalan.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify">
          Sistem penyewaan kami fleksibel dan dapat disesuaikan dengan kebutuhan
          Anda. Nuansa Rinjani Rental menyediakan opsi penyewaan:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Harian</strong> — cocok untuk perjalanan singkat, keperluan
            bisnis harian, atau kebutuhan mendadak.
          </li>
          <li>
            <strong>Mingguan</strong> — ideal bagi Anda yang memerlukan kendaraan
            untuk jangka menengah dengan harga lebih hemat.
          </li>
          <li>
            <strong>Bulanan</strong> — solusi efisien untuk penggunaan jangka
            panjang, baik untuk operasional perusahaan maupun kebutuhan pribadi.
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed text-justify">
          Dengan sistem pemesanan online yang mudah, Anda dapat memilih mobil
          sesuai preferensi dan budget tanpa repot. Tim kami juga siap membantu
          24 jam untuk memastikan kenyamanan dan keamanan Anda selama perjalanan.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
