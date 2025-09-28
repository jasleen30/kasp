import { Shield, Wrench, Leaf, Clock, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'CPCB Compliant',
    description: 'All our equipment meets environmental compliance standards for sustainable operations.'
  },
  {
    icon: Wrench,
    title: 'Customizable Solutions',
    description: 'Fully customizable equipment tailored to your specific site requirements and operational needs.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Options',
    description: 'Solar and hybrid power solutions that reduce carbon footprint while maintaining performance.'
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    description: 'Designed for continuous operation with extended service intervals and reliable performance.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'International and Indian brand components ensuring durability and superior performance.'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Professional after-sales service and technical support for optimal equipment performance.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose KASP Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver industrial-grade equipment with advanced features and reliable performance for your critical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Contact our team to discuss your specific requirements and get a customized solution for your industrial needs.
            </p>
            <a 
              href="mailto:harneet@kasp.tech" 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}