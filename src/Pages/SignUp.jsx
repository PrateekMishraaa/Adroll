import React, { useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Simple Loader component as a spinning circle
const Loader = () => (
  <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
);

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // loader state
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    WebsiteName: "",
    Password: ""
  });

  const [viewPassword, setViewPassword] = useState(false);

  const handleViewPassword = () => {
    setViewPassword(prev => !prev);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.FirstName || !formData.LastName || !formData.Email || !formData.WebsiteName || !formData.Password) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const postData = await axios.post("http://localhost:3000/api/signup", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(postData);
      toast.success("User Created Successfully");
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-300"
          onSubmit={handleSubmit}
        >
          <div className="text-center mb-8">
            <p className="text-3xl font-bold text-gray-800">AdRoll</p>
            <p className="text-xl font-semibold text-gray-700 mt-2">Sign Up</p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              name='FirstName'
              value={formData.FirstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              name='LastName'
              value={formData.LastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              name='Email'
              value={formData.Email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Website Name"
              name="WebsiteName"
              value={formData.WebsiteName}
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

          <p className="mt-4">
            Already have an account?{' '}
            <a href="/signin" className='text-blue-800 font-semibold text-xl'>Login</a>
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer mt-6 bg-[#00aeef] text-white py-2 rounded-md font-semibold hover:bg-[#0099cc] transition disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {loading ? <Loader /> : "Create Account"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
