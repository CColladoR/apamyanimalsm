export interface Review {
  id: number;
  author: string;
  role?: string;
  text: string;
  rating: number;
  date: string;
  source: 'Google' | 'Teaming';
}

export const ALL_REVIEWS: Review[] = [
  {
    id: 1,
    author: "Diana Linares",
    role: "Adoptante de Oasis (Polo)",
    text: "Las chicas de APA Myanimalsm son un amor absoluto. Adoptamos a Oasis (ahora Polo) y nos dieron toda la información, pautas y facilidades durante todo el proceso de adopción. Da gusto encontrar personas tan comprometidas y volcadas en el bienestar de los animales. ¡Mil gracias por todo!",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 2,
    author: "Alfonso de Castañeda",
    role: "Colaborador y adoptante",
    text: "Gente encantadora, súper servicial y ayudan en absolutamente todo. Hacen un trabajo incansable rescatando animales en situaciones muy complicadas y cuidándolos con muchísimo cariño en casas de acogida. Una labor de diez.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 3,
    author: "Beatriz M.",
    role: "Adoptante felina",
    text: "Una asociación maravillosa. Adoptamos a nuestra gata allí y el trato fue increíble. Se nota que aman a los animales y se preocupan muchísimo por encontrarles el mejor hogar posible. Siempre atentas a cualquier duda durante la adaptación.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 4,
    author: "Javier R.",
    role: "Adoptante",
    text: "Hacen una labor incansable. Son transparentes y todo va íntegramente para los peludos. El proceso de adopción es serio, responsable y riguroso, priorizando siempre la seguridad del animal. 100% recomendables.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 5,
    author: "Elena S.",
    role: "Adoptante canina",
    text: "Gracias a ellas mi vida cambió al adoptar a mi perro. Me asesoraron genial sobre qué animal encajaba mejor con mi estilo de vida y rutinas. Sois auténticos ángeles para los animales rescatados.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 6,
    author: "Marta G.",
    role: "Adoptante felina",
    text: "Adopté a mi gatito a través de APA Myanimalsm y no pude tener mejor experiencia. Te entregan a los peludos con todo su protocolo veterinario al día, desparasitados y con chip, y te dan consejos buenísimos para la presentación en casa.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 7,
    author: "Carlos y Lucía",
    role: "Adopción conjunta",
    text: "Hicimos una adopción conjunta de dos hermanitos y estamos encantados. El seguimiento, el cariño con el que los tratan y la cercanía de Laura y todo el equipo es insuperable. Gracias por regalarnos a nuestros nuevos compañeros de vida.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 8,
    author: "Tamara O.",
    role: "Adoptante y voluntaria",
    text: "Grandes profesionales y mejores personas. Rescatan casos dificilísimos y les dan todo el amor del mundo en sus casas de acogida hasta que encuentran su familia definitiva. Totalmente recomendables y de máxima confianza.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 9,
    author: "Silvia P.",
    role: "Adoptante felina",
    text: "Increíble asociación. La transparencia en los contratos, la preocupación genuina por las protecciones en ventanas y el bienestar del animal te demuestran lo seria y responsable que es esta protectora. Un 10 rotundo.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 10,
    author: "Raúl M.",
    role: "Adoptante",
    text: "Una labor admirable la que hacen entre Madrid y Toledo gestionando colonias y rescatando peques. El proceso de adopción fue rápido pero muy exhaustivo. Se agradece encontrar gente tan honesta y dedicada.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 11,
    author: "Nuria V.",
    role: "Adoptante felina",
    text: "Mi experiencia adoptando con APA Myanimalsm ha sido insuperable. Me explicaron cada detalle de su carácter, salud y adaptación. Hoy mi gata es la reina de la casa gracias al amor que recibió en su casa de acogida.",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  },
  {
    id: 12,
    author: "Pablo y Sara",
    role: "Adoptantes de perro",
    text: "No podemos estar más agradecidos al equipo de APA Myanimalsm. Nos ayudaron a encontrar al compañero perfecto para nuestra familia y nos acompañaron con un post-adopción impecable. ¡Seguid así salvando vidas!",
    rating: 5,
    date: "Reseña en Google",
    source: "Google"
  }
];

export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=69ee371ef966a8ee&sxsrf=APpeQnvwhQUuV-HOTDxrDb4mPVKqbU9q5Q:1788705624725&q=opiniones+de+apa.+myanimalsm&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_-ey7I7RdQw6I1w5ZkPBYAo8Q1-aPI_lJsTsrY1SewP9_UUsdP14cMUx9Pvln2z0Ypc4tc9nyA52_UKLSOruIn0owaT_jTr0q57xEqyx1DNDSUJIww%3D%3D&sa=X&ved=2ahUKEwjl8fnal9qWAxUmVUEAHf9JGeUQ9qsLegQIHBAJ&biw=360&bih=735&dpr=3";

/**
 * Returns the current calendar week number (or continuous epoch week),
 * ensuring the reviews change automatically every 7 days (weekly).
 */
export function getCurrentWeekIndex(): number {
  const now = new Date();
  // Using a fixed epoch anchor (e.g. 2026-01-01) or standard epoch to advance automatically every 7 days
  const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
  return Math.floor(now.getTime() / MS_PER_WEEK);
}

/**
 * Gets the reviews corresponding to the current week (or with a manual week offset).
 * Returns batchSize reviews (default 3) deterministically selected for that week.
 */
export function getWeeklyReviews(weekOffset: number = 0, batchSize: number = 3): {
  reviews: Review[];
  currentWeekNumber: number;
  batchIndex: number;
  totalBatches: number;
} {
  const currentWeek = getCurrentWeekIndex() + weekOffset;
  const total = ALL_REVIEWS.length;
  const totalBatches = Math.ceil(total / batchSize);
  const batchIndex = ((currentWeek % totalBatches) + totalBatches) % totalBatches;

  const startIndex = batchIndex * batchSize;
  const selected: Review[] = [];
  for (let i = 0; i < batchSize; i++) {
    const item = ALL_REVIEWS[(startIndex + i) % total];
    if (item && !selected.some(r => r.id === item.id)) {
      selected.push(item);
    }
  }

  return {
    reviews: selected,
    currentWeekNumber: currentWeek,
    batchIndex: batchIndex + 1,
    totalBatches
  };
}
