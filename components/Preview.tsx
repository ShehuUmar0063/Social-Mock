
import React from 'react';
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
  const renderMockup = () => {
    switch (postData.platform) {
      case 'twitter': return <TwitterMockup postData={postData} />;
      case 'instagram': return <InstagramMockup postData={postData} />;
      case 'linkedin': return <LinkedInMockup postData={postData} />;
      case 'facebook': return <FacebookMockup postData={postData} />;
      case 'whatsapp': return <WhatsAppMockup postData={postData} />;
      case 'threads': return <ThreadsMockup postData={postData} />;
      case 'telegram': return <TelegramMockup postData={postData} />;
      case 'pinterest': return <PinterestMockup postData={postData} />;
      case 'snapchat': return <SnapchatMockup postData={postData} />;
      default: return null;
    }
  };

  return (
    <main className="flex-1 bg-[#1e293b] flex items-center justify-center p-8 overflow-y-auto">
      <div id="preview-card-container" className="p-10">
        {renderMockup()}
      </div>
    </main>
  );
};

export default Preview;
