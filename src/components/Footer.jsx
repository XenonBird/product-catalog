const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto p-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">FashionHub</h2>
              <p>Your Ultimate Fashion Destination</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p>Email: info@fashionhub.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
              <ul>
                <li>Order Tracking</li>
                <li>Returns & Exchanges</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
              <ul>
                <li>Sign up for our newsletter</li>
                <li>Join our loyalty program</li>
                <li>Connect on social media</li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Visit Our Stores</h3>
              <ul>
                <li>New York: 123 Fashion Avenue</li>
                <li>Los Angeles: 456 Style Street</li>
                <li>Miami: 789 Trendy Road</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          &copy; {new Date().getFullYear()} FashionHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
