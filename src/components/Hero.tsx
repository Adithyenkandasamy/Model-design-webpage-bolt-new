import React from 'react';
import { Camera } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1505968409348-bd000797c92e?auto=format&fit=crop&q=80'
];

export default function Hero() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={src}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <Camera className="w-16 h-16 mb-6 animate-pulse" />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wider text-center px-4">
          LENS & LIGHT
        </h1>
        <p className="text-xl font-light tracking-widest mb-8">
          Capturing Moments, Creating Memories
        </p>
        <a
          href="#portfolio"
          className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          View Our Work
        </a>
      </div>
    </div>
  );
}