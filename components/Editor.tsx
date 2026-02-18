
import React from 'react';
import { ArrowLeft, Download, User, Type, BarChart2, Hash, Moon, Sun, Monitor, Camera, Plus, Trash2, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { PostData, AppTheme, CommentData } from '../types';
import { PLATFORMS } from '../constants';

interface EditorProps {
  postData: PostData;
  onChange: (data: Partial<PostData>) => void;
  onBack: () => void;
  onExport: () => void;
}

const Editor: React.FC<EditorProps> = ({ postData, onChange, onBack, onExport }) => {
  const currentPlatform = PLATFORMS.find(p => p.id === postData.platform);
  const supported = currentPlatform?.supportedFields || [];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'avatar' | 'post' | 'comment', commentId?: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (type === 'avatar') {
        onChange({ identity: { ...postData.identity, avatarUrl: url } });
      } else if (type === 'post') {
        onChange({ content: { ...postData.content, imageUrl: url } });
      } else if (type === 'comment' && commentId) {
        const newComments = postData.content.comments.map(c => 
          c.id === commentId ? { ...c, avatarUrl: url } : c
        );
        onChange({ content: { ...postData.content, comments: newComments } });
      }
    }
  };

  const addComment = () => {
    const newComment: CommentData = {
      id: Date.now().toString(),
      name: 'User Name',
      handle: 'username',
      avatarUrl: '', // No default image
      text: 'Sample comment text...',
      timestamp: '1m',
      likes: '0'
    };
    onChange({
      content: {
        ...postData.content,
        comments: [...postData.content.comments, newComment]
      }
    });
  };

  const updateComment = (id: string, updates: Partial<CommentData>) => {
    const newComments = postData.content.comments.map(c => 
      c.id === id ? { ...c, ...updates } : c
    );
    onChange({ content: { ...postData.content, comments: newComments } });
  };

  const deleteComment = (id: string) => {
    const newComments = postData.content.comments.filter(c => c.id !== id);
    onChange({ content: { ...postData.content, comments: newComments } });
  };

  return (
    <aside className="w-full md:w-[400px] h-full bg-slate-900 border-r border-white/10 flex flex-col z-20 overflow-y-auto custom-scrollbar">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-slate-900/90 backdrop-blur-md z-10 p-4 border-b border-white/10 flex items-center justify-between">
        <button onClick={onBack} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
          <ArrowLeft size={20} />
        </button>
        <span className="font-semibold">{currentPlatform?.name} Editor</span>
        <button 
          onClick={onExport}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all"
        >
          <Download size={16} />
          Export
        </button>
      </div>

      <div className="p-6 space-y-8 flex-1">
        {/* Theme Toggle */}
        <section>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-3">Theme</label>
          <div className="grid grid-cols-3 gap-2">
            {['light', 'dim', 'dark'].map((t) => (
              <button
                key={t}
                onClick={() => onChange({ theme: t as AppTheme })}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${postData.theme === t ? 'bg-blue-600/10 border-blue-500 text-blue-400' : 'bg-slate-800 border-white/5 text-slate-400 hover:border-white/20'}`}
              >
                {t === 'light' ? <Sun size={14}/> : t === 'dim' ? <Monitor size={14}/> : <Moon size={14}/>}
                <span className="text-xs font-medium capitalize">{t}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Identity Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <User size={16} className="text-blue-400" />
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Identity</label>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-white/5">
              <div className="relative group w-12 h-12">
                {postData.identity.avatarUrl ? (
                  <img src={postData.identity.avatarUrl} className="w-full h-full rounded-full object-cover" alt="Avatar" />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-700 flex items-center justify-center border border-white/10">
                    <User size={20} className="text-slate-500" />
                  </div>
                )}
                <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-full cursor-pointer transition-opacity">
                  <Camera size={16} className="text-white" />
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'avatar')} />
                </label>
              </div>
              <div className="flex-1 space-y-1">
                <input 
                  value={postData.identity.name} 
                  onChange={(e) => onChange({ identity: { ...postData.identity, name: e.target.value }})}
                  className="w-full bg-transparent font-medium focus:outline-none placeholder:text-slate-600" 
                  placeholder="Full Name"
                />
                {supported.includes('handle') && (
                  <input 
                    value={postData.identity.handle} 
                    onChange={(e) => onChange({ identity: { ...postData.identity, handle: e.target.value }})}
                    className="w-full bg-transparent text-sm text-slate-400 focus:outline-none placeholder:text-slate-600" 
                    placeholder="@username"
                  />
                )}
              </div>
            </div>
            {supported.includes('verified') && (
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={postData.identity.verified} 
                  onChange={(e) => onChange({ identity: { ...postData.identity, verified: e.target.checked }})}
                  className="w-4 h-4 rounded bg-slate-800 border-white/10" 
                />
                <span className="text-sm font-medium">Verified Profile</span>
              </label>
            )}
          </div>
        </section>

        {/* Content Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Type size={16} className="text-purple-400" />
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Post Content</label>
          </div>
          <div className="space-y-4">
            <textarea 
              value={postData.content.text}
              onChange={(e) => onChange({ content: { ...postData.content, text: e.target.value }})}
              className="w-full bg-slate-800 border border-white/5 rounded-xl px-4 py-3 min-h-[100px] text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="What's on your mind?"
            />
            {postData.content.contentType === 'image' && (
              <div className="relative group aspect-video bg-slate-800 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center overflow-hidden">
                {postData.content.imageUrl ? (
                  <img src={postData.content.imageUrl} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <ImageIcon size={32} />
                    <span className="text-xs font-bold uppercase tracking-wider">Click to Upload Image</span>
                  </div>
                )}
                <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-opacity">
                  <Camera size={24} className="text-white mb-2" />
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'post')} />
                </label>
              </div>
            )}
          </div>
        </section>

        {/* Comments Manager */}
        {supported.includes('comments') && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <MessageSquare size={16} className="text-emerald-400" />
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Comments</label>
              </div>
              <button 
                onClick={addComment}
                className="p-1 hover:bg-white/5 rounded-md text-emerald-400 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center gap-2 cursor-pointer mb-2">
                <input 
                  type="checkbox" 
                  checked={postData.content.showComments} 
                  onChange={(e) => onChange({ content: { ...postData.content, showComments: e.target.checked }})}
                  className="w-4 h-4 rounded bg-slate-800 border-white/10" 
                />
                <span className="text-sm font-medium">Show Comments in Mockup</span>
              </label>

              {postData.content.comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-slate-800/50 rounded-xl border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative group w-8 h-8">
                        {comment.avatarUrl ? (
                          <img src={comment.avatarUrl} className="w-full h-full rounded-full object-cover" />
                        ) : (
                          <div className="w-full h-full rounded-full bg-slate-700 flex items-center justify-center">
                            <User size={12} className="text-slate-500" />
                          </div>
                        )}
                        <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-full cursor-pointer transition-opacity">
                          <Camera size={12} className="text-white" />
                          <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'comment', comment.id)} />
                        </label>
                      </div>
                      <input 
                        value={comment.name}
                        onChange={(e) => updateComment(comment.id, { name: e.target.value })}
                        className="bg-transparent text-sm font-medium focus:outline-none w-24"
                      />
                    </div>
                    <button onClick={() => deleteComment(comment.id)} className="text-slate-500 hover:text-red-400">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <textarea 
                    value={comment.text}
                    onChange={(e) => updateComment(comment.id, { text: e.target.value })}
                    className="w-full bg-slate-900 border border-white/5 rounded-lg p-2 text-xs focus:outline-none resize-none"
                    rows={2}
                  />
                  <div className="flex gap-2">
                     <input 
                      value={comment.timestamp}
                      onChange={(e) => updateComment(comment.id, { timestamp: e.target.value })}
                      className="bg-slate-900 border border-white/5 rounded-lg px-2 py-1 text-[10px] w-full"
                      placeholder="Timestamp"
                    />
                    <input 
                      value={comment.likes}
                      onChange={(e) => updateComment(comment.id, { likes: e.target.value })}
                      className="bg-slate-900 border border-white/5 rounded-lg px-2 py-1 text-[10px] w-full"
                      placeholder="Likes"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Engagement Metrics */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Hash size={16} className="text-amber-400" />
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Engagement Counts</label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] text-slate-500 uppercase font-bold">Likes</label>
              <input value={postData.metrics.likes} onChange={(e) => onChange({ metrics: { ...postData.metrics, likes: e.target.value }})} className="w-full bg-slate-800 border border-white/5 rounded-lg px-3 py-2 text-sm focus:outline-none" />
            </div>
            {supported.includes('reposts') && (
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 uppercase font-bold">Reposts/Shares</label>
                <input value={postData.metrics.reposts} onChange={(e) => onChange({ metrics: { ...postData.metrics, reposts: e.target.value }})} className="w-full bg-slate-800 border border-white/5 rounded-lg px-3 py-2 text-sm focus:outline-none" />
              </div>
            )}
            {supported.includes('comments') && (
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 uppercase font-bold">Comments</label>
                <input value={postData.metrics.comments} onChange={(e) => onChange({ metrics: { ...postData.metrics, comments: e.target.value }})} className="w-full bg-slate-800 border border-white/5 rounded-lg px-3 py-2 text-sm focus:outline-none" />
              </div>
            )}
            {supported.includes('views') && (
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 uppercase font-bold">Views</label>
                <input value={postData.metrics.views} onChange={(e) => onChange({ metrics: { ...postData.metrics, views: e.target.value }})} className="w-full bg-slate-800 border border-white/5 rounded-lg px-3 py-2 text-sm focus:outline-none" />
              </div>
            )}
          </div>
        </section>

        {/* Subtle Credit */}
        <div className="pt-12 pb-8 text-center border-t border-white/5">
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
            Mockup Engine by <span className="text-slate-400">Bn_Jibril</span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Editor;
