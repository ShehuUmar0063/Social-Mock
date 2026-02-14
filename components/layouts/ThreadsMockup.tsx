
import React from 'react';
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal } from 'lucide-react';
import { PostData } from '../../types';

const ThreadsMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';

  return (
    <div className={`w-[500px] ${isDark ? 'bg-black text-white' : 'bg-white text-black'} p-4 shadow-xl rounded-2xl`}>
      <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <img src={postData.identity.avatarUrl} className="w-10 h-10 rounded-full object-cover" alt="avatar" />
          <div className="w-[2px] flex-1 bg-zinc-800 my-2 rounded-full"></div>
          <div className="flex -space-x-2">
            <div className="w-5 h-5 rounded-full bg-blue-500 border border-black"></div>
            <div className="w-5 h-5 rounded-full bg-red-500 border border-black"></div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-sm">@{postData.identity.handle}</span>
            <div className="flex items-center gap-3 text-zinc-500">
              <span className="text-sm">2h</span>
              <MoreHorizontal size={18} />
            </div>
          </div>

          <div className="text-[15px] leading-snug mb-3 whitespace-pre-wrap">
            {postData.content.text}
          </div>

          {postData.content.contentType === 'image' && (
            <div className="rounded-lg border border-zinc-800 overflow-hidden mb-3">
              <img src={postData.content.imageUrl} className="w-full h-auto" alt="post" />
            </div>
          )}

          <div className="flex gap-4 mb-4 text-zinc-400">
            <Heart size={20} />
            <MessageCircle size={20} />
            <Repeat2 size={20} />
            <Send size={20} />
          </div>

          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <span>{postData.metrics.comments} replies</span>
            <span>·</span>
            <span>{postData.metrics.likes} likes</span>
            <span>·</span>
            <span>{postData.metrics.reposts} reposts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadsMockup;
