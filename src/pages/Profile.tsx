import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Booking {
  id: string;
  roomName: string;
  bookingDate: string;
  checkIn: string;
  checkOut: string;
  price: number;
  guests: number;
  userId: string;
  image: string;
}

function Profile() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem('username');
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Fetch bookings from localStorage
    const fetchBookings = () => {
      const storedBookings = localStorage.getItem('bookings');
      if (storedBookings) {
        const allBookings: Booking[] = JSON.parse(storedBookings);
        // Filter bookings for current user
        const userBookings = allBookings.filter(booking => booking.userId === username);
        setBookings(userBookings);
      }
      setLoading(false);
    };

    fetchBookings();
  }, [username, isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          {/* Profile Header */}
          <div className="px-6 py-8 border-b">
            <h1 className="text-3xl font-bold">Welcome, {username}</h1>
            <p className="text-gray-600 mt-2">View and manage your bookings</p>
          </div>

          {/* Bookings Section */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Your Bookings</h2>
            
            {bookings.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No bookings yet</div>
                <button
                  onClick={() => navigate('/')}
                  className="text-rose-600 hover:text-rose-700 font-medium"
                >
                  Browse properties
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-white border rounded-lg overflow-hidden">
                    <img
                      src={booking.image}
                      alt={booking.roomName}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{booking.roomName}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Check-in:</span>{' '}
                          {new Date(booking.checkIn).toLocaleDateString()}
                        </p>
                        <p>
                          <span className="font-medium">Check-out:</span>{' '}
                          {new Date(booking.checkOut).toLocaleDateString()}
                        </p>
                        <p>
                          <span className="font-medium">Guests:</span> {booking.guests}
                        </p>
                        <p>
                          <span className="font-medium">Total:</span> ${booking.price}
                        </p>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => navigate(`/listing/${booking.id}`)}
                          className="text-rose-600 hover:text-rose-700 text-sm font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 