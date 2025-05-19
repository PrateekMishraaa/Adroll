import React from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import GraphOne from "../assets/graph1.webp";
import GraphTwo from "../assets/graph2.webp";
import GraphThree from "../assets/graph3.webp";
import GraphFour from "../assets/graph4.webp";
import GraphFive from "../assets/graph5.webp";
import User from "../assets/user.jpg";
import TV from "../assets/tv.svg";
import Footer from '../Components/Footer';
import LeaderOne from "../assets/medal.svg";
import LeaderTwo from "../assets/medal2.svg";
import LeaderThree from "../assets/medal3.svg";
import LeaderFour from "../assets/medal4.svg";
import LeaderFive from "../assets/medal5.svg";

const MarketingPlatform = () => {
    const navigate = useNavigate();

    const leader = [LeaderOne, LeaderTwo, LeaderThree, LeaderFour, LeaderFive];

    const marketing = [
        {
            image: GraphOne,
            title: "Meet your Targeted Audience at every stage of the marketing funnel",
            description:
                "Target people who aren't yet familiar with your brand using contextual signals, lookalike profiles, or demographics, interests, and behaviors. After you've generated awareness and interest, segment new site visitors by activity for conversion and repeat sales.",
        },
        {
            image: GraphTwo,
            title: "Leverage first-party data to drive cross-sales and lifetime value",
            description:
                "We’ll match your contacts to cookies so you can target them with ads across the web. Just import your list directly from your CRM or utilize our integrations with Klaviyo, HubSpot, CampaignMonitor, and more.",
        },
        {
            image: GraphThree,
            title: "Capture data from users you know — and those you haven’t met yet",
            description:
                "AdRoll tracks the behavior of both identified and anonymous contacts. That means whenever someone interacts with your website, we’ll remember and store the activity so you can personalize their ad experiences later on.",
        },
        {
            image: GraphFour,
            title: "Build new segments and audiences",
            description:
                "Create custom audiences based on how visitors interact with your site. From there, we’ll continuously refresh your segments based on new interests and site activity so you can continue to target them accurately.",
        },
        {
            image: GraphFive,
            title: "Harness the power of your ecommerce store",
            description:
                "Learn how shoppers engage with your store and identify top spenders and cart abandoners. AdRoll integrates with Shopify, WooCommerce, and others to reveal event-level insights for ecommerce brands.",
        },
    ];

    const user = {
        details:
            "We have been running Contextual targeting for many months. It allows us to appear on more premium placements targeting categories linked to Family and Parenting which ensures that we are bringing on new users of the right audience.",
        image: User,
        name: "Lyndal Eason",
        position: "Marketing Manager at Dinkleboo",
    };

    const handleNavigate = () => {
        setTimeout(() => {
            navigate('/signup');
        }, 2000);
    };

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="h-96 w-full bg-[#303273] flex items-center justify-center px-4">
                <div className="text-white text-center max-w-2xl">
                    <h1 className="text-4xl font-semibold mb-4">
                        Target and segment more effectively than ever.
                    </h1>
                    <p className="text-sm font-medium mb-6">
                        Reach new and existing audiences with ultra-precise programmatic ads.
                    </p>
                    <button
                        onClick={handleNavigate}
                        className="h-14 w-40 text-xl cursor-pointer rounded-sm bg-[#00aeef] font-semibold hover:bg-[#0099cc] transition duration-300"
                    >
                        GET IN TOUCH
                    </button>
                </div>
            </section>

            {/* Marketing Cards Section */}
            <section className="w-full py-12 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid gap-10">
                    {marketing.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-center"
                        >
                            <img
                                src={item.image}
                                alt={`Marketing visual ${index + 1}`}
                                className="w-full md:w-1/3 object-cover rounded"
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TV Ad Section */}
            <section className="w-full bg-[#d7f2fb] py-20 px-6">
                <div className="max-w-6xl mx-auto bg-white border-2 border-[#00aeef] rounded-xl shadow-md p-8 flex flex-col lg:flex-row gap-10 items-center">
                    <img src={TV} alt="Connected TV" className="w-full lg:w-1/2" />
                    <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-[#00aeef] mb-4">
                            Featured Advanced Connected TV Audience Targeting{" "}
                            <span className="block font-light text-sm">(powered by Experian)</span>
                        </h3>
                        <p className="text-sm text-[#00aeef] mb-6">
                            Reach expansive new audiences and retarget already-interested users on the world’s
                            fastest-growing media channel. AdRoll CTV unlocks access to over 200 million viewers
                            globally via premium streaming platforms like HBO MAX, Paramount, ESPN, Kayo, and
                            more.
                        </p>
                        <button className="h-12 w-40 text-white bg-[#8e44ad] rounded hover:bg-[#732d91] transition">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="w-full py-16 px-6 bg-white">
                <div className="max-w-3xl mx-auto border-2 border-[#00aeef] rounded-lg shadow-md p-8 text-center">
                    <p className="text-xl text-[#303273] font-semibold mb-6">"{user.details}"</p>
                    <img
                        src={user.image}
                        alt="User"
                        className="h-20 w-20 mx-auto rounded-full mb-2"
                    />
                    <p className="text-sm font-semibold text-purple-600">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.position}</p>
                </div>
                <div className="h-40 w-full flex justify-center items-center gap-8 mt-6 flex-wrap">
                    {leader.map((item, index) => (
                        <div key={index} className="p-4">
                            <img
                                src={item}
                                alt={`Leader ${index + 1}`}
                                className="h-24 w-24 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="h-96 w-full bg-[#303273] flex items-center justify-center px-6 relative">
                <div className="text-center text-white">
                    <p className="text-2xl font-semibold font-sans mb-8">
                        Learn more about your audience. Drive more revenue.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button className="h-12 w-40 bg-[#00aeef] text-white rounded-sm hover:bg-white hover:text-[#00aeef] transition">
                            GET STARTED
                        </button>
                        <button className="h-12 w-40 border-2 border-[#00aeef] text-[#00aeef] rounded-sm hover:bg-white transition">
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default MarketingPlatform;
