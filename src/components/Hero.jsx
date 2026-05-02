
"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from "framer-motion";
import { FaUserGraduate, FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from "react-icons/ri";

// Assets
import BannerImg1 from '@/assets/banner.jpg';
import BannerImg2 from '@/assets/hero.jpg';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Upgrade Your Skills Today",
    highlight: "Skills Today",
    desc: "Access world-class education designed by industry-leading professionals to accelerate your career growth.",
    img: BannerImg1,
    stats: "150+ Courses"
  },
  {
    title: "Learn from Industry Experts",
    highlight: "Experts",
    desc: "Direct mentorship from professionals working at Google, Meta, and Netflix in real-world projects.",
    img: BannerImg2,
    stats: "50+ Mentors"
  }
];

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-6 pb-10">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[550px] md:min-h-[650px] flex items-center bg-[#001e2f] py-12 md:py-0">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.img}
                  fill
                  className="object-cover opacity-30 scale-105"
                  alt="banner"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001e2f] via-[#001e2f]/60 to-transparent"></div>
              </div>

              {/* Content Grid */}
              <div className="relative z-10 w-full px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                
                {/* Left Side: Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white"
                >
                  <div className="flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit px-4 py-1.5 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase">
                    <RiVerifiedBadgeFill /> No. 1 Learning Platform
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] font-lexend">
                    {slide.title.replace(slide.highlight, '')}
                    <span className="text-sky-400">{slide.highlight}</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <button className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group active:scale-95 shadow-lg shadow-sky-500/20">
                      Explore Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-semibold hover:text-sky-400 transition-colors px-6 py-4">
                      <FaPlayCircle className="text-2xl" /> Watch Demo
                    </button>
                  </div>
                </motion.div>

                {/* Right Side: Visual Elements / Stats (Hidden on mobile) */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="hidden lg:flex justify-end"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] w-80 relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl group-hover:bg-sky-500/40 transition-all"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-sky-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-500/30">
                        <FaUserGraduate className="text-2xl text-white" />
                      </div>
                      <h3 className="text-white text-4xl font-black mb-1">{slide.stats}</h3>
                      <p className="text-slate-400 font-medium">Empowering students worldwide with quality education.</p>
                      
                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                        <div className="flex -space-x-3">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#001e2f] bg-slate-700"></div>
                          ))}
                        </div>
                        <span className="text-xs text-slate-300 font-semibold">+10k Students</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

