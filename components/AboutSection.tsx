export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800"
              alt="Flower Shop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              For over two decades, Blooming Petals has been bringing joy and beauty to countless
              special moments. Our passion for flowers goes beyond mere arrangements – we create
              experiences that touch hearts and celebrate life's precious moments.
            </p>
            <p className="text-gray-600 mb-6">
              Every bouquet we craft tells a unique story, carefully designed to capture the essence
              of your special occasions. Our team of expert florists combines artistry with the
              freshest blooms to create arrangements that exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">20+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">10k+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}