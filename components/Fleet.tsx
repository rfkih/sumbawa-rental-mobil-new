import { fleets, FleetItem } from "../data/fleets";

export default function Fleet(): JSX.Element {
  const whatsapp = "6282340715003";
  const link = `https://wa.me/${whatsapp}?text=Halo%20Sewa%20Mobil%20Sekongkang,%20saya%20ingin%20memesan%20mobil.`;

  return (
    <section id="armada" className="py-24 bg-secondary-gray">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-dark-gray mb-14">Armada Kami</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {fleets.map((car: FleetItem) => (
            <div
              key={car.name}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-transform transform hover:-translate-y-2"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-60 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {car.name}
                </h4>
                <p className="text-gray-500 mb-4">{car.type}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-blue text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
