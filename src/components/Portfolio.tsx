import React from 'react';
import CategoryFilter from './CategoryFilter';
import ImageGallery from './ImageGallery';
import Lightbox from './Lightbox';
import VideoShowcase from './VideoShowcase';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    category: 'weddings',
    alt: 'Wedding ceremony',
    description: 'Elegant wedding ceremonies captured with timeless grace'
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80',
    category: 'weddings',
    alt: 'Wedding couple',
    description: 'Intimate moments between newlyweds'
  },
  {
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
    category: 'portraits',
    alt: 'Portrait photography',
    description: 'Professional portraits that capture your essence'
  },
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    category: 'portraits',
    alt: 'Fashion portrait',
    description: 'Contemporary fashion photography'
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
    category: 'events',
    alt: 'Corporate event',
    description: 'Professional coverage of corporate gatherings'
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    category: 'events',
    alt: 'Concert event',
    description: 'Dynamic event photography that captures the energy'
  },
  {
    src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80',
    category: 'birthdays',
    alt: 'Birthday celebration',
    description: 'Joyful birthday celebrations frozen in time'
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80',
    category: 'birthdays',
    alt: 'Birthday party',
    description: 'Capturing the magic of birthday parties'
  },
  {
    src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80',
    category: 'birthdays',
    alt: 'Birthday cake',
    description: 'Beautiful birthday moments and celebrations'
  }
];

const categories = ['weddings', 'portraits', 'events', 'birthdays'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = React.useState('weddings');
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const filteredImages = images.filter(img => img.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Portfolio</h2>
        
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-center mb-12">Featured Videos</h3>
          <VideoShowcase />
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-center mb-12">Photo Gallery</h3>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ImageGallery
            images={filteredImages}
            onImageClick={setSelectedImage}
            selectedCategory={selectedCategory}
          />
        </div>

        {selectedImage && (
          <Lightbox
            src={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </section>
  );
}