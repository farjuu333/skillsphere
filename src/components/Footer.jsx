import React from 'react';
import { CiFacebook, CiLinkedin, CiMail, CiLocationOn } from 'react-icons/ci';
import { SlSocialTwitter } from 'react-icons/sl';
import { FiPhone } from 'react-icons/fi';
import Link from 'next/link'; 

const Footer = () => {
    return (
        <footer className="bg-[#1A2B3C] text-gray-400 py-12 px-6 font-sans border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                
                {/* Column 1: Brand & Social Links */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-white text-2xl font-bold mb-4">SkillSphere</h2>
                    <p className="text-sm leading-relaxed mb-6">
                        Empowering professionals through high-fidelity digital education and a world-wide community of experts.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 bg-gray-700/50 hover:bg-blue-600 text-white rounded-full transition-colors duration-300">
                            <span className="sr-only">Facebook</span>
                            <CiFacebook size={20} /> 
                        </a>
                        <a href="#" className="p-2 bg-gray-700/50 hover:bg-sky-400 text-white rounded-full transition-colors duration-300">
                            <span className="sr-only">Twitter</span>
                            <SlSocialTwitter size={20} />
                        </a>
                        <a href="#" className="p-2 bg-gray-700/50 hover:bg-blue-700 text-white rounded-full transition-colors duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <CiLinkedin size={20} />
                        </a>
                    </div>
                </div>

                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-white font-semibold mb-4 text-lg">Contact Info</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <CiMail className="text-blue-500 text-xl" />
                            <span>support@skillsphere.com</span>
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <FiPhone className="text-blue-500 text-lg" />
                            <span>+880 1234 567 890</span>
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <CiLocationOn className="text-blue-500 text-xl" />
                            <span>Banani, Dhaka, Bangladesh</span>
                        </li>
                    </ul>
                </div>

                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-white font-semibold mb-4 text-lg">Legal & Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
                       
                        <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-white font-semibold mb-4 text-lg">Newsletter</h3>
                    <p className="text-sm mb-4">Get the latest updates on new courses and techniques.</p>
                    <div className="flex w-full max-w-[300px]">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l focus:outline-none w-full border border-gray-700 text-sm"
                        />
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-r font-medium text-sm transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center">
                <p>© 2026 SkillSphere Learning. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white">Cookies Policy</a>
                    <a href="#" className="hover:text-white">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;