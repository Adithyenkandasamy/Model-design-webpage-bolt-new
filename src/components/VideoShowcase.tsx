import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80",
    title: "Wedding Highlights",
    duration: "0:30",
    description: "Beautiful moments from our latest wedding shoots",
    frames: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80"
    ]
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    title: "Portrait Session",
    duration: "0:15",
    description: "Professional portrait photography in action",
    frames: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80"
    ]
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    title: "Event Coverage",
    duration: "0:20",
    description: "Highlights from recent corporate events",
    frames: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
    ]
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    title: "Behind the Scenes",
    duration: "0:25",
    description: "See how we create magic behind the camera",
    frames: [
      "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516035645781-9f126441c8ee?auto=format&fit=crop&q=80"
    ]
  }
];

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  React.useEffect(() => {
    if (selectedVideo !== null && (isHoveringLeft || isHoveringRight)) {
      const interval = setInterval(() => {
        setCurrentFrame(prev => {
          const frames = videos[selectedVideo].frames;
          if (isHoveringLeft) {
            return prev > 0 ? prev - 1 : frames.length - 1;
          } else {
            return (prev + 1) % frames.length;
          }
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [selectedVideo, isHoveringLeft, isHoveringRight]);

  const handleVideoClick = (index: number) => {
    setSelectedVideo(index);
    setCurrentFrame(0);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div 
            key={index} 
            className="relative group rounded-xl overflow-hidden shadow-xl hover-card cursor-pointer"
            onClick={() => handleVideoClick(index)}
          >
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full aspect-video object-cover"
            />
            
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-white/90 p-6 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                <Play className="w-8 h-8 text-gray-900" />
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-semibold text-xl mb-1">{video.title}</h3>
              <p className="text-white/90 mb-2">{video.description}</p>
              <span className="text-white/80 text-sm">{video.duration}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Viewer */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-6xl aspect-video">
            {/* Navigation Zones */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1/4 z-10 flex items-center justify-start pl-4"
              onMouseEnter={() => setIsHoveringLeft(true)}
              onMouseLeave={() => setIsHoveringLeft(false)}
            >
              <ChevronLeft className={`w-12 h-12 text-white/80 transition-opacity duration-300 ${isHoveringLeft ? 'opacity-100' : 'opacity-0'}`} />
            </div>
            
            <div 
              className="absolute right-0 top-0 bottom-0 w-1/4 z-10 flex items-center justify-end pr-4"
              onMouseEnter={() => setIsHoveringRight(true)}
              onMouseLeave={() => setIsHoveringRight(false)}
            >
              <ChevronRight className={`w-12 h-12 text-white/80 transition-opacity duration-300 ${isHoveringRight ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Current Frame */}
            <img 
              src={videos[selectedVideo].frames[currentFrame]}
              alt={`Frame ${currentFrame + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />

            {/* Frame Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {videos[selectedVideo].frames.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFrame ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}