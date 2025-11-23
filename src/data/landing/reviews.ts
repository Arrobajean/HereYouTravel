export interface Review {
  reviewerName: string;
  timeAgo: string;
  reviewText: string;
  avatarColor: string;
  hasAvatar?: boolean;
}

export const reviews: Review[] = [
  {
    reviewerName: "Fanny B",
    timeAgo: "hace 4 meses",
    reviewText:
      "Excelente lugar para tomarse unas vacaciones, linda playa, excelente comida, todo muy limpio, el personal muy atento y amable. Definitivamente volveré.",
    avatarColor: "#EC4899", // rosa
    hasAvatar: true,
  },
  {
    reviewerName: "Gielen V",
    timeAgo: "hace 3 meses",
    reviewText:
      "Increíble experiencia de viaje. La agencia se encargó de todos los detalles y todo salió perfecto. Los destinos fueron espectaculares y el servicio impecable.",
    avatarColor: "#F59E0B", // naranja
  },
  {
    reviewerName: "Madeleyne C",
    timeAgo: "hace 2 meses",
    reviewText:
      "Muy profesional y organizado. Nos ayudaron a planificar el viaje perfecto. Los guías fueron excelentes y conocían muy bien los lugares. Altamente recomendado.",
    avatarColor: "#10B981", // verde
  },
  {
    reviewerName: "Carlos M",
    timeAgo: "hace 5 meses",
    reviewText:
      "La mejor agencia de viajes con la que he trabajado. Precios justos, atención personalizada y destinos increíbles. Sin duda volveré a usar sus servicios.",
    avatarColor: "#3B82F6", // azul
  },
  {
    reviewerName: "Ana L",
    timeAgo: "hace 1 mes",
    reviewText:
      "Experiencia maravillosa desde el principio hasta el final. Todo estuvo perfectamente coordinado y superó nuestras expectativas. Gracias por hacer nuestro viaje inolvidable.",
    avatarColor: "#8B5CF6", // púrpura
  },
  {
    reviewerName: "Roberto S",
    timeAgo: "hace 6 meses",
    reviewText:
      "Servicio excepcional desde el primer contacto. Nos ayudaron a encontrar el paquete perfecto para nuestra luna de miel. Todo fue increíble y sin complicaciones.",
    avatarColor: "#EF4444", // rojo
  },
];

