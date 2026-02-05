'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  type: 'Phone' | 'Email' | 'LINE' | 'Social';
  label: string;
  value: string;
  icon: string;
  action: string;
  description: string;
}

interface ContactMethodsProps {
  className?: string;
}

const ContactMethods = ({ className = '' }: ContactMethodsProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const contactMethods: ContactMethod[] = [
    {
      id: '1',
      type: 'Phone',
      label: 'Call Us',
      value: '+66-2-123-4567',
      icon: 'PhoneIcon',
      action: 'tel:+6621234567',
      description: 'For reservations and takeaway orders'
    },
    {
      id: '2',
      type: 'Email',
      label: 'Email Us',
      value: 'hello@phillybangkok.com',
      icon: 'EnvelopeIcon',
      action: 'mailto:hello@phillybangkok.com',
      description: 'General inquiries and feedback'
    },
    {
      id: '3',
      type: 'LINE',
      label: 'LINE Official',
      value: '@phillybangkok',
      icon: 'ChatBubbleLeftRightIcon',
      action: 'https://line.me/R/ti/p/@phillybangkok',
      description: 'Quick messages and updates'
    },
    {
      id: '4',
      type: 'Social',
      label: 'Instagram',
      value: '@philly.bangkok',
      icon: 'CameraIcon',
      action: 'https://instagram.com/philly.bangkok',
      description: 'Daily specials and community photos'
    }
  ];

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAction = (action: string) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank');
    } else {
      window.location.href = action;
    }
  };

  return (
    <div className={`bg-card rounded-lg shadow-warm p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon name="ChatBubbleLeftEllipsisIcon" size={24} variant="solid" className="text-accent-foreground" />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-semibold text-foreground">
            Get in Touch
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Multiple ways to reach us
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method) => (
          <div
            key={method.id}
            className="p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-smooth"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={method.icon as any} size={20} variant="solid" className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-headline text-lg font-semibold text-foreground">
                      {method.label}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-muted text-muted-foreground">
                      {method.type}
                    </span>
                  </div>
                  <p className="font-body text-base text-primary font-semibold mb-1">
                    {method.value}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <button
                onClick={() => handleAction(method.action)}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md font-body font-semibold transition-smooth hover:bg-primary/90 active:scale-95"
              >
                Contact Now
              </button>
              <button
                onClick={() => handleCopy(method.id, method.value)}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-md font-body font-semibold transition-smooth hover:bg-muted/80 active:scale-95"
              >
                {copiedId === method.id ? (
                  <Icon name="CheckIcon" size={20} variant="solid" className="text-success" />
                ) : (
                  <Icon name="ClipboardDocumentIcon" size={20} variant="outline" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
        <div className="flex items-start space-x-3">
          <Icon name="ClockIcon" size={20} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-foreground">
              <strong>Response Time:</strong> We typically respond to phone calls immediately during business hours, and emails/messages within 2-4 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;