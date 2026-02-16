
import React from 'react';
import { MessageCircle, Repeat2, Heart, BarChart2, Share, BadgeCheck, MoreHorizontal } from 'lucide-react';
import { PostData } from '../../types';

const TwitterMockup: React.FC<{ postData: PostData }> = ({ postData }) => {
  const themeColors = {
    light: { bg: 'bg-white', text: 'text-slate-900', secondary: 'text-slate-500', border: 'border-slate-100', replyLine: 'bg-slate-200' },
    dim: { bg: 'bg-[#15202b]', text: 'text-white', secondary: 'text-slate-400', border: 'border-[#38444d]', replyLine: 'bg-[#38444d]' },
    dark: { bg: 'bg-black', text: 'text-white', secondary: 'text-slate-500', border: 'border-[#2f3336]', replyLine: 'bg-[#2f3336]' }
  };

  const colors = themeColors[postData.theme];

  const formatText = (text: string) => {
    return text.split(/(\s+)/).map((word, i) => {
      if (word.startsWith('#') || word.startsWith('@')) {
        return <span key={i} className="text-[#1d9bf0] cursor-pointer hover:underline">{word}</span>;
      }
      return word;
    });
  };

  return (
    <div className="w-full max-w-[600px] flex flex-col gap-0">
      <div className={`${colors.bg} ${colors.text} rounded-2xl border ${colors.border} p-3 md:p-4 shadow-xl z-10`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex gap-3">
            <img src={postData.identity.avatarUrl} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" alt="avatar" />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm md:text-base">{postData.identity.name}</span>
                {postData.identity.verified && <BadgeCheck size={16} fill="#1d9bf0" className="text-white" />}
              </div>
              <span className={`${colors.secondary} text-sm md:text-[15px]`}>@{postData.identity.handle}</span>
            </div>
          </div>
          <MoreHorizontal className={colors.secondary} size={18} />
        </div>

        {/* Content */}
        <div className="text-[15px] md:text-[17px] leading-relaxed mb-3 whitespace-pre-wrap">
          {formatText(postData.content.text)}
        </div>

        {postData.content.contentType === 'image' && (
          <div className={`rounded-2xl border ${colors.border} overflow-hidden mb-3`}>
            <img src={postData.content.imageUrl} className="w-full h-auto max-h-[500px] object-cover" alt="content" />
          </div>
        )}

        {postData.content.contentType === 'poll' && (
          <div className="space-y-3 mb-4">
            {postData.content.pollOptions.map((opt) => (
              <div key={opt.id} className="relative h-10 w-full overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800">
                <div 
                  className="absolute inset-y-0 left-0 bg-[#1d9bf0]/20" 
                  style={{ width: `${opt.percentage}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-between px-3 text-sm font-medium">
                  <span>{opt.text}</span>
                  <span>{opt.percentage}%</span>
                </div>
              </div>
            ))}
            <div className={`${colors.secondary} text-xs md:text-sm`}>1,424 votes · Final results</div>
          </div>
        )}

        {/* Timestamp */}
        <div className={`${colors.secondary} text-xs md:text-[15px] pb-4 border-b ${colors.border} mb-4`}>
          {postData.content.timestamp}
        </div>

        {/* Metrics Bar */}
        <div className={`flex justify-between items-center ${colors.secondary} px-1 overflow-x-auto no-scrollbar`}>
          <div className="flex items-center gap-1 hover:text-[#1d9bf0] transition-colors cursor-pointer group">
            <div className="p-1.5 md:p-2 group-hover:bg-[#1d9bf0]/10 rounded-full"><MessageCircle size={16} md:size={18} /></div>
            <span className="text-[10px] md:text-xs">{postData.metrics.comments}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#00ba7c] transition-colors cursor-pointer group">
            <div className="p-1.5 md:p-2 group-hover:bg-[#00ba7c]/10 rounded-full"><Repeat2 size={16} md:size={18} /></div>
            <span className="text-[10px] md:text-xs">{postData.metrics.reposts}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#f91880] transition-colors cursor-pointer group">
            <div className="p-1.5 md:p-2 group-hover:bg-[#f91880]/10 rounded-full"><Heart size={16} md:size={18} /></div>
            <span className="text-[10px] md:text-xs">{postData.metrics.likes}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#1d9bf0] transition-colors cursor-pointer group">
            <div className="p-1.5 md:p-2 group-hover:bg-[#1d9bf0]/10 rounded-full"><BarChart2 size={16} md:size={18} /></div>
            <span className="text-[10px] md:text-xs">{postData.metrics.views}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-[#1d9bf0] transition-colors cursor-pointer group">
            <div className="p-1.5 md:p-2 group-hover:bg-[#1d9bf0]/10 rounded-full"><Share size={16} md:size={18} /></div>
          </div>
        </div>
      </div>

      {/* Replies */}
      {postData.content.showComments && postData.content.comments.length > 0 && (
        <div className={`${colors.bg} ${colors.text} rounded-b-2xl border-x border-b ${colors.border} -mt-3 pt-6 p-3 md:p-4 space-y-4`}>
          {postData.content.comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <img src={comment.avatarUrl} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" alt="avatar" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-x-1">
                    <span className="font-bold text-sm md:text-[15px]">{comment.name}</span>
                    <span className={`${colors.secondary} text-xs md:text-[14px]`}>@{comment.handle} · {comment.timestamp}</span>
                  </div>
                  <MoreHorizontal className={colors.secondary} size={14} md:size={16} />
                </div>
                <div className="text-sm md:text-[15px] leading-relaxed mb-2">
                  {formatText(comment.text)}
                </div>
                <div className={`${colors.secondary} flex gap-4 md:gap-6 overflow-x-auto no-scrollbar`}>
                  <div className="flex items-center gap-1"><MessageCircle size={14} md:size={16} /><span className="text-[10px] md:text-xs">0</span></div>
                  <div className="flex items-center gap-1"><Repeat2 size={14} md:size={16} /><span className="text-[10px] md:text-xs">0</span></div>
                  <div className="flex items-center gap-1"><Heart size={14} md:size={16} /><span className="text-[10px] md:text-xs">{comment.likes}</span></div>
                  <div className="flex items-center gap-1"><BarChart2 size={14} md:size={16} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TwitterMockup;
