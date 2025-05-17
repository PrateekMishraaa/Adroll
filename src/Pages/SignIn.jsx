import React, { useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({

    Email:"",
  
    Password:""
  })
  console.log(formData)

  const [viewPassword, setViewPassword] = useState(false);

  const handleViewPassword = () => {
    setViewPassword((prev) => !prev);
  };
  const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
  }
  console.log(handleChange)

      const handleSubmit = async (e)=>{
            e.preventDefault()

            if(!formData.Email ||  !formData.Password){
              toast.error("All fields are required")
            }
            try{
                const postData = await axios.post("http://localhost:3000/api/login",formData,{
                  "headers":{
                    "Content-Type":"application/json"
                  }
                })
                console.log(postData)
                toast.success("Login Successfully")
                setTimeout(()=>{
                        navigate('/')
                },3000)
            }catch(error){
              toast.error("SomeThing went wrong")
            }
      }
  return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-300" onSubmit={handleSubmit}>
        <div className="text-center mb-8">
          <p className="text-3xl font-bold text-gray-800">AdRoll</p>
          <p className="text-xl font-semibold text-gray-700 mt-2">Sign-In</p>
        </div>

        <div className="space-y-4">
       
          
          <input
            type="email"
            placeholder="Email"
            name='Email'
            value={formData.Email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          

          {/* Password Input with Eye Icon */}
          <div className="relative">
            <input
              type={viewPassword ? "text" : "password"}
              placeholder="Password"
              name='Password'
              value={formData.Password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <div
              className="absolute right-3 top-2.5 text-gray-600 cursor-pointer"
              onClick={handleViewPassword}
            >
              {viewPassword ? <FaRegEye size={18} /> : <FaEyeSlash size={18} />}
            </div>
          </div>
        </div>
            <p>Dont have an account ? <a href="/signup" className='text-blue-800 font-semibold text-xl'>SignUp </a></p>
        <button
          type="submit"
          className="w-full cursor-pointer mt-6 bg-[#00aeef] text-white py-2 rounded-md font-semibold hover:bg-[#0099cc] transition"
        >
          Login
        </button>
      </form>
    </div>
    <ToastContainer/>
  </>
  );
};

export default SignIn;
