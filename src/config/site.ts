/**
 * Site-wide configuration
 * Update these values with actual business information
 */

export const siteConfig = {
  name: 'Philly Bangkok',
  tagline: 'Authentic Cheesesteaks',

  contact: {
    // TODO: Replace with actual phone number
    phone: '+66-2-123-4567',
    phoneDisplay: '02-123-4567',
    email: 'hello@phillybangkok.com',
  },

  address: {
    street: '123 Sukhumvit Road',
    district: 'Khlong Toei',
    city: 'Bangkok',
    postalCode: '10110',
    country: 'Thailand',
  },

  hours: {
    weekday: '11:00 AM - 10:00 PM',
    weekend: '11:00 AM - 11:00 PM',
    closed: null, // e.g., 'Monday' if closed on Mondays
  },

  social: {
    instagram: 'https://instagram.com/phillybangkok',
    facebook: 'https://facebook.com/phillybangkok',
    line: '@phillybangkok',
  },
} as const;

export type SiteConfig = typeof siteConfig;
