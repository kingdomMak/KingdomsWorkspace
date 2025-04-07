import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';
import CityCard from '../components/CityCard';

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    name: 'Sandton City Hotel',
    distance: '53 km away',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/listing/1'
  },
  {
    id: 2,
    name: 'Cape Town Beach Villa',
    distance: '1,128 km away',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/listing/2'
  },
  {
    id: 3,
    name: 'Durban Oceanfront Resort',
    distance: '569 km away',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/listing/3'
  },
  {
    id: 4,
    name: 'Kruger Safari Lodge',
    distance: '352 km away',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/listing/4'
  }
];

// Mock data for destinations
const destinations = [
  { category: 'Outdoor adventures', places: ['Hiking trails', 'Mountain views', 'National parks'] },
  { category: 'Beach destinations', places: ['Coastal stays', 'Beach houses', 'Island getaways'] },
  { category: 'Unique stays', places: ['Treehouses', 'Glamping', 'Tiny houses'] },
  { category: 'Popular cities', places: ['Johannesburg', 'Cape Town', 'Durban'] }
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl w-full px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Find your perfect stay
            </h1>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      min="1"
                      placeholder="Add guests"
                      className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </form>
              <div className="mt-4 flex justify-center">
                <button className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <button className="text-white bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
                I'm flexible
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">Inspiration for your next trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <CityCard
              key={property.id}
              name={property.name}
              distance={property.distance}
              image={property.image}
              link={property.link}
            />
          ))}
        </div>
      </div>

      {/* Experiences Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-8">Discover TSHEDZA BNB Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden h-96">
            <img
              src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Things to do on your trip"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Things to do on your trip</h3>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100">
                Experiences
              </button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-96">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Things to do from home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Things to do from home</h3>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100">
                Online Experiences
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Gift Cards"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-8 md:left-16 max-w-lg">
            <h2 className="text-3xl font-semibold text-white mb-4">Shop TSHEDZA BNB gift cards</h2>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Hosting Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Questions about hosting?</h2>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800">
            Ask a Superhost
          </button>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8">Inspiration for future getaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.places.map((place, placeIndex) => (
                  <li key={placeIndex}>
                    <Link
                      to={`/search?category=${category.category}&place=${place}`}
                      className="text-gray-600 hover:text-gray-900 flex items-center"
                    >
                      {place}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;