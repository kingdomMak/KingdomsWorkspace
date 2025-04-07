import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Support Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Safety Information</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Cancellation Options</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Our COVID-19 Response</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Supporting people with disabilities</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Report a neighborhood concern</Link></li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">TSHEDZA BNB Community</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Diversity & Belonging</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Accessibility</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Frontline Stays</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Guest Referrals</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Gift Cards</Link></li>
              </ul>
            </div>

            {/* Hosting Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hosting</h3>
              <ul className="space-y-3">
                <li><Link to="/admin" className="text-gray-600 hover:text-gray-900">Try Hosting</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Protection for Hosts</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Explore Hosting Resources</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Visit our Community Forum</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">How to Host Responsibly</Link></li>
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Newsroom</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Learn about new features</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">Investors</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright and Links */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-600">© 2024 TSHEDZA BNB, Inc.</p>
                <div className="flex items-center space-x-6">
                  <Link to="#" className="text-gray-600 hover:text-gray-900">Privacy</Link>
                  <span className="text-gray-300">·</span>
                  <Link to="#" className="text-gray-600 hover:text-gray-900">Terms</Link>
                  <span className="text-gray-300">·</span>
                  <Link to="#" className="text-gray-600 hover:text-gray-900">Sitemap</Link>
                </div>
              </div>

              {/* Social Media and Language */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  <Link to="#" className="text-gray-600 hover:text-gray-900">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link to="#" className="text-gray-600 hover:text-gray-900">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link to="#" className="text-gray-600 hover:text-gray-900">
                    <Instagram className="h-6 w-6" />
                  </Link>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Globe className="h-5 w-5" />
                  <span>English (US)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;