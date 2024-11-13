import { useCallback } from 'react';

export function useSound(soundUrl: string, options: { volume?: number } = {}) {
  const audio = new Audio(soundUrl);
  audio.volume = options.volume ?? 1;

  const play = useCallback(() => {
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore autoplay errors
    });
  }, [audio]);

  return [play] as const;
}

export function useHoverSound() {
  const [play] = useSound('/hover.mp3', { volume: 0.2 });
  return play;
}