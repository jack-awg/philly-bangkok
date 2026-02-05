'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Icon name="EnvelopeIcon" size={20} variant="solid" className="text-white" />
            <span className="font-headline text-sm font-semibold text-white">
              Stay Connected
            </span>
          </div>

          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Weekly Specials & Updates
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community and be the first to know about new menu items, special promotions, and exclusive events at Philly Bangkok.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Icon 
                    name="EnvelopeIcon" 
                    size={20} 
                    variant="outline" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    suppressHydrationWarning
                    className="w-full pl-12 pr-4 py-4 bg-white text-foreground rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-headline font-semibold whitespace-nowrap transition-smooth hover:bg-accent/90 hover:shadow-warm-lg active:scale-95"
                >
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-white/80 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center space-x-2 text-white">
                <Icon name="CheckCircleIcon" size={24} variant="solid" />
                <span className="font-headline font-semibold text-lg">
                  Thanks for subscribing!
                </span>
              </div>
              <p className="text-white/90 mt-2">
                Check your inbox for a welcome offer.
              </p>
            </div>
          )}

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                <Icon name="GiftIcon" size={24} variant="outline" className="text-white" />
              </div>
              <h3 className="font-headline font-semibold text-white mb-1">
                Exclusive Offers
              </h3>
              <p className="text-sm text-white/80">
                Subscriber-only deals and promotions
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                <Icon name="SparklesIcon" size={24} variant="solid" className="text-white" />
              </div>
              <h3 className="font-headline font-semibold text-white mb-1">
                New Menu Items
              </h3>
              <p className="text-sm text-white/80">
                Be first to try seasonal specials
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3">
                <Icon name="CalendarIcon" size={24} variant="outline" className="text-white" />
              </div>
              <h3 className="font-headline font-semibold text-white mb-1">
                Event Invites
              </h3>
              <p className="text-sm text-white/80">
                Join our community gatherings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;