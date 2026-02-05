import Icon from '@/components/ui/AppIcon';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  className?: string;
}

const ValuesSection = ({ className = '' }: ValuesSectionProps) => {
  const values: Value[] = [
    {
      icon: 'HeartIcon',
      title: 'Authenticity',
      description: 'We stay true to Philadelphia\'s cheesesteak traditions while respecting Bangkok\'s food culture. No shortcuts, no compromises—just genuine recipes made with care.'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Community',
      description: 'We\'re not just a restaurant—we\'re neighbors. We support local suppliers, participate in community events, and build lasting relationships with our customers.'
    },
    {
      icon: 'SparklesIcon',
      title: 'Quality',
      description: 'Every ingredient is carefully selected, every sandwich is made to order. We believe great food deserves great ingredients and genuine craftsmanship.'
    },
    {
      icon: 'HomeIcon',
      title: 'Hospitality',
      description: 'We combine American warmth with Thai hospitality, creating a welcoming space where everyone feels at home and every visit feels special.'
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Education',
      description: 'We love sharing the story behind our food—teaching customers about Philadelphia\'s sandwich culture and the craft behind authentic cheesesteaks.'
    },
    {
      icon: 'HandThumbUpIcon',
      title: 'Consistency',
      description: 'Whether it\'s your first visit or your hundredth, you can count on the same quality, taste, and service every single time.'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-accent text-2xl text-accent">Our Values</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
            What We Stand For
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These principles guide everything we do—from selecting ingredients to serving customers. They're not just words on a wall; they're the foundation of who we are.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-xl shadow-warm transition-smooth hover:shadow-warm-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transition-smooth group-hover:bg-primary/20 group-hover:scale-110">
                <Icon name={value.icon as any} size={32} variant="solid" className="text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 px-8 py-6 rounded-2xl">
            <p className="font-headline text-xl font-bold text-foreground mb-2">
              Experience Our Values in Every Bite
            </p>
            <p className="text-muted-foreground mb-6">
              Visit us today and taste the difference that genuine care and quality ingredients make.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/menu"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-primary/90 hover:shadow-warm"
              >
                <Icon name="DocumentTextIcon" size={20} variant="solid" />
                <span>View Menu</span>
              </a>
              <a
                href="/visit-contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-accent/90 hover:shadow-warm"
              >
                <Icon name="MapPinIcon" size={20} variant="solid" />
                <span>Visit Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;