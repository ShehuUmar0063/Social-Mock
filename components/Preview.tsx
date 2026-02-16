
import React, { useMemo } from 'react';
import { PostData } from '../types';
import TwitterMockup from './layouts/TwitterMockup';
import InstagramMockup from './layouts/InstagramMockup';
import LinkedInMockup from './layouts/LinkedInMockup';
import FacebookMockup from './layouts/FacebookMockup';
import WhatsAppMockup from './layouts/WhatsAppMockup';
import ThreadsMockup from './layouts/ThreadsMockup';
import TelegramMockup from './layouts/TelegramMockup';
import PinterestMockup from './layouts/PinterestMockup';
import SnapchatMockup from './layouts/SnapchatMockup';

interface PreviewProps {
  postData: PostData;
}

const Preview: React.FC<PreviewProps> = ({ postData }) => {
  const MockupComponent = useMemo(() => {
    switch (postData.platform) {
      case 'twitter': return TwitterMockup;
      case 'instagram': return InstagramMockup;
      case 'linkedin': return LinkedInMockup;
      case 'facebook': return FacebookMockup;
      case 'whatsapp': return WhatsAppMockup;
      case 'threads': return ThreadsMockup;
      case 'telegram': return TelegramMockup;
      case 'pinterest': return PinterestMockup;
      case 'snapchat': return SnapchatMockup;
      default: return null;
    }
  }, [postData.platform]);

  return (
    <main className="flex-1 bg-slate-900/50 flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto custom-scrollbar">
      {/* Container with auto-scaling for mobile */}
      <div className="w-full h-full flex items-center justify-center">
        <div 
          id="preview-card-container" 
          className="relative origin-center transition-transform duration-300 flex items-center justify-center p-4 md:p-10"
          style={{
            // CSS Hack to ensure the content stays centered and fits within the parent bounds
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        >
          {MockupComponent && <MockupComponent postData={postData} />}
        </div>
      </div>
      
      {/* Mobile Hint */}
      <div className="md:hidden mt-4 text-[10px] text-slate-500 font-medium uppercase tracking-widest opacity-50">
        Live High-Fidelity Preview
      </div>
    </main>
  );
};

export default Preview;
