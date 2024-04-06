'use client'
import {useContext, useState} from "react";
import {useRouter} from 'next/navigation'
import {UserContext} from "@provider/UserProvider";
const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const router = useRouter()
  const [u, setU] = useState({ email: '', password: '', username: '123'})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
            email: u.email,
            password: u.password
        })
        
    })
 console.log(response)
 const data = await response.json()
    if (response.ok) {
      // fetch the username using the route api/[id]/route.js and set the username from the response
        
        setUser({...user, 'email': u.email, 'username':data.username})
        router.push('/')
    }
    else{
        alert('Invalid email or password')
    }
}
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in OnlineBooking
          </h5>
          
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
            
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
              onChange={(e) => setU({ ...u, email: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              onChange={(e) => setU({ ...u, password: e.target.value })}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <a
              href="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
