'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface SocialPost {
  id: number;
  platform: 'instagram' | 'facebook';
  author: string;
  handle: string;
  avatar: string;
  avatarAlt: string;
  content: string;
  image?: string;
  imageAlt?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  hashtags: string[];
}

interface SocialFeedProps {
  posts: SocialPost[];
}

export default function SocialFeed({ posts }: SocialFeedProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-64 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  const getPlatformIcon = (platform: string) => {
    return platform === 'instagram' ? 'CameraIcon' : 'ChatBubbleLeftIcon';
  };

  const getPlatformColor = (platform: string) => {
    return platform === 'instagram' ?'bg-gradient-to-br from-purple-500 to-pink-500' :'bg-blue-600';
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
          Social Feed
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          See what our community is saying about their Philly Bangkok experience
        </p>
        <div className="flex items-center justify-center space-x-2 text-primary">
          <Icon name="HashtagIcon" size={24} variant="solid" />
          <span className="text-2xl font-headline font-bold">PhillyBangkok</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-card rounded-lg border border-border overflow-hidden transition-smooth hover:shadow-warm-lg"
          >
            {/* Post Header */}
            <div className="p-4 flex items-center justify-between border-b border-border">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <AppImage
                      src={post.avatar}
                      alt={post.avatarAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${getPlatformColor(post.platform)}`}>
                    <Icon name={getPlatformIcon(post.platform) as any} size={14} variant="solid" className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-foreground">{post.author}</h4>
                  <p className="text-sm text-muted-foreground">@{post.handle}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{post.timestamp}</span>
            </div>

            {/* Post Content */}
            <div className="p-4 space-y-3">
              <p className="text-foreground leading-relaxed">{post.content}</p>
              
              {post.hashtags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-primary hover:text-primary/80 transition-smooth cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Post Image */}
            {post.image && post.imageAlt && (
              <div className="aspect-square bg-muted">
                <AppImage
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Post Actions */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center justify-around">
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-error transition-smooth group">
                  <Icon name="HeartIcon" size={20} variant="outline" className="group-hover:scale-110 transition-smooth" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth group">
                  <Icon name="ChatBubbleLeftIcon" size={20} variant="outline" className="group-hover:scale-110 transition-smooth" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-smooth group">
                  <Icon name="ShareIcon" size={20} variant="outline" className="group-hover:scale-110 transition-smooth" />
                  <span className="text-sm font-medium">{post.shares}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}