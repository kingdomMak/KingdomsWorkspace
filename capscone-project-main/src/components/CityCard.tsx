import React from 'react';
import { Link } from 'react-router-dom';

interface CityCardProps {
  name: string;
  distance: string;
  image: string;
  link: string;
}

function CityCard({ name, distance, image, link }: CityCardProps) {
  return (
    <Link to={link} className="group">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-semibold mb-1">{name}</h3>
          <p className="text-sm opacity-90">{distance}</p>
        </div>
      </div>
    </Link>
  );
}

export default CityCard; 