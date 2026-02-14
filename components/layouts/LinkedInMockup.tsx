
import React from 'react';
import { ThumbsUp, MessageSquare, Repeat2, Send, Globe, MoreHorizontal, Plus, Heart } from 'lucide-react';
import { PostData } from '../../types';

const LinkedInMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-[550px] ${isDark ? 'bg-[#1b1f23] text-white border-zinc-800' : 'bg-white text-slate-900 border-slate-200'} rounded-lg border shadow-2xl p-4`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-2">
          <img src={postData.identity.avatarUrl} className="w-12 h-12 rounded-sm object-cover" alt="avatar" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-bold hover:text-blue-600 hover:underline cursor-pointer">{postData.identity.name}</span>
              <span className="text-xs text-slate-400 italic"> • 1st</span>
            </div>
            <span className="text-xs text-slate-400 line-clamp-1">{postData.identity.title}</span>
            <div className="flex items-center gap-1 text-slate-400 text-xs">
              <span>{postData.content.timestamp}</span>
              <span>•</span>
              <Globe size={12} />
            </div>
          </div>
        </div>
        <button className="text-blue-600 font-bold text-sm flex items-center gap-1 px-2 py-1 hover:bg-blue-50 rounded">
          <Plus size={16} />
          Follow
        </button>
      </div>

      <div className="text-sm mb-4 whitespace-pre-wrap">
        {postData.content.text}
      </div>

      {postData.content.contentType === 'image' && (
        <div className="mb-4">
          <img src={postData.content.imageUrl} className="w-full h-auto rounded" alt="post" />
        </div>
      )}

      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800 mb-2">
         <div className="flex items-center gap-1">
           <div className="flex -space-x-1">
             <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center border border-white"><ThumbsUp size={8} className="text-white fill-white"/></div>
             <div className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center border border-white"><Heart size={8} className="text-white fill-white"/></div>
           </div>
           <span className="text-xs text-slate-400">{postData.metrics.likes}</span>
         </div>
         <div className="text-xs text-slate-400 flex gap-2">
           <span className="hover:text-blue-600 cursor-pointer">{postData.metrics.comments} comments</span>
           <span>•</span>
           <span className="hover:text-blue-600 cursor-pointer">{postData.metrics.reposts} reposts</span>
         </div>
      </div>

      <div className="flex justify-between items-center text-slate-500 font-semibold text-sm">
        <div className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors"><ThumbsUp size={18}/> Like</div>
        <div className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors"><MessageSquare size={18}/> Comment</div>
        <div className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors"><Repeat2 size={18}/> Repost</div>
        <div className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors"><Send size={18}/> Send</div>
      </div>
    </div>
  );
};

export default LinkedInMockup;
