import React from 'react';
import { ArrowRight, Mic, Sparkles, Clock, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 grain-overlay"></div>
      
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl floating-shape"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon/20 rounded-full blur-3xl floating-shape" style={{ animationDelay: '-2s' }}></div>

      <div className="text-center relative z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-neon to-electric-blue rounded-full animate-pulse-slow blur-xl opacity-50"></div>
            <div className="relative w-[200px] h-[200px] mx-auto rounded-full flex items-center justify-center">
              <Mic className="w-24 h-24 text-white/90" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-tight">
            Create Your AI Podcast<br />in Minutes
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Transform your ideas into a professional podcast - no experience required. Our AI technology handles the production while you focus on your message.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6">
              <Sparkles className="w-8 h-8 text-neon mb-3" />
              <h3 className="text-lg font-semibold mb-2">Professional Quality</h3>
              <p className="text-white/70">Studio-grade audio production powered by AI technology</p>
            </div>
            <div className="glass-card p-6">
              <Clock className="w-8 h-8 text-neon mb-3" />
              <h3 className="text-lg font-semibold mb-2">Ready in Minutes</h3>
              <p className="text-white/70">Get your first episode delivered straight to your inbox</p>
            </div>
            <div className="glass-card p-6">
              <Zap className="w-8 h-8 text-neon mb-3" />
              <h3 className="text-lg font-semibold mb-2">Easy to Share</h3>
              <p className="text-white/70">Download and share your podcast instantly</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/register')}
              className="bg-gradient-to-r from-neon to-neon/80 text-deep-purple font-semibold rounded-full py-4 px-8 text-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,148,0.5)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-neon focus:ring-opacity-50 group flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};