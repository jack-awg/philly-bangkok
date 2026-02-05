import Icon from '@/components/ui/AppIcon';

interface TransportOption {
  id: string;
  type: 'BTS' | 'MRT' | 'Bus' | 'Taxi';
  name: string;
  distance: string;
  walkTime: string;
  details: string;
  icon: string;
}

interface TransportInfoProps {
  className?: string;
}

const TransportInfo = ({ className = '' }: TransportInfoProps) => {
  const transportOptions: TransportOption[] = [
    {
      id: '1',
      type: 'BTS',
      name: 'Asok Station',
      distance: '400m',
      walkTime: '5 min',
      details: 'Exit 3, walk south on Sukhumvit Road',
      icon: 'TrainIcon'
    },
    {
      id: '2',
      type: 'MRT',
      name: 'Sukhumvit Station',
      distance: '350m',
      walkTime: '4 min',
      details: 'Exit 2, turn right and walk 350 meters',
      icon: 'MapIcon'
    },
    {
      id: '3',
      type: 'Bus',
      name: 'Bus Routes 2, 25, 38',
      distance: '50m',
      walkTime: '1 min',
      details: 'Stop directly in front of restaurant',
      icon: 'TruckIcon'
    },
    {
      id: '4',
      type: 'Taxi',
      name: 'Grab / Bolt',
      distance: 'Direct',
      walkTime: 'Door-to-door',
      details: 'Use "Philly Bangkok Restaurant" as destination',
      icon: 'MapPinIcon'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'BTS':
        return 'bg-success/10 text-success';
      case 'MRT':
        return 'bg-primary/10 text-primary';
      case 'Bus':
        return 'bg-accent/10 text-accent-foreground';
      case 'Taxi':
        return 'bg-secondary/10 text-secondary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className={`bg-card rounded-lg shadow-warm p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="MapIcon" size={24} variant="solid" className="text-primary" />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-semibold text-foreground">
            How to Get Here
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Multiple convenient transport options
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {transportOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-start space-x-4 p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-smooth"
          >
            <div className="flex-shrink-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(option.type)}`}>
                <Icon name={option.icon as any} size={20} variant="outline" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-headline text-lg font-semibold text-foreground">
                  {option.name}
                </h4>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(option.type)}`}>
                  {option.type}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-2">
                {option.details}
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1 text-foreground">
                  <Icon name="MapPinIcon" size={16} variant="outline" className="text-primary" />
                  <span className="font-body">{option.distance}</span>
                </div>
                <div className="flex items-center space-x-1 text-foreground">
                  <Icon name="ClockIcon" size={16} variant="outline" className="text-primary" />
                  <span className="font-body">{option.walkTime} walk</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="InformationCircleIcon" size={20} variant="solid" className="text-accent-foreground mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-foreground">
              <strong>Pro Tip:</strong> During rush hours (8-10 AM, 5-8 PM), we recommend using BTS or MRT for faster travel times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportInfo;