mport React, { useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl group">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
        src="/video.webm"
        loop
        muted
        playsInline
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-gray-900" />
        ) : (
          <Play className="w-6 h-6 text-gray-900" />
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold mb-2">Behind the Lens</h3>
        <p className="text-white/90">
          Experience the artistry and emotion we bring to every shoot. Our dedication to capturing perfect moments is reflected in every frame.
        </p>
      </div>
    </div>
  );
}