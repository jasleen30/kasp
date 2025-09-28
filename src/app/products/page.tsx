import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/products-data';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of industrial solutions designed for mobile maintenance and professional illumination needs.
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}