import React from 'react';
import { Home, Heart, ShieldCheck, Stethoscope, CheckCircle2, Instagram, HelpCircle } from 'lucide-react';

export const Foster: React.FC = () => {
  const message = "¡Hola! Me gustaría iniciar el trámite para ser casa de acogida.";
  const instagramUrl = `https://ig.me/m/apa.myanimalsm?text=${encodeURIComponent(message)}`;

  // Configuration for the bubbles grid
  const bubbles = [
    { size: 'w-20 h-20 md:w-32 md:h-32', z: 'z-0', rotate: '-rotate-12', mt: 'mt-8' },
    { size: 'w-24 h-24 md:w-36 md:h-36', z: 'z-10', rotate: '-rotate-3', mt: 'mt-0' },
    { size: 'w-16 h-16 md:w-24 md:h-24', z: 'z-0', rotate: 'rotate-12', mt: 'mt-12' }, 
    { 
        // Main center bubble - User photo
        size: 'w-28 h-28 md:w-44 md:h-44', 
        z: 'z-30', 
        rotate: '-rotate-2', 
        mt: '-mt-4',
        imageUrl: "https://raw.githubusercontent.com/myanimalsm-apa/APA.-Myanimalsm-/main/IMG_20260206_180035_762.jpg",
        caption: "Helena y Jengibre"
    }, 
    { size: 'w-20 h-20 md:w-32 md:h-32', z: 'z-20', rotate: 'rotate-3', mt: 'mt-6' },
    { size: 'w-24 h-24 md:w-36 md:h-36', z: 'z-10', rotate: 'rotate-6', mt: 'mt-2' },
    { size: 'w-16 h-16 md:w-24 md:h-24', z: 'z-0', rotate: '-rotate-6', mt: 'mt-10' },
    { size: 'w-20 h-20 md:w-28 md:h-28', z: 'z-10', rotate: '-rotate-3', mt: 'mt-4' },
  ];

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-stone-900 transition-colors duration-300">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-teal-50 dark:bg-teal-900/30 rounded-full mb-6">
          <Home className="text-primary w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">
          ¿Quieres ser Casa de Acogida?
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
          Abre las puertas de tu hogar temporalmente y salva vidas. Sin casas de acogida, muchos animales no tendrían una segunda oportunidad.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Info Section */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-3">
              <Heart className="text-accent" />
              ¿Qué implica acoger?
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              Ser casa de acogida significa cuidar temporalmente de un animal en tu propia casa hasta que encuentre una familia definitiva. Es una pieza fundamental en el engranaje de la protección animal.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
              Es la opción ideal si quieres disfrutar de la compañía de un animal pero no puedes comprometerte a largo plazo (por vida), o si quieres ver cómo te adaptas antes de adoptar.
            </p>
          </div>

          {/* Requisitos Section */}
          <div className="bg-stone-50 dark:bg-stone-800 rounded-2xl p-8 border border-stone-100 dark:border-stone-700">
              <h3 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Requisitos imprescindibles</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm">Vivir en <strong>Madrid o Toledo</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm">Disponer de un <strong>espacio aislado temporal</strong> dónde poder hacer cuarentenas o presentaciones con otros animales de la unidad familiar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm">Poder acudir a nuestros veterinarios o aceptar visitas de veterinarios a domicilio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm">Meternos en el papel de <strong>fotógrafos</strong> para poder hacer unos post chulísimos y poder fomentar sus adopciones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-stone-700 dark:text-stone-300 text-sm">Tiempo suficiente para amarlos y cuidarlos como nosotros lo hacemos 💙</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-700">
                <p className="text-stone-800 dark:text-stone-200 font-medium mb-1">De todo lo demás nos encargamos nosotros.</p>
                <p className="text-primary font-bold">¿Te animas? 🚀</p>
              </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-100 dark:border-stone-700">
              <ShieldCheck className="text-teal-600 dark:text-teal-400 mb-4 h-8 w-8" />
              <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100 mb-2">Seguridad</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                El animal está bajo la tutela legal de la asociación. Nosotros nos encargamos de filtrar a los posibles adoptantes.
              </p>
            </div>
            <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl border border-stone-100 dark:border-stone-700">
              <Stethoscope className="text-teal-600 dark:text-teal-400 mb-4 h-8 w-8" />
              <h3 className="font-bold text-lg text-stone-800 dark:text-stone-100 mb-2">Gastos Cubiertos</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                La asociación cubre los gastos veterinarios y, si lo necesitas, también la alimentación. Tú pones el hogar y el cariño.
              </p>
            </div>
          </div>
        </div>

        {/* Instagram CTA Button */}
        <div className="flex justify-center mt-16 mb-20 scale-100 hover:scale-105 transition-transform duration-300">
            <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3 text-center"
            >
                <Instagram size={28} />
                Iniciar trámite de acogida
            </a>
        </div>

        {/* Foster Families Collage Section */}
        <div className="pt-16 pb-20 border-t border-stone-100 dark:border-stone-800 overflow-hidden">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4">
                 Nuestra Gran Familia De Acogida
              </h2>
              <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                 Ellxs son el corazón de APA Myanimalsm. Gracias a su generosidad abriendo las puertas de su hogar, cientos de vidas han sido salvadas.
              </p>
           </div>

           {/* Collage Container */}
           <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center items-center content-center max-w-5xl mx-auto -space-x-4 md:-space-x-8">
                 {bubbles.map((bubble, index) => (
                    <div 
                       key={index}
                       className={`
                         relative ${bubble.z} hover:z-40 
                         transition-all duration-500 ease-out hover:scale-110
                         ${bubble.size} ${bubble.rotate} ${bubble.mt}
                         rounded-full shadow-xl
                         ${bubble.imageUrl ? '' : 'bg-stone-50 dark:bg-stone-800 border-[4px] md:border-[6px] border-white dark:border-stone-900'}
                         group cursor-default flex-shrink-0
                       `}
                    >
                       {bubble.imageUrl ? (
                           <div className="w-full h-full rounded-full overflow-hidden border-[4px] md:border-[6px] border-white dark:border-stone-900">
                               <img 
                                   src={bubble.imageUrl} 
                                   alt="Familia de acogida" 
                                   className="w-full h-full object-cover"
                               />
                           </div>
                       ) : (
                           <div className="w-full h-full rounded-full border-2 border-dashed border-stone-300 dark:border-stone-600 flex items-center justify-center text-stone-300 dark:text-stone-600 group-hover:text-teal-500 group-hover:border-teal-400 transition-colors">
                              <HelpCircle className="w-1/3 h-1/3" strokeWidth={1.5} />
                           </div>
                       )}

                       {(bubble as any).caption && (
                           <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50">
                               <span className="inline-block bg-white/95 dark:bg-stone-800/95 backdrop-blur px-3 py-1 rounded-full text-[10px] md:text-xs font-serif font-bold text-stone-700 dark:text-stone-200 shadow-md border border-stone-100 dark:border-stone-700">
                                   {(bubble as any).caption}
                               </span>
                           </div>
                       )}
                    </div>
                 ))}
              </div>
           </div>
           
           <p className="text-center text-xs text-stone-400 mt-16 italic">
              ¿Te gustaría formar parte de este muro? ¡Escríbenos!
           </p>
        </div>

      </div>
    </div>
  );
};