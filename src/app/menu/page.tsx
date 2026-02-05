import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import MenuHero from './components/MenuHero';
import SeasonalBanner from './components/SeasonalBanner';
import MenuInteractive from './components/MenuInteractive';

export const metadata: Metadata = {
  title: 'Menu - Philly Bangkok',
  description: 'Explore our authentic Philadelphia cheesesteak menu featuring classic recipes, seasonal specials, and combo meals. Made with quality ingredients and traditional techniques in Bangkok.',
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MenuHero />
      <SeasonalBanner />
      <MenuInteractive />
    </main>
  );
}