import Link from 'next/link';
import { ArrowRight, Truck, Lightbulb, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-pink-200 via-red-100 to-orange-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Industrial Solutions That
              <span className="text-orange-300"> Move Forward</span>
            </h1>
            <p className="text-xl text-black-100 mb-8 leading-relaxed">
              Professional mobile maintenance service vans and illumination towers designed for the demands of modern industrial operations. Reducing carbon footprints while maximizing efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                className="bg-orange-300 text-black px-8 py-4 rounded-lg hover:bg-orange-400 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-pink-900 transition-all font-semibold text-lg"
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-300 p-3 rounded-lg">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Mobile Maintenance</h3>
              </div>
              <p className="">
                Fully equipped service vans with advanced tooling and pneumatic systems for on-site maintenance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-300 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Illumination Towers</h3>
              </div>
              <p className="">
                Professional lighting solutions with LED technology and multiple power source options.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-300 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Eco-Friendly Options</h3>
              </div>
              <p className="">
                CPCB compliant solutions with solar and hybrid power options for reduced environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
