import React from 'react';
import { Home, Heart, ShieldCheck, Stethoscope, CheckCircle2, Instagram } from 'lucide-react';

export const Foster: React.FC = () => {
  const message = "¡Hola! Me gustaría iniciar el trámite para ser casa de acogida.";
  const instagramUrl = `https://ig.me/m/apa.myanimalsm?text=${encodeURIComponent(message)}`;

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

          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8 border border-teal-100 dark:border-teal-900/50">
            <h3 className="font-bold text-lg text-teal-900 dark:text-teal-200 mb-4">Salvas dos vidas</h3>
            <p className="text-teal-800 dark:text-teal-300 mb-0">
              Al acoger a un animal, le brindas un hogar temporal y nos permites rescatar a otro de la calle. Al no disponer de refugio físico, dependemos exclusivamente de las casas de acogida para poder salvar vidas. ¡Tu ayuda es vital!
            </p>
          </div>
        </div>

        {/* Instagram CTA Button */}
        <div className="flex justify-center mt-16 mb-8 scale-100 hover:scale-105 transition-transform duration-300">
            <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-yellow-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3 text-center"
            >
                <Instagram size={28} />
                Iniciar trámite de acogida
            </a>
        </div>

      </div>
    </div>
  );
};