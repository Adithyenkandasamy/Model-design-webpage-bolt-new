import React from 'react';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useHoverSound } from '../hooks/useSound';
import Map from './Map';

const SoundLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const playHover = useHoverSound();

  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
      onMouseEnter={() => playHover()}
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
          {/* Left Column - About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Camera className="w-6 h-6" />
              <span className="text-xl font-bold">LENS & LIGHT</span>
            </div>
            <p className="text-gray-400">
              Capturing life's precious moments with artistic vision and technical excellence since 2010.
            </p>
          </div>

          {/* Middle Column - Quick Links & Contact */}
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

          {/* Right Column - Location & Map */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Visit Our Studio</h3>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p>Magizh Technologies</p>
                <p>123 Photography Lane</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <span>info@lensandlight.com</span>
            </div>
            <Map />
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-center space-x-6 mb-4">
            {[
              { Icon: Instagram, href: '#instagram', label: 'Instagram' },
              { Icon: Facebook, href: '#facebook', label: 'Facebook' },
              { Icon: Twitter, href: '#twitter', label: 'Twitter' }
            ].map(({ Icon, href, label }) => (
              <SoundLink key={label} href={href}>
                <Icon className="w-6 h-6" />
              </SoundLink>
            ))}
          </div>
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Lens & Light Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}