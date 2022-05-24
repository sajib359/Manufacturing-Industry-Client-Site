import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
        const navigate = useNavigate();
        const navigateLogin = event=>{
            navigate('/login')
        }
        if(user){
          navigate('/')
        }
        const handleRegister= event =>{
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.email.value;
          
          createUserWithEmailAndPassword(email ,password)
          
      }
    return (
        <div>
            <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Join us</h3>
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <div>
                <label className="block" for="Name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block" for="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            
              <div className="flex">
                <input type="submit" value="Create Account" className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"/>
              
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <span classNameName="text-orange-400 cursor-pointer" onClick={navigateLogin}>Log In</span>
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;