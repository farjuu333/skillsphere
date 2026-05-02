

"use client";
import { Button } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import PhotoCard from './PhotoCard';
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PopularCourses = () => {
    const [topPhotos, setTopPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch("https://skillsphere-beta.vercel.app/data.json")
            .then((res) => res.json())
            .then((data) => {
                setTopPhotos(data.slice(0, 3));
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-20">Loading Courses...</div>;
    }

    return (
        <section className="py-16 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                            Popular <span className="text-sky-600">Courses</span>
                        </h2>
                        <div className="h-1 w-20 bg-sky-500 mt-2 rounded-full"></div>
                        <p className="text-slate-500 mt-4 text-lg font-medium">
                            Hand-picked by our curriculum experts for your career growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Button 
                            variant="flat" 
                            color="primary"
                            className="font-bold px-6 py-6 rounded-2xl group transition-all"
                        >
                            View All Courses 
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topPhotos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <PhotoCard photo={photo} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;