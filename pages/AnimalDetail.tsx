import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ANIMALS } from '../constants';
import { Heart, Home, Ruler, Calendar, Info, ArrowLeft, Check, X, Clock, Stethoscope, AlertCircle } from 'lucide-react';
import { MedicalStatusValue, FelvFivValue } from '../types';

export const AnimalDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const animal = useMemo(() => ANIMALS.find(a => a.id === id), [id]);

  if (!animal) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-stone-600 dark:text-stone-300 mb-4">Animal no encontrado</h2>
        <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  const renderStatusBadge = (status?: string) => {
    if (!status) return <span className="text-stone-400">-</span>;

    const styles: Record<string, string> = {
      'Sí': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
      'Negativo': 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
      'No': 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
      'Pte': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
      'Positivo (FELV)': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
      'Positivo (FIV)': 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    };

    const icons: Record<string, React.ReactNode> = {
      'Sí': <Check size={14} className="mr-1.5" />,
      'Negativo': <Check size={14} className="mr-1.5" />,
      'No': <X size={14} className="mr-1.5" />,
      'Pte': <Clock size={14} className="mr-1.5" />,
      'Positivo (FELV)': <AlertCircle size={14} className="mr-1.5" />,
      'Positivo (FIV)': <AlertCircle size={14} className="mr-1.5" />,
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${styles[status] || styles['Pte']}`}>
        {icons[status] || <Info size={14} className="mr-1.5" />}
        {status}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="inline-flex items-center text-stone-500 hover:text-primary dark:text-stone-400 dark:hover:text-primary mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Volver al listado
      </Link>

      <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-lg overflow-hidden border border-stone-100 dark:border-stone-800 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="h-96 lg:h-auto relative">
            <img 
              src={animal.imageUrl} 
              alt={animal.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-stone-800 shadow-sm">
              {animal.status}
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-12 flex flex-col">
            <div className="mb-6">
              <h1 className="text-4xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">{animal.name}</h1>
              <p className="text-xl text-stone-500 dark:text-stone-400">{animal.breed}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center p-4 bg-stone-50 dark:bg-stone-800 rounded-xl">
                <Calendar className="text-primary mr-3" size={24} />
                <div>
                  <p className="text-xs text-stone-400 uppercase font-bold">Edad</p>
                  <p className="font-semibold text-stone-700 dark:text-stone-200">{animal.age}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-stone-50 dark:bg-stone-800 rounded-xl">
                <Info className="text-primary mr-3" size={24} />
                <div>
                  <p className="text-xs text-stone-400 uppercase font-bold">Sexo</p>
                  <p className="font-semibold text-stone-700 dark:text-stone-200">{animal.gender}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-stone-50 dark:bg-stone-800 rounded-xl">
                <Ruler className="text-primary mr-3" size={24} />
                <div>
                  <p className="text-xs text-stone-400 uppercase font-bold">Tamaño</p>
                  <p className="font-semibold text-stone-700 dark:text-stone-200">{animal.size}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-stone-50 dark:bg-stone-800 rounded-xl">
                <div className="text-2xl mr-3">{animal.species === 'Perro' ? '🐕' : '🐈'}</div>
                <div>
                  <p className="text-xs text-stone-400 uppercase font-bold">Especie</p>
                  <p className="font-semibold text-stone-700 dark:text-stone-200">{animal.species}</p>
                </div>
              </div>
            </div>

            {/* Medical Status Section */}
            {animal.medicalStatus && (
              <div className="mb-8 bg-teal-50 dark:bg-teal-900/10 rounded-xl p-5 border border-teal-100 dark:border-teal-900/30">
                 <h3 className="flex items-center font-serif font-bold text-teal-900 dark:text-teal-200 mb-4">
                   <Stethoscope size={20} className="mr-2" />
                   Estado Veterinario
                 </h3>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-teal-100 dark:border-teal-900/30 last:border-0 last:pb-0">
                      <span className="text-stone-700 dark:text-stone-300 text-sm font-medium">Desparasitación</span>
                      {renderStatusBadge(animal.medicalStatus.deworming)}
                    </div>
                    {/* Only show FELV/FIV for cats */}
                    {animal.species === 'Gato' && (
                        <div className="flex justify-between items-center pb-2 border-b border-teal-100 dark:border-teal-900/30 last:border-0 last:pb-0">
                          <span className="text-stone-700 dark:text-stone-300 text-sm font-medium">Test FELV/FIV</span>
                          {renderStatusBadge(animal.medicalStatus.felvFiv)}
                        </div>
                    )}
                    <div className="flex justify-between items-center pb-2 border-b border-teal-100 dark:border-teal-900/30 last:border-0 last:pb-0">
                      <span className="text-stone-700 dark:text-stone-300 text-sm font-medium">Vacunación</span>
                      {renderStatusBadge(animal.medicalStatus.vaccination)}
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-teal-100 dark:border-teal-900/30 last:border-0 last:pb-0">
                      <span className="text-stone-700 dark:text-stone-300 text-sm font-medium">Microchip</span>
                      {renderStatusBadge(animal.medicalStatus.microchip)}
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-teal-100 dark:border-teal-900/30 last:border-0 last:pb-0">
                      <span className="text-stone-700 dark:text-stone-300 text-sm font-medium">Esterilización</span>
                      {renderStatusBadge(animal.medicalStatus.sterilization)}
                    </div>
                 </div>
              </div>
            )}

            <div className="mb-8 prose prose-stone dark:prose-invert">
              <h3 className="text-lg font-bold font-serif mb-2 text-stone-800 dark:text-stone-100">Mi Historia</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4 whitespace-pre-line">
                {animal.story}
              </p>
              <h3 className="text-lg font-bold font-serif mb-2 text-stone-800 dark:text-stone-100">Más sobre mí</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                {animal.description}
              </p>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Link 
                to="/adopta" 
                className="flex-1 bg-primary hover:bg-teal-600 text-white text-center px-6 py-4 rounded-xl font-bold text-lg transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Home size={20} />
                Adoptar a {animal.name}
              </Link>
              <Link 
                to="/donar"
                className="flex-1 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 text-center px-6 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Heart size={20} className="text-accent" />
                Apadrinar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};