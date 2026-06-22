import React, { createContext, useContext, useState, useEffect } from 'react';
import { Animal } from '../types';
import { ANIMALS as INITIAL_ANIMALS } from '../constants';

interface AnimalContextType {
  animals: Animal[];
  addAnimal: (animal: Animal) => void;
  updateAnimal: (updatedAnimal: Animal) => void;
  deleteAnimal: (id: string) => void;
  resetAnimals: () => void;
}

const AnimalContext = createContext<AnimalContextType | undefined>(undefined);

const STORAGE_KEY = 'apa_animals_v2';

export const AnimalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with localStorage if available, otherwise use constant data
  const [animals, setAnimals] = useState<Animal[]>(() => {
    try {
      const savedAnimals = localStorage.getItem(STORAGE_KEY);
      if (savedAnimals) {
        let data = JSON.parse(savedAnimals);
        // Migration: Ensure Jengibre (id: 7) is marked as Adoptado
        data = data.map((a: Animal) => a.id === '7' ? { ...a, status: 'Adoptado' } : a);
        
        // Migration: Ensure Jade (id: 11) is marked as En Adopción
        data = data.map((a: Animal) => a.id === '11' ? { ...a, status: 'En Adopción' } : a);
        
        // Migration: Ensure Brie (id: 2 - also support name 'Bri' or 'Brie') is marked as Adoptada and has updates
        data = data.map((a: Animal) => (a.id === '2' || a.name === 'Bri' || a.name === 'Brie') ? { 
          ...a, 
          status: 'Adoptada', 
          description: (INITIAL_ANIMALS.find(ia => ia.id === '2')?.description || a.description),
          updates: (INITIAL_ANIMALS.find(ia => ia.id === '2')?.updates || a.updates)
        } : a);
        
        // Migration: Ensure Maíz (id: 1) is marked as Busca acogida urgente and has correct secondary statuses
        data = data.map((a: Animal) => a.id === '1' ? { 
          ...a, 
          status: 'Busca acogida urgente', 
          secondaryStatuses: ['En Adopción', 'En residencia'],
          description: (INITIAL_ANIMALS.find(ia => ia.id === '1')?.description || a.description) 
        } : a);
        
        // Migration: Ensure Matilde (id: 12) is added if not present or has the correct image
        const matildeIndex = data.findIndex((a: Animal) => a.id === '12');
        const matildeSource = INITIAL_ANIMALS.find(a => a.id === '12');
        if (matildeIndex === -1) {
          if (matildeSource) data.push(matildeSource);
        } else if (matildeSource) {
          // Update image if it's still the placeholder
          if (data[matildeIndex].imageUrl.includes('unsplash')) {
            data[matildeIndex].imageUrl = matildeSource.imageUrl;
          }
          // Update breed/capa
          data[matildeIndex].breed = matildeSource.breed;
          // Update status
          data[matildeIndex].status = 'Adoptada';
          // Update age and medicalStatus
          data[matildeIndex].age = matildeSource.age;
          data[matildeIndex].medicalStatus = matildeSource.medicalStatus;
        }

        // Migration: Ensure Tomás (id: 14) is correctly set up as a kitten (Gato) with the new story and medicalStatus
        const tomasIndex = data.findIndex((a: Animal) => a.id === '14');
        const tomasSource = INITIAL_ANIMALS.find(a => a.id === '14');
        if (tomasIndex !== -1 && tomasSource) {
          data[tomasIndex] = {
            ...data[tomasIndex],
            species: tomasSource.species,
            breed: tomasSource.breed,
            age: tomasSource.age,
            gender: tomasSource.gender,
            size: tomasSource.size,
            imageUrl: tomasSource.imageUrl,
            description: tomasSource.description,
            story: tomasSource.story,
            status: tomasSource.status,
            medicalStatus: tomasSource.medicalStatus
          };
        }

        // Migration: Ensure Nora (id: 15) is correctly updated with the new story, status, and baby properties
        const noraIndex = data.findIndex((a: Animal) => a.id === '15');
        const noraSource = INITIAL_ANIMALS.find(a => a.id === '15');
        if (noraIndex !== -1 && noraSource) {
          data[noraIndex] = {
            ...data[noraIndex],
            species: noraSource.species,
            breed: noraSource.breed,
            status: noraSource.status,
            age: noraSource.age,
            imageUrl: noraSource.imageUrl,
            description: noraSource.description,
            story: noraSource.story,
            medicalStatus: noraSource.medicalStatus
          };
        }

        // Migration: Ensure Susi (id: 13) is correctly updated with the new story, status, and kitten properties
        const susiIndex = data.findIndex((a: Animal) => a.id === '13');
        const susiSource = INITIAL_ANIMALS.find(a => a.id === '13');
        if (susiIndex !== -1 && susiSource) {
          data[susiIndex] = {
            ...data[susiIndex],
            species: susiSource.species,
            breed: susiSource.breed,
            status: susiSource.status,
            age: susiSource.age,
            imageUrl: susiSource.imageUrl,
            description: susiSource.description,
            story: susiSource.story,
            medicalStatus: susiSource.medicalStatus
          };
        }

        // Migration: Ensure Selva (id: 16) is updated with the correct status, image, story, age, description and medicalStatus
        const selvaIndex = data.findIndex((a: Animal) => a.id === '16');
        const selvaSource = INITIAL_ANIMALS.find(a => a.id === '16');
        if (selvaIndex !== -1 && selvaSource) {
          data[selvaIndex] = {
            ...data[selvaIndex],
            species: selvaSource.species,
            breed: selvaSource.breed,
            size: selvaSource.size,
            status: selvaSource.status,
            imageUrl: selvaSource.imageUrl,
            description: selvaSource.description,
            story: selvaSource.story,
            age: selvaSource.age,
            medicalStatus: selvaSource.medicalStatus
          };
        }

        // Migration: Ensure Irati / Hirati (id: 17) is updated with the correct status, image, story, description, age, and medicalStatus
        const iratiIndex = data.findIndex((a: Animal) => a.id === '17');
        const iratiSource = INITIAL_ANIMALS.find(a => a.id === '17');
        if (iratiIndex !== -1 && iratiSource) {
          data[iratiIndex] = {
            ...data[iratiIndex],
            species: iratiSource.species,
            breed: iratiSource.breed,
            status: iratiSource.status,
            imageUrl: iratiSource.imageUrl,
            story: iratiSource.story,
            description: iratiSource.description,
            age: iratiSource.age,
            medicalStatus: iratiSource.medicalStatus
          };
        }

        // Migration: Ensure new animals (Susi, Tomás, Nora, Selva, Irati) are added if not present
        const newAnimalIds = ['13', '14', '15', '16', '17'];
        newAnimalIds.forEach(id => {
          const hasAnimal = data.some((a: Animal) => a.id === id);
          if (!hasAnimal) {
            const sourceAnimal = INITIAL_ANIMALS.find(a => a.id === id);
            if (sourceAnimal) {
              data.push(sourceAnimal);
            }
          }
        });
        
        return data;
      }
      return INITIAL_ANIMALS;
    } catch (error) {
      console.error('Error loading animals from localStorage:', error);
      return INITIAL_ANIMALS;
    }
  });

  // Save to localStorage whenever animals state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(animals));
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

  const resetAnimals = () => {
    if (window.confirm('¿Estás seguro de que quieres restaurar los datos originales? Se perderán todos los cambios locales.')) {
      setAnimals(INITIAL_ANIMALS);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <AnimalContext.Provider value={{ animals, addAnimal, updateAnimal, deleteAnimal, resetAnimals }}>
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