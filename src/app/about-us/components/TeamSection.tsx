'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string;
  phillyConnection: string;
  specialty: string;
}

interface TeamSectionProps {
  className?: string;
}

const TeamSection = ({ className = '' }: TeamSectionProps) => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Michael Chen',
      role: 'Founder & Head Chef',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      alt: 'Asian male chef in white chef coat smiling at camera in professional kitchen with stainless steel equipment',
      bio: 'Spent 8 years in Philadelphia learning the art of authentic cheesesteak making from legendary sandwich shops.',
      phillyConnection: 'Trained at Pat\'s and Geno\'s, Philadelphia\'s most iconic cheesesteak institutions',
      specialty: 'Traditional ribeye preparation and cheese selection'
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: 'Kitchen Manager',
      image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg',
      alt: 'Hispanic female chef with dark hair in black chef uniform holding cooking utensils in modern restaurant kitchen',
      bio: 'Brings 12 years of culinary experience and ensures every sandwich meets our exacting standards.',
      phillyConnection: 'Worked at Reading Terminal Market, Philadelphia\'s historic food hall',
      specialty: 'Quality control and ingredient sourcing'
    },
    {
      id: 3,
      name: 'David Thompson',
      role: 'Grill Master',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      alt: 'Caucasian male chef with beard wearing black chef coat working at commercial grill station',
      bio: 'Philadelphia native who grew up eating cheesesteaks and perfected the griddle technique over 15 years.',
      phillyConnection: 'Born and raised in South Philly, learned from family recipes',
      specialty: 'Griddle mastery and meat caramelization'
    },
    {
      id: 4,
      name: 'Nida Srisawat',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
      alt: 'Thai female professional in casual business attire smiling warmly in modern office setting with natural lighting',
      bio: 'Bangkok local who bridges American food culture with Thai hospitality, ensuring every guest feels welcome.',
      phillyConnection: 'Studied hospitality in Pennsylvania, fell in love with Philly food culture',
      specialty: 'Customer experience and community engagement'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-br from-card via-background to-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-accent text-2xl text-accent">Meet Our Team</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
            Passionate People Behind Every Sandwich
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team combines Philadelphia expertise with Bangkok hospitality. Each member brings unique skills and genuine passion for creating authentic cheesesteak experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-warm transition-smooth hover:shadow-warm-lg hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <AppImage
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-headline text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Expand Indicator */}
                  <div className="flex items-center justify-between text-accent">
                    <span className="text-sm font-semibold">
                      {selectedMember === member.id ? 'Show Less' : 'Learn More'}
                    </span>
                    <Icon
                      name="ChevronDownIcon"
                      size={20}
                      variant="solid"
                      className={`transition-smooth ${selectedMember === member.id ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedMember === member.id && (
                  <div className="px-6 pb-6 space-y-4 border-t border-border pt-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="MapPinIcon" size={16} variant="solid" className="text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                          Philadelphia Connection
                        </span>
                      </div>
                      <p className="text-sm text-foreground">
                        {member.phillyConnection}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="StarIcon" size={16} variant="solid" className="text-accent" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                          Specialty
                        </span>
                      </div>
                      <p className="text-sm text-foreground">
                        {member.specialty}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;