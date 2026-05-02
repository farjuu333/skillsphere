

"use client"; 
import PhotoCard from "@/components/PhotoCard";
import { useState, useEffect } from "react";
import { Search } from "lucide-react"; 

const AllCoursesPage = () => {
    const [photos, setPhotos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPhotos, setFilteredPhotos] = useState([]);

    // Data fetch logic
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://skillsphere-beta.vercel.app/data.json",{cache:'no-store'});
            const data = await res.json();
            setPhotos(data);
            setFilteredPhotos(data);
        };
        fetchData();
    }, []);

    // Search handle logic
    const handleSearch = () => {
        const filtered = photos.filter((photo) =>
            photo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPhotos(filtered);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-4 "> 
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
                <div>
                    <h2 className="text-5xl font-bold text-[#0b1c30] mb-5">Explore Your Next Mastery</h2>
                    <p className="text-lg text-[#3e4850]">Level up your professional skills with curated paths in technology, design, and business strategy.</p>
                </div>

            
                <div className="relative w-full md:max-w-md group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search courses..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-28 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#006591] outline-none shadow-sm"
                    />
                    <button 
                        onClick={handleSearch}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#006591] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#004c6e]"
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {filteredPhotos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>

            {filteredPhotos.length === 0 && (
                <p className="text-center text-gray-500 mt-10">No courses found matching your search.</p>
            )}
        </div>
    );
};

export default AllCoursesPage;
