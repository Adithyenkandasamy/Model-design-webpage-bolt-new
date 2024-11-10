import React from 'react';
import CategoryFilter from './CategoryFilter';
import ImageGallery from './ImageGallery';
import Lightbox from './Lightbox';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    category: 'weddings',
    alt: 'Wedding ceremony'
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80',
    category: 'weddings',
    alt: 'Wedding couple'
  },
  {
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
    category: 'portraits',
    alt: 'Portrait photography'
  },
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    category: 'portraits',
    alt: 'Fashion portrait'
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
    category: 'events',
    alt: 'Corporate event'
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    category: 'events',
    alt: 'Concert event'
  }
];

const categories = ['all', 'weddings', 'portraits', 'events'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Portfolio</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our diverse collection of photographs, each telling its own unique story
          through our lens.
        </p>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ImageGallery
          images={images}
          onImageClick={setSelectedImage}
          selectedCategory={selectedCategory}
        />

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