import React from 'react';

interface Image {
  src: string;
  category: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (src: string) => void;
  selectedCategory: string;
}

export default function ImageGallery({ images, onImageClick, selectedCategory }: ImageGalleryProps) {
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredImages.map((image) => (
        <div
          key={image.src}
          className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
          onClick={() => onImageClick(image.src)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}