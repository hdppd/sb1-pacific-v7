import FeaturedArticles from '@/components/FeaturedArticles';
import LatestArticles from '@/components/LatestArticles';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="content-container py-8">
      <FeaturedArticles />
      <LatestArticles />
      <Newsletter />
    </div>
  );
}