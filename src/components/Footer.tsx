import Link from 'next/link';
import { Truck, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-pink-400" />
              <span className="text-2xl font-bold">KASP</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of industrial solutions including mobile maintenance service vans and professional illumination towers for construction and industrial applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-pink-400" />
                <span className="text-sm text-gray-300">Office no 818, Eros Corporate Tower, Sector-2, IMT Manesar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-pink-400" />
                <a href="tel:9990131515" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
                  +91 9990131515
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-pink-400" />
                <a href="mailto:harneet@kasp.tech" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
                  harneet@kasp.tech
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/service-vans" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Service Vans
                </Link>
              </li>
              <li>
                <Link href="/products/hybrid-towers" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Hybrid Towers
                </Link>
              </li>
              <li>
                <Link href="/products/solar-towers" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Solar Towers
                </Link>
              </li>
              <li>
                <Link href="/products/diesel-towers" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Diesel Towers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 KASP Industrial Solutions. All rights reserved. | www.kasp.co.in
          </p>
        </div>
      </div>
    </footer>
  );
}