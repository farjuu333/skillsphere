"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Assets theke image import kora
import BannerImg1 from '@/assets/banner.jpg';
import BannerImg2 from '@/assets/hero.jpg';

// Swiper CSS import kora (Eigulo thakle slider kaj korbe)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { GrUpdate } from 'react-icons/gr';
import { FaUserGraduate } from 'react-icons/fa';

const slides = [
  {
    title: "Upgrade Your Skills Today ",
    desc: "Access world-class education designed by industry-leading professionals.",
    img: BannerImg1
  },
  {
    title: "Learn from Industry Experts",
    desc: "Direct mentorship from professionals working at Google, Meta, and Netflix.",
    img: BannerImg2
  }
];

const Hero = () => { 
  return (
    <section className="container mx-auto px-4 pt-10 pb-10">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="rounded-[2rem] overflow-hidden shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-[#001e2f]">
              <div className="absolute inset-0">
                <Image 
                  src={slide.img} 
                  fill 
                  className="object-cover opacity-40" 
                  alt="banner" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001e2f] via-[#001e2f]/30 to-transparent"></div>
              </div>
              
              <div className="relative z-10 px-6 md:px-20 text-white max-w-3xl">
                <h1 className="text-4xl md:text-7xl font-bold mb-6 font-lexend">{slide.title}<FaUserGraduate /></h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8">{slide.desc}</p>
                <button className="bg-sky-500 hover:bg-sky-400 px-10 py-4 rounded-2xl font-bold transition-all active:scale-95">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero; 

