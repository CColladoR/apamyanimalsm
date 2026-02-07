import React, { createContext, useContext, useState, useEffect } from 'react';
import { Animal } from '../types';
import { ANIMALS as INITIAL_ANIMALS } from '../constants';

interface AnimalContextType {
  animals: Animal[];
  addAnimal: (animal: Animal) => void;
  updateAnimal: (updatedAnimal: Animal) => void;
  deleteAnimal: (id: string) => void;
}

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

export const AnimalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with localStorage if available, otherwise use constant data
  const [animals, setAnimals] = useState<Animal[]>(() => {
    try {
      const savedAnimals = localStorage.getItem('apa_animals_data');
      return savedAnimals ? JSON.parse(savedAnimals) : INITIAL_ANIMALS;
    } catch (error) {
      console.error('Error loading animals from localStorage:', error);
      return INITIAL_ANIMALS;
    }
  });

  // Save to localStorage whenever animals state changes
  useEffect(() => {
    try {
      localStorage.setItem('apa_animals_data', JSON.stringify(animals));
    } catch (error) {
      console.error('Error saving animals to localStorage:', error);
    }
  }, [animals]);

  const addAnimal = (animal: Animal) => {
    setAnimals(prev => [animal, ...prev]);
  };

  const updateAnimal = (updatedAnimal: Animal) => {
    setAnimals(prev => prev.map(a => a.id === updatedAnimal.id ? updatedAnimal : a));
  };

  const deleteAnimal = (id: string) => {
    setAnimals(prev => prev.filter(a => a.id !== id));
  };

  return (
    <AnimalContext.Provider value={{ animals, addAnimal, updateAnimal, deleteAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimals = () => {
  const context = useContext(AnimalContext);
  if (context === undefined) {
    throw new Error('useAnimals must be used within an AnimalProvider');
  }
  return context;
};