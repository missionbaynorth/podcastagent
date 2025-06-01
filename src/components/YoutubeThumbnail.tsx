import React from 'react';
import { Tv, Mic, Radio } from 'lucide-react';

export const YoutubeThumbnail: React.FC = () => {
  return (
    <div className="relative w-[1280px] h-[720px] bg-gradient-to-br from-deep-purple via-electric-blue/90 to-deep-purple overflow-hidden">
      {/* Studio Background Elements */}
      <div className="absolute inset-0">
        {/* Digital Screens Background */}
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="absolute left-[60%] top-[10%] w-[300px] h-[200px] bg-electric-blue/20 backdrop-blur-sm rounded-lg border border-white/10 transform -rotate-6"></div>
          <div className="absolute left-[70%] top-[30%] w-[250px] h-[150px] bg-neon/20 backdrop-blur-sm rounded-lg border border-white/10 transform rotate-3"></div>
        </div>

        {/* Studio Lighting Effects */}
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="absolute left-[20%] top-[20%] w-[200px] h-[200px] bg-neon/30 rounded-full blur-[100px]"></div>
          <div className="absolute right-[30%] bottom-[20%] w-[150px] h-[150px] bg-electric-blue/30 rounded-full blur-[80px]"></div>
        </div>
      </div>

      {/* News Desk */}
      <div className="absolute bottom-0 left-0 w-full h-[300px]">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-deep-purple/90 to-transparent"></div>
        <div className="absolute bottom-0 left-[5%] w-[500px] h-[80px] bg-electric-blue/20 backdrop-blur-md rounded-t-2xl border-t border-x border-white/10"></div>
      </div>

      {/* Avatar Section */}
      <div className="absolute left-[10%] bottom-[50px] w-[400px] h-[400px]">
        <div className="relative w-full h-full">
          {/* Professional Avatar Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Mic className="w-32 h-32 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Broadcast Elements */}
      <div className="absolute top-[40px] left-[40px] flex items-center space-x-4">
        <Tv className="w-8 h-8 text-neon" />
        <span className="text-neon text-2xl font-bold font-outfit">LIVE</span>
      </div>

      {/* Text Overlay */}
      <div className="absolute right-[40px] top-[50%] transform -translate-y-1/2 text-right">
        <h1 className="text-[64px] leading-tight font-outfit font-bold text-white max-w-[600px] mb-4">
          AI-Powered
          <br />
          <span className="text-neon">Podcast</span>
          <br />
          Revolution
        </h1>
        <div className="flex items-center justify-end space-x-3">
          <Radio className="w-8 h-8 text-electric-blue" />
          <span className="text-white/90 text-2xl font-semibold">Episode 01</span>
        </div>
      </div>

      {/* Bottom Third */}
      <div className="absolute left-0 bottom-0 w-full">
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-neon"></div>
      </div>
    </div>
  );
};