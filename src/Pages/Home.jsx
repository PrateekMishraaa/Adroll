import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer.jsx';

import LogoOne from "../assets/logo1.webp";
import LogoTwo from "../assets/logo2.webp";
import LogoThree from "../assets/logo3.webp";
import LogoFour from "../assets/logo4.webp";
import Banner from "../assets/banner.webp";
import Speak from "../assets/speaker.svg";
import People from "../assets/people.svg";
import Smile from "../assets/smile.svg";
import Trade from "../assets/trade.svg";
import Health from "../assets/health.webp";
import TM from "../assets/tmgm.webp";
import KNM from "../assets/knb.webp";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';


const Home = () => {
   
    const logos = [LogoOne, LogoTwo, LogoThree, LogoFour];

    const features = [
        {
            image: Speak,
            title: "Boost brand awareness",
            description: "Get noticed by your ideal customers with display, native, video, and social advertising."
        },
        {
            image: People,
            title: "Increase site visitors",
            description: "Generate more traffic using advanced ad targeting that reaches custom audience segments and compels them to click."
        },
        {
            image: Smile,
            title: "Drive conversions",
            description: "Attract and retain customers with tailored ads that convert prospects and keep them coming back for more."
        },
        {
            image: Trade,
            title: "Optimize performance",
            description: "Understand how your channels and campaigns are working together to influence conversions and revenue."
        }
    ];

    const businessStats = [
        { percent: "132%", value: "Increase in return visitors", image: Health },
        { percent: "30%", value: "Boost in new account conversions", image: TM },
        { percent: "12,280%", value: "ROI for a client", image: KNM }
    ];
     
    return (
        <>
      <Navbar />

            {/* Hero Section */}
            <section className='min-h-screen w-full bg-[#303273] text-white px-6 lg:px-14 py-16 flex flex-col lg:flex-row justify-between items-center gap-10'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-4xl lg:text-5xl font-bold leading-snug'>
                        Great digital ad campaigns don't have to be complicated.
                    </h1>
                    <p className='py-7 text-lg'>
                        Save time and hassle without sacrificing performance. Tap into refreshingly straightforward programmatic advertising.
                    </p>
                    <button className='h-14 w-40 rounded-sm bg-[#00aeef] font-semibold cursor-pointer hover:bg-[#0099cc] transition'>
                        GET IN TOUCH
                    </button>
                    <p className='py-10 font-bold text-[#a8e2f7]'>
                        Trusted by businesses across ecommerce, finance, non-profits, and more.
                    </p>
                    <div className='flex flex-wrap items-center gap-6'>
                        {logos.map((logo, index) => (
                            <div key={index} className="h-20 w-36 flex justify-center items-center">
                                <img src={logo} alt={`logo-${index}`} className='h-full w-full object-contain' />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full lg:w-[45%] flex justify-center items-center'>
                    <img src={Banner} alt="Banner" className='w-full h-auto object-contain rounded-lg' />
                </div>
            </section>

            {/* Features Section */}
            <section className='w-full bg-white py-24 px-6 lg:px-28'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-3xl font-bold text-[#3c4858] mb-4'>
                        Reach the right person, with the right message, at the right time
                    </h2>
                    <p className='text-gray-600 text-lg mb-12'>
                        Powered by advanced AI and machine learning, the AdRoll platform helps you optimize your entire marketing strategy with insights from all of your campaigns, across every channel.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {features.map((item, index) => (
                            <div key={index} className='bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition'>
                                <img src={item.image} alt={item.title} className='h-12 w-12 mb-4' />
                                <h3 className='text-xl font-semibold text-[#3c4858] mb-2'>{item.title}</h3>
                                <p className='text-sm text-gray-600'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Stats Section */}
            <section className='w-full bg-gray-100 py-20 px-6 lg:px-28'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-3xl font-semibold text-gray-700 mb-4'>
                        We're in the business of growing yours
                    </h2>
                    <p className='text-gray-700 mb-6'>
                        For more than 15 years, over 140,000 companies have trusted AdRoll to drive performance they can count on.
                    </p>
                    <div className='flex items-center gap-2 mb-10 text-pink-600 font-medium'>
                        <a href="#" className='hover:underline'>Read Customer Stories</a>
                        <FaArrowRight className='mt-[2px]' />
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                        {businessStats.map((stat, index) => (
                            <div key={index} className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center'>
                                <p className='text-3xl font-semibold text-gray-800 mb-2'>{stat.percent}</p>
                                <p className='text-lg text-gray-700 mb-4'>{stat.value}</p>
                                <img src={stat.image} alt={`stat-${index}`} className='h-16 object-contain' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className='w-full py-16 px-6 lg:px-28'>
                <div className='max-w-7xl mx-auto text-center'>
                    <p className='font-bold text-3xl text-gray-600 mb-4'>
                        Strong ads fuel strong marketing performance
                    </p>
                    <p className='text-gray-800 max-w-3xl mx-auto'>
                        Capture your audience’s attention, business, and loyalty with features that drive reliable full-funnel advertising performance.
                    </p>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className='w-full bg-[#303273] py-16 px-6 lg:px-28'>
                <div className='max-w-7xl mx-auto text-center text-white'>
                    <p className='text-3xl font-semibold mb-6'>
                        Engage your audiences, drive conversions, optimize performance, and repeat.
                    </p>
                    <p className='text-xl mb-8'>Learn how AdRoll can help your business do it all.</p>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
                        <button className="h-12 w-40 bg-[#00aeef] text-white rounded-sm hover:bg-white hover:text-[#00aeef] transition">
                            GET STARTED
                        </button>
                        <button className="h-12 w-40 border-2 border-[#00aeef] text-[#00aeef] rounded-sm hover:bg-white hover:text-[#00aeef] transition">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
