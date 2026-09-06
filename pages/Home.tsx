import React, { useState, useMemo, useRef, useEffect } from 'react';
import { AnimalCard } from '../components/AnimalCard';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, Dog, Cat, LayoutGrid, Star, Quote, 
  ExternalLink, Instagram, Activity,
  AlertCircle, Clock, Home as HomeIcon, Building2, Bookmark, Heart,
  ChevronDown, Filter, XCircle, Sparkles, Grip, List, Plus, RefreshCw,
  ChevronLeft, ChevronRight, CalendarDays, Search, X, Maximize2, History, Calendar,
  PartyPopper
} from 'lucide-react';
import { useAnimals } from '../context/AnimalContext';
import { useAuth } from '../context/AuthContext';
import { AnimalFormModal } from '../components/AnimalFormModal';
import { Animal } from '../types';
import { getWeeklyReviews, GOOGLE_REVIEWS_URL, ALL_REVIEWS } from '../data/reviews';
import { AdoptedConfetti } from '../components/AdoptedConfetti';

export const Home: React.FC = () => {
  const { animals, addAnimal, updateAnimal, resetAnimals } = useAnimals();
  const { isAuthenticated } = useAuth();
  
  const [activeCategory, setActiveCategory] = useState<'Todos' | 'Perro' | 'Gato'>('Todos');
  const [activeStatus, setActiveStatus] = useState<string>('Todos');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'detailed' | 'compact'>('compact');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAnimal, setEditingAnimal] = useState<Animal | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddClick = () => {
    setEditingAnimal(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (animal: Animal) => {
    setEditingAnimal(animal);
    setIsModalOpen(true);
  };

  const handleSaveAnimal = (animal: Animal) => {
    if (editingAnimal) {
      updateAnimal(animal);
    } else {
      addAnimal(animal);
    }
  };

  const adoptedAnimals = useMemo(() => {
    return animals.filter(a => a.status === 'Adoptado' || a.status === 'Adoptada');
  }, [animals]);

  // Finales Felices showcase & modal state
  const adoptedScrollRef = useRef<HTMLDivElement>(null);
  const [adoptedFilter, setAdoptedFilter] = useState<'Todos' | 'Perro' | 'Gato'>('Todos');
  const [isAdoptedModalOpen, setIsAdoptedModalOpen] = useState(false);
  const [adoptedSearchQuery, setAdoptedSearchQuery] = useState('');

  const adoptedDogsCount = useMemo(() => adoptedAnimals.filter(a => a.species === 'Perro').length, [adoptedAnimals]);
  const adoptedCatsCount = useMemo(() => adoptedAnimals.filter(a => a.species === 'Gato').length, [adoptedAnimals]);

  const filteredAdoptedAnimals = useMemo(() => {
    return adoptedAnimals.filter(animal => {
      const matchesFilter = adoptedFilter === 'Todos' || animal.species === adoptedFilter;
      const matchesSearch = adoptedSearchQuery.trim() === '' || 
        animal.name.toLowerCase().includes(adoptedSearchQuery.toLowerCase()) ||
        (animal.breed && animal.breed.toLowerCase().includes(adoptedSearchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [adoptedAnimals, adoptedFilter, adoptedSearchQuery]);

  // Rescue stats by year interactive modal state
  const [selectedYearStat, setSelectedYearStat] = useState<number | null>(null);
  const [yearModalSearch, setYearModalSearch] = useState('');
  const [yearModalFilter, setYearModalFilter] = useState<'Todos' | 'Perro' | 'Gato'>('Todos');

  const filteredYearAdoptedAnimals = useMemo(() => {
    if (selectedYearStat !== 2026) return [];
    return adoptedAnimals.filter(animal => {
      const matchesFilter = yearModalFilter === 'Todos' || animal.species === yearModalFilter;
      const matchesSearch = yearModalSearch.trim() === '' || 
        animal.name.toLowerCase().includes(yearModalSearch.toLowerCase()) ||
        (animal.breed && animal.breed.toLowerCase().includes(yearModalSearch.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [adoptedAnimals, selectedYearStat, yearModalFilter, yearModalSearch]);

  const filteredAnimals = useMemo(() => {
    const priority: Record<string, number> = {
      'En Adopción': 1,
      'Busca acogida urgente': 2,
      'Pronto en adopción': 3,
      'En residencia': 4,
      'Reservado': 5,
      'Reservada': 5
    };

    const getPriority = (status: string) => priority[status] || 99;

    return animals
      .filter(animal => animal.status !== 'Adoptado' && animal.status !== 'Adoptada')
      .filter(animal => {
        const matchesCategory = activeCategory === 'Todos' || animal.species === activeCategory;
        const matchesStatus = activeStatus === 'Todos' || 
          animal.status === activeStatus || 
          (activeStatus === 'Reservado' && animal.status === 'Reservada') ||
          (animal.secondaryStatuses && animal.secondaryStatuses.includes(activeStatus as any));
        return matchesCategory && matchesStatus;
      })
      .sort((a, b) => getPriority(a.status) - getPriority(b.status));
  }, [activeCategory, activeStatus, animals]);

  const categories = [
    { id: 'Todos', label: 'Todos', icon: LayoutGrid },
    { id: 'Perro', label: 'Perros', icon: Dog },
    { id: 'Gato', label: 'Gatos', icon: Cat },
  ] as const;

  const statusCategories = [
    { id: 'Todos', label: 'Todos los estados', icon: LayoutGrid },
    { id: 'En Adopción', label: 'En adopción', icon: HomeIcon },
    { id: 'Busca acogida urgente', label: 'Busca acogida urgente', icon: AlertCircle },
    { id: 'Pronto en adopción', label: 'Pronto en adopción', icon: Clock },
    { id: 'En residencia', label: 'En residencia', icon: Building2 },
    { id: 'Reservado', label: 'Reservados', icon: Bookmark },
  ];

  const activeStatusObj = statusCategories.find(s => s.id === activeStatus);

  // Weekly rotating reviews state
  const [reviewWeekOffset, setReviewWeekOffset] = useState<number>(0);
  const weeklyReviewData = useMemo(() => {
    return getWeeklyReviews(reviewWeekOffset, 3);
  }, [reviewWeekOffset]);

  const RESCUE_STATS = [
    { year: 2021, count: 208 },
    { year: 2022, count: 206 },
    { year: 2023, count: 63 },
    { year: 2024, count: 71 },
    { year: 2025, count: 40 },
    { year: 2026, count: animals.length },
  ];

  const maxStat = Math.max(...RESCUE_STATS.map(s => s.count));

  const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=APA.+Myanimalsm+Reseñas";

  return (
    <div className="min-h-screen relative overflow-x-hidden w-full">
      {/* Hero Section */}
      <div className="bg-background dark:bg-stone-900 pt-12 pb-8 md:pt-24 md:pb-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-4 md:mb-6">
            Encuentra a tu <span className="text-primary">mejor amigo</span>
          </h1>
          <p className="text-base md:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto mb-2 md:mb-4">
            En APA Myanimalsm luchamos cada día por dar una segunda oportunidad a quienes más lo necesitan, trabajando con amor para encontrarles el hogar que merecen. Adopta, no compres.
          </p>
        </div>
      </div>

      {/* Animal List Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 overflow-x-hidden">
        
        <div className="relative mb-6 md:mb-8 text-center">
           <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100">
            En Adopción
          </h2>
          {isAuthenticated && (
            <div className="flex gap-2 justify-center sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 mt-3 sm:mt-0">
              <button 
                onClick={resetAnimals}
                className="bg-rose-100 hover:bg-rose-200 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 px-4 py-2 rounded-xl font-bold text-sm shadow-sm flex items-center gap-2 transition-transform hover:scale-105"
                title="Restaurar datos originales"
              >
                  <RefreshCw size={18} />
              </button>
              <button 
                onClick={handleAddClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 transition-transform hover:scale-105"
              >
                  <Plus size={18} />
                  Añadir Animal
              </button>
            </div>
          )}
        </div>

        {/* Unified Filter Toolbar - Compact Version */}
        <div className="sticky top-[64px] md:top-20 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-lg mb-8 flex flex-col gap-3">
          
          {/* Top Row: Categories */}
          <div className="flex overflow-x-auto pb-1 -mx-3 px-3 md:mx-0 md:px-0 scrollbar-hide gap-2 w-auto">
               {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                      flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border
                      ${isSelected 
                        ? 'bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900 border-stone-800 dark:border-stone-200 shadow-md' 
                        : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-primary'}
                    `}
                  >
                    <Icon size={14} />
                    {cat.label}
                  </button>
                );
              })}
          </div>

          {/* Bottom Row: Filters & View Toggle */}
          <div className="flex items-end justify-between gap-3">
            
            {/* Left: Status Filter + Clear Button */}
            <div className="flex items-center gap-2 flex-grow min-w-0">
               <div className="relative w-full sm:w-auto sm:min-w-[200px]" ref={dropdownRef}>
                 <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`
                      w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm border
                      ${activeStatus !== 'Todos' 
                        ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800' 
                        : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700'}
                    `}
                 >
                    <div className="flex items-center gap-2 truncate">
                      <Filter size={14} className={activeStatus !== 'Todos' ? 'text-teal-600' : 'text-stone-400 flex-shrink-0'} />
                      <span className="truncate">{activeStatus === 'Todos' ? 'Estado' : activeStatusObj?.label}</span>
                    </div>
                    <ChevronDown size={14} className={`flex-shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                 </button>

                 {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-stone-800 rounded-xl shadow-2xl border border-stone-100 dark:border-stone-700 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-100 origin-top-left">
                        {statusCategories.map((status) => {
                          const Icon = status.icon;
                          const isSelected = activeStatus === status.id;
                          return (
                            <button
                                key={status.id}
                                onClick={() => {
                                    setActiveStatus(status.id);
                                    setIsDropdownOpen(false);
                                }}
                                className={`
                                  w-full text-left px-4 py-3.5 text-sm flex items-center gap-3 transition-colors border-b border-stone-50 dark:border-stone-700/50 last:border-0
                                  ${isSelected 
                                    ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 font-bold' 
                                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700/50'}
                                `}
                            >
                                 {Icon && <Icon size={16} className={isSelected ? 'text-teal-600 dark:text-teal-400' : 'text-stone-400'} />}
                                 {status.label}
                                 {isSelected && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-500" />}
                            </button>
                          );
                        })}
                    </div>
                 )}
               </div>

               {(activeCategory !== 'Todos' || activeStatus !== 'Todos') && (
                  <button 
                    onClick={() => { setActiveCategory('Todos'); setActiveStatus('Todos'); }}
                    className="flex-shrink-0 p-2.5 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 hover:bg-rose-100 transition-colors"
                    title="Limpiar filtros"
                  >
                    <XCircle size={18} />
                  </button>
               )}
            </div>

            {/* Right (Mobile): View Toggle Stacked */}
            <div className="flex flex-col items-center gap-1 sm:hidden flex-shrink-0">
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest leading-none">Vista</span>
                <div className="flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-xl border border-stone-200 dark:border-stone-700">
                    <button 
                      onClick={() => setViewMode('detailed')}
                      className={`p-1.5 rounded-lg transition-all ${viewMode === 'detailed' ? 'bg-white dark:bg-stone-700 text-primary shadow-sm' : 'text-stone-400'}`}
                    >
                      <List size={16} />
                    </button>
                    <button 
                      onClick={() => setViewMode('compact')}
                      className={`p-1.5 rounded-lg transition-all ${viewMode === 'compact' ? 'bg-white dark:bg-stone-700 text-primary shadow-sm' : 'text-stone-400'}`}
                    >
                      <Grip size={16} />
                    </button>
                </div>
            </div>

            {/* Right (Desktop): View Toggle */}
            <div className="hidden sm:flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-xl border border-stone-200 dark:border-stone-700 ml-auto">
                <button 
                  onClick={() => setViewMode('detailed')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'detailed' ? 'bg-white dark:bg-stone-700 text-primary shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                  title="Vista Detallada"
                >
                  <List size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('compact')}
                  className={`p-1.5 rounded-lg transition-all ${viewMode === 'compact' ? 'bg-white dark:bg-stone-700 text-primary shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                  title="Vista Cuadrícula"
                >
                  <Grip size={18} />
                </button>
            </div>
          </div>
        </div>

        <div className="mb-6 text-stone-500 dark:text-stone-400 text-xs font-bold flex items-center gap-2">
          <div className="h-px bg-stone-200 dark:bg-stone-800 flex-grow"></div>
          <span className="uppercase tracking-wider">
            {filteredAnimals.length} {filteredAnimals.length === 1 ? 'animal te espera' : 'animales te esperan'}
          </span>
          <div className="h-px bg-stone-200 dark:bg-stone-800 flex-grow"></div>
        </div>
        
        {filteredAnimals.length > 0 ? (
          <div className={`grid gap-4 md:gap-8 ${
            viewMode === 'detailed' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          }`}>
            {filteredAnimals.map(animal => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                compact={viewMode === 'compact'} 
                onEdit={handleEditClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-stone-50 dark:bg-stone-900/50 rounded-3xl border border-stone-100 dark:border-stone-800 border-dashed">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-2">No hay resultados</h3>
            <p className="text-stone-600 dark:text-stone-400 mb-6">Prueba con otros filtros o borra los actuales.</p>
            <button 
              onClick={() => { setActiveCategory('Todos'); setActiveStatus('Todos'); }}
              className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-md"
            >
              Ver todos los animales
            </button>
          </div>
        )}
      </div>

      {/* Finales Felices Section - Modern Horizontal Showcase */}
      {adoptedAnimals.length > 0 && (
        <section className="bg-gradient-to-b from-stone-50 via-white to-stone-50 dark:from-stone-950 dark:via-stone-900/60 dark:to-stone-950 py-10 md:py-14 border-y border-stone-200/80 dark:border-stone-800 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Title & Action Controls */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 flex items-center justify-center gap-2.5">
                <span>Finales Felices</span>
                <span className="text-xs md:text-sm font-sans font-semibold px-2.5 py-0.5 rounded-full bg-stone-200/70 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-300/70 dark:border-stone-700 align-middle">
                  2026
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-xl mx-auto">
                Cada uno de ellos ya duerme seguro en su hogar definitivo. Desliza para conocer a todos los peludos que han cambiado su destino en 2026.
              </p>

              {/* Controls: Filter tabs & carousel navigation */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {/* Species Pills */}
                <div className="inline-flex p-1 bg-stone-100 dark:bg-stone-800/80 rounded-full border border-stone-200/60 dark:border-stone-700/60 text-xs">
                  <button
                    onClick={() => setAdoptedFilter(prev => prev === 'Perro' ? 'Todos' : 'Perro')}
                    className={`px-3 py-1 rounded-full font-semibold transition-all ${
                      adoptedFilter === 'Perro'
                        ? 'bg-white dark:bg-stone-700 text-primary dark:text-stone-100 shadow-xs'
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                    }`}
                  >
                    🐕 Perros ({adoptedDogsCount})
                  </button>
                  <button
                    onClick={() => setAdoptedFilter(prev => prev === 'Gato' ? 'Todos' : 'Gato')}
                    className={`px-3 py-1 rounded-full font-semibold transition-all ${
                      adoptedFilter === 'Gato'
                        ? 'bg-white dark:bg-stone-700 text-primary dark:text-stone-100 shadow-xs'
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                    }`}
                  >
                    🐈 Gatos ({adoptedCatsCount})
                  </button>
                </div>

                {/* View all modal button */}
                <button
                  onClick={() => setIsAdoptedModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-full border border-stone-200 dark:border-stone-700 text-xs font-semibold shadow-xs transition-all"
                  title="Extender y abrir galería de adoptados"
                  aria-label="Abrir galería de adoptados"
                >
                  <Maximize2 size={13} className="text-primary" />
                  <span className="hidden sm:inline">Extender galería</span>
                  <span>({adoptedAnimals.length})</span>
                </button>
              </div>
            </div>

            {/* Showcase Cards Carousel */}
            {filteredAdoptedAnimals.length > 0 ? (
              <div 
                ref={adoptedScrollRef}
                className="flex overflow-x-auto gap-4 sm:gap-5 pb-4 pt-1 px-1 snap-x snap-mandatory scrollbar-hide scroll-smooth"
              >
                {filteredAdoptedAnimals.map((animal) => (
                  <Link 
                    key={animal.id} 
                    to={`/animal/${animal.id}`}
                    className="group flex-shrink-0 snap-start w-44 sm:w-52 md:w-56 h-64 sm:h-72 rounded-3xl overflow-hidden relative border border-stone-200/80 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
                  >
                    {/* Background original animal photo without any darkening filter */}
                    <img 
                      src={animal.imageUrl} 
                      alt={animal.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Discreet elegant confetti overlay */}
                    <AdoptedConfetti />

                    {/* Top status badges */}
                    <div className="absolute top-3 inset-x-3 flex justify-between items-center z-20 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-full shadow-md">
                        <Sparkles size={11} className="text-amber-200 fill-amber-200" />
                        <span>Adoptado</span>
                      </span>
                      <span className="px-2 py-0.5 bg-white/95 dark:bg-stone-900/90 text-stone-700 dark:text-stone-200 text-[10px] font-semibold rounded-full shadow-sm border border-stone-200/60 dark:border-stone-700/60 backdrop-blur-xs">
                        {animal.species === 'Perro' ? '🐕' : '🐈'}
                      </span>
                    </div>

                    {/* Floating elegant bottom label leaving 100% of the photo bright & clear */}
                    <div className="absolute bottom-2.5 inset-x-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border border-stone-200/80 dark:border-stone-700/80 shadow-md transition-transform group-hover:-translate-y-0.5 z-20 pointer-events-none">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-serif font-bold text-stone-800 dark:text-stone-100 text-sm sm:text-base group-hover:text-primary transition-colors truncate">
                          {animal.name}
                        </h4>
                        <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                          Ver ficha →
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate mt-0.5">
                        {animal.breed || (animal.species === 'Perro' ? 'Mestizo' : 'Común')} {animal.age ? `• ${animal.age}` : ''}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white dark:bg-stone-800/50 rounded-2xl border border-stone-200/60 dark:border-stone-800">
                <p className="text-stone-500 text-sm">No hay animales en este filtro.</p>
                <button
                  onClick={() => setAdoptedFilter('Todos')}
                  className="mt-2 text-primary text-xs font-bold hover:underline"
                >
                  Ver todos los {adoptedAnimals.length} animales adoptados
                </button>
              </div>
            )}

            {/* Quick helper indicator */}
            <div className="flex items-center justify-center mt-3 px-1 text-xs text-stone-400 dark:text-stone-500">
              <span className="flex items-center gap-1 text-[11px]">
                <span>← Desliza horizontalmente para explorar todos los finales felices →</span>
              </span>
            </div>
          </div>

          {/* Full Adopted Animals Gallery Modal */}
          {isAdoptedModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
              <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-stone-200 dark:border-stone-800">
                {/* Modal Header */}
                <div className="p-5 sm:p-6 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center">
                      <Heart size={20} className="fill-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-stone-800 dark:text-stone-100 flex items-center gap-2">
                        <span>Galería de Finales Felices</span>
                        <span className="text-xs font-sans font-semibold px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                          2026
                        </span>
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        {adoptedAnimals.length} historias con final feliz en 2026 en APA Myanimalsm
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsAdoptedModalOpen(false);
                      setAdoptedSearchQuery('');
                    }}
                    className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
                    aria-label="Cerrar galería"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Search & Filters */}
                <div className="p-4 sm:px-6 bg-stone-50 dark:bg-stone-900/50 border-b border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                  {/* Search input */}
                  <div className="relative flex-grow max-w-md">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Buscar por nombre o raza..."
                      value={adoptedSearchQuery}
                      onChange={(e) => setAdoptedSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {adoptedSearchQuery && (
                      <button
                        onClick={() => setAdoptedSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Species filter pills */}
                  <div className="inline-flex p-1 bg-stone-200/60 dark:bg-stone-800 rounded-full text-xs self-start sm:self-auto">
                    <button
                      onClick={() => setAdoptedFilter('Todos')}
                      className={`px-3 py-1 rounded-full font-semibold transition-all ${
                        adoptedFilter === 'Todos'
                          ? 'bg-white dark:bg-stone-700 text-primary dark:text-stone-100 shadow-xs'
                          : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      Todos ({adoptedAnimals.length})
                    </button>
                    <button
                      onClick={() => setAdoptedFilter('Perro')}
                      className={`px-3 py-1 rounded-full font-semibold transition-all ${
                        adoptedFilter === 'Perro'
                          ? 'bg-white dark:bg-stone-700 text-primary dark:text-stone-100 shadow-xs'
                          : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      🐕 Perros
                    </button>
                    <button
                      onClick={() => setAdoptedFilter('Gato')}
                      className={`px-3 py-1 rounded-full font-semibold transition-all ${
                        adoptedFilter === 'Gato'
                          ? 'bg-white dark:bg-stone-700 text-primary dark:text-stone-100 shadow-xs'
                          : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      🐈 Gatos
                    </button>
                  </div>
                </div>

                {/* Modal Grid of Adopted Animals */}
                <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] scrollbar-thin">
                  {filteredAdoptedAnimals.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {filteredAdoptedAnimals.map((animal) => (
                        <Link
                          key={animal.id}
                          to={`/animal/${animal.id}`}
                          onClick={() => setIsAdoptedModalOpen(false)}
                          className="group bg-stone-50 dark:bg-stone-800/80 rounded-2xl overflow-hidden border border-stone-200/70 dark:border-stone-700/70 hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                          <div className="relative h-36 sm:h-44 overflow-hidden bg-stone-100 dark:bg-stone-800">
                            <img
                              src={animal.imageUrl}
                              alt={animal.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            {/* Discreet elegant confetti overlay */}
                            <AdoptedConfetti />
                            <div className="absolute top-2 left-2 z-20 pointer-events-none">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-600 text-white text-[9px] font-bold rounded-full shadow-xs">
                                <Sparkles size={8} className="text-amber-200 fill-amber-200" /> Adoptado
                              </span>
                            </div>
                            <div className="absolute top-2 right-2 z-20 pointer-events-none">
                              <span className="px-1.5 py-0.5 bg-white/95 dark:bg-stone-900/90 text-stone-700 dark:text-stone-200 text-[10px] rounded-full shadow-xs border border-stone-200/50 dark:border-stone-700/50">
                                {animal.species === 'Perro' ? '🐕' : '🐈'}
                              </span>
                            </div>
                          </div>
                          <div className="p-3 flex flex-col flex-grow">
                            <h4 className="font-bold text-stone-800 dark:text-stone-100 text-sm group-hover:text-primary transition-colors truncate">
                              {animal.name}
                            </h4>
                            <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate mb-2">
                              {animal.breed || animal.species}
                            </p>
                            <span className="mt-auto text-[10px] text-primary dark:text-teal-400 font-semibold group-hover:underline">
                              Ver ficha completa →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-stone-500 text-sm mb-2">No se encontraron animales con el término "{adoptedSearchQuery}".</p>
                      <button
                        onClick={() => setAdoptedSearchQuery('')}
                        className="text-primary text-xs font-bold hover:underline"
                      >
                        Limpiar búsqueda
                      </button>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 px-6 border-t border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/80 flex items-center justify-between text-xs text-stone-500">
                  <span>Mostrando {filteredAdoptedAnimals.length} de {adoptedAnimals.length} adoptados</span>
                  <button
                    onClick={() => {
                      setIsAdoptedModalOpen(false);
                      setAdoptedSearchQuery('');
                    }}
                    className="px-4 py-1.5 rounded-full bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-semibold transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Reviews Section - Weekly rotating reviews with real adoptantes */}
      <div className="bg-white dark:bg-stone-900 py-10 md:py-12 border-b border-stone-200 dark:border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">
              Opiniones de Nuestras Familias
            </h2>
            
            <p className="text-sm text-stone-500 dark:text-stone-400 max-w-xl mx-auto mb-3">
              Historias reales de adopción y acogida compartidas en Google.
            </p>

            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </span>
              <span className="text-stone-700 dark:text-stone-200 text-xs sm:text-sm font-bold">4.9/5 en Google Reviews</span>
            </div>

            {/* Weekly Navigation controls */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <button
                onClick={() => setReviewWeekOffset(prev => prev - 1)}
                className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 transition-all shadow-xs hover:scale-105"
                title="Opiniones anteriores"
                aria-label="Ver opiniones anteriores"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={() => setReviewWeekOffset(prev => prev + 1)}
                className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 transition-all shadow-xs hover:scale-105"
                title="Opiniones siguientes"
                aria-label="Ver opiniones siguientes"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="-mx-4 sm:-mx-6 lg:-mx-8">
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8 gap-4 sm:gap-5 scrollbar-hide">
              {weeklyReviewData.reviews.map((review) => (
                <div key={review.id} className="snap-start w-[82%] sm:w-[310px] md:w-[340px] flex-shrink-0 bg-stone-50 dark:bg-stone-800 p-5 sm:p-6 rounded-2xl border border-stone-100 dark:border-stone-700 flex flex-col transition-all shadow-xs hover:shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <Quote className="text-teal-200/70 dark:text-teal-900/60 w-6 h-6" />
                    <div className="flex text-amber-400">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm italic mb-4 line-clamp-4 sm:line-clamp-5 flex-grow leading-relaxed">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-stone-200/60 dark:border-stone-700/60">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {review.author.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-grow">
                      <p className="font-bold text-stone-800 dark:text-stone-100 text-xs sm:text-sm truncate">{review.author}</p>
                      {review.role && (
                        <p className="text-[11px] text-primary dark:text-teal-400 font-medium truncate">{review.role}</p>
                      )}
                      <p className="text-[10px] text-stone-400 uppercase font-semibold tracking-tight truncate">{review.date}</p>
                    </div>
                    <div className="flex-shrink-0 text-stone-400" title="Reseña verificada en Google">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-200/70 dark:bg-stone-700 text-stone-600 dark:text-stone-300">Google</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <a 
              href={GOOGLE_REVIEWS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-primary dark:text-teal-300 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all shadow-xs hover:shadow"
            >
              <span>Ver todas las reseñas en Google</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Graph Section - Optimized to fit without scroll and interactive by year */}
      <div className="pt-6 sm:pt-8 pb-12 sm:pb-14 bg-background dark:bg-stone-950 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
             <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 flex items-center justify-center gap-2">
               <Activity className="text-primary" size={24} />
               <span>Rescates</span>
             </h2>
             <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 max-w-lg mx-auto">
               Evolución anual de APA Myanimalsm
             </p>
          </div>

          <div className="w-full overflow-hidden bg-white/50 dark:bg-stone-900/40 p-5 sm:p-7 rounded-3xl border border-stone-200/80 dark:border-stone-800 shadow-xs">
            <div className="w-full h-52 md:h-64 flex items-end justify-around gap-2 sm:gap-4 border-b border-stone-200 dark:border-stone-800 pb-2">
               {RESCUE_STATS.map((stat) => {
                 const isCurrentYear = stat.year === 2026;
                 return (
                   <button
                     key={stat.year}
                     onClick={() => {
                       setSelectedYearStat(stat.year);
                       setYearModalSearch('');
                       setYearModalFilter('Todos');
                     }}
                     className="flex flex-col items-center justify-end w-full group h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1 transition-all"
                     title={`Haz clic para ver las adopciones de ${stat.year}`}
                     aria-label={`Ver adopciones del año ${stat.year}`}
                   >
                      <div className="mb-1.5 font-bold text-stone-700 dark:text-stone-300 text-[11px] md:text-sm group-hover:text-primary dark:group-hover:text-teal-400 group-hover:scale-110 transition-all">
                        {stat.count}
                      </div>
                      <div 
                        className={`w-full max-w-[32px] md:max-w-[48px] rounded-t-xl relative shadow-md transition-all duration-300 group-hover:brightness-110 group-hover:-translate-y-1 origin-bottom ${
                          isCurrentYear
                            ? 'bg-gradient-to-t from-teal-600 via-teal-500 to-emerald-400 ring-2 ring-teal-400/50 shadow-teal-500/20'
                            : 'bg-gradient-to-t from-teal-500 to-teal-300 group-hover:from-teal-400 group-hover:to-teal-200'
                        }`}
                        style={{ height: `${(stat.count / maxStat) * 100}%` }}
                      >
                      </div>
                      <div className="mt-2.5 font-bold text-stone-500 dark:text-stone-400 text-xs md:text-sm group-hover:text-primary dark:group-hover:text-teal-400 transition-colors flex items-center gap-1">
                        <span>{stat.year}</span>
                      </div>
                      <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap mt-0.5 hidden sm:inline">
                        {isCurrentYear ? 'Ver fichas' : 'Ver datos'}
                      </span>
                   </button>
                 );
               })}
            </div>

            <div className="flex items-center justify-center sm:justify-start mt-4 text-xs text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1 font-medium">
                <span>💡 Pulsa en cualquier columna para abrir las adopciones gestionadas</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Year Detail Modal */}
      {selectedYearStat !== null && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-stone-200 dark:border-stone-800">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-stone-800 dark:text-stone-100 flex items-center gap-2">
                    <span>Rescates • {selectedYearStat}</span>
                    {selectedYearStat === 2026 && (
                      <span className="text-xs font-sans font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Año en curso
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {selectedYearStat === 2026
                      ? `${adoptedAnimals.length} adopciones con final feliz en 2026 (${animals.length} animales registrados)`
                      : `${RESCUE_STATS.find(s => s.year === selectedYearStat)?.count} animales rescatados y reubicados en ${selectedYearStat}`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedYearStat(null)}
                className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
                aria-label="Cerrar modal de año"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Year Selector Bar */}
            <div className="px-5 py-2.5 bg-stone-100/70 dark:bg-stone-950/60 border-b border-stone-200/70 dark:border-stone-800 flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                <Calendar size={12} /> Años:
              </span>
              {RESCUE_STATS.map((stat) => (
                <button
                  key={stat.year}
                  onClick={() => {
                    setSelectedYearStat(stat.year);
                    setYearModalSearch('');
                    setYearModalFilter('Todos');
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                    selectedYearStat === stat.year
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700'
                  }`}
                >
                  <span>{stat.year}</span>
                  {stat.year === 2026 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Modal Body */}
            {selectedYearStat === 2026 ? (
              <>
                {/* Search & Species filter toolbar */}
                <div className="p-4 sm:px-6 bg-stone-50 dark:bg-stone-900/50 border-b border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                  {/* Search input */}
                  <div className="relative flex-grow max-w-md">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Buscar por nombre o raza..."
                      value={yearModalSearch}
                      onChange={(e) => setYearModalSearch(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {yearModalSearch && (
                      <button
                        onClick={() => setYearModalSearch('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Species filter pills */}
                  <div className="inline-flex p-1 bg-stone-200/60 dark:bg-stone-800 rounded-full text-xs self-start sm:self-auto">
                    <button
                      onClick={() => setYearModalFilter('Todos')}
                      className={`px-3 py-1 rounded-full font-semibold transition-all ${
                        yearModalFilter === 'Todos'
                          ? 'bg-white dark:bg-stone-700 text-primary dark:text-stone-100 shadow-xs'
                          : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      Todos ({adoptedAnimals.length})
                    </button>
                    <button
                      onClick={() => setYearModalFilter('Perro')}
                      className={`px-3 py-1 rounded-full font-semibold transition-all ${
                        yearModalFilter === 'Perro'
                          ? 'bg-white dark:bg-stone-700 text-primary dark:text-stone-100 shadow-xs'
                          : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      🐕 Perros
                    </button>
                    <button
                      onClick={() => setYearModalFilter('Gato')}
                      className={`px-3 py-1 rounded-full font-semibold transition-all ${
                        yearModalFilter === 'Gato'
                          ? 'bg-white dark:bg-stone-700 text-primary dark:text-stone-100 shadow-xs'
                          : 'text-stone-600 dark:text-stone-400'
                      }`}
                    >
                      🐈 Gatos
                    </button>
                  </div>
                </div>

                {/* 2026 Adopted Animals Grid */}
                <div className="p-4 sm:p-6 overflow-y-auto max-h-[55vh] scrollbar-thin">
                  {filteredYearAdoptedAnimals.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {filteredYearAdoptedAnimals.map((animal) => (
                        <Link
                          key={animal.id}
                          to={`/animal/${animal.id}`}
                          onClick={() => setSelectedYearStat(null)}
                          className="group bg-stone-50 dark:bg-stone-800/80 rounded-2xl overflow-hidden border border-stone-200/70 dark:border-stone-700/70 hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                          <div className="relative h-36 sm:h-44 overflow-hidden">
                            <img
                              src={animal.imageUrl}
                              alt={animal.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-2 left-2">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-600/90 text-white text-[9px] font-bold rounded-full shadow-xs backdrop-blur-xs">
                                <Heart size={8} className="fill-white" /> Adoptado
                              </span>
                            </div>
                            <div className="absolute top-2 right-2">
                              <span className="px-1.5 py-0.5 bg-black/40 text-white text-[10px] rounded-full backdrop-blur-xs">
                                {animal.species === 'Perro' ? '🐕' : '🐈'}
                              </span>
                            </div>
                          </div>
                          <div className="p-3 flex flex-col flex-grow">
                            <h4 className="font-bold text-stone-800 dark:text-stone-100 text-sm group-hover:text-primary transition-colors truncate">
                              {animal.name}
                            </h4>
                            <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate mb-2">
                              {animal.breed || animal.species}
                            </p>
                            <span className="mt-auto text-[10px] text-primary dark:text-teal-400 font-semibold group-hover:underline">
                              Ver ficha completa →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-stone-500 text-sm mb-2">No se encontraron animales con el término "{yearModalSearch}".</p>
                      <button
                        onClick={() => setYearModalSearch('')}
                        className="text-primary text-xs font-bold hover:underline"
                      >
                        Limpiar búsqueda
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Historical Year View (< 2026) */
              <div className="p-6 sm:p-10 flex flex-col items-center text-center max-w-2xl mx-auto my-auto">
                <div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-stone-800 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 border border-stone-200 dark:border-stone-700">
                  <History size={32} />
                </div>
                
                <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-teal-400 mb-1">
                  Archivo Histórico
                </span>
                
                <h4 className="font-serif font-bold text-2xl sm:text-3xl text-stone-800 dark:text-stone-100 mb-2">
                  Año {selectedYearStat}
                </h4>

                <div className="inline-flex items-baseline gap-2 bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-900/60 px-5 py-2.5 rounded-2xl my-3">
                  <span className="text-3xl font-serif font-bold text-primary dark:text-teal-300">
                    {RESCUE_STATS.find(s => s.year === selectedYearStat)?.count}
                  </span>
                  <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">
                    animales rescatados y adoptados
                  </span>
                </div>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mt-2 max-w-lg">
                  Durante el ejercicio {selectedYearStat}, APA Myanimalsm gestionó con éxito el rescate y la adopción definitiva de estos animales. Al tratarse de un año anterior a la digitalización interactiva de nuestra plataforma web, los expedientes individuales se conservan en el registro histórico físico de la protectora.
                </p>

                <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60 rounded-2xl p-4 my-5 text-xs text-amber-800 dark:text-amber-200 max-w-lg text-left flex items-start gap-3">
                  <Sparkles size={18} className="text-amber-500 fill-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Fichas individuales interactivas</p>
                    <p className="text-amber-700/90 dark:text-amber-300/90 mt-0.5">
                      Actualmente puedes consultar las fichas completas, nombres y fotografías de todos los animales adoptados en el año <strong>2026</strong> (Finales Felices).
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedYearStat(2026);
                    setYearModalSearch('');
                    setYearModalFilter('Todos');
                  }}
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>Ver animales adoptados en 2026 ({adoptedAnimals.length} fichas)</span>
                  <span>→</span>
                </button>
              </div>
            )}

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/80 flex items-center justify-between text-xs text-stone-500">
              <span>
                {selectedYearStat === 2026
                  ? `Mostrando ${filteredYearAdoptedAnimals.length} de ${adoptedAnimals.length} adopciones de 2026`
                  : `Registro oficial histórico consolidado • APA Myanimalsm`}
              </span>
              <button
                onClick={() => setSelectedYearStat(null)}
                className="px-4 py-1.5 rounded-full bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-semibold transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <a
        href="https://ig.me/m/apa.myanimalsm"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-teal-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
        aria-label="Chat en Instagram"
      >
        <Instagram size={24} />
      </a>

      {/* Admin Modal */}
      <AnimalFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAnimal}
        initialData={editingAnimal}
      />
    </div>
  );
};