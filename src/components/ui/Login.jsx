import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleLogin =()=>{

    }
  return (
    <div>
         <form onSubmit={handleLogin} className="space-y-4">
        <h2 className="text-3xl text-center  font-black">
          Login with News Hive
        </h2>

        <div className="space-y-3">
          <label htmlFor="email" className="block">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-700 py-2 px-4 rounded-md outline-none focus:ring-3 focus:ring-red-400 transition-all duration-300 focus:border-none"
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-700 py-2 px-4 rounded-md outline-none focus:ring-3 focus:ring-red-400 transition-all duration-300 focus:border-none"
          />
        </div>
  
        <button
          type="submit"
          className="py-3 px-4 w-full bg-slate-800 text-white rounded-md text-sm cursor-pointer active:scale-105"
        >
        Login
        </button>
      </form>
    </div>
  )
}

export default Login
