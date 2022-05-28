import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const MyProfile = () => {
    function removeEmptyFields(data) {
        Object.keys(data).forEach((key) => {
          if (data[key] === "" || data[key] == null) {
            delete data[key];
          }
        });
      }
      const [user] = useAuthState(auth);
      const [loggedUser, setLoggedUser] = useState({});
      useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
          .then((res) => res.json())
          .then((data) => setLoggedUser(data));
      }, []);
      const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
      const onSubmit = (data) => {
        removeEmptyFields(data);
        console.log(data);
        fetch(`http://localhost:5000/profile/${user.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {
              toast.success("Profile has been updated!");
              reset();
            }
          });
      };
      console.log(loggedUser);
    return (
        <div>
       
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* section 1  */}
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Current Profile!</h2>
                <h2>
                  <b>Name: </b>
                  {loggedUser.displayName}
                </h2>
                <h2>
                  <b>email: </b>
                  {loggedUser.email}
                </h2>
                <h2>
                  <b>Location: </b>
                  {loggedUser.location}
                </h2>
                <h2>
                  <b>Location: </b>
                  {loggedUser.education}
                </h2>
                <h2>
                  <b>Phone: </b>
                  {loggedUser.phone}
                </h2>
                <h2>
                  <b>LinkedIn: </b>
                  <a href={loggedUser.linkedin}  target="_blank" >
                    Your Profile
                  </a>
                </h2>
              </div>
            </div>
          </div>
          {/* section two  */}
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Update Profile</h2>
                {/* profile form  */}
  
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                      {...register("displayName")}
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Location"
                      className="input input-bordered w-full"
                      {...register("location")}
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Highest Education</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Location"
                      className="input input-bordered w-full"
                      {...register("education")}
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      className="input input-bordered w-full"
                      {...register("phone")}
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">LinkedIn</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your LinkedIn URL"
                      className="input input-bordered w-full"
                      {...register("linkedin")}
                    />
                  </div>
                  <input
                    className="btn btn-primary btn-outline w-full mt-2"
                    type="submit"
                    value="Update"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;