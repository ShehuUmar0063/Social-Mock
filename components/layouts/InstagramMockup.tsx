
import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { PostData } from '../../types';

const InstagramMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const isDark = postData.theme !== 'light';
  
  return (
    <div className={`w-[450px] ${isDark ? 'bg-black text-white border-zinc-800' : 'bg-white text-slate-900 border-slate-200'} rounded-md border shadow-2xl overflow-hidden`}>
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600">
             <img src={postData.identity.avatarUrl} className={`w-8 h-8 rounded-full border-2 ${isDark ? 'border-black' : 'border-white'} object-cover`} alt="avatar" />
          </div>
          <span className="text-sm font-bold">{postData.identity.handle}</span>
        </div>
        <MoreHorizontal size={18} />
      </div>

      {/* Image Stage */}
      <div className="aspect-square bg-slate-100">
        <img src={postData.content.imageUrl} className="w-full h-full object-cover" alt="content" />
      </div>

      {/* Interactions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <Heart size={24} />
            <MessageCircle size={24} />
            <Send size={24} />
          </div>
          <Bookmark size={24} />
        </div>

        <div className="font-bold text-sm mb-1">{postData.metrics.likes} likes</div>
        
        <div className="text-sm leading-tight mb-2">
          <span className="font-bold mr-2">{postData.identity.handle}</span>
          <span className="whitespace-pre-wrap">{postData.content.text}</span>
        </div>

        {postData.metrics.comments !== '0' && (
          <div className="text-sm text-slate-500 mb-2 cursor-pointer">
            View all {postData.metrics.comments} comments
          </div>
        )}

        {postData.content.showComments && postData.content.comments.length > 0 && (
          <div className="space-y-1.5 mb-3">
            {postData.content.comments.map((comment) => (
              <div key={comment.id} className="text-sm flex items-start gap-2">
                <span className="font-bold whitespace-nowrap">{comment.handle}</span>
                <span className="flex-1">{comment.text}</span>
                <Heart size={12} className="mt-1 text-slate-400" />
              </div>
            ))}
          </div>
        )}

        <div className="text-[10px] text-slate-500 uppercase tracking-tight mt-1">
          {postData.content.timestamp}
        </div>
      </div>
    </div>
  );
};

export default InstagramMockup;
