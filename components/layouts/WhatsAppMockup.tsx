
import React from 'react';
import { CheckCheck, User } from 'lucide-react';
import { PostData } from '../../types';

const WhatsAppMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-full max-w-[400px] h-[500px] md:h-[600px] ${isDark ? 'bg-[#0b141a]' : 'bg-[#e5ddd5]'} rounded-xl shadow-2xl relative overflow-hidden flex flex-col`}>
      {/* Background Pattern Overlay - Replaced external URL with CSS Pattern to prevent CORS export errors */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
          backgroundSize: '12px 12px'
        }}
      ></div>

      {/* Header */}
      <div className="h-14 bg-[#075e54] dark:bg-[#202c33] flex items-center gap-3 px-3 relative z-10 shrink-0">
        {postData.identity.avatarUrl ? (
          <img 
            crossOrigin="anonymous" 
            src={postData.identity.avatarUrl} 
            className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover" 
            alt="avatar" 
          />
        ) : (
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
            <User size={18} className="text-white" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-white font-bold leading-tight truncate">{postData.identity.name}</div>
          <div className="text-white/70 text-[10px] md:text-xs">online</div>
        </div>
      </div>

      {/* Chat Stage */}
      <div className="flex-1 p-3 md:p-4 flex flex-col gap-4 relative z-10 overflow-y-auto custom-scrollbar">
        <div className={`self-end max-w-[85%] ${isDark ? 'bg-[#005c4b]' : 'bg-[#dcf8c6]'} rounded-lg p-2 shadow-sm relative`}>
          {postData.content.contentType === 'image' && postData.content.imageUrl && (
            <img 
              crossOrigin="anonymous" 
              src={postData.content.imageUrl} 
              className="rounded mb-2 w-full h-auto" 
              alt="shared" 
            />
          )}
          <div className="text-sm pr-12 whitespace-pre-wrap leading-tight text-slate-800 dark:text-slate-100">
            {postData.content.text}
          </div>
          <div className="absolute bottom-1 right-2 flex items-center gap-1">
            <span className="text-[9px] md:text-[10px] text-slate-500">10:45 AM</span>
            <CheckCheck size={12} md:size={14} className="text-blue-400" />
          </div>
        </div>

        <div className={`self-start max-w-[85%] ${isDark ? 'bg-[#202c33] text-white' : 'bg-white text-black'} rounded-lg p-2 shadow-sm relative`}>
          <div className="text-sm pr-12 leading-tight">
             This mockup generator looks amazing! How did you make it?
          </div>
          <div className="absolute bottom-1 right-2">
            <span className="text-[9px] md:text-[10px] text-slate-500">10:46 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;
