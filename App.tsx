
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
  const [isExporting, setIsExporting] = useState(false);

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
    if (!element || isExporting) return;

    // Verify html2canvas is globally available
    if (typeof (window as any).html2canvas === 'undefined') {
      alert("Capture library is still loading. Please wait 5 seconds and try again.");
      return;
    }

    setIsExporting(true);

    try {
      // Small buffer to ensure any recent DOM changes (like tab switches) are painted
      await new Promise(resolve => setTimeout(resolve, 600));

      const canvas = await (window as any).html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: null,
        logging: false,
        imageTimeout: 15000,
        // The clone is essential for capturing elements that might be scaled or partially hidden
        onclone: (clonedDoc: Document) => {
          const clonedElement = clonedDoc.getElementById('preview-card-container');
          if (clonedElement) {
            // Force the element to be visible and standard in the clone
            clonedElement.style.display = 'inline-block';
            clonedElement.style.visibility = 'visible';
            clonedElement.style.opacity = '1';
            clonedElement.style.transform = 'none';
            clonedElement.style.position = 'relative';
            
            // Ensure all parent containers in the clone are visible
            let parent = clonedElement.parentElement;
            while (parent) {
              parent.style.display = 'block';
              parent.style.visibility = 'visible';
              parent.style.opacity = '1';
              parent = parent.parentElement;
            }
          }
        }
      });

      // Dimension safety check
      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        throw new Error("Canvas generation resulted in 0-size canvas.");
      }

      const dataUrl = canvas.toDataURL('image/png', 1.0);
      
      if (!dataUrl || dataUrl === 'data:,' || dataUrl.length < 100) {
        throw new Error("Canvas generated empty or invalid data string.");
      }

      const link = document.createElement('a');
      link.download = `SocialMock-${postData.platform}-${Date.now()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error("Export Error:", err);
      alert("Export failed. If you are on mobile, please try switching to the 'Preview' tab first, then click Export again.");
    } finally {
      setIsExporting(false);
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
          <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden relative">
            {/* Editor Container */}
            <div className={`h-full w-full md:w-auto transition-opacity duration-200 ${mobileTab === 'edit' ? 'flex' : 'hidden md:flex'}`}>
              <Editor 
                postData={postData} 
                onChange={updatePostData} 
                onBack={() => setView('selector')}
                onExport={handleExport}
                isExporting={isExporting}
              />
            </div>
            
            {/* Preview Container - Layout trick to keep dimensions even when "hidden" on mobile */}
            <div className={`flex-1 h-full bg-slate-900/50 md:flex ${mobileTab === 'preview' ? 'flex' : 'absolute inset-0 -z-10 opacity-0 pointer-events-none md:relative md:z-auto md:opacity-100 md:pointer-events-auto'}`}>
              <Preview postData={postData} />
            </div>
          </div>

          {/* Mobile Tab Switcher */}
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
