import Icon from '@/components/ui/AppIcon';

interface ParkingOption {
  id: string;
  name: string;
  type: 'Street' | 'Building' | 'Public';
  distance: string;
  capacity: string;
  rate: string;
  availability: 'High' | 'Medium' | 'Low';
  details: string;
}

interface ParkingInfoProps {
  className?: string;
}

const ParkingInfo = ({ className = '' }: ParkingInfoProps) => {
  const parkingOptions: ParkingOption[] = [
    {
      id: '1',
      name: 'Street Parking (Sukhumvit)',
      type: 'Street',
      distance: 'Adjacent',
      capacity: '8-10 spots',
      rate: '฿40/hour',
      availability: 'Medium',
      details: 'Metered parking directly in front of restaurant. Limited availability during lunch hours.'
    },
    {
      id: '2',
      name: 'Terminal 21 Parking',
      type: 'Building',
      distance: '300m',
      capacity: '500+ spots',
      rate: '฿25/hour',
      availability: 'High',
      details: 'Large covered parking facility. 4-minute walk to restaurant. Validation available with ฿500+ purchase.'
    },
    {
      id: '3',
      name: 'Exchange Tower Parking',
      type: 'Building',
      distance: '250m',
      capacity: '200+ spots',
      rate: '฿30/hour',
      availability: 'High',
      details: 'Secure underground parking. 3-minute walk. Open 24/7.'
    },
    {
      id: '4',
      name: 'Sukhumvit Plaza Parking',
      type: 'Public',
      distance: '400m',
      capacity: '150+ spots',
      rate: '฿20/hour',
      availability: 'Medium',
      details: 'Budget-friendly option. 5-minute walk. Covered parking available.'
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'High':
        return 'bg-success/10 text-success border-success/20';
      case 'Medium':
        return 'bg-warning/10 text-warning-foreground border-warning/20';
      case 'Low':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'High':
        return 'CheckCircleIcon';
      case 'Medium':
        return 'ExclamationCircleIcon';
      case 'Low':
        return 'XCircleIcon';
      default:
        return 'InformationCircleIcon';
    }
  };

  return (
    <div className={`bg-card rounded-lg shadow-warm p-6 ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
          <Icon name="TruckIcon" size={24} variant="solid" className="text-secondary" />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-semibold text-foreground">
            Parking Options
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            Convenient parking near the restaurant
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {parkingOptions.map((option) => (
          <div
            key={option.id}
            className="p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-smooth"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-headline text-lg font-semibold text-foreground mb-1">
                  {option.name}
                </h4>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 rounded text-xs font-semibold bg-muted text-muted-foreground">
                    {option.type}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold border ${getAvailabilityColor(option.availability)}`}>
                    <Icon name={getAvailabilityIcon(option.availability) as any} size={12} variant="solid" className="inline mr-1" />
                    {option.availability} Availability
                  </span>
                </div>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground mb-3">
              {option.details}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Icon name="MapPinIcon" size={16} variant="outline" className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">Distance</p>
                  <p className="font-body text-sm font-semibold text-foreground">{option.distance}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Square3Stack3DIcon" size={16} variant="outline" className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">Capacity</p>
                  <p className="font-body text-sm font-semibold text-foreground">{option.capacity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CurrencyDollarIcon" size={16} variant="outline" className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-body text-xs text-muted-foreground">Rate</p>
                  <p className="font-body text-sm font-semibold text-foreground">{option.rate}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="LightBulbIcon" size={20} variant="solid" className="text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-body text-sm text-foreground">
              <strong>Parking Tip:</strong> For the best availability, we recommend Terminal 21 or Exchange Tower parking during peak lunch (12-2 PM) and dinner (6-8 PM) hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingInfo;