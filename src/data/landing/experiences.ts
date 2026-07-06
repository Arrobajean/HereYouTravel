export interface Experience {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  included: string[];
  idealFor: string;
  // Campos expandidos
  longDescription?: string;
  steps?: ExperienceStep[];
  faqs?: ExperienceFAQ[];
  testimonial?: ExperienceTestimonial;
  stats?: ExperienceStat[];
  destinations?: string[];
  badge?: string;
  badgeColor?: string;
}

export interface ExperienceStep {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceFAQ {
  question: string;
  answer: string;
}

export interface ExperienceTestimonial {
  name: string;
  location: string;
  text: string;
  avatarColor: string;
}

export interface ExperienceStat {
  value: string;
  label: string;
}

export const experiences: Experience[] = [
  {
    slug: "reunificacion-familiar",
    title: "Reunificación Familiar",
    shortTitle: "Reunificación familiar",
    tagline: "Te ayudamos a reencontrarte con los tuyos",
    badge: "Servicio especializado",
    badgeColor: "bg-rose-600",
    description:
      "Coordinamos cada detalle del viaje para que tu familia vuelva a estar junta: vuelos, itinerarios, documentación de viaje y acompañamiento durante todo el proceso. Sabemos lo que significa este reencuentro y lo tratamos con la seriedad que merece.",
    longDescription:
      "La distancia familiar es uno de los desafíos más difíciles. En HereYouTravel entendemos la urgencia emocional detrás de cada reunificación y por eso ofrecemos un servicio dedicado donde un asesor te acompaña desde la primera llamada hasta que la familia está reunida. Gestionamos todos los detalles logísticos para que tú solo te concentres en el reencuentro: búsqueda de vuelos con las mejores tarifas, coordinación de escalas para viajeros de distintos orígenes, asesoría en requisitos de viaje por país, y soporte en tiempo real si surge cualquier contratiempo en ruta.",
    image: "/assets/destinos/miami.webp",
    highlights: [
      "Asesoría personalizada en cada etapa del viaje",
      "Búsqueda de vuelos en las fechas que necesitas",
      "Coordinación de itinerarios para varios pasajeros",
      "Atención en español durante todo el proceso",
      "Gestión de escalas y conexiones complejas",
      "Soporte ante imprevistos durante el viaje",
    ],
    included: [
      "Gestión de reservas de vuelos (uno o varios pasajeros)",
      "Asistencia con requisitos de viaje por país",
      "Soporte antes y durante el viaje vía WhatsApp",
      "Coordinación de itinerarios desde distintos orígenes",
      "Asesoría sin compromiso inicial",
    ],
    idealFor:
      "Familias que llevan tiempo separadas y quieren organizar el reencuentro sin complicaciones.",
    steps: [
      {
        number: "01",
        title: "Cuéntanos tu situación",
        description:
          "Escríbenos o llámanos y explícanos desde dónde viajan, cuándo y cuántas personas. Sin compromisos.",
      },
      {
        number: "02",
        title: "Recibe opciones en 24h",
        description:
          "Tu asesor busca las mejores opciones de vuelos y coordinación, adaptadas a tus fechas y presupuesto.",
      },
      {
        number: "03",
        title: "Confirmamos y gestionamos todo",
        description:
          "Tú apruebas la propuesta y nosotros hacemos todas las reservas y te enviamos los documentos.",
      },
      {
        number: "04",
        title: "Viajan con soporte activo",
        description:
          "Disponibles vía WhatsApp durante todo el viaje para resolver cualquier inconveniente en tiempo real.",
      },
    ],
    faqs: [
      {
        question: "¿Pueden gestionar vuelos desde distintos países?",
        answer:
          "Sí. Coordinamos vuelos desde diferentes ciudades y países para que toda la familia llegue al mismo destino, incluso con conexiones y escalas diferentes.",
      },
      {
        question: "¿Necesito visado para que mis familiares vengan a EE.UU.?",
        answer:
          "Depende del país de origen. Podemos orientarte sobre los requisitos generales de viaje, aunque la tramitación de visados queda fuera de nuestro alcance. Te recomendamos consultar con la embajada correspondiente.",
      },
      {
        question: "¿Cuánto tiempo tardan en preparar una propuesta?",
        answer:
          "Normalmente en menos de 24 horas laborables tienes una propuesta con opciones de vuelos y tarifas.",
      },
      {
        question: "¿Tienen costo extra las emergencias durante el viaje?",
        answer:
          "El soporte durante el viaje está incluido en nuestro servicio sin cargo adicional. Si se requiere rebooking por causas externas, te avisamos del costo antes de proceder.",
      },
    ],
    testimonial: {
      name: "Marta G.",
      location: "Miami, Florida",
      text: "Llevaba 3 años sin ver a mi madre. HereYouTravel coordinó el vuelo desde Lima con escala en Bogotá y llegó perfectamente. No tuve que preocuparme por nada.",
      avatarColor: "#b91c1c",
    },
    stats: [
      { value: "200+", label: "Familias reunidas" },
      { value: "24h", label: "Tiempo de respuesta" },
      { value: "100%", label: "Atención en español" },
      { value: "15+", label: "Países gestionados" },
    ],
    destinations: ["Estados Unidos", "México", "Perú", "Colombia", "Cuba", "Venezuela", "Rep. Dominicana"],
  },
  {
    slug: "viajes-en-grupo",
    title: "Viajes en Grupo",
    shortTitle: "Viajes en grupo",
    tagline: "Descubre el mundo acompañado",
    badge: "Más popular",
    badgeColor: "bg-red-600",
    description:
      "Salidas grupales a los destinos más solicitados: Japón, Perú, Tailandia, Turquía y Egipto. Viajas con guía, itinerario cerrado y un grupo de personas con las mismas ganas de conocer el mundo, a un precio más conveniente que viajando por tu cuenta.",
    longDescription:
      "Los viajes en grupo de HereYouTravel están diseñados para quienes quieren vivir una experiencia internacional completa sin la carga de organizarlo todo desde cero. Salidas programadas con fechas fijas durante todo el año, grupos reducidos de máximo 20 personas, y un guía de habla hispana que conoce cada destino en profundidad. Incluimos lo esencial —vuelos, hoteles, traslados y excursiones del itinerario— con tiempo libre para que también explores a tu ritmo. La camaradería que se forma en estos viajes es, según muchos de nuestros viajeros, parte de la experiencia.",
    image: "/assets/landing/tokio-shibuya-hero.webp",
    highlights: [
      "Salidas programadas durante todo el año",
      "Guías de habla hispana en destino",
      "Itinerarios probados con lo imprescindible de cada país",
      "Mejor precio por viajar en grupo",
      "Grupos reducidos de máximo 20 personas",
      "Tiempo libre incluido en cada destino",
    ],
    included: [
      "Vuelos ida y vuelta desde Miami",
      "Hoteles 4★ en régimen de desayuno",
      "Traslados aeropuerto-hotel-aeropuerto",
      "Excursiones y visitas del itinerario",
      "Guía hispanohablante en destino",
      "Seguro de viaje básico",
    ],
    idealFor:
      "Quienes quieren un viaje internacional resuelto de principio a fin, con la seguridad de ir acompañados.",
    steps: [
      {
        number: "01",
        title: "Elige destino y fecha",
        description:
          "Consulta nuestro calendario de salidas grupales y reserva tu plaza. Disponible para Japón, Perú, Tailandia, Turquía y Egipto.",
      },
      {
        number: "02",
        title: "Paga la señal y confirma",
        description:
          "Con el 30% del paquete tu plaza queda reservada. El resto lo puedes pagar hasta 30 días antes de la salida.",
      },
      {
        number: "03",
        title: "Recibe toda la info del viaje",
        description:
          "Te enviamos el itinerario completo, información del grupo, tips del destino y qué llevar en tu maleta.",
      },
      {
        number: "04",
        title: "Viaja y disfruta",
        description:
          "Nos encargamos de todo. Tú solo tienes que llegar al aeropuerto y disfrutar del viaje.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántas personas viajan en cada grupo?",
        answer:
          "Los grupos tienen entre 10 y 20 personas. Preferimos grupos pequeños para garantizar una experiencia más personalizada y ágil.",
      },
      {
        question: "¿Puedo viajar solo aunque no conozca a nadie del grupo?",
        answer:
          "La mayoría de nuestros viajeros en grupo viajan solos o en pareja. El ambiente es muy abierto y en los primeros días ya se forma un grupo unido.",
      },
      {
        question: "¿Qué pasa si necesito cancelar?",
        answer:
          "Hasta 60 días antes de la salida devolvemos la señal menos gastos de gestión. Entre 60 y 30 días, el 50% del total. Menos de 30 días, sin reembolso. Recomendamos contratar seguro de cancelación.",
      },
      {
        question: "¿Los vuelos salen siempre desde Miami?",
        answer:
          "Sí, los vuelos grupales salen desde Miami. Si estás en otra ciudad, puedes gestionar tu vuelo de conexión y unirte al grupo en el destino.",
      },
      {
        question: "¿El guía está con el grupo todo el tiempo?",
        answer:
          "El guía acompaña todas las excursiones incluidas. Durante el tiempo libre, estará disponible pero no te acompaña para que puedas explorar a tu ritmo.",
      },
    ],
    testimonial: {
      name: "Roberto S.",
      location: "Aventura, Florida",
      text: "Fui solo al viaje a Japón y volví con amigos de por vida. El itinerario fue perfecto, el guía excepcional, y el precio no lo encuentras en ningún lado si lo organizas tú mismo.",
      avatarColor: "#dc2626",
    },
    stats: [
      { value: "50+", label: "Salidas al año" },
      { value: "5", label: "Destinos activos" },
      { value: "20", label: "Máx. personas/grupo" },
      { value: "4.8★", label: "Valoración media" },
    ],
    destinations: ["Japón", "Perú", "Tailandia", "Turquía", "Egipto"],
  },
  {
    slug: "viajes-de-lujo",
    title: "Viajes de Lujo",
    shortTitle: "Viajes de lujo",
    tagline: "Experiencias a tu medida, sin límites",
    badge: "Premium",
    badgeColor: "bg-amber-600",
    description:
      "Diseñamos viajes a medida con hoteles de categoría superior, experiencias privadas y atención prioritaria. Tú decides el destino y el ritmo; nosotros nos encargamos de que cada detalle esté a la altura.",
    longDescription:
      "Un viaje de lujo no es solo elegir el mejor hotel: es que todo encaje perfectamente. En HereYouTravel diseñamos cada itinerario de lujo desde cero, seleccionando hoteles con carácter —no solo estrellas—, experiencias exclusivas que no encontrarás en ninguna agencia masiva, y un asesor dedicado que conoce el destino y está disponible para ti antes y durante el viaje. Trabajamos con una red seleccionada de hoteles y operadores locales premium en más de 30 destinos del mundo. Desde un ryokan privado en Kioto hasta una villa frente al Nilo, pasando por una suite con vistas al Bósforo.",
    image: "/assets/destinos/dubai-2.webp",
    highlights: [
      "Itinerario diseñado exclusivamente para ti",
      "Hoteles 5 estrellas y resorts de categoría superior",
      "Traslados privados y experiencias exclusivas",
      "Asesor dedicado antes y durante el viaje",
      "Acceso a experiencias no disponibles al público general",
      "Nada de grupos ni itinerarios masivos",
    ],
    included: [
      "Diseño completo del itinerario a medida",
      "Reservas premium de vuelos en clase preferente o business",
      "Hoteles seleccionados 5★ o boutique de lujo",
      "Traslados privados en destino",
      "Actividades y experiencias privadas",
      "Atención prioritaria 24/7 durante el viaje",
    ],
    idealFor:
      "Parejas y familias que buscan un viaje especial donde la comodidad y la exclusividad son la prioridad.",
    steps: [
      {
        number: "01",
        title: "Sesión de briefing sin compromiso",
        description:
          "Te reunimos (presencial o por videollamada) para conocer tus gustos, fechas, presupuesto y qué tipo de experiencia buscas.",
      },
      {
        number: "02",
        title: "Propuesta personalizada en 48h",
        description:
          "Tu asesor diseña una propuesta completa: itinerario día a día, hoteles seleccionados y estimación de coste total.",
      },
      {
        number: "03",
        title: "Ajustamos hasta que sea perfecto",
        description:
          "Revisamos contigo cada detalle y hacemos los cambios que necesites. Sin prisas y sin coste adicional por revisiones.",
      },
      {
        number: "04",
        title: "Disfrutas, nosotros gestionamos",
        description:
          "Tu asesor permanece disponible durante todo el viaje para resolver cualquier solicitud, por pequeña que sea.",
      },
    ],
    faqs: [
      {
        question: "¿Cuál es el presupuesto mínimo para un viaje de lujo?",
        answer:
          "No tenemos un mínimo fijo, pero nuestros paquetes de lujo suelen partir de $3,000 por persona para viajes de una semana, dependiendo del destino y los hoteles elegidos.",
      },
      {
        question: "¿Pueden gestionar viajes de negocios de alta dirección?",
        answer:
          "Sí. Gestionamos viajes de negocios para ejecutivos, incluyendo vuelos en business, hoteles de cadenas de lujo, traslados privados y salas VIP en aeropuertos.",
      },
      {
        question: "¿Pueden organizar propuestas de matrimonio o aniversarios especiales?",
        answer:
          "Es una de nuestras especialidades. Coordinamos con los hoteles decoraciones especiales, cenas privadas en localizaciones únicas y sorpresas que no olvidaréis.",
      },
      {
        question: "¿Cómo se diferencia de un paquete estándar?",
        answer:
          "Todo es privado, personalizado y exclusivo. No hay grupos, no hay itinerarios genéricos. Elegimos los hoteles uno a uno, seleccionamos experiencias que encajan con tu perfil y tienes un contacto directo dedicado.",
      },
    ],
    testimonial: {
      name: "Ana L.",
      location: "Coral Gables, Florida",
      text: "Nos organizaron el viaje de aniversario a Dubái con todo al máximo nivel. Desde el traslado en el aeropuerto hasta la cena privada en el Burj Khalifa. Absolutamente impecable.",
      avatarColor: "#7c3aed",
    },
    stats: [
      { value: "30+", label: "Destinos premium" },
      { value: "48h", label: "Propuesta lista" },
      { value: "5★", label: "Hoteles seleccionados" },
      { value: "100%", label: "Itinerarios únicos" },
    ],
    destinations: ["Dubái", "Maldivas", "Japón", "Turquía", "Europa", "Egipto", "Tailandia"],
  },
  {
    slug: "bodas-punta-cana",
    title: "Bodas en Punta Cana",
    shortTitle: "Bodas en Punta Cana",
    tagline: "El sí más importante, frente al mar Caribe",
    badge: "Especialistas en bodas",
    badgeColor: "bg-pink-600",
    description:
      "Organizamos tu boda o renovación de votos en los mejores resorts de Punta Cana: ceremonia frente al mar, coordinación con el hotel, y paquetes para que tus invitados viajen juntos y sin estrés.",
    longDescription:
      "Una boda en Punta Cana es mucho más que la ceremonia: es lograr que tus invitados lleguen juntos, alojados en el mismo resort, disfrutando de una semana en el paraíso Caribeño. En HereYouTravel nos encargamos de la parte logística completa: bloqueo de habitaciones al tarifa de grupo, coordinación de vuelos para los invitados que vienen desde distintas ciudades, y enlace directo con el equipo de bodas del resort para garantizar que la ceremonia sea exactamente como la imaginaste. Trabajamos con los mejores resorts todo incluido de Punta Cana —Paradisus, Hard Rock, Barceló, Excellence— con experiencia demostrada en bodas internacionales.",
    image: "/assets/destinos/punta-cana.webp",
    highlights: [
      "Ceremonias frente al mar en resorts todo incluido",
      "Coordinación directa con el equipo de bodas del hotel",
      "Tarifas de grupo para tus invitados",
      "Opciones de luna de miel en el mismo viaje",
      "Paquetes para invitados desde distintas ciudades",
      "Asesoría en elección de resort y paquete de boda",
    ],
    included: [
      "Gestión de la reserva del evento con el resort",
      "Bloqueo de habitaciones a tarifa de grupo para invitados",
      "Coordinación de vuelos del grupo desde Miami",
      "Enlace directo con el wedding planner del hotel",
      "Opciones de decoración y personalización de la ceremonia",
      "Gestión de extensiones de luna de miel",
    ],
    idealFor:
      "Parejas que sueñan con una boda en la playa y quieren que sus invitados solo se preocupen por disfrutar.",
    steps: [
      {
        number: "01",
        title: "Primera consulta",
        description:
          "Cuéntanos tu visión: número de invitados, fecha aproximada, presupuesto y el estilo de boda que imaginas.",
      },
      {
        number: "02",
        title: "Propuesta de resorts y paquetes",
        description:
          "Te presentamos 3-4 opciones de resorts en Punta Cana con sus paquetes de boda, tarifas de habitaciones y disponibilidad.",
      },
      {
        number: "03",
        title: "Coordinación del grupo",
        description:
          "Una vez elegido el resort, gestionamos el bloqueo de habitaciones y los vuelos grupales para tus invitados.",
      },
      {
        number: "04",
        title: "El gran día, sin estrés",
        description:
          "Mientras tú vives tu boda, nosotros hemos resuelto toda la logística. Tú y tus invitados solo tienen que disfrutar.",
      },
    ],
    faqs: [
      {
        question: "¿Cuántos invitados pueden gestionar?",
        answer:
          "No hay un límite. Hemos coordinado bodas íntimas de 20 personas y celebraciones de más de 150 invitados. Cuantos más invitados, mejor tarifa de grupo conseguimos.",
      },
      {
        question: "¿Pueden gestionar invitados que vienen de otros países?",
        answer:
          "Sí. Coordinamos vuelos desde distintas ciudades de EE.UU. y también desde otros países latinoamericanos, para que todos lleguen al mismo resort sin complicaciones.",
      },
      {
        question: "¿Con qué resorts trabajan en Punta Cana?",
        answer:
          "Trabajamos principalmente con Paradisus Palma Real, Hard Rock Hotel & Casino, Barceló Bávaro, Excellence Punta Cana y Secrets Cap Cana. Todos tienen experiencia en bodas internacionales.",
      },
      {
        question: "¿Cuándo hay que empezar a organizar la boda?",
        answer:
          "Lo ideal es empezar con 9-12 meses de antelación, especialmente si la boda es en temporada alta (noviembre-abril). Con menos tiempo también es posible, dependiendo de la disponibilidad.",
      },
      {
        question: "¿El paquete de boda del resort incluye fotógrafo y decoración?",
        answer:
          "Depende del resort y el paquete elegido. La mayoría incluyen decoración básica de la ceremonia y banquete nupcial. El fotógrafo suele ser opcional o parte de paquetes superiores. Te asesoramos en cada caso.",
      },
    ],
    testimonial: {
      name: "Camila & Diego R.",
      location: "Doral, Florida",
      text: "Organizaron nuestra boda en Punta Cana con 45 invitados desde tres países distintos. Todo llegó perfectamente, el resort fue espectacular y la ceremonia superó todo lo que imaginamos.",
      avatarColor: "#db2777",
    },
    stats: [
      { value: "80+", label: "Bodas organizadas" },
      { value: "5", label: "Resorts socios" },
      { value: "12m", label: "Antelación recomendada" },
      { value: "100%", label: "Parejas satisfechas" },
    ],
    destinations: ["Punta Cana", "Cap Cana", "Bávaro", "La Romana"],
  },
];

export const getExperienceBySlug = (slug: string): Experience | undefined =>
  experiences.find((exp) => exp.slug === slug);
