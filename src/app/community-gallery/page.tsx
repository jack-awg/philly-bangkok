import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CommunityGalleryInteractive from './components/CommunityGalleryInteractive';

export const metadata: Metadata = {
  title: 'Community Gallery - Philly Bangkok',
  description: 'Explore authentic customer photos, local partnerships, neighborhood events, and social media moments from our Philly Bangkok community. Join our family and share your cheesesteak experience.',
};

interface Photo {
  id: number;
  image: string;
  alt: string;
  author: string;
  instagram?: string;
  caption: string;
  likes: number;
  date: string;
  category: 'food' | 'atmosphere' | 'community' | 'events';
}

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

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'tasting' | 'community' | 'special' | 'partnership';
  spotsAvailable: number;
  totalSpots: number;
}

interface SocialPost {
  id: number;
  platform: 'instagram' | 'facebook';
  author: string;
  handle: string;
  avatar: string;
  avatarAlt: string;
  content: string;
  image?: string;
  imageAlt?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  hashtags: string[];
}

const mockPhotos: Photo[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg',
    alt: 'Close-up of authentic Philly cheesesteak with melted cheese and caramelized onions on fresh hoagie roll',
    author: 'Sarah Chen',
    instagram: 'sarahfoodie_bkk',
    caption: 'Best cheesesteak in Bangkok! The authentic taste brought me back to Philadelphia. Love the melted cheese and perfectly grilled onions! 🧀',
    likes: 342,
    date: 'Jan 20, 2026',
    category: 'food'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg',
    alt: 'Group of diverse friends laughing and enjoying cheesesteaks together at restaurant table',
    author: 'Mike Johnson',
    instagram: 'mikeeats',
    caption: 'Amazing atmosphere and even better food! Perfect spot for weekend hangouts with friends. The team here makes you feel like family.',
    likes: 289,
    date: 'Jan 18, 2026',
    category: 'community'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    alt: 'Golden crispy french fries served in red basket with ketchup and mayo dipping sauces',
    author: 'Nattaya P.',
    instagram: 'nattaya_foodie',
    caption: 'Those fries though! Crispy on the outside, fluffy inside. Perfect companion to my cheesesteak. Can\'t get enough! 🍟',
    likes: 256,
    date: 'Jan 17, 2026',
    category: 'food'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    alt: 'Warm interior of restaurant with wooden tables, exposed brick walls, and vintage American decor',
    author: 'David Lee',
    caption: 'Love the cozy American diner vibe! Feels like stepping into a piece of Philadelphia right here in Bangkok. Great music too!',
    likes: 198,
    date: 'Jan 15, 2026',
    category: 'atmosphere'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
    alt: 'Hands holding freshly made cheesesteak sandwich wrapped in paper with steam rising',
    author: 'Emma Wilson',
    instagram: 'emmawanders',
    caption: 'That first bite moment! Still warm, cheese perfectly melted. This is what authentic American comfort food is all about. Worth every baht!',
    likes: 412,
    date: 'Jan 14, 2026',
    category: 'food'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg',
    alt: 'Community event with people gathered around food counter watching chef prepare cheesesteaks',
    author: 'Philly Bangkok',
    caption: 'Thank you to everyone who joined our Community Tasting Night! Your energy and love for good food makes our restaurant special. See you at the next event! 🎉',
    likes: 567,
    date: 'Jan 12, 2026',
    category: 'events'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
    alt: 'Overhead view of complete meal with cheesesteak, fries, coleslaw, and craft soda on wooden tray',
    author: 'James Park',
    instagram: 'jameseatsbkk',
    caption: 'The full experience! Everything on point - from the sandwich to the sides. This is my new favorite lunch spot in Sukhumvit.',
    likes: 334,
    date: 'Jan 10, 2026',
    category: 'food'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg',
    alt: 'Smiling chef in apron preparing cheesesteak on hot griddle with spatula',
    author: 'Lisa Martinez',
    caption: 'The passion these guys put into every sandwich shows! Watching them work is like watching artists. No wonder it tastes so good!',
    likes: 278,
    date: 'Jan 8, 2026',
    category: 'atmosphere'
  }
];

