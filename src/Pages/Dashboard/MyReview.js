import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      const date = new Date().toLocaleString();
      const newReview = {
        rating: data.rating,
        review: data.review,
        time: date,
        user: user.email,
        reviewer: user.displayName,
      };
      console.log(newReview);
      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newReview),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            toast.success("Review has been Added");
            reset();
          }
        });
    };
    return (
        <div>
        <div className="hero min-h-screen mx-auto">
          
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Add New Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Rating Out of 5</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Your Rating"
                      className="input input-bordered w-full"
                      {...register("rating", {
                        min: 1,
                        max: 5,
                        required: {
                          value: true,
                          message: "Rating is required! ",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.rating?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.rating.message}
                        </span>
                      )}
  
                      <span className="label-text-alt text-primary">
                        Review Must Be between 1-5
                      </span>
                    </label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Review</span>
                    </label>
                    <textarea
                      placeholder="Your Password"
                      className="input input-bordered w-full"
                      {...register("review", {
                        required: {
                          value: true,
                          message: "Review is required! ",
                        },
                        minLength: {
                          value: 50,
                          message:
                            "Review must be longer than 50 character or long!",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.review?.type === "required" && (
                        <span className="label-text-alt text-red-600">
                          {errors.review.message}
                        </span>
                      )}
                      {errors.review?.type === "minLength" && (
                        <span className="label-text-alt text-red-600">
                          {errors.review.message}
                        </span>
                      )}
                    </label>
                  </div>
  
                  <input
                    className="btn btn-primary btn-outline w-full"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyReview;