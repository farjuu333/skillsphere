
import { Button } from '@heroui/react';
import React from 'react';
import PhotoCard from './PhotoCard';

const PopularCourses = async() => {
    const res = await fetch("https://skillsphere-beta.vercel.app/data.json");
    const photos = await res.json();
    const topPhotos= photos.slice(0,3)
    return (
        <div className='max-w-7xl mx-auto'>
           <div className="flex justify-between items-end mb-10">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">Popular Courses</h2>
        <p className="text-gray-500 mt-2">Hand-picked by our curriculum experts</p>
      </div>
      <Button variant='outline' className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 text-sm">
        View All Courses
      </Button>
    </div>
            <div className='grid grid-cols-3 gap-5'>
                {topPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            </div>
        </div>
    );
};

export default PopularCourses;