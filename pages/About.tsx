import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Camera } from 'lucide-react';

export const About: React.FC = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517423568366-697553f1d7ad?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9205?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <div className="py-16 bg-white dark:bg-stone-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Sobre APA Myanimalsm</h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-4xl mx-auto leading-relaxed">
            Somos una asociación sin ánimo de lucro dedicada en cuerpo y alma al bienestar animal. Nacimos de la necesidad de dar respuesta a los casos de abandono y maltrato que sufrían las colonias felinas en nuestra comarca, trabajando incansablemente para curar heridas físicas y emocionales de nuestros peludos. A día de hoy, APA. Myanimalsm es un gran equipo. Contamos con las mejores casas de acogida, los mejores adoptantes, voluntarios, seguidores y veterinarias, trabajando con casas de acogida repartidas entre Madrid y Toledo. Ahora bien, las cabecitas pensantes que formamos la junta directiva nos queremos presentar oficialmente:
          </p>
        </div>

        <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-12 text-center">Nuestro Equipo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-stone-50 dark:bg-stone-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all border border-stone-100 dark:border-stone-700">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-stone-700 shadow-md">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm uppercase tracking-wide mb-4">{member.role}</p>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center px-4">
          <p className="text-lg text-stone-700 dark:text-stone-300 italic leading-relaxed font-serif">
            Podríamos resumirlo como que los gatos nos unieron para darlo todo codo con codo a favor de los animales más necesitados. Desde ese momento, siempre estamos juntas al pie del cañón, llueva, se caiga el cielo o truene, por y para ellos.
          </p>
        </div>

        <div className="mt-24 bg-teal-50 dark:bg-teal-900/20 rounded-3xl p-8 md:p-12 text-center border border-teal-100 dark:border-teal-900/50">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-900 dark:text-teal-200 mb-6">
            Nuestra Misión
          </h2>
          <p className="text-teal-800 dark:text-teal-300 text-lg max-w-4xl mx-auto">
            "No solo rescatamos animales, reconstruimos vidas. Creemos firmemente que cada ser vivo merece respeto, dignidad y un hogar donde sentirse seguro."
          </p>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-24 mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-8 text-center flex items-center justify-center gap-3">
                <Camera className="text-primary" size={32} />
                Álbum de Familia
            </h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {galleryImages.map((src, idx) => (
                    <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-stone-100 dark:bg-stone-800">
                        <img 
                            src={src} 
                            alt={`Momento APA Myanimalsm ${idx + 1}`} 
                            className="w-full h-auto hover:scale-105 transition-transform duration-700 block" 
                        />
                    </div>
                ))}
            </div>
            <p className="text-center text-sm text-stone-500 dark:text-stone-400 mt-8 italic">
                Pequeños instantes de felicidad compartida que nos impulsan a seguir adelante.
            </p>
        </div>
      </div>
    </div>
  );
};