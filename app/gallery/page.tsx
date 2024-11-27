import { Flower } from '@/lib/types';
import FlowerCard from '@/components/FlowerCard';

const flowers: Flower[] = [
  {
    id: 1,
    name: 'Red Roses',
    image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=800',
    price: 29.99,
  },
  {
    id: 2,
    name: 'Sunflowers',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=800',
    price: 24.99,
  },
  {
    id: 3,
    name: 'White Roses',
    image: 'https://images.unsplash.com/photo-1589994160839-163cd867cfe8?q=80&w=800',
    price: 19.99,
  },

  {
    id: 4,
    name: 'Pink Spring Flower',
    image: 'https://wallpaperaccess.com/full/2177716.jpg',
    price: 23.99,
  },

  {
    id: 5,
    name: 'Yellow Roses',
    image: 'https://hdflowerwallpaper.com/wallpaper/2015/07/yellow-roses-34-desktop-background.jpg',
    price: 24.99,
  },
  {
    id: 6,
    name: 'Light Pink Roses',
    image: 'https://cdn.wallpapersafari.com/72/40/smDT6y.jpg',
    price: 25.99,
  },

  {
    id: 7,
    name: 'Motia Flowers',
    image: 'https://i.pinimg.com/originals/a3/9f/86/a39f8676a85649b2f2e8c3fd4902541d.jpg',
    price: 22.99,
  },

  {
    id: 8,
    name: 'Sadabahar flowers',
    image: 'https://tse4.mm.bing.net/th?id=OIP.Oc94tBQvnIuMrgY05DxBlQHaFC&pid=Api&P=0&h=220',
    price: 21.99,
  },

  {
    id: 9,
    name: 'Night-Blooming Jasmine',
    image: 'https://www.shehrikisaan.in/wp-content/uploads/2023/06/Night-Blooming-Jasmine-Raat-ki-rani-flowers.jpg',
    price: 20.99,
  },



  // Add more flowers as needed
];

export default function Gallery() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Collection</h1>
      <div className="gallery-grid">
        {flowers.map((flower) => (
          <FlowerCard key={flower.id} flower={flower} />
        ))}
      </div>
    </div>
  );
}