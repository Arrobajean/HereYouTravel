export interface BlogPost {
  destination: string;
  title: string;
  description: string;
}

export interface BlogPost {
  destination: string;
  title: string;
  description: string;
  image?: string; // Ruta opcional de la imagen
}

export const blogPosts: BlogPost[] = [
  {
    destination: "Dubái",
    title: "Los 10 mejores tours en Dubái",
    description:
      "Descubre los 10 mejores tours en Dubái que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    image: "/assets/destinos/dubai-2.webp",
  },
  {
    destination: "Miami",
    title: "Los 10 mejores tours en Miami",
    description:
      "Descubre los 10 mejores tours en Miami que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    image: "/assets/landing/miami-card.jpg",
  },
  {
    destination: "Turquía",
    title: "Los 10 mejores tours en Turquía",
    description:
      "Descubre los 10 mejores tours en Turquía que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    image: "/assets/landing/Turquia-card.webp",
  },
];
