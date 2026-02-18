
import React from 'react';
import { ThumbsUp, MessageSquare, Repeat2, Send, Globe, MoreHorizontal, Plus, Heart, User, Image as ImageIcon } from 'lucide-react';
import { PostData } from '../../types';

const LinkedInMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-full max-w-[550px] ${isDark ? 'bg-[#1b1f23] text-white border-zinc-800' : 'bg-white text-slate-900 border-slate-200'} rounded-lg border shadow-2xl p-3 md:p-4`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-2">
          {postData.identity.avatarUrl ? (
            <img 
              crossOrigin="anonymous" 
              src={postData.identity.avatarUrl} 
              className="w-10 h-10 md:w-12 md:h-12 rounded-sm object-cover" 
              alt="avatar" 
            />
          ) : (
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              <User size={20} className="text-slate-400" />
            </div>
          )}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-bold text-sm md:text-base hover:text-blue-600 hover:underline cursor-pointer truncate">{postData.identity.name}</span>
              <span className="text-[10px] md:text-xs text-slate-400 italic shrink-0"> • 1st</span>
            </div>
            <span className="text-[10px] md:text-xs text-slate-400 line-clamp-1">{postData.identity.title}</span>
            <div className="flex items-center gap-1 text-slate-400 text-[10px] md:text-xs">
              <span>{postData.content.timestamp}</span>
              <span>•</span>
              <Globe size={10} md:size={12} />
            </div>
          </div>
        </div>
        <button className="text-blue-600 font-bold text-xs md:text-sm flex items-center gap-1 px-2 py-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded">
          <Plus size={14} md:size={16} />
          <span className="hidden sm:inline">Follow</span>
        </button>
      </div>

      <div className="text-sm md:text-sm mb-4 whitespace-pre-wrap">
        {postData.content.text}
      </div>

      {postData.content.contentType === 'image' && (
        <div className="mb-4 bg-slate-100 dark:bg-slate-900 min-h-[200px] flex items-center justify-center rounded overflow-hidden">
          {postData.content.imageUrl ? (
            <img 
              crossOrigin="anonymous" 
              src={postData.content.imageUrl} 
              className="w-full h-auto rounded" 
              alt="post" 
            />
          ) : (
            <div className="flex flex-col items-center gap-1 text-slate-400">
              <ImageIcon size={32} />
              <span className="text-xs font-medium">Upload Post Image</span>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800 mb-2">
         <div className="flex items-center gap-1">
           <div className="flex -space-x-1">
             <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center border border-white dark:border-zinc-900"><ThumbsUp size={8} className="text-white fill-white"/></div>
             <div className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center border border-white dark:border-zinc-900"><Heart size={8} className="text-white fill-white"/></div>
           </div>
           <span className="text-[10px] md:text-xs text-slate-400">{postData.metrics.likes}</span>
         </div>
         <div className="text-[10px] md:text-xs text-slate-400 flex gap-1 md:gap-2">
           <span className="hover:text-blue-600 cursor-pointer">{postData.metrics.comments} comments</span>
           <span>•</span>
           <span className="hover:text-blue-600 cursor-pointer">{postData.metrics.reposts} reposts</span>
         </div>
      </div>

      <div className="flex justify-between items-center text-slate-500 font-semibold text-xs md:text-sm overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 md:gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 p-1.5 md:p-2 rounded cursor-pointer transition-colors shrink-0"><ThumbsUp size={16} md:size={18}/> <span className="hidden sm:inline">Like</span></div>
        <div className="flex items-center gap-1 md:gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 p-1.5 md:p-2 rounded cursor-pointer transition-colors shrink-0"><MessageSquare size={16} md:size={18}/> <span className="hidden sm:inline">Comment</span></div>
        <div className="flex items-center gap-1 md:gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 p-1.5 md:p-2 rounded cursor-pointer transition-colors shrink-0"><Repeat2 size={16} md:size={18}/> <span className="hidden sm:inline">Repost</span></div>
        <div className="flex items-center gap-1 md:gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 p-1.5 md:p-2 rounded cursor-pointer transition-colors shrink-0"><Send size={16} md:size={18}/> <span className="hidden sm:inline">Send</span></div>
      </div>
    </div>
  );
};

export default LinkedInMockup;
