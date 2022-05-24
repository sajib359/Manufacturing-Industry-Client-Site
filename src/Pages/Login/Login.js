import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const emailRf = useRef("");
    const passwordRf = useRef('');
    const navigate = useNavigate();
  const onSubmit = (data) => console.log(data);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigateResetPassword =async() =>{
    const email = emailRf.target.email.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (user) {
    console.log(user);
  }
  const navigateRegister= event =>{
    navigate('/register')
}
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl">Login !</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRf}
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "enter your valid email",
                    },
                  })}
                />

                <label className="label">
                  {errors.email?.type === "required" && (
                    <span>{errors.email.message}</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span>{errors.email.message}</span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                   ref={passwordRf}
                  type="password"
                  placeholder="Enter Your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password Is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 character or longer password ",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className=" label-text-alt text-red-500 text-lg font-bold">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className=" label-text-alt text-red-500 text-lg font-bold">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn w-full max-w-xs"
                type="submit"
                value={"Submit"}
              />
            </form>
            
      <p className="text-xl font-bold pb-5 pt-5 ">If You Not Registered !! <span className="text-orange-400 cursor-pointer" onClick={navigateRegister}>Please Register</span></p>
      <p className="text-xl font-bold pb-5  ">Forgot Password ? <span className="text-orange-400 cursor-pointer" onClick={navigateResetPassword}>Reset Password</span></p>

    </div>


            <div className="divider">OR</div>

            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline"
            >
              Continue With Google
            </button>
          </div>
        </div>
      
                  
    );
  
};
export default Login;
