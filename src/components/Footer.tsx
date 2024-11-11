import React from 'react';
import {
  Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Github, Globe
} from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useHoverSound } from '../hooks/useSound';

const mapContainerStyle = {
  width: '100%',
  height: '200px',
  borderRadius: '0.5rem',
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};

const SoundLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const playHover = useHoverSound();

  return (
    <a
      href={href}
      onMouseEnter={() => playHover()}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - About & Map */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Camera className="w-6 h-6" />
              <span className="text-xl font-bold">LENS & LIGHT</span>
            </div>
            <p className="text-gray-400">
              Capturing life's precious moments with artistic vision and technical excellence since 2010.
            </p>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>

          {/* Middle Column - Quick Links & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Portfolio', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <SoundLink href={`#${link.toLowerCase()}`}>
                      {link}
                    </SoundLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>123 Photography Lane, NY 10001</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>info@lensandlight.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Social & Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Globe, href: '#', label: 'Website' }
              ].map(({ Icon, href, label }) => (
                <SoundLink key={label} href={href}>
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </SoundLink>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Lens & Light Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
