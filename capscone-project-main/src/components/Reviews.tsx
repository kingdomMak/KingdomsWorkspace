import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, UserCircle } from 'lucide-react';

interface Review {
  id: string;
  userName: string;
  date: string;
  rating: number;
  comment: string;
  userImage?: string;
}

interface ReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

function Reviews({ reviews, averageRating, totalReviews }: ReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="py-8">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <Star className="h-5 w-5 text-rose-500 fill-current" />
        <span className="font-medium">{averageRating.toFixed(1)}</span>
        <span className="text-gray-300">·</span>
        <span className="font-medium">{totalReviews} reviews</span>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="space-y-4">
            {/* Review Header */}
            <div className="flex items-center space-x-4">
              {review.userImage ? (
                <img
                  src={review.userImage}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full"
                />
              ) : (
                <UserCircle className="w-12 h-12 text-gray-400" />
              )}
              <div>
                <h4 className="font-medium">{review.userName}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>

            {/* Review Content */}
            <div className="text-gray-600">
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {reviews.length > 3 && (
        <button
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="flex items-center space-x-2 font-medium text-gray-800 hover:text-gray-900"
        >
          <span>{showAllReviews ? 'Show less' : 'Show more'}</span>
          {showAllReviews ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
}

export default Reviews; 