import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  alt: string;
  rating: number;
  review: string;
  date: string;
}

const CustomerTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Food Blogger",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      alt: "Professional woman with brown hair smiling at camera in casual attire",
      rating: 5,
      review: "Finally, an authentic Philly cheesesteak in Bangkok! The ribeye is perfectly seasoned, the cheese is melted just right, and that Amoroso roll is the real deal. This place brings me right back to Philadelphia.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Regular Customer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      alt: "Asian man with glasses smiling in business casual shirt",
      rating: 5,
      review: "I've been coming here every week since they opened. The quality is consistently excellent, and the staff genuinely cares about getting every order perfect. The loaded fries are addictive!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Expat from USA",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      alt: "Hispanic woman with long dark hair smiling warmly at camera",
      rating: 5,
      review: "As someone from Philadelphia, I'm incredibly picky about cheesesteaks. Philly Bangkok nails it—from the meat quality to the cooking technique. It's like having a piece of home in Bangkok.",
      date: "3 weeks ago"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Customers", icon: "UserGroupIcon" },
    { value: "4.8", label: "Average Rating", icon: "StarIcon" },
    { value: "1000+", label: "Cheesesteaks Served", icon: "FireIcon" },
    { value: "100%", label: "Fresh Daily", icon: "CheckBadgeIcon" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Icon name="ChatBubbleLeftEllipsisIcon" size={20} variant="outline" className="text-success" />
            <span className="font-headline text-sm font-semibold text-success">
              What Our Customers Say
            </span>
          </div>
          
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Reviews, Real People
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our Bangkok community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-warm hover:shadow-warm-lg transition-smooth"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon 
                  name={stat.icon as any} 
                  size={24} 
                  variant="solid" 
                  className="text-primary"
                />
              </div>
              <div className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-smooth"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="StarIcon"
                    size={20}
                    variant="solid"
                    className="text-accent"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-border">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <AppImage
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-headline font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>

                <div className="text-xs text-muted-foreground">
                  {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join our growing community of satisfied customers
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-card text-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-muted hover:shadow-warm"
          >
            <Icon name="StarIcon" size={20} variant="outline" />
            <span>Leave a Review</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;