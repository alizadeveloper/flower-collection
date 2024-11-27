import { Flower } from '@/lib/types';

interface FlowerCardProps {
  flower: Flower;
}

export default function FlowerCard({ flower }: FlowerCardProps) {
  return (
    <div className="flower-card bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={flower.image}
        alt={flower.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{flower.name}</h3>
        <p className="text-gray-600">${flower.price.toFixed(2)}</p>
        <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}