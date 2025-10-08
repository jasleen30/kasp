import Link from 'next/link';
import { ArrowLeft, Check, Star, Mail, Phone } from 'lucide-react';
import { Product } from '@/lib/products-data';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/products" 
            className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-6 rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Interested in This Product?</h3>
              <p className="text-pink-100 mb-4">
                Contact our team for detailed specifications, pricing, and customization options.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="mailto:harneet@kasp.tech" 
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Quote</span>
                </a>
                {/* <a 
                  href="tel:9990131515" 
                  className="bg-white text-pink-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Features */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="space-y-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-1">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Features */}
          {product.optionalFeatures && product.optionalFeatures.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Optional Features</h2>
              <div className="space-y-4">
                {product.optionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-pink-100 p-1 rounded-full flex-shrink-0 mt-1">
                      <Star className="h-3 w-3 text-pink-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                <p className="text-pink-800 text-sm">
                  <strong>Note:</strong> Optional features can be customized based on your specific requirements. Contact us for detailed pricing and availability.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}