import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-gray-600">
              123 Flower Street<br />
              Garden City, GC 12345
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Phone className="text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Mail className="text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600">info@bloomingpetals.com</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Clock className="text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9am - 7pm<br />
              Saturday: 9am - 6pm<br />
              Sunday: 10am - 5pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}