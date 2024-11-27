import { Flower, Heart, Clock, Truck } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
              <Flower size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fresh Flowers</h3>
            <p className="text-gray-600">
              Daily fresh flowers sourced from the best growers
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
              <Heart size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Arrangements</h3>
            <p className="text-gray-600">
              Personalized designs for your special occasions
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
              <Clock size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Same Day Delivery</h3>
            <p className="text-gray-600">
              Quick delivery for your urgent flower needs
            </p>
          </div>
          <div className="text-center">
            <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
              <Truck size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nationwide Shipping</h3>
            <p className="text-gray-600">
              Reliable delivery across the country
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}