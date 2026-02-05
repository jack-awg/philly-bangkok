import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  alt: string;
  website?: string;
  collaboration: string;
}

interface PartnershipShowcaseProps {
  partners: Partner[];
}

export default function PartnershipShowcase({ partners }: PartnershipShowcaseProps) {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
          Our Community Partners
        </h2>
        <p className="text-lg text-muted-foreground">
          Building Bangkok's food community together through authentic partnerships and shared values
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-card rounded-lg border border-border overflow-hidden transition-smooth hover:shadow-warm-lg group"
          >
            <div className="aspect-video bg-muted flex items-center justify-center p-8">
              <AppImage
                src={partner.logo}
                alt={partner.alt}
                className="w-full h-full object-contain transition-smooth group-hover:scale-105"
              />
            </div>
            
            <div className="p-6 space-y-3">
              <div>
                <h3 className="text-xl font-headline font-bold text-foreground mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-primary font-medium">{partner.category}</p>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {partner.description}
              </p>
              
              <div className="pt-3 border-t border-border">
                <div className="flex items-start space-x-2">
                  <Icon name="HandshakeIcon" size={18} variant="outline" className="text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">
                    <span className="font-medium">Partnership:</span> {partner.collaboration}
                  </p>
                </div>
              </div>

              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth text-sm font-medium"
                >
                  <span>Visit Website</span>
                  <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}