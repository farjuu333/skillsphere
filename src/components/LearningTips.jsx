// import { FaLightbulb, FaClock, FaBookOpen } from 'react-icons/fa';

// const LearningTips = () => {
//   const tips = [
//     { icon: <FaLightbulb />, title: "Study Techniques", desc: "Use active recall and spaced repetition for better memory." },
//     { icon: <FaClock />, title: "Time Management", desc: "Allocate specific blocks of time for focused learning sessions." },
//     { icon: <FaBookOpen />, title: "Consistent Practice", desc: "Consistency is key. Try to learn something new every single day." }
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-12">Learning Tips</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {tips.map((tip, index) => (
//             <div key={index} className="p-8 border rounded-2xl hover:shadow-xl transition-all">
//               <div className="text-4xl text-blue-600 mb-4 flex justify-center">{tip.icon}</div>
//               <h4 className="text-xl font-bold mb-2">{tip.title}</h4>
//               <p className="text-gray-600">{tip.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default LearningTips;
import { FaBrain, FaClock, FaRocket } from 'react-icons/fa';

const LearningTips = () => {
  const tips = [
    {
      icon: <FaBrain className="text-blue-500 text-2xl" />,
      title: "Study Techniques",
      desc: "Master the Pomodoro method and active recall to double your retention rate during intensive modules."
    },
    {
      icon: <FaClock className="text-blue-500 text-2xl" />,
      title: "Time Management",
      desc: "Learn how to block your calendar for deep work and manage multiple course tracks without burnout."
    },
    {
      icon: <FaRocket className="text-blue-500 text-2xl" />,
      title: "Accelerate Growth",
      desc: "Apply your learning through real-world projects and peer reviews to speed up your career transition."
    }
  ];

  return (
    <section className="py-10 bg-[#bfdafa]"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#1A365D]">
            Accelerate Your Learning
          </h2>
        </div>

        {/* Grid setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index} 
              // Removed aspect-square to fix height, added pb-8 for tight bottom padding
              className="bg-white p-6 pb-8 rounded-[2rem] shadow-sm border border-blue-50 flex flex-col items-center text-center transition-all hover:shadow-md h-auto"
            >
              {/* Icon Circle */}
              <div className="bg-blue-50 p-3 rounded-2xl mb-4 mt-2">
                {tip.icon}
              </div>
              
              {/* Content */}
              <h4 className="text-xl font-bold text-[#1A365D] mb-2">
                {tip.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;