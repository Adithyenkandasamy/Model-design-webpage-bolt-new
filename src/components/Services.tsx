import React from 'react';
import { Camera, Users, Mountain, PartyPopper, Heart, Building } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Capturing your special day with elegance and emotion'
  },
  {
    icon: Users,
    title: 'Portraits',
    description: 'Professional headshots and family portraits'
  },
  {
    icon: Mountain,
    title: 'Landscapes',
    description: 'Stunning natural and urban landscape photography'
  },
  {
    icon: PartyPopper,
    title: 'Events',
    description: 'Corporate events, parties, and celebrations'
  },
  {
    icon: Camera,
    title: 'Commercial',
    description: 'Product and brand photography'
  },
  {
    icon: Building,
    title: 'Real Estate',
    description: 'Interior and exterior property photography'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-lg bg-white hover-card border border-gray-100"
            >
              <service.icon className="w-12 h-12 mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}