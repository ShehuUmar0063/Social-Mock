
import React from 'react';
import { Eye } from 'lucide-react';
import { PostData } from '../../types';

const TelegramMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-full max-w-[450px] ${isDark ? 'bg-[#17212b]' : 'bg-[#73a0c5]'} p-3 md:p-4 shadow-2xl rounded-xl min-h-[400px] flex flex-col justify-end`}>
       <div className={`p-0 overflow-hidden ${isDark ? 'bg-[#182533] text-white' : 'bg-white text-black'} rounded-xl shadow-sm max-w-[90%] self-start relative group`}>
         {postData.content.contentType === 'image' && (
           <img 
             crossOrigin="anonymous" 
             src={postData.content.imageUrl} 
             className="w-full h-auto" 
             alt="telegram" 
           />
         )}
         <div className="p-3 pb-6">
           <div className="font-bold text-[#3390ec] text-sm md:text-base mb-1 truncate">{postData.identity.name}</div>
           <div className="text-xs md:text-sm whitespace-pre-wrap">{postData.content.text}</div>
         </div>
         <div className="absolute bottom-1 right-2 flex items-center gap-1 opacity-60">
            <div className="flex items-center gap-0.5 text-[9px] md:text-[10px]">
              <Eye size={10} />
              <span>{postData.metrics.views}</span>
            </div>
            <span className="text-[9px] md:text-[10px]">10:45 AM</span>
         </div>
       </div>
    </div>
  );
};

export default TelegramMockup;
