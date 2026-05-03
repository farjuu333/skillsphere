import { FaBookOpen } from 'react-icons/fa';

const TopInstructors = () => {
  const instructors = [
    {
      name: "David Marcus",
      role: "Senior Architect @ Google",
      courses: 12,
      image: "https://i.pravatar.cc/150?u=david" 
    },
    {
      name: "Sofia Vergara",
      role: "Design Lead @ Canva",
      courses: 8,
      image: "https://i.pravatar.cc/150?u=sofia"
    },
    {
      name: "Liam Smith",
      role: "Software Engineer @ Meta",
      courses: 15,
      image: "https://i.pravatar.cc/150?u=liam"
    },
    {
      name: "Dr. Sarah Kho",
      role: "Data Scientist @ Amazon",
      courses: 6,
      image: "https://i.pravatar.cc/150?u=sarah"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Part */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-[#1A365D] mb-3">
            Top Instructors 
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our instructors are practitioners from top-tier companies like Google, Airbnb, and Tesla.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              {/* Profile Image with Border */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-50">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h4 className="text-xl font-bold text-[#1A365D] mb-1">
                {instructor.name}
              </h4>
              <p className="text-blue-600 text-sm font-medium mb-3">
                {instructor.role}
              </p>

              {/* Course Count */}
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaBookOpen className="text-sm" />
                <span>{instructor.courses} Courses</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;