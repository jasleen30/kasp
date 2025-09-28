import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { products } from '@/lib/products-data';

export default function ProductPage({ params }: any) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}