const mockPartners: Partner[] = [
  {
    id: 1,
    name: 'Bangkok Artisan Bakery',
    category: 'Local Supplier',
    description: 'Providing our authentic Amoroso-style hoagie rolls, baked fresh daily using traditional Philadelphia techniques adapted for Bangkok\'s climate.',
    logo: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    alt: 'Artisan bread loaves and rolls displayed on rustic wooden shelf in bakery',
    website: 'https://bangkokartisanbakery.com',
    collaboration: 'Exclusive hoagie roll supplier since 2024'
  },
  {
    id: 2,
    name: 'Sukhumvit Farmers Market',
    category: 'Fresh Produce Partner',
    description: 'Sourcing the freshest onions, peppers, and vegetables from local Thai farmers who share our commitment to quality and sustainability.',
    logo: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
    alt: 'Fresh colorful vegetables and produce arranged in wooden crates at farmers market',
    collaboration: 'Weekly fresh produce delivery partnership'
  },
  {
    id: 3,
    name: 'Thai-American Chamber',
    category: 'Community Organization',
    description: 'Collaborating to bridge American food culture with Bangkok\'s vibrant dining scene through cultural exchange events and business networking.',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    alt: 'Professional business meeting with diverse group around conference table with American and Thai flags',
    website: 'https://thaiam-chamber.org',
    collaboration: 'Monthly cultural food events and business mixers'
  },
  {
    id: 4,
    name: 'Craft Soda Bangkok',
    category: 'Beverage Partner',
    description: 'Creating unique craft sodas that perfectly complement our cheesesteaks, using natural ingredients and innovative Thai-American fusion flavors.',
    logo: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg',
    alt: 'Colorful craft soda bottles with creative labels arranged on wooden bar counter',
    collaboration: 'Exclusive beverage menu collaboration'
  },
  {
    id: 5,
    name: 'Bangkok Food Bloggers',
    category: 'Media Partnership',
    description: 'Working with Bangkok\'s top food influencers to share authentic stories about American comfort food culture and our community-focused approach.',
    logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    alt: 'Food blogger photographing gourmet dish with professional camera and smartphone',
    collaboration: 'Monthly featured reviews and social media campaigns'
  },
  {
    id: 6,
    name: 'Neighborhood Watch BKK',
    category: 'Community Safety',
    description: 'Partnering to keep our Sukhumvit neighborhood safe and welcoming for residents, visitors, and local businesses through community engagement.',
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    alt: 'Community volunteers in matching shirts standing together in urban neighborhood',
    collaboration: 'Quarterly neighborhood safety and cleanup events'
  }
];

const mockEvents: Event[] = [
  {
    id: 1,
    title: 'Cheesesteak Tasting Night',
    date: 'Feb 15, 2026',
    time: '6:00 PM - 9:00 PM',
    location: 'Philly Bangkok Main Location',
    description: 'Join us for an exclusive tasting experience featuring our classic cheesesteaks alongside new experimental flavors. Meet the team, learn about our ingredients, and enjoy special pricing on all menu items.',
    category: 'tasting',
    spotsAvailable: 12,
    totalSpots: 30
  },
  {
    id: 2,
    title: 'Community Cleanup Day',
    date: 'Feb 22, 2026',
    time: '8:00 AM - 12:00 PM',
    location: 'Sukhumvit Neighborhood',
    description: 'Help us give back to our community! Join our team and neighbors for a morning of neighborhood beautification. Free lunch for all volunteers featuring our famous cheesesteaks.',
    category: 'community',
    spotsAvailable: 25,
    totalSpots: 40
  },
  {
    id: 3,
    title: 'Thai-American Food Festival',
    date: 'Mar 8, 2026',
    time: '11:00 AM - 8:00 PM',
    location: 'Benjakitti Park',
    description: 'Celebrating the fusion of Thai and American food cultures! We\'ll be serving special menu items alongside other amazing local vendors. Live music, cooking demos, and family activities all day.',
    category: 'special',
    spotsAvailable: 0,
    totalSpots: 100
  },
  {
    id: 4,
    title: 'Local Supplier Showcase',
    date: 'Mar 15, 2026',
    time: '5:00 PM - 8:00 PM',
    location: 'Philly Bangkok Main Location',
    description: 'Meet the local farmers, bakers, and artisans who make our food possible. Sample ingredients, learn about sustainable sourcing, and discover the stories behind your favorite cheesesteak.',
    category: 'partnership',
    spotsAvailable: 18,
    totalSpots: 25
  },
  {
    id: 5,
    title: 'Philadelphia Food History Talk',
    date: 'Mar 29, 2026',
    time: '7:00 PM - 9:00 PM',
    location: 'Philly Bangkok Main Location',
    description: 'Dive deep into the history of the Philly cheesesteak with our founder. Learn about the sandwich\'s working-class origins, cultural significance, and how we\'re honoring that tradition in Bangkok.',
    category: 'tasting',
    spotsAvailable: 3,
    totalSpots: 20
  }
];

