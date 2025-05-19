import React from 'react';
import Navbar from '../Components/Navbar';
import MedalOne from "../assets/medal.svg";
import MedalTwo from "../assets/medal2.svg";
import MedalThree from "../assets/medal3.svg";
import MedalFour from "../assets/medal4.svg";
import MedalFive from "../assets/medal5.svg";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
const About = () => {
    const navigate = useNavigate()
    const [form,setForm] = useState({
        BussinessEmail:"",
        JobTitle:"",
        Website:"",
        Country:""
    })
    console.log(form)
    const [error,setError] = useState(false)
  const images = [
    { image: MedalOne },
    { image: MedalTwo },
    { image: MedalThree },
    { image: MedalFour },
    { image: MedalFive },
  ];
    const handleChange = async(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log(handleChange)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!form.BussinessEmail || !form.JobTitle || !form.Website || !form.Country){
                toast.error("Something went wrong please try again")
        }
        try{
                const postData = await axios.post("http://localhost:3000/api/contact",form,{
                     headers: {
          "Content-Type": "application/json"
        }
                })
                console.log(postData)
                toast.success("Form Submitted successfully")

                setTimeout(()=>{
                        navigate('/')
                },4000)
            
        }catch(error){
            console.log(error)
        toast.error("internal server error")
        }
    }
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="h-[78vh] w-full bg-[#363776] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-transparent text-white p-8 rounded-md">
          <h1 className="text-4xl font-bold mb-4">
            Advertising should be intentional.
          </h1>
          <p className="text-xl font-light mb-6">
            We believe in an engaging, data-driven marketing landscape where{' '}
            <span className="font-bold">every ad is worth viewing.</span>
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Business Email"
              name='BussinessEmail'
              value={form.BussinessEmail}
              onChange={handleChange}
              className="h-12 w-full bg-white text-black px-4 text-base rounded-sm"
            />
            <input
              type="text"
              placeholder="Job Title"
              name='JobTitle'
              value={form.JobTitle}
              onChange={handleChange}
              className="h-12 w-full bg-white text-black px-4 text-base rounded-sm"
            />
            <input
              type="text"
              placeholder="Website"
              name='Website'
              value={form.Website}
              onChange={handleChange}
              className="h-12 w-full bg-white text-black px-4 text-base rounded-sm"
            />
            <input
              type="text"
              placeholder="Country"
              name='Country'
              value={form.Country}
              onChange={handleChange}
              className="h-12 w-full bg-white text-black px-4 text-base rounded-sm"
            />
            <button
              type="submit"
              className="h-12 w-full bg-purple-800 text-white cursor-pointer font-medium rounded-sm hover:bg-blue-900 transition"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </section>

      {/* Medal Section */}
      <section className="h-28 w-full border-t-2 border-black flex justify-center items-center gap-6 bg-white py-4">
        {images.map((item, index) => (
          <div key={index} className="h-20 w-20 flex items-center justify-center">
            <img src={item.image} alt={`Medal ${index + 1}`} className="h-full object-contain" />
          </div>
        ))}
      </section>
      <Footer/>
      <ToastContainer/>
    </>
  );
};

export default About;
