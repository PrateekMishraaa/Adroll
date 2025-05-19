import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Footer from '../Components/Footer';

const Request = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/allrequest');
        console.log("API response:", response.data);

       
        if (Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full px-10 py-10 bg-[#d7f2fb]">
        <h1 className="text-3xl font-bold mb-6">All Requests</h1>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">Error fetching data</p>
        ) : data.length === 0 ? (
          <p>No requests found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
              >
                <h2 className="text-xl font-semibold mb-2">{item.JobTitle || 'No Title'}</h2>
                <p><span className="font-semibold">Email:</span> {item.BussinessEmail || 'N/A'}</p>
                <p><span className="font-semibold">Website:</span> {item.Website || 'N/A'}</p>
                <p><span className="font-semibold">Country:</span> {item.Country || 'N/A'}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer/>
    </>
  );
};

export default Request;
