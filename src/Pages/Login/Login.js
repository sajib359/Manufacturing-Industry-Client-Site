import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const Login = () => {
    const onSubmit = (data) => console.log(data);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    if (user) {
      console.log(user);
    return (
        <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">Login !</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
                
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required:{
                    value: true,
                    message: "Email Is Required"
                  },
                  pattern:{
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'enter your valid email' 
                } 
            })} 
              />

              <label class="label">
               {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
               {errors.email?.type === 'pattern' && <span>{errors.email.message}</span>}
                
              </label>
              </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
                
              </label>
              <input
                type="password"
                placeholder="Enter Your password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required:{
                    value: true,
                    message: "password Is Required"
                  },
                  minLength:{
                    value:6,
                    message: 'Must be 6 character or longer password ' 
                } 
            })} 
              />
              <label class="label">
               {errors.password?.type === 'required' && <span className=" label-text-alt text-red-500 text-lg font-bold">{errors.password.message}</span>}
               {errors.password?.type === 'minLength' && <span className=" label-text-alt text-red-500 text-lg font-bold">{errors.password.message}</span>}
                
              </label>
            </div>
            

            <input className="btn w-full max-w-xs" type="submit" value={'Submit'} />
          </form>

          <div className="divider">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
    );
};

export default Login;