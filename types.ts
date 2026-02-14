
export type PlatformId = 
  | 'twitter' 
  | 'instagram' 
  | 'linkedin' 
  | 'facebook' 
  | 'whatsapp' 
  | 'threads' 
  | 'telegram' 
  | 'pinterest' 
  | 'snapchat';

export type AppTheme = 'light' | 'dim' | 'dark';

export interface PollOption {
  id: string;
  text: string;
  percentage: number;
}

export interface CommentData {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  text: string;
  timestamp: string;
  likes: string;
}

export interface PostData {
  platform: PlatformId;
  theme: AppTheme;
  identity: {
    name: string;
    handle: string;
    title: string;
    avatarUrl: string;
    verified: boolean;
  };
  content: {
    text: string;
    imageUrl: string;
    contentType: 'image' | 'poll';
    pollOptions: PollOption[];
    timestamp: string;
    showComments: boolean;
    comments: CommentData[];
  };
  metrics: {
    likes: string;
    comments: string;
    reposts: string;
    views: string;
  };
}

export interface PlatformConfig {
  id: PlatformId;
  name: string;
  color: string;
  icon: string;
  supportedFields: string[];
}
