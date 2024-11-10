import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80"
            alt="Photographer"
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">About Our Studio</h2>
          <p className="text-gray-600 leading-relaxed">
            With over a decade of experience capturing life's most precious moments,
            we bring a unique blend of artistic vision and technical expertise to
            every shoot. Our style combines classic elegance with contemporary
            flair, ensuring timeless images that tell your story.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe that every frame tells a story, and we're passionate about
            making those stories unforgettable. Whether it's a intimate wedding, a
            corporate event, or a personal portrait session, we approach each
            project with creativity and dedication.
          </p>
        </div>
      </div>
    </section>
  );
}