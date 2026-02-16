
import React from 'react';
import { Sparkles, ArrowRight, Layout, Camera, Share2 } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="z-10 text-center max-w-3xl flex-1 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8 animate-bounce mx-auto">
          <Sparkles size={14} />
          <span>New: Threads & Snapchat support added</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
          Create Stunning Social Media <span className="text-blue-500">Mockups</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          High-fidelity mockups for every major platform. Design, preview, and export in 4K resolution directly from your browser.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <button 
            onClick={onStart}
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold flex items-center gap-2 text-white shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95"
          >
            Start Creating Now
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
          <Feature 
            icon={<Layout className="text-blue-400" />} 
            title="9+ Platforms" 
            desc="Twitter, Instagram, LinkedIn, and more with pixel-perfect accuracy."
          />
          <Feature 
            icon={<Camera className="text-purple-400" />} 
            title="High-Res Export" 
            desc="Export your designs in 3x scale PNG for professional presentations."
          />
          <Feature 
            icon={<Share2 className="text-emerald-400" />} 
            title="Zero Backend" 
            desc="All processing happens in your browser. Your data never leaves your device."
          />
        </div>
      </div>

      {/* Footer Credit */}
      <div className="z-10 py-8 text-center">
        <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
          Developed by <span className="text-blue-500 font-bold">Bn_Jibril</span>
        </p>
      </div>

      {/* Floating Demo Preview */}
      <div className="mt-20 relative w-full max-w-5xl h-[300px] pointer-events-none opacity-50 hidden md:block">
        <div className="absolute top-0 left-10 w-80 h-48 bg-slate-800 rounded-xl border border-white/10 shadow-2xl animate-float"></div>
        <div className="absolute top-20 right-10 w-80 h-48 bg-slate-800 rounded-xl border border-white/10 shadow-2xl animate-float delay-500"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-80 h-48 bg-slate-800 rounded-xl border border-white/10 shadow-2xl animate-float delay-1000"></div>
      </div>
    </div>
  );
};

const Feature: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

export default Landing;
