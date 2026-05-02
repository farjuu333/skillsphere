const TrendingCourses = () => {
  const trendingData = [
    {
      id: 1,
      title: "Generative AI for Professionals",
      desc: "Master LLMs and prompt engineering.",
      tag: "NEW COURSE",
       image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Advanced Machine Learning",
      desc: "Deep dive into neural networks.",
      tag: "TRENDING",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
    },
    {
      id: 3,
      title: "Cyber Security Essentials",
      desc: "Protecting digital assets in 2026.",
      tag: "HOT",
     image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800"
    
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Header - Centered */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-[#1A365D]">
            Trending Now
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingData.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl h-[400px]" // Fixed height instead of square
            >
              {/* Deep Dark Overlay for Professional Look */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
              
              <img 
                src={item.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={item.title}
              />

              {/* Content Overlay - Centered Text */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center items-center text-center text-white">
                {/* Badge at top left */}
                <div className="absolute top-8 left-8">
                  <span className="bg-[#00A3FF] text-[11px] font-bold px-4 py-1.5 rounded-md uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Main Text - Bold & Centered */}
                <h3 className="text-3xl font-black leading-tight mb-4 px-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-base font-medium opacity-90 max-w-[250px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;