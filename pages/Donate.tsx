import React from 'react';
import { DONATION_METHODS } from '../constants';
import { Users, Smartphone, CreditCard, Landmark, ArrowRight, ExternalLink, Gift, ShoppingBag, Package } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  'Users': <Users size={32} />,
  'Smartphone': <Smartphone size={32} />,
  'CreditCard': <CreditCard size={32} />,
  'Landmark': <Landmark size={32} />,
};

export const Donate: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">Ayúdanos a Ayudar</h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            APA Myanimalsm se financia exclusivamente gracias a la generosidad de personas como tú. 
            El 100% de las donaciones se destina al cuidado veterinario, alimentación y bienestar de nuestros animales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {DONATION_METHODS.map((method) => (
            <div key={method.id} className="bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-800 p-8 hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
               {/* Decorative background circle */}
               <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 ${method.color}`}></div>
               
               <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-white ${method.color} shadow-md`}>
                 {IconMap[method.iconName]}
               </div>

               <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-3">{method.name}</h3>
               <p className="text-stone-600 dark:text-stone-400 mb-4">{method.description}</p>
               
               {method.details && (
                 <div className="mt-auto mb-6 p-4 bg-stone-50 dark:bg-stone-800 rounded-lg font-mono text-sm text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                   {method.details}
                 </div>
               )}

               {method.actionUrl ? (
                 <a 
                    href={method.actionUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center w-full px-6 py-3 rounded-xl font-bold text-white transition-transform hover:-translate-y-0.5 ${method.color}`}
                 >
                    Donar con {method.name} <ExternalLink size={18} className="ml-2" />
                 </a>
               ) : (
                  <button className="mt-auto w-full px-6 py-3 rounded-xl font-bold text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 cursor-default">
                    Usar datos bancarios arriba
                  </button>
               )}
            </div>
          ))}
        </div>

        {/* Amazon Wishlist Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-sm border border-orange-100 dark:border-orange-900/30 overflow-hidden">
            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-2 bg-gradient-to-br from-orange-400 to-amber-500 p-8 flex flex-col justify-center items-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 translate-x-1/2"></div>
                <Gift size={64} className="mb-4 relative z-10" />
                <h3 className="text-2xl font-serif font-bold text-center relative z-10">Lista de Deseos</h3>
                <p className="text-orange-50 text-center text-sm mt-2 relative z-10">Donación de material</p>
              </div>
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">¿Prefieres enviarnos productos?</h3>
                <p className="text-stone-600 dark:text-stone-400 mb-6">
                  Hemos creado una lista en Amazon con los productos que más necesitamos en el día a día del refugio. 
                  Es una forma directa de ayudarnos, sabiendo exactamente a qué se destina tu aportación.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-stone-400 uppercase mb-3 tracking-wider">Lo que más necesitamos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Pienso Alta Energía', 'Latas de Comida Húmeda', 'Lejía', 'Mantas Polares', 'Juguetes Kong'].map((item) => (
                      <span key={item} className="inline-flex items-center px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-200 rounded-full text-sm font-medium border border-orange-100 dark:border-orange-900/50">
                        <Package size={14} className="mr-1.5" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href="https://www.amazon.es/hz/wishlist/ls/2QSTF53HZ40Y1?ref_=wl_share&fbclid=PAT01DUAPHj95leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafnocxm5Y7X35QWda1ikA-kHXwn9BwLNC4Sw9yFEjMQiBJkonV_R1IVi627qA_aem_qZkNFifijeCQInYN64XkUQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-stone-800 hover:bg-stone-900 dark:bg-stone-700 dark:hover:bg-stone-600 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto self-start"
                >
                  <ShoppingBag size={20} className="mr-2" />
                  Ver Lista en Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};