const mockSocialPosts: SocialPost[] = [
  {
    id: 1,
    platform: 'instagram',
    author: 'Bangkok Foodie',
    handle: 'bkkfoodie',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    avatarAlt: 'Profile photo of young Asian woman with long black hair smiling at camera',
    content: 'Finally found authentic Philly cheesesteaks in Bangkok! The cheese pull is REAL and the meat is perfectly seasoned. This is my new obsession! 🤤',
    image: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg',
    imageAlt: 'Overhead view of complete cheesesteak meal with fries and drink on wooden tray',
    likes: 1247,
    comments: 89,
    shares: 34,
    timestamp: '2 hours ago',
    hashtags: ['PhillyBangkok', 'BangkokEats', 'Cheesesteak', 'FoodPorn']
  },
  {
    id: 2,
    platform: 'facebook',
    author: 'Mark Thompson',
    handle: 'markthompson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    avatarAlt: 'Profile photo of middle-aged Caucasian man with beard wearing casual shirt',
    content: 'As someone from Philadelphia, I can confirm this is the real deal! The hoagie roll, the cheese, the technique - everything is spot on. Highly recommend to anyone missing home or wanting to try authentic American comfort food.',
    likes: 892,
    comments: 67,
    shares: 28,
    timestamp: '5 hours ago',
    hashtags: ['PhillyBangkok', 'AuthenticFood', 'BangkokRestaurants']
  },
  {
    id: 3,
    platform: 'instagram',
    author: 'Siriwan K.',
    handle: 'siri_foodadventures',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    avatarAlt: 'Profile photo of young Thai woman with short hair and bright smile',
    content: 'Brought my American friends here and they said it tastes just like home! The atmosphere is so welcoming and the staff really knows their stuff. Can\'t wait to come back! 🇺🇸🇹🇭',
    image: 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg',
    imageAlt: 'Group of diverse friends laughing and enjoying meal together at restaurant',
    likes: 2156,
    comments: 143,
    shares: 67,
    timestamp: '1 day ago',
    hashtags: ['PhillyBangkok', 'BangkokFood', 'FoodieLife', 'AmericanFood']
  },
  {
    id: 4,
    platform: 'instagram',
    author: 'Chef\'s Table BKK',
    handle: 'chefstablebkk',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    avatarAlt: 'Profile photo of professional chef in white uniform with arms crossed',
    content: 'Respect to the team at Philly Bangkok for staying true to tradition while adapting to local tastes. The quality of ingredients and attention to detail is impressive. This is how you do authentic food right! 👨‍🍳',
    likes: 3421,
    comments: 234,
    shares: 156,
    timestamp: '2 days ago',
    hashtags: ['PhillyBangkok', 'ChefLife', 'AuthenticCuisine', 'BangkokDining']
  }
];

export default function CommunityGalleryPage() {
  return (
    <>
      <Header />
      <CommunityGalleryInteractive
        photos={mockPhotos}
        partners={mockPartners}
        events={mockEvents}
        socialPosts={mockSocialPosts}
      />
    </>
  );
}