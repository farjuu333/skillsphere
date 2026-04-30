import React from 'react';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { SlSocialTwitter } from 'react-icons/sl';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1A2B3C] text-gray-400 py-12 px-6 font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Column 1: Brand & Social Links */}
    <div>
      <h2 className="text-white text-2xl font-bold mb-4">SkillSphere</h2>
      <p className="text-sm leading-relaxed mb-6">
        Empowering professionals through high-fidelity digital education and a world-wide community of experts.
      </p>
      {/* Social Links Section */}
      <div className="flex space-x-4">
        <a href="#" className="p-2 bg-gray-700 text-white rounded-full">
          <span className="sr-only">Facebook</span>
         <CiFacebook /> 
        </a>
        <a href="#" className="p-2 bg-gray-700 text-white rounded-full">
          <span className="sr-only">Twitter</span>
          <SlSocialTwitter />
        </a>
        <a href="#" className="p-2 bg-gray-700 text-white rounded-full">
          <span className="sr-only">LinkedIn</span>
          <CiLinkedin />
        </a>
      </div>
    </div>

    {/* Column 2: Explore */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">Explore</h3>
      <ul className="space-y-2 text-sm">
        <li>All Courses</li>
        <li>Mentorship Program</li>
        <li>Success Stories</li>
        <li>Free Resources</li>
      </ul>
    </div>

    {/* Column 3: Support & Legal */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
      <ul className="space-y-2 text-sm">
        <li>Help Center</li>
        <li>Community Guidelines</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    {/* Column 4: Newsletter */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">Newsletter</h3>
      <p className="text-sm mb-4">Get the latest updates on new courses and techniques.</p>
      <div className="flex">
        <input 
          type="email" 
          placeholder="Email address" 
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l focus:outline-none w-full border border-gray-700"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r font-medium">
          Join
        </button>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-xs text-gray-500">
    <p>© 2026 SkillSphere Learning. All rights reserved.</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;