
import React, { useState } from 'react';
import Landing from './components/Landing';
import PlatformSelector from './components/PlatformSelector';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { PostData, PlatformId } from './types';
import { INITIAL_POST_DATA } from './constants';
import { Edit3, Eye } from 'lucide-react';

type View = 'landing' | 'selector' | 'editor';
type MobileTab = 'edit' | 'preview';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');
  const [postData, setPostData] = useState<PostData>(INITIAL_POST_DATA);
  const [mobileTab, setMobileTab] = useState<MobileTab>('edit');

  const handleStart = () => setView('selector');
  
  const handleSelectPlatform = (platformId: PlatformId) => {
    setPostData(prev => ({ ...prev, platform: platformId }));
    setView('editor');
  };

  const updatePostData = (newData: Partial<PostData>) => {
    setPostData(prev => ({ ...prev, ...newData }));
  };

  const handleExport = async () => {
    const element = document.getElementById('preview-card-container');
    if (!element) return;

    try {
      // @ts-ignore (html2canvas is loaded via CDN)
      const canvas = await window.html2canvas(element, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `socialmock-${postData.platform}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed", err);
      alert("Failed to export image. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {view === 'landing' && <Landing onStart={handleStart} />}
      
      {view === 'selector' && (
        <PlatformSelector onSelect={handleSelectPlatform} />
      )}

      {view === 'editor' && (
        <div className="flex flex-col md:flex-row flex-1 h-[100dvh] overflow-hidden relative">
          {/* Main Content Area */}
          <div className={`flex-1 flex flex-col md:flex-row h-full overflow-hidden`}>
            {/* Editor - Hidden on mobile if preview tab is active */}
            <div className={`${mobileTab === 'edit' ? 'flex' : 'hidden'} md:flex h-full w-full md:w-auto`}>
              <Editor 
                postData={postData} 
                onChange={updatePostData} 
                onBack={() => setView('selector')}
                onExport={handleExport}
              />
            </div>
            
            {/* Preview - Hidden on mobile if edit tab is active */}
            <div className={`${mobileTab === 'preview' ? 'flex' : 'hidden'} md:flex flex-1 h-full bg-slate-900/50`}>
              <Preview postData={postData} />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-slate-800/90 backdrop-blur-lg border border-white/10 p-1 rounded-full shadow-2xl">
            <button 
              onClick={() => setMobileTab('edit')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all ${mobileTab === 'edit' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              <Edit3 size={16} />
              Edit
            </button>
            <button 
              onClick={() => setMobileTab('preview')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all ${mobileTab === 'preview' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              <Eye size={16} />
              Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
