
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
    <section className="w-full px-2 sm:px-4 pt-2 md:pt-6 pb-10 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl max-w-7xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[480px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex items-center bg-[#001e2f]">
              
              {/* Background with stronger mobile overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.img}
                  fill
                  className="object-cover opacity-20 md:opacity-40"
                  alt="banner"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#001e2f]/90 via-[#001e2f]/70 to-[#001e2f] md:bg-gradient-to-r md:from-[#001e2f] md:to-transparent"></div>
              </div>

              {/* Content Grid */}
              <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-10 md:py-0">
                
                {/* Left Side: Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                  <div className="flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 text-sky-400 px-3 py-1 rounded-full mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    <RiVerifiedBadgeFill /> No. 1 Learning Platform
                  </div>
                  
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-[1.2] text-white">
                    {slide.title.replace(slide.highlight, '')}
                    <span className="text-sky-400 block lg:inline-block">{slide.highlight}</span>
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-6 md:mb-8 max-w-lg leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 text-sm md:text-base shadow-lg shadow-sky-500/20">
                      Explore Now <FaArrowRight />
                    </button>
                    <button className="flex items-center justify-center gap-2 text-white font-semibold hover:text-sky-400 transition-colors py-2">
                      <FaPlayCircle className="text-2xl" /> Watch Demo
                    </button>
                  </div>
                </motion.div>

                {/* Right Side: Stats (Desktop Only) */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="hidden lg:flex justify-end"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] w-80">
                    <div className="bg-sky-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <FaUserGraduate className="text-xl text-white" />
                    </div>
                    <h3 className="text-white text-4xl font-bold mb-1">{slide.stats}</h3>
                    <p className="text-slate-400">Empowering students worldwide.</p>
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