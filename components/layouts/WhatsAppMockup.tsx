
import React from 'react';
import { CheckCheck } from 'lucide-react';
import { PostData } from '../../types';

const WhatsAppMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-[400px] h-[500px] ${isDark ? 'bg-[#0b141a]' : 'bg-[#e5ddd5]'} rounded-xl shadow-2xl relative overflow-hidden flex flex-col`}>
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>

      {/* Header */}
      <div className="h-14 bg-[#075e54] dark:bg-[#202c33] flex items-center gap-3 px-3 relative z-10">
        <img src={postData.identity.avatarUrl} className="w-10 h-10 rounded-full" alt="avatar" />
        <div className="flex-1">
          <div className="text-white font-bold leading-tight">{postData.identity.name}</div>
          <div className="text-white/70 text-xs">online</div>
        </div>
      </div>

      {/* Chat Stage */}
      <div className="flex-1 p-4 flex flex-col gap-4 relative z-10">
        <div className={`self-end max-w-[85%] ${isDark ? 'bg-[#005c4b]' : 'bg-[#dcf8c6]'} rounded-lg p-2 shadow-sm relative`}>
          {postData.content.contentType === 'image' && (
            <img src={postData.content.imageUrl} className="rounded mb-2 w-full h-auto" alt="shared" />
          )}
          <div className="text-sm pr-12 whitespace-pre-wrap leading-tight">
            {postData.content.text}
          </div>
          <div className="absolute bottom-1 right-2 flex items-center gap-1">
            <span className="text-[10px] text-slate-500">10:45 AM</span>
            <CheckCheck size={14} className="text-blue-400" />
          </div>
        </div>

        <div className={`self-start max-w-[85%] ${isDark ? 'bg-[#202c33] text-white' : 'bg-white'} rounded-lg p-2 shadow-sm relative`}>
          <div className="text-sm pr-12 leading-tight">
             This mockup generator looks amazing! How did you make it?
          </div>
          <div className="absolute bottom-1 right-2">
            <span className="text-[10px] text-slate-500">10:46 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;
