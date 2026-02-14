
import React, { useState, useCallback } from 'react';
import Landing from './components/Landing';
import PlatformSelector from './components/PlatformSelector';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { PostData, PlatformId } from './types';
import { INITIAL_POST_DATA } from './constants';

type View = 'landing' | 'selector' | 'editor';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');
  const [postData, setPostData] = useState<PostData>(INITIAL_POST_DATA);

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
        scale: 3, // Higher resolution
        useCORS: true,
        backgroundColor: null,
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `socialmock-${postData.platform}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed", err);
      alert("Failed to export image. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {view === 'landing' && <Landing onStart={handleStart} />}
      
      {view === 'selector' && (
        <PlatformSelector onSelect={handleSelectPlatform} />
      )}

      {view === 'editor' && (
        <div className="flex flex-col md:flex-row flex-1 h-screen overflow-hidden">
          <Editor 
            postData={postData} 
            onChange={updatePostData} 
            onBack={() => setView('selector')}
            onExport={handleExport}
          />
          <Preview postData={postData} />
        </div>
      )}
    </div>
  );
};

export default App;
