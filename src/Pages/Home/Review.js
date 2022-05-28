import React from 'react';

const Review = ({ review }) => {
  console.log(review);
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="avatar">
          <div class="w-24 mask mask-hexagon mx-auto">
            <img src="https://api.lorem.space/image/face?hash=55350" alt='' />
          </div>
        </div>
        <h2 class="card-title"><span className='text-blue-400'>Ratings :</span>
          {review.rating} out of 5<div class="badge badge-secondary">NEW</div>
        </h2>
        <p> <span className='text-blue-400'>Reviews : </span> {review.review}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{review.time}</div>
          <div class="badge badge-outline">{review.reviewer}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;