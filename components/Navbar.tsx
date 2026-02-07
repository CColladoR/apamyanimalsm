import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Sun, Moon, Home, Info, Heart, PawPrint, 
  MessageCircle, Instagram, ChevronRight, Coins
} from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Inicio', path: '/', icon: Home },
    { name: 'Nosotros', path: '/nosotros', icon: Info },
    { name: 'Adopta', path: '/adopta', icon: Heart },
    { name: 'Acogidas', path: '/acogida', icon: PawPrint },
    { name: 'Donar', path: '/donar', icon: Coins },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => { 
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-sm sticky top-0 z-[70] transition-all duration-300 border-b border-stone-100 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Logo className="h-10 md:h-14" />
              <span className="font-brand text-lg md:text-2xl font-bold text-stone-700 dark:text-stone-200 tracking-tight truncate max-w-[150px] md:max-w-none">
                APA Myanimalsm
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-teal-50 dark:bg-teal-900/30'
                    : 'text-stone-600 dark:text-stone-300 hover:text-primary dark:hover:text-primary hover:bg-stone-50 dark:hover:bg-stone-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors focus:outline-none border border-transparent hover:border-stone-200 dark:hover:border-stone-700"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Robust visibility and interaction */}
      <div 
        className={`md:hidden fixed inset-0 top-16 z-[60] bg-white dark:bg-stone-900 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-full invisible pointer-events-none'}`}
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        <div className="flex flex-col h-full bg-white dark:bg-stone-900 overflow-y-auto overflow-x-hidden">
          <div className="px-6 py-8 space-y-6">
            <p className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em] mb-4">Menú</p>
            <div className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-bold transition-all border shadow-sm ${
                      isActive(link.path)
                        ? 'text-primary bg-teal-50 dark:bg-teal-900/30 border-teal-100 dark:border-teal-900/40'
                        : 'text-stone-800 dark:text-stone-100 bg-stone-50 dark:bg-stone-800 border-stone-100 dark:border-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${isActive(link.path) ? 'bg-primary text-white' : 'bg-white dark:bg-stone-700 text-stone-400 dark:text-stone-300 shadow-inner'}`}>
                        <Icon size={22} />
                      </div>
                      <span className="tracking-tight">{link.name}</span>
                    </div>
                    <ChevronRight size={18} className={isActive(link.path) ? 'text-primary' : 'text-stone-300 dark:text-stone-600'} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Footer - Contact and Social */}
          <div className="mt-auto px-6 py-10 border-t border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
            <div className="flex flex-col gap-6">
              <p className="text-[10px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-[0.2em]">Contacta con nosotras</p>
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="https://www.instagram.com/apa.myanimalsm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border border-pink-100 dark:border-pink-800/50 py-4 rounded-2xl font-bold text-xs shadow-sm active:scale-95 transition-transform"
                >
                  <Instagram size={24} />
                  Instagram
                </a>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col items-center gap-2 text-stone-400 dark:text-stone-600 text-[10px] font-medium uppercase tracking-widest text-center">
              <span>© {new Date().getFullYear()} APA Myanimalsm</span>
              <div className="w-12 h-px bg-stone-200 dark:bg-stone-800"></div>
              <span>Protegiendo vidas</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};