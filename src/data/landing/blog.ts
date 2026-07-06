export interface BlogPost {
  slug: string;
  destination: string;
  title: string;
  description: string;
  image?: string;
  date: string;
  readTime: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "intro" | "list" | "tip" | "closing";
  heading?: string;
  text?: string;
  items?: BlogListItem[];
}

export interface BlogListItem {
  name: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "dubai",
    destination: "Dubái",
    title: "Los 10 mejores tours en Dubái",
    description:
      "Descubre los 10 mejores tours en Dubái que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    image: "/assets/destinos/dubai-2.webp",
    date: "Junio 2025",
    readTime: "8 min",
    content: [
      {
        type: "intro",
        text: "Dubái es una ciudad que desafía cualquier expectativa. Entre rascacielos que tocan las nubes, desiertos infinitos y playas de arena blanca, este emirato del Golfo Pérsico concentra algunas de las experiencias de viaje más únicas del mundo. Desde HereYouTravel, hemos seleccionado los 10 tours que ningún viajero debería perderse.",
      },
      {
        type: "list",
        heading: "Los 10 tours imprescindibles",
        items: [
          {
            name: "Subida al Burj Khalifa (At the Top)",
            description:
              "Asciende al piso 124 o 148 del edificio más alto del mundo y disfruta de vistas panorámicas que abarcan el desierto, el mar y la ciudad. Recomendamos reservar en horario de atardecer.",
          },
          {
            name: "Safari en desierto con cena beduina",
            description:
              "Una tarde en 4x4 por las dunas del desierto del Arabigo seguida de una cena tradicional bajo las estrellas con música y danza folclórica. La experiencia más auténtica de los Emiratos.",
          },
          {
            name: "Crucero por Dubai Creek (Abra)",
            description:
              "El Creek es el alma histórica de Dubái. Un paseo en abra (barca tradicional) de madera por el canal te conecta con el Dubái antiguo, los zocos del oro y las especias.",
          },
          {
            name: "Visita al Dubái Mall y Dubai Fountain",
            description:
              "El centro comercial más grande del mundo alberga además un acuario, una pista de hielo y la mayor fuente coreografiada del planeta, que actúa cada 30 minutos al atardecer.",
          },
          {
            name: "Tour por la Al Fahidi Historical Neighbourhood",
            description:
              "El barrio histórico de Al Fahidi conserva la arquitectura de torres de viento del siglo XIX. Museos del café, del dinero y de la cultura local esperan a quienes buscan la Dubái auténtica.",
          },
          {
            name: "Visita a Palm Jumeirah y Atlantis",
            description:
              "La isla artificial en forma de palmera es uno de los proyectos de ingeniería más ambiciosos de la historia. Desde el monorraíl tendrás vistas del resort Atlantis y las playas privadas.",
          },
          {
            name: "Skydive Dubai",
            description:
              "Para los amantes de las emociones fuertes, saltar en paracaídas sobre la Palm Jumeirah ofrece una vista aérea única de toda la costa de Dubái. Disponible para principiantes.",
          },
          {
            name: "Tour gastronómico por Deira",
            description:
              "El barrio de Deira concentra la mayor diversidad culinaria de la ciudad: desde shawarmas de cordero hasta los mejores mariscos frescos del Golfo. Un tour de 3 horas con guía local.",
          },
          {
            name: "Visita a la Great Mosque y Abu Dhabi",
            description:
              "A 90 minutos de Dubái, Abu Dhabi alberga la mezquita Sheikh Zayed, una de las más grandes y bellas del mundo. Combinable en excursión de día completo desde Dubái.",
          },
          {
            name: "Parque de diversiones de Warner Bros. o Global Village",
            description:
              "Para familias, Warner Bros. World Abu Dhabi y el Global Village (temporada octubre-abril) ofrecen entretenimiento de primer nivel con pabellones de más de 90 países.",
          },
        ],
      },
      {
        type: "tip",
        heading: "Consejo de nuestros expertos",
        text: "La mejor época para visitar Dubái es entre noviembre y marzo, cuando las temperaturas se sitúan entre 18°C y 28°C. En verano el calor puede superar los 45°C. Desde HereYouTravel organizamos paquetes todo incluido con hotel, vuelos y tours a medida.",
      },
      {
        type: "closing",
        text: "¿Listo para descubrir Dubái? Nuestros asesores de viaje te ayudarán a diseñar el itinerario perfecto. Contáctanos y recibe una cotización sin compromiso.",
      },
    ],
  },
  {
    slug: "miami",
    destination: "Miami",
    title: "Los 10 mejores tours en Miami",
    description:
      "Descubre los 10 mejores tours en Miami que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    image: "/assets/landing/miami-card.jpg",
    date: "Mayo 2025",
    readTime: "7 min",
    content: [
      {
        type: "intro",
        text: "Miami es mucho más que sus playas de arena blanca y su vida nocturna legendaria. La ciudad del sol concentra arte, gastronomía, cultura latina y naturaleza en un destino que no deja indiferente a nadie. Como agencia radicada en Miami, Florida, conocemos cada rincón de la ciudad. Aquí va nuestra selección de los 10 tours que no puedes perderte.",
      },
      {
        type: "list",
        heading: "Los 10 tours imprescindibles",
        items: [
          {
            name: "Art Deco Walking Tour en South Beach",
            description:
              "Ocean Drive y Collins Avenue albergan la mayor concentración de arquitectura Art Deco del mundo. Un tour a pie de 90 minutos por este distrito histórico te sumerge en el Miami de los años 30.",
          },
          {
            name: "Paseo en barco por Star Island y Millionaires Row",
            description:
              "Desde la bahía de Biscayne verás las mansiones de celebrities como Jennifer López, Shaquille O'Neal y muchos más. El mejor modo de ver el Miami de los famosos.",
          },
          {
            name: "Visita a Wynwood Walls",
            description:
              "El mayor museo de arte urbano al aire libre del mundo, donde más de 50 artistas de fama internacional han transformado almacenes industriales en obras maestras.",
          },
          {
            name: "Excursión a los Everglades en airboat",
            description:
              "A solo 45 minutos del centro de Miami, los Everglades son un ecosistema único. Un paseo en airboat entre cocodrilos, manatíes y cientos de especies de aves es obligatorio.",
          },
          {
            name: "Tour por Little Havana",
            description:
              "Calle Ocho, los dominos en el Maximo Gomez Park y el mejor café cubano de la ciudad. Un barrio que es un pedacito de Cuba en suelo americano.",
          },
          {
            name: "Visita al Pérez Art Museum Miami (PAMM)",
            description:
              "Con su arquitectura sobre la bahía y su colección de arte internacional del siglo XX y XXI, el PAMM es uno de los mejores museos de arte moderno de Estados Unidos.",
          },
          {
            name: "Kayak o paddleboard en Biscayne Bay",
            description:
              "Aguas turquesas, manglares y vistas al skyline de Miami. Una experiencia de naturaleza activa a minutos del centro urbano.",
          },
          {
            name: "Tour gastronómico por Design District y Brickell",
            description:
              "Miami es una ciudad de contrastes culinarios. Desde ceviches peruanos hasta sushi de autor, pasando por la mejor pizza napolitana fuera de Italia.",
          },
          {
            name: "Visita a Key West (excursión de día)",
            description:
              "A 4 horas por la Overseas Highway, Key West es el punto más al sur de EE.UU. Ambiente bohemio, puestas de sol legendarias y la casa de Ernest Hemingway.",
          },
          {
            name: "Conciertos y vida nocturna en el American Airlines Arena",
            description:
              "Miami es sede de grandes espectáculos musicales durante todo el año. Consulta la agenda con antelación para incluir un evento en tu itinerario.",
          },
        ],
      },
      {
        type: "tip",
        heading: "Consejo de nuestros expertos",
        text: "La mejor época para visitar Miami es entre diciembre y abril, cuando el clima es cálido y seco, sin la humedad del verano. Si buscas precios más económicos, los meses de mayo y noviembre ofrecen buen equilibrio entre clima y tarifa.",
      },
      {
        type: "closing",
        text: "Como agencia de viajes en Miami, conocemos la ciudad como nadie. Si visitas Miami o quieres que sea tu base para explorar Florida, contacta con nuestro equipo para recibir asesoría personalizada.",
      },
    ],
  },
  {
    slug: "turquia",
    destination: "Turquía",
    title: "Los 10 mejores tours en Turquía",
    description:
      "Descubre los 10 mejores tours en Turquía que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    image: "/assets/landing/Turquia-card.webp",
    date: "Abril 2025",
    readTime: "9 min",
    content: [
      {
        type: "intro",
        text: "Turquía es uno de los destinos más fascinantes del mundo: un país puente entre Europa y Asia donde conviven mezquitas milenarias, costas turquesas, valles lunares y una gastronomía que figura entre las mejores del mundo. En HereYouTravel organizamos paquetes a Turquía desde Miami que incluyen todo lo que necesitas para una experiencia inolvidable.",
      },
      {
        type: "list",
        heading: "Los 10 tours imprescindibles",
        items: [
          {
            name: "Vuelo en globo aerostático sobre Capadocia",
            description:
              "Elevarse al amanecer sobre las chimeneas de hadas de Capadocia es una de las experiencias más mágicas del mundo. Cada vuelo dura aproximadamente una hora y termina con cava y desayuno.",
          },
          {
            name: "Tour por Hagia Sophia y la Mezquita Azul",
            description:
              "En el corazón de Estambul, estos dos monumentos separados por apenas 200 metros representan más de 1.500 años de historia. Imprescindible con guía especializado.",
          },
          {
            name: "Crucero por el Bósforo al atardecer",
            description:
              "Un crucero por el estrecho que divide dos continentes, con vistas del palacio de Topkapi, la Torre de Gálata y las orillas de Europa y Asia iluminadas por el sol poniente.",
          },
          {
            name: "Excursión a Éfeso",
            description:
              "Las ruinas de la antigua metrópolis romana de Éfeso, con su biblioteca de Celso, el gran teatro y el templo de Artemisa, son un viaje en el tiempo obligatorio.",
          },
          {
            name: "Las Piscinas Naturales de Pamukkale",
            description:
              "Las terrazas de travertino blanco llenas de aguas termales forman un paisaje irreal declarado Patrimonio Mundial por la UNESCO. Bañarse en sus piscinas está incluido en la visita.",
          },
          {
            name: "Tour por el Gran Bazar de Estambul",
            description:
              "El mercado cubierto más antiguo y grande del mundo, con más de 4.000 tiendas. Especias, lámparas de mosaico, alfombras y cerámica otomana en un laberinto de calles históricas.",
          },
          {
            name: "Senderismo por el Camino Licio",
            description:
              "La costa turquesa del sur de Turquía alberga uno de los senderos de larga distancia más bellos del Mediterráneo, con ruinas antiguas, calas escondidas y pueblos pesqueros.",
          },
          {
            name: "Visita a la ciudad subterránea de Derinkuyu",
            description:
              "A 85 metros bajo tierra en Capadocia, esta ciudad subterránea podía alojar a 20.000 personas. Una de las maravillas de la ingeniería de la antigüedad.",
          },
          {
            name: "Crucero gulet por las Islas del Egeo",
            description:
              "Un crucero de varios días en un gulet tradicional turco por las calas del Egeo es la manera más lujosa y relajante de explorar la costa. Disponible de mayo a octubre.",
          },
          {
            name: "Experiencia gastronómica en Estambul",
            description:
              "El börek, el kebab, el meze y los postres de sésamo son solo el inicio. Un tour gastronómico por los barrios de Karaköy y Beyoğlu revela la cocina turca más contemporánea.",
          },
        ],
      },
      {
        type: "tip",
        heading: "Consejo de nuestros expertos",
        text: "La mejor época para visitar Turquía es la primavera (abril-junio) y el otoño (septiembre-noviembre). Evita agosto en las ciudades del interior, donde las temperaturas pueden superar los 40°C. Nuestros paquetes de 12 días incluyen Estambul, Capadocia y la Costa Turquesa.",
      },
      {
        type: "closing",
        text: "Turquía está entre los destinos estrella de HereYouTravel. Cotiza tu viaje hoy y déjanos diseñar el itinerario perfecto para tu presupuesto y fechas.",
      },
    ],
  },
];
