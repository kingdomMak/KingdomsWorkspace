import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, Globe, UserCircle } from 'lucide-react';
import UserDropdown from './UserDropdown';

function Navbar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: '',
    dates: '',
    guests: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryString = new URLSearchParams(searchParams).toString();
    navigate(`/search?${queryString}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-rose-500 text-2xl font-bold">TSHEDZA BNB</Link>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center max-w-xl w-full rounded-full border shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer px-6 py-2">
              <input
                type="text"
                placeholder="Location"
                className="flex-1 border-none focus:outline-none font-medium"
                value={searchParams.location}
                onChange={(e) => setSearchParams(prev => ({ ...prev, location: e.target.value }))}
              />
              <div className="h-5 border-r mx-4"></div>
              <input
                type="text"
                placeholder="Add dates"
                className="flex-1 border-none focus:outline-none font-medium"
                value={searchParams.dates}
                onChange={(e) => setSearchParams(prev => ({ ...prev, dates: e.target.value }))}
              />
              <div className="h-5 border-r mx-4"></div>
              <input
                type="text"
                placeholder="Add guests"
                className="flex-1 border-none focus:outline-none text-gray-600"
                value={searchParams.guests}
                onChange={(e) => setSearchParams(prev => ({ ...prev, guests: e.target.value }))}
              />
              <button type="submit" className="bg-rose-500 p-2 rounded-full ml-4">
                <Search className="h-4 w-4 text-white" />
              </button>
            </div>
          </form>

          <div className="flex items-center space-x-4">
            <Link to="/admin" className="hidden md:block hover:bg-gray-100 px-4 py-2 rounded-full">
              List your property
            </Link>
            <button className="hidden md:flex items-center justify-center hover:bg-gray-100 w-10 h-10 rounded-full">
              <Globe className="h-5 w-5" />
            </button>
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center space-x-2 border rounded-full p-2 hover:shadow-md transition-shadow duration-200"
              >
                <Menu className="h-5 w-5" />
                <UserCircle className="h-8 w-8 text-gray-500" />
              </button>
              <UserDropdown isOpen={isDropdownOpen} onClose={() => setIsDropdownOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;