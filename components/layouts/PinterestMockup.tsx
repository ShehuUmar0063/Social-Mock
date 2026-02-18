
import React from 'react';
import { PostData } from '../../types';
import { Upload, Share, MoreHorizontal } from 'lucide-react';

const PinterestMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-full max-w-[300px] ${isDark ? 'bg-[#111]' : 'bg-white'} rounded-3xl shadow-xl overflow-hidden group border ${isDark ? 'border-zinc-800' : 'border-slate-100'}`}>
      <div className="relative overflow-hidden">
        <img 
          crossOrigin="anonymous" 
          src={postData.content.imageUrl} 
          className="w-full h-auto object-cover" 
          alt="pin" 
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity p-3 md:p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
             <div className="bg-white/10 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold">Mockup</div>
             <button className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-bold">Save</button>
          </div>
          <div className="flex justify-end gap-2">
            <button className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-black"><Share size={14} /></button>
            <button className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-black"><MoreHorizontal size={14} /></button>
          </div>
        </div>
      </div>
      
      <div className="p-3 md:p-4">
        <div className={`font-bold text-sm md:text-base mb-2 line-clamp-2 ${isDark ? 'text-white' : 'text-black'}`}>
          {postData.content.text}
        </div>
        <div className="flex items-center gap-2">
           <img 
             crossOrigin="anonymous" 
             src={postData.identity.avatarUrl} 
             className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover" 
             alt="profile" 
           />
           <span className={`text-xs md:text-sm font-medium truncate ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>{postData.identity.name}</span>
        </div>
      </div>
    </div>
  );
};

export default PinterestMockup;
