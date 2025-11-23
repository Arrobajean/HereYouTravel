export interface DestinationDetail {
  destination: string;
  packageTitle: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  image: string;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  notIncluded: string[];
}

export const destinationsDetails: Record<string, DestinationDetail> = {
  japon: {
    destination: "Japón",
    packageTitle: "Paquete de Viaje a Japón: Explora la Tierra del Sol Naciente",
    duration: "10 Días",
    originalPrice: "5,790",
    discountedPrice: "4,899",
    discount: "15",
    image: "/assets/destinos/vaciones-en-japones-2.webp",
    description:
      "Descubre la fascinante mezcla de tradición y modernidad de Japón. Desde los templos ancestrales de Kioto hasta las luces de neón de Tokio, este viaje te llevará por lo mejor de Japón.",
    highlights: [
      "Tokio: Shibuya, Shinjuku, Akihabara",
      "Monte Fuji y lago Kawaguchi",
      "Kioto: Templos dorados y geishas",
      "Osaka: Gastronomía y castillo",
      "Hiroshima y isla de Miyajima",
      "Tren bala (Shinkansen)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Tokio",
        description:
          "Recepción en el aeropuerto y traslado al hotel. Tarde libre para explorar el barrio de tu hotel.",
      },
      {
        day: 2,
        title: "Tokio Moderno",
        description:
          "Visita a Shibuya, Harajuku, Shinjuku y Akihabara. Experiencia en un izakaya por la noche.",
      },
      {
        day: 3,
        title: "Tokio Tradicional",
        description:
          "Templo Senso-ji en Asakusa, Palacio Imperial y barrio de Ginza.",
      },
      {
        day: 4,
        title: "Monte Fuji",
        description:
          "Excursión de día completo al Monte Fuji y lago Kawaguchi. Regreso a Tokio.",
      },
      {
        day: 5,
        title: "Kioto",
        description:
          "Viaje en tren bala a Kioto. Visita al Pabellón Dorado y barrio de Gion.",
      },
      {
        day: 6,
        title: "Templos de Kioto",
        description:
          "Fushimi Inari, Kiyomizu-dera y bosque de bambú de Arashiyama.",
      },
      {
        day: 7,
        title: "Nara",
        description:
          "Excursión a Nara para ver los ciervos y el Gran Buda Todai-ji.",
      },
      {
        day: 8,
        title: "Osaka",
        description:
          "Visita al Castillo de Osaka, Dotonbori y degustación de takoyaki.",
      },
      {
        day: 9,
        title: "Hiroshima y Miyajima",
        description:
          "Visita al Parque Memorial de la Paz y al famoso torii flotante de Miyajima.",
      },
      {
        day: 10,
        title: "Regreso",
        description:
          "Traslado al aeropuerto de Osaka/Tokio para vuelo de regreso.",
      },
    ],
    included: [
      "Vuelos internacionales",
      "9 noches de alojamiento en hoteles 3-4 estrellas",
      "Desayunos diarios",
      "Traslados aeropuerto-hotel-aeropuerto",
      "Pase JR (Japan Rail Pass) de 7 días",
      "Guía en español en las excursiones",
      "Entradas a templos y atracciones mencionadas",
      "Seguro de viaje",
    ],
    notIncluded: [
      "Almuerzos y cenas (excepto donde se especifique)",
      "Propinas",
      "Gastos personales",
      "Actividades opcionales no mencionadas",
    ],
  },
  peru: {
    destination: "Perú",
    packageTitle: "Paquete de Viaje a Perú: Descubriendo lo Mejor de los Andes",
    duration: "15 Días",
    originalPrice: "3,300",
    discountedPrice: "2,799",
    discount: "15",
    image: "/assets/destinos/Viaje-a-peru-7-2-2048x853.webp",
    description:
      "Explora las maravillas de Perú, desde las antiguas ruinas de Machu Picchu hasta las islas flotantes del lago Titicaca y la vibrante ciudad de Lima.",
    highlights: [
      "Lima: Centro histórico y gastronomía",
      "Cusco: Capital del imperio inca",
      "Machu Picchu: Maravilla del mundo",
      "Valle Sagrado de los Incas",
      "Lago Titicaca e islas flotantes",
      "Arequipa: Ciudad blanca",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Lima",
        description:
          "Recepción y traslado al hotel. Tour nocturno por Miraflores y Barranco.",
      },
      {
        day: 2,
        title: "Lima Colonial",
        description:
          "Visita al centro histórico, Plaza de Armas, Catedral y Palacio de Gobierno.",
      },
      {
        day: 3,
        title: "Vuelo a Cusco",
        description:
          "Vuelo a Cusco. Aclimatación y visita al barrio de San Blas.",
      },
      {
        day: 4,
        title: "Valle Sagrado",
        description:
          "Excursión al Valle Sagrado: Pisac, Ollantaytambo y Chinchero.",
      },
      {
        day: 5,
        title: "Machu Picchu",
        description:
          "Tren a Aguas Calientes y visita guiada a Machu Picchu. Pernocte en Aguas Calientes.",
      },
      {
        day: 6,
        title: "Regreso a Cusco",
        description:
          "Mañana libre en Machu Picchu. Tren de regreso a Cusco por la tarde.",
      },
      {
        day: 7,
        title: "Cusco Imperial",
        description:
          "City tour: Qorikancha, Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay.",
      },
      {
        day: 8,
        title: "Viaje a Puno",
        description:
          "Viaje en bus turístico a Puno con paradas en Andahuaylillas y Raqchi.",
      },
      {
        day: 9,
        title: "Lago Titicaca",
        description:
          "Excursión a las islas flotantes de los Uros y isla de Taquile.",
      },
      {
        day: 10,
        title: "Vuelo a Arequipa",
        description:
          "Vuelo a Arequipa. Visita al Monasterio de Santa Catalina.",
      },
      {
        day: 11,
        title: "Cañón del Colca",
        description:
          "Excursión de 2 días al Cañón del Colca. Pernocte en Chivay.",
      },
      {
        day: 12,
        title: "Cruz del Cóndor",
        description:
          "Visita a la Cruz del Cóndor para ver los cóndores. Regreso a Arequipa.",
      },
      {
        day: 13,
        title: "Arequipa Colonial",
        description:
          "City tour por la Plaza de Armas, Catedral y barrio de Yanahuara.",
      },
      {
        day: 14,
        title: "Regreso a Lima",
        description:
          "Vuelo a Lima. Tarde libre para compras en Miraflores.",
      },
      {
        day: 15,
        title: "Salida",
        description: "Traslado al aeropuerto para vuelo de regreso.",
      },
    ],
    included: [
      "Vuelos internacionales y domésticos",
      "14 noches de alojamiento en hoteles 3 estrellas",
      "Desayunos diarios",
      "Traslados aeropuerto-hotel-aeropuerto",
      "Tren a Machu Picchu (Expedition)",
      "Guía en español en todas las excursiones",
      "Entradas a todos los sitios mencionados",
      "Seguro de viaje",
    ],
    notIncluded: [
      "Almuerzos y cenas",
      "Propinas",
      "Gastos personales",
      "Boleto aéreo Huayna Picchu o Montaña Machu Picchu (opcional)",
    ],
  },
  tailandia: {
    destination: "Tailandia",
    packageTitle: "Paquete de Viaje a Tailandia: Descubre el Sudeste Asiático",
    duration: "15 Días",
    originalPrice: "3,400",
    discountedPrice: "2,899",
    discount: "15",
    image: "/assets/destinos/Viaje-a-tailandia-3.webp",
    description:
      "Sumérgete en la cultura tailandesa, desde los templos dorados de Bangkok hasta las playas paradisíacas de Phuket y las montañas del norte en Chiang Mai.",
    highlights: [
      "Bangkok: Gran Palacio y templos",
      "Ayutthaya: Ruinas antiguas",
      "Chiang Mai: Templos y naturaleza",
      "Santuario de elefantes",
      "Phuket: Playas y deportes acuáticos",
      "Phi Phi Islands",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Bangkok",
        description:
          "Recepción en el aeropuerto y traslado al hotel. Tarde libre.",
      },
      {
        day: 2,
        title: "Bangkok Histórico",
        description:
          "Visita al Gran Palacio, Templo del Buda Esmeralda y Wat Pho.",
      },
      {
        day: 3,
        title: "Mercados Flotantes",
        description:
          "Excursión a los mercados flotantes de Damnoen Saduak y tren del mercado.",
      },
      {
        day: 4,
        title: "Ayutthaya",
        description:
          "Día completo en Ayutthaya, antigua capital de Tailandia.",
      },
      {
        day: 5,
        title: "Vuelo a Chiang Mai",
        description:
          "Vuelo a Chiang Mai. Visita al templo Doi Suthep al atardecer.",
      },
      {
        day: 6,
        title: "Santuario de Elefantes",
        description:
          "Día completo en santuario ético de elefantes. Interacción y baño con elefantes.",
      },
      {
        day: 7,
        title: "Templos de Chiang Mai",
        description:
          "Visita a Wat Chedi Luang, Wat Phra Singh y mercado nocturno.",
      },
      {
        day: 8,
        title: "Triángulo Dorado",
        description:
          "Excursión al Triángulo Dorado y visita al Templo Blanco (Wat Rong Khun).",
      },
      {
        day: 9,
        title: "Vuelo a Phuket",
        description:
          "Vuelo a Phuket. Tarde libre en la playa de Patong.",
      },
      {
        day: 10,
        title: "Phi Phi Islands",
        description:
          "Excursión en barco a las islas Phi Phi. Snorkel y playa.",
      },
      {
        day: 11,
        title: "Phang Nga Bay",
        description:
          "Kayak en Phang Nga Bay y visita a James Bond Island.",
      },
      {
        day: 12,
        title: "Día Libre en Phuket",
        description:
          "Día libre para relajarse en la playa o actividades opcionales.",
      },
      {
        day: 13,
        title: "Phuket Old Town",
        description:
          "Visita a Phuket Old Town, Gran Buda y Cabo Promthep al atardecer.",
      },
      {
        day: 14,
        title: "Última Playa",
        description:
          "Último día libre en Phuket para disfrutar de la playa.",
      },
      {
        day: 15,
        title: "Salida",
        description: "Traslado al aeropuerto para vuelo de regreso.",
      },
    ],
    included: [
      "Vuelos internacionales y domésticos",
      "14 noches de alojamiento en hoteles 3-4 estrellas",
      "Desayunos diarios",
      "Traslados aeropuerto-hotel-aeropuerto",
      "Todas las excursiones mencionadas",
      "Guía en español",
      "Entradas a templos y atracciones",
      "Seguro de viaje",
    ],
    notIncluded: [
      "Almuerzos y cenas",
      "Propinas",
      "Gastos personales",
      "Masajes y spa",
      "Actividades acuáticas opcionales",
    ],
  },
  "republica-dominicana": {
    destination: "República Dominicana",
    packageTitle:
      "Paquete de Viaje a República Dominicana: Paraíso Caribeño",
    duration: "7 Días",
    originalPrice: "2,500",
    discountedPrice: "2,125",
    discount: "15",
    image: "/assets/destinos/punta-cana.webp",
    description:
      "Disfruta de las mejores playas del Caribe en Punta Cana. Arena blanca, aguas cristalinas y resorts todo incluido te esperan en este paraíso tropical.",
    highlights: [
      "Punta Cana: Playas paradisíacas",
      "Resort todo incluido",
      "Isla Saona",
      "Deportes acuáticos",
      "Vida nocturna",
      "Spa y relajación",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Punta Cana",
        description:
          "Recepción en el aeropuerto y traslado al resort todo incluido.",
      },
      {
        day: 2,
        title: "Día de Playa",
        description:
          "Día libre para disfrutar de las instalaciones del resort y la playa.",
      },
      {
        day: 3,
        title: "Isla Saona",
        description:
          "Excursión de día completo a la hermosa Isla Saona en catamarán.",
      },
      {
        day: 4,
        title: "Deportes Acuáticos",
        description:
          "Día de actividades: snorkel, kayak, paddleboard incluidos en el resort.",
      },
      {
        day: 5,
        title: "Santo Domingo",
        description:
          "Excursión opcional a Santo Domingo, zona colonial patrimonio de la UNESCO.",
      },
      {
        day: 6,
        title: "Relax y Spa",
        description:
          "Día libre para relajarse. Tratamiento de spa incluido.",
      },
      {
        day: 7,
        title: "Salida",
        description:
          "Check-out y traslado al aeropuerto para vuelo de regreso.",
      },
    ],
    included: [
      "Vuelos internacionales",
      "6 noches en resort 4-5 estrellas todo incluido",
      "Todas las comidas y bebidas",
      "Traslados aeropuerto-resort-aeropuerto",
      "Excursión a Isla Saona",
      "Actividades acuáticas no motorizadas",
      "Entretenimiento nocturno",
      "Seguro de viaje",
    ],
    notIncluded: [
      "Excursiones opcionales",
      "Propinas",
      "Gastos personales",
      "Tratamientos de spa adicionales",
      "Actividades acuáticas motorizadas",
    ],
  },
  turquia: {
    destination: "Turquía",
    packageTitle: "Paquete de Viaje a Turquía: Entre Europa y Asia",
    duration: "12 Días",
    originalPrice: "4,200",
    discountedPrice: "3,570",
    discount: "15",
    image: "/assets/destinos/turquia.jpg",
    description:
      "Descubre la fascinante Turquía, donde Oriente se encuentra con Occidente. Desde Estambul hasta Capadocia, este viaje te llevará por la historia milenaria de este país único.",
    highlights: [
      "Estambul: Santa Sofía, Mezquita Azul",
      "Capadocia: Globos aerostáticos",
      "Pamukkale: Terrazas de travertino",
      "Éfeso: Ruinas antiguas",
      "Costa turquesa",
      "Crucero por el Bósforo",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada a Estambul",
        description:
          "Recepción y traslado al hotel. Tarde libre en Sultanahmet.",
      },
      {
        day: 2,
        title: "Estambul Imperial",
        description:
          "Visita a Santa Sofía, Mezquita Azul, Palacio Topkapi e Hipódromo.",
      },
      {
        day: 3,
        title: "Gran Bazar y Bósforo",
        description:
          "Mañana en el Gran Bazar. Tarde: crucero por el Bósforo.",
      },
      {
        day: 4,
        title: "Vuelo a Capadocia",
        description:
          "Vuelo a Capadocia. Visita a Göreme y valle de las chimeneas de hada.",
      },
      {
        day: 5,
        title: "Globo Aerostático",
        description:
          "Amanecer en globo aerostático (opcional). Visita a ciudades subterráneas.",
      },
      {
        day: 6,
        title: "Valle Ihlara",
        description:
          "Excursión al valle de Ihlara y caravansar Sultanhanı.",
      },
      {
        day: 7,
        title: "Pamukkale",
        description:
          "Viaje a Pamukkale. Visita a las terrazas de travertino y Hierápolis.",
      },
      {
        day: 8,
        title: "Éfeso",
        description:
          "Visita a las ruinas de Éfeso, Templo de Artemisa y Casa de la Virgen María.",
      },
      {
        day: 9,
        title: "Bodrum",
        description:
          "Viaje a Bodrum. Visita al Castillo de San Pedro y mausoleo de Halicarnaso.",
      },
      {
        day: 10,
        title: "Día de Playa",
        description:
          "Día libre para disfrutar de las playas de la Riviera Turca.",
      },
      {
        day: 11,
        title: "Regreso a Estambul",
        description:
          "Vuelo a Estambul. Tarde libre para compras finales.",
      },
      {
        day: 12,
        title: "Salida",
        description: "Traslado al aeropuerto para vuelo de regreso.",
      },
    ],
    included: [
      "Vuelos internacionales y domésticos",
      "11 noches de alojamiento en hoteles 3-4 estrellas",
      "Desayunos y algunas cenas",
      "Traslados aeropuerto-hotel-aeropuerto",
      "Todas las excursiones terrestres",
      "Guía en español",
      "Entradas a todos los sitios",
      "Crucero por el Bósforo",
      "Seguro de viaje",
    ],
    notIncluded: [
      "Almuerzos y algunas cenas",
      "Globo aerostático en Capadocia (opcional)",
      "Propinas",
      "Gastos personales",
      "Actividades opcionales",
    ],
  },
  egipto: {
    destination: "Egipto",
    packageTitle: "Paquete de Viaje a Egipto: Descubre los Misterios del Nilo",
    duration: "10 Días",
    originalPrice: "3,800",
    discountedPrice: "3,230",
    discount: "15",
    image: "/assets/destinos/egipto.jpg",
    description:
      "Viaja en el tiempo a la tierra de los faraones. Desde las pirámides de Giza hasta los templos de Luxor, navega por el Nilo y descubre los secretos del antiguo Egipto.",
    highlights: [
      "Pirámides de Giza y Esfinge",
      "Museo Egipcio del Cairo",
      "Crucero por el Nilo",
      "Valle de los Reyes en Luxor",
      "Templo de Karnak",
      "Templo de Abu Simbel",
    ],
    itinerary: [
      {
        day: 1,
        title: "Llegada al Cairo",
        description:
          "Recepción en el aeropuerto y traslado al hotel. Noche en El Cairo.",
      },
      {
        day: 2,
        title: "Pirámides de Giza",
        description:
          "Visita a las pirámides de Keops, Kefrén y Micerinos, la Esfinge y templo del Valle.",
      },
      {
        day: 3,
        title: "Museo Egipcio",
        description:
          "Mañana en el Museo Egipcio. Tarde: Bazar Khan el-Khalili.",
      },
      {
        day: 4,
        title: "Vuelo a Asuán",
        description:
          "Vuelo a Asuán. Visita a la presa de Asuán y templo de Philae. Embarque en crucero.",
      },
      {
        day: 5,
        title: "Abu Simbel",
        description:
          "Excursión temprana a Abu Simbel. Tarde: navegación por el Nilo.",
      },
      {
        day: 6,
        title: "Kom Ombo y Edfu",
        description:
          "Visita a los templos de Kom Ombo y Edfu. Navegación hacia Luxor.",
      },
      {
        day: 7,
        title: "Valle de los Reyes",
        description:
          "Visita al Valle de los Reyes, templo de Hatshepsut y colosos de Memnón.",
      },
      {
        day: 8,
        title: "Templos de Luxor",
        description:
          "Visita a los templos de Karnak y Luxor. Desembarque del crucero.",
      },
      {
        day: 9,
        title: "Regreso al Cairo",
        description:
          "Vuelo de regreso al Cairo. Tarde libre o paseo por el Nilo.",
      },
      {
        day: 10,
        title: "Salida",
        description: "Traslado al aeropuerto para vuelo de regreso.",
      },
    ],
    included: [
      "Vuelos internacionales y domésticos",
      "9 noches: 3 en hotel Cairo + 4 en crucero + 2 en Luxor",
      "Pensión completa en el crucero",
      "Desayunos en hoteles",
      "Traslados aeropuerto-hotel-aeropuerto",
      "Todas las excursiones mencionadas",
      "Guía egiptólogo en español",
      "Entradas a todos los sitios",
      "Seguro de viaje",
    ],
    notIncluded: [
      "Almuerzos y cenas en hoteles (excepto crucero)",
      "Propinas obligatorias (aproximadamente $50 por persona)",
      "Gastos personales",
      "Entrada a pirámides por dentro (opcional)",
      "Show de luz y sonido (opcional)",
    ],
  },
};

