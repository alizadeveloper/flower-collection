export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Blooming Petals</h3>
            <p className="text-gray-600">
              Bringing beauty and joy to every occasion with our stunning flower arrangements.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-primary">Home</a></li>
              <li><a href="/gallery" className="text-gray-600 hover:text-primary">Gallery</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>123 Flower Street</li>
              <li>Garden City, GC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@bloomingpetals.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Monday - Friday: 9am - 7pm</li>
              <li>Saturday: 9am - 6pm</li>
              <li>Sunday: 10am - 5pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Blooming Petals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}