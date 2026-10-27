import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Animal } from '../types';
import { Heart, Sparkles, VolumeX, ShieldCheck, ArrowRight, Eye, Users } from 'lucide-react';

interface JointAnimalCardProps {
  primaryAnimal: Animal;
  partnerAnimal: Animal;
  compact?: boolean;
}

export const JointAnimalCard: React.FC<JointAnimalCardProps> = ({ 
  primaryAnimal, 
  partnerAnimal,
  compact = false 
}) => {
  const [activePhoto, setActivePhoto] = useState<'both' | 'primary' | 'partner'>('both');

  const statusLabel = (primaryAnimal.status === 'Adoptado' || primaryAnimal.status === 'Adoptada')
    ? 'Adoptados'
    : primaryAnimal.status === 'Reservada' || primaryAnimal.status === 'Reservado'
      ? 'Reservados'
      : primaryAnimal.status === 'Pronto en adopción'
        ? 'Pronto en adopción'
        : 'En Adopción';

  const isReserved = statusLabel === 'Reservados';
  const isAdopted = statusLabel === 'Adoptados';

  // Specific highlighted reason for their bond
  const isDeafDuo = (primaryAnimal.breed?.toLowerCase().includes('sordo') || primaryAnimal.story?.toLowerCase().includes('sordo')) &&
                    (partnerAnimal.breed?.toLowerCase().includes('sordo') || partnerAnimal.story?.toLowerCase().includes('sordo'));

  const isAuroraAriel = (primaryAnimal.name === 'Aurora' && partnerAnimal.name === 'Ariel') ||
                        (primaryAnimal.name === 'Ariel' && partnerAnimal.name === 'Aurora');

  const isCheddarBambi = (primaryAnimal.name === 'Cheddar' && partnerAnimal.name === 'Bambi') ||
                         (primaryAnimal.name === 'Bambi' && partnerAnimal.name === 'Cheddar');

  if (compact) {
    return (
      <div className="col-span-2 sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-850 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-rose-200/80 dark:border-rose-900/40 group flex flex-col relative">
        {/* Ribbon Header */}
        <div className={`${
          isAdopted
            ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-rose-600'
            : 'bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500'
        } text-white px-3 py-1.5 flex items-center justify-between text-[11px] font-bold shadow-sm`}>
          <div className="flex items-center gap-1.5">
            <Users size={13} className={isAdopted ? '' : 'animate-pulse'} />
            <span>{isAdopted ? '¡ADOPCIÓN CONJUNTA CONSEGUIDA!' : 'ADOPCIÓN CONJUNTA OBLIGATORIA'}</span>
          </div>
          <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px]">
            {statusLabel}
          </span>
        </div>

        {/* Dual Split Images */}
        <div className="relative h-48 sm:h-56 grid grid-cols-2 overflow-hidden bg-stone-100 dark:bg-stone-800">
          {/* Left Animal Photo */}
          <div className="relative h-full overflow-hidden border-r border-white/40 dark:border-stone-800 group/left">
            <img 
              src={primaryAnimal.imageUrl} 
              alt={primaryAnimal.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-[10px] font-bold">
              {primaryAnimal.name}
            </div>
          </div>

          {/* Right Animal Photo */}
          <div className="relative h-full overflow-hidden group/right">
            <img 
              src={partnerAnimal.imageUrl} 
              alt={partnerAnimal.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-[10px] font-bold">
              {partnerAnimal.name}
            </div>
          </div>

          {/* Central Heart Connection Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white dark:bg-stone-900 text-rose-500 p-2 rounded-full shadow-lg border-2 border-rose-200 dark:border-rose-900/50 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Heart size={14} className="fill-rose-500" />
            </div>
          </div>
        </div>

        {/* Info Card Content */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 flex items-center gap-1.5">
                {primaryAnimal.name} & {partnerAnimal.name}
                <Sparkles size={14} className="text-amber-500" />
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">
                {isCheddarBambi ? 'No son hermanos • Total compatibilidad en convivencia' : `${primaryAnimal.age} • Hermanitos inseparables`}
              </p>
            </div>
            <span className="text-xs bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              {isDeafDuo && <VolumeX size={11} />}
              Dúo
            </span>
          </div>

          {/* Reason Badge */}
          <div className="my-2 bg-rose-50/80 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 rounded-xl p-2 text-[11px] text-stone-600 dark:text-stone-300 leading-snug">
            {isDeafDuo ? (
              <p>
                👂 <strong>Ambos son totalmente sordos:</strong> se entienden con la mirada y se apoyan a diario. ¡Solo se adoptan juntos!
              </p>
            ) : isAuroraAriel ? (
              <p>
                💞 <strong>Vínculo inseparable:</strong> han crecido juntas, Aurora es sorda y se necesitan mutuamente para su bienestar y adaptación.
              </p>
            ) : isCheddarBambi ? (
              <p>
                💞 <strong>Total compatibilidad:</strong> no son hermanos pero por sus semejanzas en el carácter y total compatibilidad en la convivencia se marchan adoptados juntos.
              </p>
            ) : (
              <p>
                💞 <strong>Vínculo inseparable:</strong> han crecido juntos y se necesitan mutuamente para su bienestar y adaptación.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="mt-auto pt-2 grid grid-cols-2 gap-2">
            <Link 
              to={`/animal/${primaryAnimal.id}`}
              className="text-center bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-bold py-1.5 px-2 rounded-xl text-xs transition-colors truncate"
            >
              Ficha {primaryAnimal.name}
            </Link>
            <Link 
              to={`/animal/${partnerAnimal.id}`}
              className="text-center bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-bold py-1.5 px-2 rounded-xl text-xs transition-colors truncate"
            >
              Ficha {partnerAnimal.name}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Detailed View (Full Card)
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-850 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-rose-200/90 dark:border-rose-900/50 flex flex-col md:flex-row relative">
      {/* Visual Section: Split Photos or Tabs */}
      <div className="md:w-1/2 relative min-h-[300px] md:min-h-[380px] bg-stone-100 dark:bg-stone-800 overflow-hidden">
        {/* Banner Top */}
        <div className={`absolute top-3 left-3 z-20 ${
          isAdopted
            ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-rose-600'
            : 'bg-gradient-to-r from-rose-500 to-amber-500'
        } text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5`}>
          <Heart size={13} className="fill-white" />
          <span>{isAdopted ? '¡ADOPCIÓN CONJUNTA CONSEGUIDA! 🎉' : 'ADOPCIÓN CONJUNTA OBLIGATORIA'}</span>
        </div>

        <div className="absolute top-3 right-3 z-20 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm text-stone-800 dark:text-stone-200 px-3 py-1 rounded-full text-xs font-bold shadow-md">
          {statusLabel}
        </div>

        {/* Tab Controls for Photos */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md p-1 rounded-full flex gap-1 border border-white/20">
          <button 
            onClick={() => setActivePhoto('both')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
              activePhoto === 'both' ? 'bg-white text-stone-900 shadow' : 'text-white/80 hover:text-white'
            }`}
          >
            Juntos
          </button>
          <button 
            onClick={() => setActivePhoto('primary')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
              activePhoto === 'primary' ? 'bg-white text-stone-900 shadow' : 'text-white/80 hover:text-white'
            }`}
          >
            {primaryAnimal.name}
          </button>
          <button 
            onClick={() => setActivePhoto('partner')}
            className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
              activePhoto === 'partner' ? 'bg-white text-stone-900 shadow' : 'text-white/80 hover:text-white'
            }`}
          >
            {partnerAnimal.name}
          </button>
        </div>

        {/* Photos rendering based on tab */}
        {activePhoto === 'both' ? (
          <div className="w-full h-full grid grid-cols-2 relative">
            <div className="relative h-full overflow-hidden border-r border-white/40">
              <img 
                src={primaryAnimal.imageUrl} 
                alt={primaryAnimal.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-12 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-lg text-xs font-bold">
                {primaryAnimal.name}
              </div>
            </div>
            <div className="relative h-full overflow-hidden">
              <img 
                src={partnerAnimal.imageUrl} 
                alt={partnerAnimal.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-12 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-lg text-xs font-bold">
                {partnerAnimal.name}
              </div>
            </div>
            {/* Center Heart Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white dark:bg-stone-900 text-rose-500 p-2.5 rounded-full shadow-xl border-2 border-rose-300 dark:border-rose-800">
                <Heart size={18} className="fill-rose-500 animate-pulse" />
              </div>
            </div>
          </div>
        ) : activePhoto === 'primary' ? (
          <div className="w-full h-full relative">
            <img 
              src={primaryAnimal.imageUrl} 
              alt={primaryAnimal.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-12 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">
              {primaryAnimal.name} ({primaryAnimal.breed})
            </div>
          </div>
        ) : (
          <div className="w-full h-full relative">
            <img 
              src={partnerAnimal.imageUrl} 
              alt={partnerAnimal.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-12 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">
              {partnerAnimal.name} ({partnerAnimal.breed})
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-100/70 dark:bg-rose-950/50 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <Heart size={12} className="fill-rose-500" /> Dupla Inseparable
            </span>
            <span className="text-xl">🐱 + 🐱</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-1">
            {primaryAnimal.name} & {partnerAnimal.name}
          </h3>

          <p className="text-xs md:text-sm text-stone-500 dark:text-stone-400 mb-4">
            {isCheddarBambi ? 'No son hermanos de sangre • Total compatibilidad en convivencia' : `${primaryAnimal.breed} • ${primaryAnimal.age} • Ambos ${primaryAnimal.gender}s`}
          </p>

          {/* Explanation Callout */}
          <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/40 rounded-2xl p-4 mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 mb-1 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-rose-600" />
              ¿Por qué se adoptan juntos?
            </h4>
            <p className="text-xs md:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {isDeafDuo
                ? `${primaryAnimal.name} y ${partnerAnimal.name} son totalmente sordos. No perciben los avisos ni límites sonoros de otros gatos, pero han desarrollado un código propio de gestos, miradas y caricias. Separarlos les generaría desorientación y miedo; juntos son seguros, juguetones y un equipazo inseparable.`
                : isAuroraAriel
                ? `Aurora y Ariel comparten un vínculo inseparable: han crecido juntas, Aurora es sorda y se necesitan mutuamente para su bienestar y adaptación. Se buscan muchísimo y se apoyan en el día a día.`
                : isCheddarBambi
                ? `Cheddar y Bambi no son hermanos pero por sus semejanzas en el carácter y total compatibilidad en la convivencia se marchan adoptados juntos. En su casa de acogida crearon una unión perfecta e inseparable.`
                : `${primaryAnimal.name} y ${partnerAnimal.name} comparten un vínculo inquebrantable desde su rescate. Crecen, duermen y juegan juntos, dándose la seguridad y tranquilidad que necesitan para ser gatos felices.`}
            </p>
          </div>

          {/* Quick Veterinary Highlights */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6">
            <div className="bg-stone-50 dark:bg-stone-800/80 p-2 rounded-xl">
              <span className="text-[10px] text-stone-400 font-bold block uppercase">Test FELV/FIV</span>
              <span className="font-bold text-teal-600 dark:text-teal-400 text-xs">
                {primaryAnimal.medicalStatus?.felvFiv === 'Negativo' ? 'Negativos' : (primaryAnimal.medicalStatus?.felvFiv || 'Pte')}
              </span>
            </div>
            <div className="bg-stone-50 dark:bg-stone-800/80 p-2 rounded-xl">
              <span className="text-[10px] text-stone-400 font-bold block uppercase">Protocolo</span>
              <span className="font-bold text-teal-600 dark:text-teal-400 text-xs">
                {primaryAnimal.medicalStatus?.deworming === 'Sí' && primaryAnimal.medicalStatus?.vaccination === 'Sí' ? 'Completo' : 'En proceso'}
              </span>
            </div>
            <div className="bg-stone-50 dark:bg-stone-800/80 p-2 rounded-xl">
              <span className="text-[10px] text-stone-400 font-bold block uppercase">Adopción</span>
              <span className="font-bold text-rose-600 dark:text-rose-400 text-xs">Conjunta</span>
            </div>
          </div>
        </div>

        {/* Buttons / CTA */}
        <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center gap-3">
          <Link
            to={`/animal/${primaryAnimal.id}`}
            className="flex-1 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 font-bold py-2.5 px-4 rounded-xl text-xs md:text-sm text-center shadow transition-transform hover:scale-[1.02] flex items-center justify-center gap-1.5"
          >
            <span>Ver a {primaryAnimal.name}</span>
            <ArrowRight size={14} />
          </Link>

          <Link
            to={`/animal/${partnerAnimal.id}`}
            className="flex-1 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 font-bold py-2.5 px-4 rounded-xl text-xs md:text-sm text-center shadow transition-transform hover:scale-[1.02] flex items-center justify-center gap-1.5"
          >
            <span>Ver a {partnerAnimal.name}</span>
            <ArrowRight size={14} />
          </Link>

          <Link
            to="/donar"
            className="p-2.5 bg-rose-50 dark:bg-rose-900/20 text-rose-500 hover:text-rose-600 rounded-xl transition-colors"
            title="Apadrinar a la pareja"
          >
            <Heart size={20} className="fill-rose-500/20" />
          </Link>
        </div>
      </div>
    </div>
  );
};
