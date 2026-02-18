
import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, MessageCircle, AtSign, Send, Pin, Ghost } from 'lucide-react';
import { PlatformConfig, PostData } from './types';

export const PLATFORMS: PlatformConfig[] = [
  { id: 'twitter', name: 'Twitter (X)', color: '#1DA1F2', icon: 'twitter', supportedFields: ['handle', 'verified', 'views', 'reposts', 'comments'] },
  { id: 'instagram', name: 'Instagram', color: '#E1306C', icon: 'instagram', supportedFields: ['handle', 'comments', 'reposts'] },
  { id: 'linkedin', name: 'LinkedIn', color: '#0A66C2', icon: 'linkedin', supportedFields: ['title', 'comments', 'reposts'] },
  { id: 'facebook', name: 'Facebook', color: '#1877F2', icon: 'facebook', supportedFields: ['comments', 'reposts'] },
  { id: 'whatsapp', name: 'WhatsApp', color: '#25D366', icon: 'whatsapp', supportedFields: [] },
  { id: 'threads', name: 'Threads', color: '#000000', icon: 'at-sign', supportedFields: ['handle', 'reposts', 'comments'] },
  { id: 'telegram', name: 'Telegram', color: '#0088cc', icon: 'send', supportedFields: ['views'] },
  { id: 'pinterest', name: 'Pinterest', color: '#E60023', icon: 'pin', supportedFields: ['handle'] },
  { id: 'snapchat', name: 'Snapchat', color: '#FFFC00', icon: 'ghost', supportedFields: [] },
];

export const INITIAL_POST_DATA: PostData = {
  platform: 'twitter',
  theme: 'light',
  identity: {
    name: 'User Name',
    handle: 'handle',
    title: 'Professional Title',
    avatarUrl: '', // Removed default image
    verified: true,
  },
  content: {
    text: 'Type your post content here...',
    imageUrl: '', // Removed default image
    contentType: 'image',
    pollOptions: [
      { id: '1', text: 'Option 1', percentage: 50 },
      { id: '2', text: 'Option 2', percentage: 50 },
    ],
    timestamp: '10:42 AM · Oct 24, 2024',
    showComments: true,
    comments: [] // Start with no comments
  },
  metrics: {
    likes: '0',
    comments: '0',
    reposts: '0',
    views: '0',
  },
};

export const getPlatformIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case 'twitter': return <Twitter className={className} />;
    case 'instagram': return <Instagram className={className} />;
    case 'linkedin': return <Linkedin className={className} />;
    case 'facebook': return <Facebook className={className} />;
    case 'whatsapp': return <MessageCircle className={className} />;
    case 'at-sign': return <AtSign className={className} />;
    case 'send': return <Send className={className} />;
    case 'pin': return <Pin className={className} />;
    case 'ghost': return <Ghost className={className} />;
    default: return <Twitter className={className} />;
  }
};
