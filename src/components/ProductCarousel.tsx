'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { products } from '@/lib/products-data';
import Image from 'next/image';

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of professional industrial solutions designed to meet the most demanding operational requirements.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product:any) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    <div className="bg-gray-200 relative overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="space-y-2 mb-8">
                        {product.features.slice(0, 3).map((feature:any, featureIndex:string) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                      <Link 
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition-colors font-semibold"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}