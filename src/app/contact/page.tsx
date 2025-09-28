import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for inquiries about our industrial solutions and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Address</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Office no 818, Eros Corporate Tower,<br />
                  Sector-2, IMT Manesar
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-pink-600" />
                  <a href="mailto:harneet@kasp.tech" className="text-pink-600 hover:text-pink-800 transition-colors">
                    harneet@kasp.tech
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-pink-600" />
                  <a href="tel:9990131515" className="text-pink-600 hover:text-pink-800 transition-colors">
                    +91 9990131515
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-pink-600" />
                  <a href="https://www.kasp.co.in" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                    www.kasp.co.in
                  </a>
                </div>
              </div>
            </div>

           
        </div>
         <div className="bg-pink-600 rounded-xl shadow-lg p-8 text-white mt-5">
              <h3 className="text-xl font-semibold mb-4">Why Choose KASP?</h3>
              <ul className="space-y-2 text-pink-100">
                <li>• Industry-leading mobile maintenance solutions</li>
                <li>• Advanced illumination technology</li>
                <li>• Customizable equipment for specific needs</li>
                <li>• Professional after-sales support</li>
                <li>• CPCB compliant and eco-friendly options</li>
              </ul>
            </div>
      </div>
    </div>
  );
}