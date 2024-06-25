// SignInPage.js
import React from 'react';

import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-gray-300 p-8 rounded-lg  shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 font-semibold mb-2">
              Username
            </label>
            <input type="text" id="username" name="username" className="border p-2 rounded w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">
              Password
            </label>
            <input type="password" id="password" name="password" className="border p-2 rounded w-full" />
          </div>
          <div className="flex space-x-4"> 
            <button type="submit" className="bg-[#ff5a60] text-white font-semibold py-2 px-4 rounded hover:bg-[#f9787c] duration-100 ease-out">
            Sign In
          </button>
          <Link to='/'><button type="submit"  className="bg-[#ff5a60] text-white font-semibold py-2 px-4 rounded hover:bg-[#f9787c] duration-100 ease-out">
            Back to home page
          </button></Link>
          </div>
         
        </form>
        
      </div>
    </div>
    
    </>
    
  );
};

export default Signin;
