// eslint-disable-next-line no-unused-vars
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
    <div className='login flex flex-col justify-center items-center h-screen space-y-20'>
      <div className='hero flex flex-col gap-10'>
        <h1 className='md:text-8xl text-3xl'>💰 CoinTrackerr</h1>
        <p className='text-center md:px-20 text-sm md:text-lg px-10'>Join our growing community of smart spenders! Experience the ease and control of managing your finances with our app. Start today and take charge of your financial future.</p>

      </div>
      <div className='border p-3 max-w-  rounded-lg shadow-xl bg-white'>
        <div className="flex pb-5 justify-center">
          <button
            onClick={loginTabClicked}
            className="border px-5 md:px-10 py-2 rounded-l-lg focus:bg-blue-100"
          >
            Login
          </button>
          <button
            onClick={signUpTabClicked}
            className="border px-5 md:px-10 rounded-r-lg focus:bg-blue-100" 
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
            <button type="submit" className='border bg-blue-100 rounded-lg active:bg-blue-200 hover:border-blue-200'>
              login
            </button>
            <button type="button" className='border bg-blue-100 rounded-lg active:bg-blue-200 hover:border-blue-200'>
              Login with Google
            </button>
          </form>)}
            {activeForm === "Signup" && ( 
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  
                  className="border p-2 w-100 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Enter a Password"
                  
                  className="border p-2 w-100 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  
                  className="border p-2 w-100 rounded-lg"
                />
                
                 <button type="submit" className='border bg-blue-100 rounded-lg'>
              signup
            </button>
            <button type="button" className='border bg-blue-100 rounded-lg'>
              signup with Google
            </button>
              </form>
            )}
        </div>
      </div>
    </div>
  );
}

export default Login;
