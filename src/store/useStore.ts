import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Dog {
  id: string;
  name: string;
  photo?: string;
  collarId?: string;
  beepThreshold: number;
  lightShockThreshold: number;
  strongShockThreshold: number;
  dogsToAvoid: string[];
}

export interface Collar {
  id: string;
  name: string;
  connected: boolean;
  batteryLevel: number;
  lastSeen: Date;
}

interface AppState {
  dogs: Dog[];
  collars: Collar[];
  addDog: (dog: Omit<Dog, 'id'>) => void;
  updateDog: (id: string, dog: Partial<Dog>) => void;
  removeDog: (id: string) => void;
  addCollar: (collar: Omit<Collar, 'id'>) => void;
  updateCollar: (id: string, collar: Partial<Collar>) => void;
  removeCollar: (id: string) => void;
  connectCollar: (id: string) => void;
  disconnectCollar: (id: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      dogs: [],
      collars: [],
      addDog: (dog) =>
        set((state) => ({
          dogs: [
            ...state.dogs,
            { ...dog, id: Date.now().toString() },
          ],
        })),
      updateDog: (id, dog) =>
        set((state) => ({
          dogs: state.dogs.map((d) =>
            d.id === id ? { ...d, ...dog } : d
          ),
        })),
      removeDog: (id) =>
        set((state) => ({
          dogs: state.dogs.filter((d) => d.id !== id),
        })),
      addCollar: (collar) =>
        set((state) => ({
          collars: [
            ...state.collars,
            { ...collar, id: Date.now().toString() },
          ],
        })),
      updateCollar: (id, collar) =>
        set((state) => ({
          collars: state.collars.map((c) =>
            c.id === id ? { ...c, ...collar } : c
          ),
        })),
      removeCollar: (id) =>
        set((state) => ({
          collars: state.collars.filter((c) => c.id !== id),
        })),
      connectCollar: (id) =>
        set((state) => ({
          collars: state.collars.map((c) =>
            c.id === id ? { ...c, connected: true } : c
          ),
        })),
      disconnectCollar: (id) =>
        set((state) => ({
          collars: state.collars.map((c) =>
            c.id === id ? { ...c, connected: false } : c
          ),
        })),
    }),
    {
      name: 'proxipup-storage',
    }
  )
); 