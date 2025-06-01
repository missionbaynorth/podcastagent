import React from 'react';
import { Music, Mic, Radio, Sparkles } from 'lucide-react';

// Brand Colors
const colors = {
  primary: '#2E1065', // Deep Purple
  secondary: '#3B82F6', // Electric Blue
  accent: '#00FF94', // Neon Green
  metallic: '#FFD700', // Gold
  white: '#FFFFFF',
  black: '#1A1A1A',
};

// Typography Scale
const typography = {
  heading: {
    fontFamily: 'Outfit, sans-serif',
    sizes: {
      h1: '48px',
      h2: '40px',
      h3: '32px',
      h4: '24px',
    }
  },
  body: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      large: '18px',
      base: '16px',
      small: '14px',
    }
  }
};

export const BrandSystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-purple to-electric-blue p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Cover Art Preview */}
        <section className="glass-card p-8">
          <h2 className="text-[32px] font-bold mb-6 text-white">Podcast Cover Art</h2>
          <div className="aspect-square w-full max-w-[300px] bg-gradient-to-br from-deep-purple to-electric-blue rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              <Mic className="w-16 h-16 text-neon mb-4" />
              <h1 className="text-white font-outfit text-2xl font-bold mb-2">Your Custom</h1>
              <h2 className="text-neon font-outfit text-4xl font-bold">PODCAST</h2>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon/10 rounded-full blur-2xl"></div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="glass-card p-8">
          <h2 className="text-[32px] font-bold mb-6 text-white">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(colors).map(([name, color]) => (
              <div key={name} className="space-y-2">
                <div 
                  className="h-24 rounded-xl"
                  style={{ backgroundColor: color }}
                ></div>
                <p className="text-white font-medium">{name}</p>
                <p className="text-white/60 font-mono text-sm">{color}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="glass-card p-8">
          <h2 className="text-[32px] font-bold mb-6 text-white">Typography</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-white/80 text-xl mb-4">Headings - Outfit</h3>
              <div className="space-y-4">
                {Object.entries(typography.heading.sizes).map(([level, size]) => (
                  <div key={level} className="text-white" style={{ fontSize: size }}>
                    {level.toUpperCase()} - Your Custom Podcast
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white/80 text-xl mb-4">Body - Inter</h3>
              <div className="space-y-4">
                {Object.entries(typography.body.sizes).map(([name, size]) => (
                  <div key={name} className="text-white" style={{ fontSize: size }}>
                    {name} - Create professional podcasts with AI technology
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Templates */}
        <section className="glass-card p-8">
          <h2 className="text-[32px] font-bold mb-6 text-white">Social Media Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram Post */}
            <div className="aspect-square bg-gradient-to-br from-deep-purple to-electric-blue rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <Radio className="w-12 h-12 text-neon mb-4" />
                <h3 className="text-white font-outfit text-xl font-bold mb-2">New Episode</h3>
                <p className="text-white/80 text-sm">Listen now on all platforms</p>
              </div>
            </div>

            {/* Twitter Post */}
            <div className="aspect-video bg-gradient-to-br from-deep-purple to-electric-blue rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <Music className="w-12 h-12 text-metallic mb-4" />
                <h3 className="text-white font-outfit text-xl font-bold mb-2">Weekly Insights</h3>
                <p className="text-white/80 text-sm">Join the conversation</p>
              </div>
            </div>

            {/* Facebook Cover */}
            <div className="aspect-[2.7/1] bg-gradient-to-br from-deep-purple to-electric-blue rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <Sparkles className="w-12 h-12 text-neon mb-4" />
                <h3 className="text-white font-outfit text-xl font-bold">Your Custom Podcast</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};