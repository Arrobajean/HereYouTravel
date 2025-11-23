export interface Destination {
  destination: string;
  packageTitle: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
}

export const destinationImages: Record<string, string> = {
  Japón: "/assets/destinos/vaciones-en-japones-2.webp",
  Perú: "/assets/destinos/Viaje-a-peru-7-2-2048x853.webp",
  Tailandia: "/assets/destinos/Viaje-a-tailandia-3.webp",
  "República Dominicana": "/assets/destinos/punta-cana.webp",
  Turquía: "/assets/destinos/turquia.jpg",
  Egipto: "/assets/destinos/egipto.jpg",
};

export const destinations: Destination[] = [
  {
    destination: "Japón",
    packageTitle:
      "Paquete de Viaje a Japón: Explora la Tierra del Sol Naciente",
    duration: "10 Días",
    originalPrice: "5,790",
    discountedPrice: "4,899",
    discount: "15",
  },
  {
    destination: "Perú",
    packageTitle: "Paquete de Viaje a Perú: Descubriendo lo Mejor de los Andes",
    duration: "15 Días",
    originalPrice: "3,300",
    discountedPrice: "2,799",
    discount: "15",
  },
  {
    destination: "Tailandia",
    packageTitle: "Paquete de Viaje a Tailandia: Descubre el Sudeste Asiático",
    duration: "15 Días",
    originalPrice: "3,400",
    discountedPrice: "2,899",
    discount: "15",
  },
  {
    destination: "República Dominicana",
    packageTitle: "Paquete de Viaje a República Dominicana: Paraíso Caribeño",
    duration: "7 Días",
    originalPrice: "2,500",
    discountedPrice: "2,125",
    discount: "15",
  },
  {
    destination: "Turquía",
    packageTitle: "Paquete de Viaje a Turquía: Entre Europa y Asia",
    duration: "12 Días",
    originalPrice: "4,200",
    discountedPrice: "3,570",
    discount: "15",
  },
  {
    destination: "Egipto",
    packageTitle: "Paquete de Viaje a Egipto: Descubre los Misterios del Nilo",
    duration: "10 Días",
    originalPrice: "3,800",
    discountedPrice: "3,230",
    discount: "15",
  },
];

