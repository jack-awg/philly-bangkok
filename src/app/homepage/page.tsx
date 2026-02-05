import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Philly Bangkok - Authentic Philadelphia Cheesesteaks in Bangkok',
  description: 'Experience authentic Philly cheesesteaks in Bangkok. Premium ribeye, melted cheese, and fresh Amoroso rolls. Open daily 11 AM - 10 PM at Sukhumvit Soi 23.',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <HomepageInteractive />
    </>
  );
}