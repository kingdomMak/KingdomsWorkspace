import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Users, Bed, Bath, Home, Wifi, Car, Tv } from 'lucide-react';

function ListingDetails() {
  const { id } = useParams();

  // Mock data - replace with actual data fetching
  const listing = {
    title: 'Luxury Beachfront Villa',
    location: 'Malibu, CA',
    price: 550,
    rating: 4.9,
    reviews: 128,
    description: 'Beautiful beachfront villa with stunning ocean views. Perfect for family vacations or romantic getaways. Featuring modern amenities and direct beach access.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154341-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154342-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['WiFi', 'Parking', 'TV', 'Kitchen', 'Pool', 'Air conditioning'],
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                ⭐ {listing.rating} ({listing.reviews} reviews)
              </span>
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {listing.location}
              </span>
            </div>
            <div className="text-2xl font-bold">
              ${listing.price} <span className="text-lg font-normal text-gray-500">/ night</span>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="col-span-2 aspect-[2/1] overflow-hidden rounded-t-xl">
            <img
              src={listing.images[0]}
              alt="Main property view"
              className="w-full h-full object-cover"
            />
          </div>
          {listing.images.slice(1).map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-xl">
              <img
                src={image}
                alt={`Property view ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">About this property</h2>
              <p className="text-gray-600">{listing.description}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-400" />
                <span>{listing.maxGuests} guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bed className="h-5 w-5 text-gray-400" />
                <span>{listing.bedrooms} bedrooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bath className="h-5 w-5 text-gray-400" />
                <span>{listing.bathrooms} bathrooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-gray-400" />
                <span>Villa</span>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {listing.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {amenity === 'WiFi' && <Wifi className="h-5 w-5 text-gray-400" />}
                    {amenity === 'Parking' && <Car className="h-5 w-5 text-gray-400" />}
                    {amenity === 'TV' && <Tv className="h-5 w-5 text-gray-400" />}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl border p-6 shadow-sm">
              <div className="mb-4">
                <div className="text-2xl font-bold mb-2">
                  ${listing.price} <span className="text-lg font-normal text-gray-500">/ night</span>
                </div>
                <div className="flex items-center text-sm">
                  ⭐ {listing.rating} · {listing.reviews} reviews
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                    <input
                      type="date"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                    <input
                      type="date"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500">
                    {[...Array(listing.maxGuests)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} guest{i !== 0 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Reserve
                </button>
              </form>

              <div className="mt-4 text-center text-sm text-gray-500">
                You won't be charged yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;