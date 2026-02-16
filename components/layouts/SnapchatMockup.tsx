
import React from 'react';
import { PostData } from '../../types';
import { Camera, Send, MessageSquare, Heart, Download } from 'lucide-react';

const SnapchatMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  return (
    <div className="w-full max-w-[350px] aspect-[9/16] rounded-[2.5rem] md:rounded-[3rem] border-6 md:border-8 border-black shadow-2xl relative overflow-hidden bg-black">
      <img src={postData.content.imageUrl} className="w-full h-full object-cover" alt="story" />
      
      {/* HUD Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-yellow-400 overflow-hidden shrink-0">
               <img src={postData.identity.avatarUrl} className="w-full h-full object-cover" alt="avatar" />
             </div>
             <div className="min-w-0">
               <div className="text-white font-bold text-xs md:text-sm shadow-sm truncate">{postData.identity.name}</div>
               <div className="text-white/80 text-[10px] md:text-xs shadow-sm">2h ago</div>
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-black/30 backdrop-blur-md px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-white text-center mb-6 md:mb-10 w-full max-w-[280px]">
            <p className="text-xs md:text-sm font-medium leading-tight whitespace-pre-wrap">{postData.content.text}</p>
          </div>
          
          <div className="w-full flex items-center justify-between mb-2">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1 text-white">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/20 backdrop-blur flex items-center justify-center"><MessageSquare size={18} md:size={20}/></div>
                <span className="text-[9px] md:text-[10px]">Chat</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 text-white">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black shadow-lg"><Send size={20} md:size={24}/></div>
               <span className="text-[9px] md:text-[10px]">Send To</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapchatMockup;
