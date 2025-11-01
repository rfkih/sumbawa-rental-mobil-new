export interface FleetItem {
  name: string;
  type: string;
  image: string;
}

export const fleets: FleetItem[] = [
  {
    name: "Toyota Hilux",
    type: "Tipe G Manual 4x4 2.4",
    image:
      "/hilux.png",
  },
  {
    name: "Toyota Innova",
    type: "Tipe G Manual 4x2 2.4",
    image:
      "/innova.png",
  },
  {
    name: "Toyota Avanza",
    type: "Tipe G Manual 4x2 1.5",
    image:
      "/avanza.png",
  },
];
