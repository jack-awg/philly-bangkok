'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'Menu', href: '/menu', icon: 'DocumentTextIcon' },
    { label: 'About Us', href: '/about-us', icon: 'InformationCircleIcon' },
    { label: 'Visit & Contact', href: '/visit-contact', icon: 'MapPinIcon' },
    { label: 'Gallery', href: '/community-gallery', icon: 'PhotoIcon' },
  ];

  const phoneNumber = siteConfig.contact.phone;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const isActivePath = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-card shadow-warm' : 'bg-background'
        } ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/homepage"
              className="flex items-center space-x-2 transition-smooth hover:opacity-80"
              onClick={handleNavClick}
            >
              <div className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-smooth hover:scale-105"
                >
                  <circle cx="24" cy="24" r="22" fill="#D4822A" opacity="0.1" />
                  <path
                    d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8ZM24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12Z"
                    fill="#D4822A"
                  />
                  <path
                    d="M20 18H28C29.105 18 30 18.895 30 20V28C30 29.105 29.105 30 28 30H20C18.895 30 18 29.105 18 28V20C18 18.895 18.895 18 20 18Z"
                    fill="#8B4513"
                  />
                  <path
                    d="M22 22H26V26H22V22Z"
                    fill="#E8B04B"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-2xl font-bold text-primary leading-none">
                  Philly Bangkok
                </span>
                <span className="font-accent text-sm text-secondary leading-none mt-0.5">
                  Authentic Cheesesteaks
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-md font-headline text-base transition-smooth ${
                    isActivePath(item.href)
                      ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={handleCallClick}
                className="flex items-center space-x-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-md font-headline font-semibold transition-smooth hover:bg-accent/90 hover:shadow-warm"
              >
                <Icon name="PhoneIcon" size={20} variant="solid" />
                <span>Call Now</span>
              </button>
              <Link
                href="/visit-contact"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-headline font-semibold transition-smooth hover:bg-primary/90 hover:shadow-warm"
              >
                Visit Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={28}
                variant="outline"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background z-40 lg:hidden"
          style={{ top: '80px' }}
        >
          <nav className="flex flex-col h-full overflow-y-auto">
            <div className="flex-1 px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-headline text-lg transition-smooth ${
                    isActivePath(item.href)
                      ? 'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.icon && (
                    <Icon
                      name={item.icon as any}
                      size={24}
                      variant="outline"
                      className={isActivePath(item.href) ? 'text-primary' : 'text-muted-foreground'}
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA Section */}
            <div className="border-t border-border px-4 py-6 space-y-3 bg-card">
              <button
                onClick={() => {
                  handleCallClick();
                  handleNavClick();
                }}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-accent/90 active:scale-95"
              >
                <Icon name="PhoneIcon" size={20} variant="solid" />
                <span>Call Now</span>
              </button>
              <Link
                href="/visit-contact"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground rounded-lg font-headline font-semibold transition-smooth hover:bg-primary/90 active:scale-95"
              >
                Visit Us Today
              </Link>
              <div className="text-center pt-2">
                <p className="text-sm text-muted-foreground">Open Daily</p>
                <p className="text-base font-headline font-semibold text-foreground">
                  11:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;