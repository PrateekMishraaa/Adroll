import React from 'react';
import { FaFacebookSquare, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [FaFacebookSquare, FaLinkedinIn, FaInstagram, FaTwitter];

  return (
    <footer className="w-full border-t border-gray-300 bg-white px-6 py-10">
      <div className="flex flex-wrap justify-between gap-8 lg:gap-0">
        {/* Column 1 */}
        <div className="w-full sm:w-1/2 md:w-[22%] lg:w-[16%]">
          <p className="text-sm font-bold text-gray-900">Why AdRoll?</p>
          <ul>
            <li className="py-1 text-sm font-light text-gray-900 hover:underline"><a href="#">About AdRoll</a></li>
            <li className="py-1 text-sm font-light text-gray-900 hover:underline"><a href="#">Privacy & Consent</a></li>
            <li className="py-1 text-sm font-light text-gray-900 hover:underline"><a href="#">Pricing</a></li>
            <li className="py-1 text-sm font-light text-gray-900 hover:underline"><a href="#">Customer stories</a></li>
          </ul>
          <p className="mt-4 text-sm font-bold text-gray-900">Solutions</p>
          <ul>
            <li className="py-1 text-sm font-light text-gray-900 hover:underline"><a href="#">Ecommerce</a></li>
            <li className="py-1 text-sm font-light text-gray-900 hover:underline"><a href="#">Finance</a></li>
            <li className="py-1 text-sm font-light text-gray-900 hover:underline"><a href="#">Non-Profit</a></li>
            <li className="py-1 text-sm font-light text-gray-900 hover:underline"><a href="#">Hospitality</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-full sm:w-1/2 md:w-[22%] lg:w-[16%]">
          <p className="text-sm font-bold text-gray-900">Marketing Platform</p>
          <ul>
            {['Overview', 'Retargeting', 'Brand awareness', 'Audience & contacts', 'Marketing automation', 'Analytics & attribution'].map(item => (
              <li key={item} className="py-1 text-sm font-light text-gray-900 hover:underline">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-bold text-gray-900">Marketing Channels</p>
          <ul>
            {['Display ads', 'Video ads', 'Native ads', 'Connected TV ads', 'Social ads'].map(item => (
              <li key={item} className="py-1 text-sm font-light text-gray-900 hover:underline">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full sm:w-1/2 md:w-[22%] lg:w-[18%]">
          <p className="text-sm font-bold text-gray-900">Resources</p>
          <ul>
            {[
              'Resource library', 'Blog', 'Events', 'Digital Advertising Knowledge Center',
              'Help Center', 'Third-Party Cookies', 'State of Digital Advertising Report',
              'AdRoll UTM Link Builder', 'Digital Marketing Newsletter'
            ].map(item => (
              <li key={item} className="py-1 text-sm font-light text-gray-900 hover:underline">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="w-full sm:w-1/2 md:w-[22%] lg:w-[16%]">
          <p className="text-sm font-bold text-gray-900">Integrations</p>
          <ul>
            {['Overview', 'Ecommerce', 'Advertising', 'All Integrations'].map(item => (
              <li key={item} className="py-1 text-sm font-light text-gray-900 hover:underline">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-bold text-gray-900">Partners</p>
          <ul>
            {['AdRoll for Agencies', 'Agency Directory', 'Partner Directory', 'API docs'].map(item => (
              <li key={item} className="py-1 text-sm font-light text-gray-900 hover:underline">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5 */}
        <div className="w-full sm:w-1/2 md:w-[22%] lg:w-[16%]">
          <p className="text-sm font-bold text-gray-900">Company</p>
          <ul>
            {['News', 'Careers', 'NextRoll Engineering'].map(item => (
              <li key={item} className="py-1 text-sm font-light text-gray-900 hover:underline">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="w-full sm:w-1/2 md:w-[22%] lg:w-[16%] flex items-start gap-4 mt-6 lg:mt-0">
          {socialIcons.map((Icon, index) => (
            <Icon key={index} size={24} className="text-gray-600 hover:text-purple-800 cursor-pointer" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
