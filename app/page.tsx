import { Hero, CaraSewa, Fleet, Layanan, AboutSections, WhatsAppFAB } from "@components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <CaraSewa />
      <Fleet />
      <Layanan />
      <AboutSections />
      <WhatsAppFAB />
    </main>
  );
}
