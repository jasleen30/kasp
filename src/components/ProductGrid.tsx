import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/lib/products-data';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {product.description}
            </p>
            <div className="space-y-2 mb-6">
              {product.features.slice(0, 2).map((feature:any, index:number) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <Link 
              href={`/products/${product.slug}`}
              className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition-colors font-semibold"
            >
              <span>View Details</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}