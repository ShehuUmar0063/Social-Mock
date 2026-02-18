
import React from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, Globe } from 'lucide-react';
import { PostData } from '../../types';

const FacebookMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-full max-w-[500px] ${isDark ? 'bg-[#242526] text-[#e4e6eb] border-zinc-800' : 'bg-white text-[#050505] border-slate-200'} rounded-lg border shadow-xl`}>
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2 min-w-0">
            <img 
              crossOrigin="anonymous" 
              src={postData.identity.avatarUrl} 
              className="w-10 h-10 rounded-full" 
              alt="avatar" 
            />
            <div className="min-w-0">
              <div className="font-bold text-[14px] md:text-[15px] truncate">{postData.identity.name}</div>
              <div className="flex items-center gap-1 text-[11px] md:text-[13px] text-slate-500">
                <span>{postData.content.timestamp}</span>
                <span>•</span>
                <Globe size={11} md:size={12} />
              </div>
            </div>
          </div>
          <MoreHorizontal className="text-slate-500 shrink-0" />
        </div>

        <div className="text-[14px] md:text-[15px] mb-3 whitespace-pre-wrap">
          {postData.content.text}
        </div>
      </div>

      {postData.content.contentType === 'image' && (
        <div className="mb-3">
          <img 
            crossOrigin="anonymous" 
            src={postData.content.imageUrl} 
            className="w-full h-auto" 
            alt="post" 
          />
        </div>
      )}

      <div className="px-3">
        <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-zinc-800">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-[#1877f2] flex items-center justify-center">
              <ThumbsUp size={10} className="text-white fill-white" />
            </div>
            <span className="text-slate-500 text-xs md:text-sm">{postData.metrics.likes}</span>
          </div>
          <div className="text-slate-500 text-[11px] md:text-sm flex gap-2 md:gap-3">
            <span>{postData.metrics.comments} comments</span>
            <span>{postData.metrics.reposts} shares</span>
          </div>
        </div>

        <div className="flex justify-between py-1 overflow-x-auto no-scrollbar">
          <div className="flex-1 flex items-center justify-center gap-1 md:gap-2 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded transition-colors text-slate-500 font-semibold text-[13px] md:text-sm cursor-pointer shrink-0">
            <ThumbsUp size={18} md:size={20} /> <span className="hidden sm:inline">Like</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-1 md:gap-2 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded transition-colors text-slate-500 font-semibold text-[13px] md:text-sm cursor-pointer shrink-0">
            <MessageSquare size={18} md:size={20} /> <span className="hidden sm:inline">Comment</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-1 md:gap-2 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded transition-colors text-slate-500 font-semibold text-[13px] md:text-sm cursor-pointer shrink-0">
            <Share2 size={18} md:size={20} /> <span className="hidden sm:inline">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookMockup;
