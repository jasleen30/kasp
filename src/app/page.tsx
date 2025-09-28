import Hero from '@/components/Hero';
import ProductCarousel from '@/components/ProductCarousel';
import Features from '@/components/Features';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCarousel />
      <Features />
    </div>
  );
}