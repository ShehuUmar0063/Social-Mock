
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
    name: 'SocialMock AI',
    handle: 'socialmock_app',
    title: 'Senior Product Designer',
    avatarUrl: 'https://picsum.photos/seed/avatar/200',
    verified: true,
  },
  content: {
    text: 'Check out this amazing mockup generator! 🚀 Build professional social media posts in seconds without touching Figma. #Design #Mockup #SocialMedia',
    imageUrl: 'https://picsum.photos/seed/post/800/600',
    contentType: 'image',
    pollOptions: [
      { id: '1', text: 'I love it!', percentage: 85 },
      { id: '2', text: 'Its okay', percentage: 15 },
    ],
    timestamp: '10:42 AM · Oct 24, 2024',
    showComments: true,
    comments: [
      {
        id: 'c1',
        name: 'Alex River',
        handle: 'ariver_ux',
        avatarUrl: 'https://i.pravatar.cc/150?u=alex',
        text: 'This is a game changer for my client presentations! 🔥',
        timestamp: '2h',
        likes: '12'
      },
      {
        id: 'c2',
        name: 'Sarah Chen',
        handle: 'schen_dev',
        avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
        text: 'Finally, a fast way to mock up LinkedIn posts without the hassle.',
        timestamp: '45m',
        likes: '5'
      }
    ]
  },
  metrics: {
    likes: '12.4K',
    comments: '452',
    reposts: '1.2K',
    views: '142K',
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
