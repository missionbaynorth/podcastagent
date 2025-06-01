import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay"></div>
      
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon/20 rounded-full blur-3xl floating-shape" style={{ animationDelay: '-2s' }}></div>

      <div className="text-center relative z-10 px-4">
        <button
          onClick={() => navigate('/register')}
          className="group flex flex-col items-center transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-neon/50 rounded-3xl"
          aria-label="Get started with AI Podcast creation"
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-neon to-electric-blue rounded-full animate-pulse-slow blur-xl opacity-50"></div>
            <div className="relative w-[400px] h-[400px] flex items-center justify-center bg-gradient-to-br from-deep-purple via-electric-blue/20 to-neon/20 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg"
                alt="AI-Generated Professional Host"
                className="w-full h-full object-cover object-center opacity-90 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/80 via-deep-purple/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-electric-blue/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Launch Your AI Podcast
          </h1>
          
          <div className="flex items-center justify-center space-x-2 text-neon font-semibold text-xl">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
};