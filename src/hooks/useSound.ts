import { create } from 'zustand';

interface SoundStore {
  playHover: () => void;
}

// Create a simple audio context and sound
const audio = new Audio('/hover.mp3');
audio.volume = 0.2;

export const useHoverSound = create<SoundStore>(() => ({
  playHover: () => {
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore autoplay errors
    });
  },
}));