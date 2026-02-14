
import React from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, Globe } from 'lucide-react';
import { PostData } from '../../types';

const FacebookMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-[500px] ${isDark ? 'bg-[#242526] text-[#e4e6eb] border-zinc-800' : 'bg-white text-[#050505] border-slate-200'} rounded-lg border shadow-xl`}>
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            <img src={postData.identity.avatarUrl} className="w-10 h-10 rounded-full" alt="avatar" />
            <div>
              <div className="font-bold text-[15px]">{postData.identity.name}</div>
              <div className="flex items-center gap-1 text-[13px] text-slate-500">
                <span>{postData.content.timestamp}</span>
                <span>•</span>
                <Globe size={12} />
              </div>
            </div>
          </div>
          <MoreHorizontal className="text-slate-500" />
        </div>

        <div className="text-[15px] mb-3 whitespace-pre-wrap">
          {postData.content.text}
        </div>
      </div>

      {postData.content.contentType === 'image' && (
        <div className="mb-3">
          <img src={postData.content.imageUrl} className="w-full h-auto" alt="post" />
        </div>
      )}

      <div className="px-3">
        <div className="flex items-center justify-between py-2 border-b border-slate-200 dark:border-zinc-800">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-[#1877f2] flex items-center justify-center">
              <ThumbsUp size={10} className="text-white fill-white" />
            </div>
            <span className="text-slate-500 text-sm">{postData.metrics.likes}</span>
          </div>
          <div className="text-slate-500 text-sm flex gap-3">
            <span>{postData.metrics.comments} comments</span>
            <span>{postData.metrics.reposts} shares</span>
          </div>
        </div>

        <div className="flex justify-between py-1">
          <div className="flex-1 flex items-center justify-center gap-2 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded transition-colors text-slate-500 font-semibold text-sm cursor-pointer">
            <ThumbsUp size={20} /> Like
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded transition-colors text-slate-500 font-semibold text-sm cursor-pointer">
            <MessageSquare size={20} /> Comment
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 py-1.5 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded transition-colors text-slate-500 font-semibold text-sm cursor-pointer">
            <Share2 size={20} /> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookMockup;
