export type MedicalStatusValue = 'Sí' | 'No' | 'Pte';

export interface MedicalStatus {
  deworming: MedicalStatusValue; // Desparasitación
  felvFiv: MedicalStatusValue;   // Test FELV/FIV
  vaccination: MedicalStatusValue; // Vacunación
  microchip: MedicalStatusValue;   // Microchip
  sterilization: MedicalStatusValue; // Esterilización
}

export interface Animal {
  id: string;
  name: string;
  species: 'Perro' | 'Gato' | 'Otro';
  breed: string;
  age: string;
  gender: 'Macho' | 'Hembra';
  size: 'Pequeño' | 'Mediano' | 'Grande';
  imageUrl: string;
  description: string;
  story: string;
  status: 'En Adopción' | 'Reservado' | 'Urgente';
  medicalStatus?: MedicalStatus; // Optional, mainly for cats
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface DonationMethod {
  id: string;
  name: string;
  description: string;
  iconName: string; // We will map string to Lucide icon component
  actionUrl?: string;
  details?: string;
  color: string;
}