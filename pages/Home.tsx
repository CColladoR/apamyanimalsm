import React, { useState, useMemo } from 'react';
import { ANIMALS } from '../constants';
import { AnimalCard } from '../components/AnimalCard';
import { Link } from 'react-router-dom';
import { HeartHandshake, Dog, Cat, Feather, LayoutGrid, Star, Quote, ExternalLink, Instagram, Activity } from 'lucide-react';

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Todos' | 'Perro' | 'Gato' | 'Otro'>('Todos');

  const filteredAnimals = useMemo(() => {
    if (activeCategory === 'Todos') return ANIMALS;
    return ANIMALS.filter(animal => animal.species === activeCategory);
  }, [activeCategory]);

  const categories = [
    { id: 'Todos', label: 'Todos', icon: LayoutGrid },
    { id: 'Perro', label: 'Perros', icon: Dog },
    { id: 'Gato', label: 'Gatos', icon: Cat },
    { id: 'Otro', label: 'Otros animales', icon: Feather },
  ] as const;

  const REVIEWS = [
    {
      id: 1,
      author: "Beatriz M.",
      text: "Una asociación maravillosa. Adoptamos a nuestra gata allí y el trato fue increíble. Se nota que aman a los animales y se preocupan muchísimo por encontrarles el mejor hogar posible. El seguimiento post-adopción es de agradecer.",
      rating: 5,
      date: "Hace 2 meses"
    },
    {
      id: 2,
      author: "Javier R.",
      text: "Hacen una labor incansable. Son transparentes y todo va íntegramente para los peludos. El proceso de adopción es serio y riguroso, lo cual demuestra su compromiso real con el bienestar animal. 100% recomendables.",
      rating: 5,
      date: "Hace 5 meses"
    },
    {
      id: 3,
      author: "Elena S.",
      text: "Gracias a ellas mi vida cambió al adoptar a mi perro. Me asesoraron genial sobre qué animal encajaba mejor con mi estilo de vida. Se desviven por rescatar y cuidar casos muy difíciles. Sois ángeles.",
      rating: 5,
      date: "Hace 1 año"
    }
  ];

  const RESCUE_STATS = [
    { year: 2021, count: 208 },
    { year: 2022, count: 206 },
    { year: 2023, count: 63 },
    { year: 2024, count: 71 },
    { year: 2025, count: 40 },
  ];

  const maxStat = Math.max(...RESCUE_STATS.map(s => s.count));

  const GOOGLE_REVIEWS_URL = "https://www.google.com/search?client=tablet-android-oneplus-terr2-rso3&hs=D9l9&sca_esv=a7edb0de10d9816f&sxsrf=AE3TifM-1i2xidpwPamBHDweXq8YGmUzEw:1767620831302&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_L8ffYskMjqjhzIwlId9i12L7nUhQl-qH0CA9t3ZFy3c63zzk3HYalbkRwQF7ieBGy1EIzi_8kerbCRTaNwgZDryFBjjfqUKOpJX8bLSFzTRpIZxg%3D%3D&q=APA.+Myanimalsm+Reseñas&sa=X&ved=2ahUKEwjE__zdxPSRAxXbRaQEHR5NDsYQ0bkNegQIIxAD&biw=1348&bih=819&dpr=2.23";

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="bg-stone-100 dark:bg-stone-900 py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">
            Encuentra a tu <span className="text-primary">mejor amigo</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto mb-10">
            En APA Myanimalsm luchamos cada día por dar una segunda oportunidad a quienes más lo necesitan. Adopta, no compres.
          </p>
          <div className="flex justify-center gap-4">
             <Link 
                to="/adopta" 
                className="bg-primary hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform hover:-translate-y-1 shadow-md"
             >
                Cómo Adoptar
             </Link>
             <Link 
                to="/donar" 
                className="bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-stone-700 px-8 py-3 rounded-full font-semibold text-lg transition-transform hover:-translate-y-1 shadow-sm flex items-center gap-2"
             >
                <HeartHandshake size={20} />
                Ayúdanos
             </Link>
          </div>
        </div>
      </div>

      {/* Animal List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">
            Animales en Adopción
          </h2>
          
          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 shadow-sm
                    ${isSelected 
                      ? 'bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 shadow-md transform scale-105' 
                      : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary'}
                  `}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-4 text-stone-500 dark:text-stone-400 text-sm font-medium">
          {filteredAnimals.length} {filteredAnimals.length === 1 ? 'animal te está esperando' : 'animales te están esperando'}
        </div>
        
        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnimals.map(animal => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-stone-50 dark:bg-stone-900/50 rounded-3xl border border-stone-100 dark:border-stone-800 border-dashed">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">No hay animales en esta categoría</h3>
            <p className="text-stone-600 dark:text-stone-400 mb-6">Actualmente no tenemos animales de este tipo en adopción.</p>
            <button 
              onClick={() => setActiveCategory('Todos')}
              className="text-primary font-semibold hover:underline"
            >
              Ver todos los animales
            </button>
          </div>
        )}
      </div>

      {/* Reviews Section */}
      <div className="bg-teal-50 dark:bg-stone-800/50 py-16 md:py-24 border-t border-teal-100 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">
              Lo que dicen de nosotros
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </span>
              <span className="text-stone-600 dark:text-stone-300 font-medium">4.9/5 en Google</span>
            </div>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Nuestra mayor recompensa es ver a nuestros animales felices en sus nuevos hogares. 
              Gracias a todos los que confiáis en APA Myanimalsm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300">
                <Quote className="text-teal-100 dark:text-teal-900 absolute top-6 right-6" size={48} />
                <div className="flex text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600 dark:text-stone-300 mb-6 relative z-10 italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-stone-500 dark:text-stone-400 font-bold text-sm">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-stone-800 dark:text-stone-100 text-sm">{review.author}</p>
                    <p className="text-xs text-stone-400">{review.date}</p>
                  </div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                    alt="Google" 
                    className="w-5 h-5 ml-auto opacity-50 grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={GOOGLE_REVIEWS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-200 px-6 py-3 rounded-full font-semibold shadow-sm border border-stone-200 dark:border-stone-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all"
            >
              Leer todas las reseñas en Google
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Graph Section */}
      <div className="py-24 bg-white dark:bg-stone-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 flex items-center justify-center gap-3">
               <Activity className="text-primary" />
               Animales Rescatados
             </h2>
             <p className="text-stone-600 dark:text-stone-400 mt-4 text-lg">
               Cada cifra representa una vida a salvo. Gracias por hacerlo posible.
             </p>
          </div>

          <div className="h-64 sm:h-80 flex items-end justify-between gap-3 sm:gap-6 px-4 sm:px-12 border-b border-stone-200 dark:border-stone-800 pb-2">
             {RESCUE_STATS.map((stat) => (
               <div key={stat.year} className="flex flex-col items-center justify-end w-full group relative z-10 h-full">
                  <div className="mb-2 font-bold text-stone-700 dark:text-stone-300 text-lg sm:text-2xl transition-all duration-300 transform group-hover:-translate-y-2 opacity-80 group-hover:opacity-100">
                    {stat.count}
                  </div>
                  <div 
                    className="w-full max-w-[40px] sm:max-w-[70px] bg-gradient-to-t from-teal-500 to-teal-300 dark:from-teal-600 dark:to-teal-400 rounded-t-lg relative shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:brightness-110 flex items-end overflow-hidden"
                    style={{ height: `${(stat.count / maxStat) * 100}%` }}
                  >
                     {/* Shine effect */}
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  <div className="mt-4 font-bold text-stone-500 dark:text-stone-400 text-sm sm:text-base">
                    {stat.year}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Floating Instagram Chat Button */}
      <a
        href="https://ig.me/m/apa.myanimalsm"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-yellow-500 via-purple-500 to-blue-500 text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
        aria-label="Chat en Instagram"
      >
        <Instagram size={20} />
        <span className="font-bold text-xs md:text-sm">¿Podemos ayudarte?</span>
      </a>
    </div>
  );
};