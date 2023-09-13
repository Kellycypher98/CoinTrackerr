import React, { useState } from 'react';
import "./../../index.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeForm, setActiveForm] = useState ('Login')
  
 

  const loginTabClicked =()=>{
    setActiveForm("Login");
  }

  const signUpTabClicked =()=>{
    setActiveForm("Signup");
  }


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='border p-3 max-w-  rounded-lg shadow-lg'>
        <div className="flex pb-5 justify-center">
          <button
            onClick={loginTabClicked}
            className="border px-5 md:px-10 py-2 rounded-l-lg"
          >
            Login
          </button>
          <button
            onClick={signUpTabClicked}
            className="border px-5 md:px-10 rounded-r-lg" 
          >
            Signup
          </button>
        </div>
        <div>
          {activeForm === "Login" && (<form  className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-100 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-100 rounded-lg"
            />
            <button type="submit" className='border bg-blue-100 rounded-lg'>
              login
            </button>
            <button type="button" className='border bg-blue-100 rounded-lg'>
              Login with Google
            </button>
          </form>)}
            {activeForm === "Signup" && ( // Conditionally render signup fields
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  
                  className="border p-2 w-100 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  // Add state and event handler for confirm password input
                  className="border p-2 w-100 rounded-lg"
                />
                
                 <button type="submit" className='border bg-blue-100 rounded-lg'>
              signup
            </button>
            <button type="button" className='border bg-blue-100 rounded-lg'>
              Login with Google
            </button>
              </form>
            )}
        </div>
      </div>
    </div>
  );
}

export default Login;
