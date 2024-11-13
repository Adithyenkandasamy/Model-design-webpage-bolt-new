import React from 'react';

export default function Map() {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden">
      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.73836462703!2d77.24139177488087!3d11.498787988697297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9210024f5b0bf%3A0xc6a822f7b20c4b69!2sMagizh%20Technologies!5e0!3m2!1sen!2sin!4v1725002442004!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}