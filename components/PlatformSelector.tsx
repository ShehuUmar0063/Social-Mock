
import React from 'react';
import { PLATFORMS, getPlatformIcon } from '../constants';
import { PlatformId } from '../types';

interface PlatformSelectorProps {
  onSelect: (id: PlatformId) => void;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose a Platform</h2>
          <p className="text-slate-400">Select the social network you want to create a mockup for.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {PLATFORMS.map((platform) => (
            <button
              key={platform.id}
              onClick={() => onSelect(platform.id)}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-800/50 border border-white/10 transition-all hover:bg-slate-700 hover:scale-105 active:scale-95"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6 shadow-xl"
                style={{ backgroundColor: platform.color }}
              >
                {getPlatformIcon(platform.icon, "text-white w-8 h-8")}
              </div>
              <span className="font-medium text-lg">{platform.name}</span>
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ backgroundColor: platform.color }}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;
