import React from 'react';
import { Mic, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay"></div>
      
      {/* Animated background shapes */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon/20 rounded-full blur-3xl floating-shape" style={{ animationDelay: '-2s' }}></div>

      <div className="text-center relative z-10 px-4">
        <button
          onClick={() => navigate('/register')}
          className="group flex flex-col items-center transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-neon/50 rounded-3xl"
          aria-label="Get started with AI Podcast creation"
        >
          {/* Icon container with pulsing effect */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-neon to-electric-blue rounded-full animate-pulse-slow blur-xl opacity-50"></div>
            <div className="relative w-[300px] h-[300px] flex items-center justify-center bg-gradient-to-br from-deep-purple via-electric-blue/20 to-neon/20 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl">
              <Mic className="w-32 h-32 text-white transform transition-transform group-hover:scale-110 duration-300" />
            </div>
          </div>

          {/* Call to action text */}
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