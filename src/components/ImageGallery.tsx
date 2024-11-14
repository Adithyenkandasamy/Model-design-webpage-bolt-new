import React from 'react';

interface Image {
  src: string;
  category: string;
  alt: string;
  description: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (src: string) => void;
  selectedCategory: string;
}

export default function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image) => (
        <div
          key={image.src}
          className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer hover-card"
          onClick={() => onImageClick(image.src)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-lg font-light">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}