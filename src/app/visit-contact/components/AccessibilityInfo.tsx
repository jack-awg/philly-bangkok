import Icon from '@/components/ui/AppIcon';

interface AccessibilityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  available: boolean;
}

interface AccessibilityInfoProps {
  className?: string;
}

const AccessibilityInfo = ({ className = '' }: AccessibilityInfoProps) => {
  const accessibilityFeatures: AccessibilityFeature[] = [
    {
      id: '1',
      title: 'Wheelchair Access',
      description: 'Ground floor entrance with ramp access. Wide doorways and spacious interior.',
      icon: 'UserIcon',
      available: true
    },
    {
      id: '2',
      title: 'Accessible Restrooms',
      description: 'Wheelchair-accessible restroom with grab bars and adequate space.',
      icon: 'HomeIcon',
      available: true
    },
    {
      id: '3',
      title: 'Accessible Parking',
      description: 'Designated accessible parking spots available in nearby Terminal 21 parking.',
      icon: 'TruckIcon',
      available: true
    },
    {
      id: '4',
      title: 'Service Animals',
      description: 'Service animals are welcome in our restaurant at all times.',
      icon: 'HeartIcon',
      available: true
    },
    {
      id: '5',
      title: 'Dietary Accommodations',
      description: 'Menu modifications available for dietary restrictions and allergies.',
      icon: 'DocumentTextIcon',
      available: true
    },
    {
      id: '6',
      title: 'Assistance Available',
      description: 'Staff trained to assist customers with special needs. Please let us know how we can help.',
      icon: 'UserGroupIcon',
      available: true
    }
  ];

  return (
    <div className={`bg-card rounded-lg shadow-warm p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
          <Icon name="HeartIcon" size={24} variant="solid" className="text-success" />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-semibold text-foreground">
            Accessibility
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            We welcome everyone to Philly Bangkok
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accessibilityFeatures.map((feature) => (
          <div
            key={feature.id}
            className="p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-smooth"
          >
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                feature.available ? 'bg-success/10' : 'bg-muted'
              }`}>
                <Icon
                  name={feature.icon as any}
                  size={20}
                  variant="solid"
                  className={feature.available ? 'text-success' : 'text-muted-foreground'}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-headline text-base font-semibold text-foreground">
                    {feature.title}
                  </h4>
                  {feature.available && (
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success" />
                  )}
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="InformationCircleIcon" size={20} variant="solid" className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-foreground mb-2">
              <strong>Need Special Assistance?</strong>
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Please call us at <a href="tel:+6621234567" className="text-primary font-semibold hover:underline">+66-2-123-4567</a> before your visit so we can ensure everything is prepared for your comfort. We're committed to making your dining experience enjoyable and accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityInfo;