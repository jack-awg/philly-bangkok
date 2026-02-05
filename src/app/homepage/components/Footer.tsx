import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'Menu', href: '/menu' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Visit & Contact', href: '/visit-contact' },
    { label: 'Gallery', href: '/community-gallery' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: 'https://facebook.com/phillybangkok' },
    { name: 'Instagram', icon: 'CameraIcon', href: 'https://instagram.com/phillybangkok' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: 'https://twitter.com/phillybangkok' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="22" fill="#E8B04B" opacity="0.2" />
                <path
                  d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8ZM24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12Z"
                  fill="#E8B04B"
                />
                <path
                  d="M20 18H28C29.105 18 30 18.895 30 20V28C30 29.105 29.105 30 28 30H20C18.895 30 18 29.105 18 28V20C18 18.895 18.895 18 20 18Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M22 22H26V26H22V22Z"
                  fill="#E8B04B"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-headline text-xl font-bold leading-none">
                  Philly Bangkok
                </span>
                <span className="font-accent text-xs leading-none mt-0.5">
                  Authentic Cheesesteaks
                </span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Bringing authentic Philadelphia cheesesteak tradition to the heart of Bangkok since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Icon name="MapPinIcon" size={18} variant="outline" className="mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  123 Sukhumvit Soi 23<br />
                  Bangkok 10110, Thailand
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="PhoneIcon" size={18} variant="outline" className="flex-shrink-0" />
                <a
                  href="tel:+6621234567"
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-smooth"
                >
                  +66 2 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="EnvelopeIcon" size={18} variant="outline" className="flex-shrink-0" />
                <a
                  href="mailto:hello@phillybangkok.com"
                  className="text-sm text-secondary-foreground/80 hover:text-accent transition-smooth"
                >
                  hello@phillybangkok.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Hours</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary-foreground/80">Mon - Thu</span>
                <span className="font-semibold">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary-foreground/80">Fri - Sat</span>
                <span className="font-semibold">11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary-foreground/80">Sunday</span>
                <span className="font-semibold">11:00 AM - 10:00 PM</span>
              </div>
            </div>

            <h3 className="font-headline text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60 text-center md:text-left">
              © {currentYear} Philly Bangkok. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-secondary-foreground/60 hover:text-accent transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-secondary-foreground/60 hover:text-accent transition-smooth"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;