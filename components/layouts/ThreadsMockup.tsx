
import React from 'react';
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal } from 'lucide-react';
import { PostData } from '../../types';

const ThreadsMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-full max-w-[500px] ${isDark ? 'bg-black text-white' : 'bg-white text-black'} p-3 md:p-4 shadow-xl rounded-2xl border ${isDark ? 'border-zinc-900' : 'border-slate-100'}`}>
      <div className="flex gap-3">
        <div className="flex flex-col items-center shrink-0">
          <img src={postData.identity.avatarUrl} className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover" alt="avatar" />
          <div className="w-[1px] md:w-[2px] flex-1 bg-zinc-800 my-2 rounded-full opacity-50"></div>
          <div className="flex -space-x-2">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 border border-black"></div>
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-500 border border-black"></div>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-sm truncate">@{postData.identity.handle}</span>
            <div className="flex items-center gap-2 md:gap-3 text-zinc-500 shrink-0">
              <span className="text-xs md:text-sm">2h</span>
              <MoreHorizontal size={16} md:size={18} />
            </div>
          </div>

          <div className="text-[14px] md:text-[15px] leading-snug mb-3 whitespace-pre-wrap">
            {postData.content.text}
          </div>

          {postData.content.contentType === 'image' && (
            <div className="rounded-lg border border-zinc-800 overflow-hidden mb-3">
              <img src={postData.content.imageUrl} className="w-full h-auto" alt="post" />
            </div>
          )}

          <div className="flex gap-4 mb-4 text-zinc-400">
            <Heart size={18} md:size={20} />
            <MessageCircle size={18} md:size={20} />
            <Repeat2 size={18} md:size={20} />
            <Send size={18} md:size={20} />
          </div>

          <div className="flex flex-wrap items-center gap-x-2 text-zinc-500 text-xs md:text-sm">
            <span>{postData.metrics.comments} replies</span>
            <span>·</span>
            <span>{postData.metrics.likes} likes</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{postData.metrics.reposts} reposts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadsMockup;
