

import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FiClock, FiBarChart } from "react-icons/fi";

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://skillsphere-beta.vercel.app/data.json",{cache:'no-store'});
    const photos = await res.json();
    const photo = photos.find(p => p.id == id);

    if (!photo) return <div className="text-center pt-20">Course not found!</div>;

    return (
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
            <Card className="p-10 shadow-xl border border-slate-100 bg-white rounded-[32px]">
                <div className="flex flex-col md:flex-row gap-12">
                    
                    {/* Left Side: Large Image and Theme-based Rating */}
                    <div className="w-full md:w-[45%] flex flex-col">
                        <div className="relative w-full aspect-[3.7/4] mb-6"> {/* Image height barano hoyeche */}
                            <Image 
                                src={photo.image}
                                fill
                                alt={photo.title}
                                className="object-cover rounded-3xl shadow-lg"
                                priority
                            />
                            <Chip 
                                className="absolute right-4 top-4 bg-white/90 backdrop-blur-md text-[#006591] font-bold border-none"
                                variant="flat"
                            >
                                {photo.category}
                            </Chip>
                        </div>
                        
                        {/* Rating Section - Theme Based Color (Blue/Slate) */}
                        <div className="flex items-center justify-center gap-3 py-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                            <FaStar className="text-[#006591]" size={24} />
                            <span className="font-bold text-2xl text-[#0b1c30]">{photo.rating}</span>
                            <span className="text-slate-400 font-medium">/ 5.0 Rating</span>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full md:w-[55%] flex flex-col">
                        <h1 className="text-5xl font-extrabold text-[#0b1c30] mb-6 leading-tight">
                            {photo?.title}
                        </h1>
                        
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-[#006591] flex items-center justify-center text-white font-bold text-xl shadow-md">
                                {photo.instructor.charAt(0)}
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-bold">Lead Instructor</p>
                                <p className="font-semibold text-lg text-[#0b1c30]">{photo.instructor}</p>
                            </div>
                        </div>

                        <div className="w-full h-[1.5px] bg-gradient-to-r from-slate-100 to-transparent mb-8"></div>

                        <p className="text-[#3e4850] text-xl leading-relaxed mb-10 font-medium italic">
                            "{photo.description}"
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {/* Duration */}
                            <div className="p-6 border border-slate-100 rounded-[20px] bg-slate-50/50 flex items-center gap-4 hover:border-[#006591]/30 transition-colors">
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                    <FiClock className="text-[#006591]" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Duration</p>
                                    <p className="font-bold text-[#0b1c30]">{photo.duration}</p>
                                </div>
                            </div>

                            {/* Level */}
                            <div className="p-6 border border-slate-100 rounded-[20px] bg-slate-50/50 flex items-center gap-4 hover:border-[#006591]/30 transition-colors">
                                <div className="p-3 bg-white rounded-lg shadow-sm">
                                    <FiBarChart className="text-[#006591]" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Skill Level</p>
                                    <p className="font-bold text-[#0b1c30]">{photo.level}</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-auto w-full py-5 bg-[#006591] text-white rounded-2xl font-bold text-xl hover:bg-[#004c6e] transform active:scale-[0.98] transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3">
                            Enroll in Mastery Path
                        </button>
                    </div>
                </div>
            </Card>

            <div className="mt-12 px-4">
    <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-extrabold text-[#0b1c30] flex items-center gap-3">
            <span className="w-1.5 h-8 bg-[#006591] rounded-full"></span>
            Course Curriculum
        </h3>
        <p className="text-slate-400 font-medium">5 Lessons • 12h 30m</p>
    </div>

    <div className="grid gap-3">
        {[
            { id: "01", title: "Introduction to Design Thinking", status: "Preview", locked: false },
            { id: "02", title: "Mastering Layouts & Grid Systems", status: "Locked", locked: true },
            { id: "03", title: "Advanced Prototyping with Figma", status: "Locked", locked: true },
            { id: "04", title: "User Research & Psychology", status: "Locked", locked: true },
            { id: "05", title: "Capstone Project: Final Delivery", status: "Locked", locked: true },
        ].map((item) => (
            <div 
                key={item.id} 
                className="group flex items-center justify-between p-6 rounded-[24px] bg-white border border-slate-100 hover:border-[#006591]/20 hover:shadow-lg hover:shadow-slate-100 transition-all cursor-pointer"
            >
                <div className="flex items-center gap-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${item.locked ? 'bg-slate-50 text-slate-300' : 'bg-blue-50 text-[#006591]'}`}>
                        {item.id}
                    </div>
                    <p className="font-bold text-lg text-[#3e4850] group-hover:text-[#0b1c30] transition-colors">
                        {item.title}
                    </p>
                </div>
                <Chip 
                    size="sm"
                    variant="flat"
                    className={`font-bold px-4 ${item.locked ? "bg-slate-100 text-slate-400" : "bg-[#006591]/10 text-[#006591]"}`}
                >
                    {item.status}
                </Chip>
            </div>
        ))}
    </div>
</div>
        </div>
    );
};

export default CourseDetailsPage;