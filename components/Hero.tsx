export default function Hero() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1920)',
      }}
    >
      <div className="hero-overlay" />
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Beautiful Flowers <br />
            for Every Occasion
          </h1>
          <p className="text-xl mb-8 max-w-lg">
            Discover our stunning collection of fresh flowers perfect for any
            moment in your life.
          </p>
          <a
            href="/gallery"
            className="bg-white text-gray-900 px-8 py-3 rounded-full
            hover:bg-gray-100 transition duration-300"
          >
            Explore Collection
          </a>
        </div>
      </div>
      <div className="custom-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#ffffff"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </div>
  );
}