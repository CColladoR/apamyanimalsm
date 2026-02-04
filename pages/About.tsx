import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Camera } from 'lucide-react';

export const About: React.FC = () => {
  // Family Album images
  const galleryImages = [
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau1.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau2.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau3.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau4.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau5.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Lau6.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes1.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes2.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes3.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes4.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes5.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/reyes6.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris1.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris2.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris3.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris4.jpg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris5.jpeg",
    "https://raw.githubusercontent.com/CColladoR/apa/refs/heads/main/Chris6.jpg",
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
            <p className="text-center text-lg text-stone-600 dark:text-stone-300 mt-10 italic font-serif">
                "Pequeños instantes de felicidad compartida que nos impulsan a seguir adelante"
            </p>
        </div>
      </div>
    </div>
  );
};