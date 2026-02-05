'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const quickLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'Menu', href: '/menu' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Visit & Contact', href: '/visit-contact' },
    { label: 'Gallery', href: '/community-gallery' }
  ];

  const contactInfo = {
    phone: '+66-2-XXX-XXXX',
    email: 'hello@phillybangkok.com',
    address: '123 Sukhumvit Road, Khlong Toei, Bangkok 10110, Thailand'
  };

  const hours = {
    weekdays: 'Monday - Friday: 11:00 AM - 10:00 PM',
    weekends: 'Saturday - Sunday: 11:00 AM - 11:00 PM'
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'GlobeAltIcon', href: '#' },
    { name: 'Instagram', icon: 'CameraIcon', href: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: '#' }
  ];

  if (!isHydrated) {
    return (
      <footer className={`bg-secondary text-secondary-foreground ${className}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-sm opacity-80">© 2026 Philly Bangkok. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`bg-secondary text-secondary-foreground ${className}`}>
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="22" fill="#FFFFFF" opacity="0.1" />
                <path
                  d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8ZM24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M20 18H28C29.105 18 30 18.895 30 20V28C30 29.105 29.105 30 28 30H20C18.895 30 18 29.105 18 28V20C18 18.895 18.895 18 20 18Z"
                  fill="#E8B04B"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-headline text-xl font-bold leading-none">
                  Philly Bangkok
                </span>
                <span className="font-accent text-sm leading-none mt-0.5 opacity-80">
                  Authentic Cheesesteaks
                </span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Bringing Philadelphia's iconic sandwich culture to Bangkok with genuine care and quality ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-smooth inline-flex items-center space-x-2 group"
                  >
                    <Icon
                      name="ChevronRightIcon"
                      size={16}
                      variant="solid"
                      className="opacity-0 group-hover:opacity-100 transition-smooth"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Icon name="PhoneIcon" size={18} variant="solid" className="mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm opacity-80 hover:opacity-100 transition-smooth"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="EnvelopeIcon" size={18} variant="solid" className="mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm opacity-80 hover:opacity-100 transition-smooth"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="MapPinIcon" size={18} variant="solid" className="mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  {contactInfo.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Icon name="ClockIcon" size={18} variant="solid" className="mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-80">
                  <p>{hours.weekdays}</p>
                  <p className="mt-1">{hours.weekends}</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-headline text-sm font-bold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon as any} size={20} variant="solid" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © {currentYear} Philly Bangkok. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-smooth">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-smooth">
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