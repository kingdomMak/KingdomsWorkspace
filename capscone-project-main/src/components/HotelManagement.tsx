import React, { useState } from 'react';
import { Star, Wifi, UtensilsCrossed, Car, Pencil, Trash2, X } from 'lucide-react';

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

interface Hotel {
  id: string;
  name: string;
  image: string;
  roomDetails: string;
  guestCapacity: string;
  amenities: string[];
  rating: number;
  reviews: number;
  pricePerNight: number;
}

const amenityIcons: Record<string, Amenity> = {
  'WiFi': { icon: <Wifi className="h-5 w-5" />, label: 'WiFi' },
  'Kitchen': { icon: <UtensilsCrossed className="h-5 w-5" />, label: 'Kitchen' },
  'Parking': { icon: <Car className="h-5 w-5" />, label: 'Free Parking' },
};

// Mock data - replace with actual data fetching
const initialHotels: Hotel[] = [
  {
    id: '1',
    name: 'Sandton City Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    roomDetails: '3 Room Luxury Suite',
    guestCapacity: '4-6 guests',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    rating: 5.0,
    reviews: 318,
    pricePerNight: 325,
  },
  {
    id: '2',
    name: 'Cape Town Beach Villa',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    roomDetails: '4 Room Ocean View Suite',
    guestCapacity: '6-8 guests',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    rating: 4.8,
    reviews: 245,
    pricePerNight: 450,
  },
  {
    id: '3',
    name: 'Durban Oceanfront Resort',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    roomDetails: '2 Room Beachfront Suite',
    guestCapacity: '2-4 guests',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    rating: 4.9,
    reviews: 189,
    pricePerNight: 275,
  },
  {
    id: '4',
    name: 'Kruger Safari Lodge',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    roomDetails: '3 Room Safari Suite',
    guestCapacity: '4-6 guests',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    rating: 4.7,
    reviews: 156,
    pricePerNight: 380,
  },
  {
    id: '5',
    name: 'Johannesburg Luxury Apartments',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    roomDetails: '2 Room Executive Suite',
    guestCapacity: '2-4 guests',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    rating: 4.6,
    reviews: 203,
    pricePerNight: 290,
  },
  {
    id: '6',
    name: 'Port Elizabeth Seaside Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    roomDetails: '1 Room Ocean View',
    guestCapacity: '2-3 guests',
    amenities: ['WiFi', 'Kitchen', 'Parking'],
    rating: 4.5,
    reviews: 167,
    pricePerNight: 220,
  }
];

function HotelManagement() {
  const [hotels, setHotels] = useState<Hotel[]>(initialHotels);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const handleDelete = (hotelId: string) => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      setHotels(hotels.filter(hotel => hotel.id !== hotelId));
    }
  };

  const handleUpdate = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = (updatedHotel: Hotel) => {
    setHotels(hotels.map(hotel => 
      hotel.id === updatedHotel.id ? updatedHotel : hotel
    ));
    setIsUpdateModalOpen(false);
    setSelectedHotel(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">My Hotel List</h2>
        <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition-colors">
          Add New Hotel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hotel Image */}
            <div className="relative h-48">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hotel Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
              
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">{hotel.roomDetails}</p>
                <p className="text-gray-600">{hotel.guestCapacity}</p>
              </div>

              {/* Amenities */}
              <div className="flex space-x-4 mb-4">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center text-gray-600">
                    {amenityIcons[amenity].icon}
                    <span className="ml-1 text-sm">{amenityIcons[amenity].label}</span>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{hotel.rating}</span>
                <span className="ml-1 text-gray-600">({hotel.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-xl font-semibold">${hotel.pricePerNight}</span>
                <span className="text-gray-600"> /night</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleUpdate(hotel)}
                  className="flex-1 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Update
                </button>
                <button
                  onClick={() => handleDelete(hotel.id)}
                  className="flex-1 flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {isUpdateModalOpen && selectedHotel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold">Update Hotel</h3>
              <button
                onClick={() => setIsUpdateModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              // Add form submission logic here
              handleUpdateSubmit(selectedHotel);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    value={selectedHotel.name}
                    onChange={(e) => setSelectedHotel({ ...selectedHotel, name: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room Details
                  </label>
                  <input
                    type="text"
                    value={selectedHotel.roomDetails}
                    onChange={(e) => setSelectedHotel({ ...selectedHotel, roomDetails: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guest Capacity
                  </label>
                  <input
                    type="text"
                    value={selectedHotel.guestCapacity}
                    onChange={(e) => setSelectedHotel({ ...selectedHotel, guestCapacity: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price per Night
                  </label>
                  <input
                    type="number"
                    value={selectedHotel.pricePerNight}
                    onChange={(e) => setSelectedHotel({ ...selectedHotel, pricePerNight: Number(e.target.value) })}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelManagement; 