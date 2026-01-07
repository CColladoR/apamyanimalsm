import React from 'react';
import { Link } from 'react-router-dom';
import { Animal } from '../types';
import { Heart } from 'lucide-react';

interface AnimalCardProps {
  animal: Animal;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 dark:border-stone-800 group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img 
          src={animal.imageUrl} 
          alt={animal.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-700 uppercase tracking-wide shadow-sm">
          {animal.status}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
             <h3 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100">{animal.name}</h3>
             <p className="text-sm text-stone-500 dark:text-stone-400">{animal.breed} • {animal.age}</p>
          </div>
          {animal.species === 'Perro' ? (
             <span className="text-2xl" role="img" aria-label="perro">🐕</span>
          ) : (
             <span className="text-2xl" role="img" aria-label="gato">🐈</span>
          )}
        </div>
        
        <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 line-clamp-2 min-h-[40px] flex-grow">
          {animal.description}
        </p>
        
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-stone-50 dark:border-stone-800">
          <Link 
            to={`/animal/${animal.id}`}
            className="flex-grow text-center bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-semibold py-2.5 rounded-lg transition-colors duration-200 text-sm"
          >
            Ver Perfil
          </Link>
          <Link 
            to="/donar"
            className="flex-shrink-0 p-2.5 bg-white dark:bg-stone-900 border border-rose-200 dark:border-rose-900/50 text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-500 rounded-lg transition-colors duration-200 group/icon"
            title="Apadrinar"
            aria-label="Apadrinar"
          >
            <Heart size={20} className="group-hover/icon:fill-rose-500 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};