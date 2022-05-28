import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://agile-hamlet-27266.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-3xl text-primary font-bold text-center mt-7">
          Customer Review
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 my-10">
          {[...reviews]
            .reverse()
            .slice(0, 6)
            .map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;