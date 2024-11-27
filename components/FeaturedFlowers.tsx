import { Flower } from '@/lib/types';
import FlowerCard from './FlowerCard';

const featuredFlowers: Flower[] = [
  {
    id: 1,
    name: 'Elegant Rose Bouquet',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800',
    price: 49.99,
  },
  {
    id: 2,
    name: 'Spring Tulip Collection',
    image: 'https://thumbs.dreamstime.com/z/spring-tulip-collection-12259013.jpg',
    price: 39.99,
  },
  {
    id: 3,
    name: 'Wildflower Mix',
    image: 'https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?q=80&w=800',
    price: 34.99,
  },
];

export default function FeaturedFlowers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Flowers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredFlowers.map((flower) => (
            <FlowerCard key={flower.id} flower={flower} />
          ))}
        </div>
      </div>
    </section>
  );
}