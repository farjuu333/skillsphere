
import Image from 'next/image';
import Link from 'next/link';
import NotFoundImg from '@/assets/not-found.png'

export default function NotFound() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col font-['Inter']">
      {/* Head Tags (Next.js automatically handles metadata, but for fonts  use layout or these links) */}
       <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" /> 

      
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Illustration Side */}
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="relative w-full aspect-square max-w-[400px]">
              {/* Decorative background shapes */}
              <div className="absolute inset-0 bg-sky-100/50 rounded-full blur-3xl transform -translate-x-1/4"></div>
              <div className="absolute inset-0 bg-indigo-100/30 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
              
              {/* Main 404 Card */}
              <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border border-gray-200 shadow-xl bg-white p-4 flex items-center justify-center">
                <Image 
                  alt="SkillSphere 404" 
                  className="w-full h-full object-cover rounded-lg opacity-40" 
                  src={NotFoundImg} 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-2xl transform -rotate-3">
                    <span className="text-[80px] font-black text-[#006591] leading-none font-['Lexend']">404</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="text-center md:text-left order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9e6ff] text-[#001e2f] mb-6">
              <span className="material-symbols-outlined text-[18px]">error</span>
              <span className="text-xs font-bold uppercase tracking-wider">Error Encountered</span>
            </div>
            
            <h1 className="font-['Lexend'] text-5xl font-bold text-[#0b1c30] mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Oops! It looks like this lesson is missing or has been moved to a different classroom. Let's get you back on your learning track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#006591] text-white rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-[#004c6e] active:scale-95 transition-all duration-200"
              >
                <span className="material-symbols-outlined">home</span>
                Back to Home
              </Link>
              
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#dce9ff] text-[#006591] border border-transparent rounded-xl font-semibold hover:bg-[#d3e4fe] active:scale-95 transition-all duration-200"
              >
                <span className="material-symbols-outlined">explore</span>
                Browse All Courses
              </Link>
            </div>

            {/* Helpful Links Grid */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Try these helpful links instead:</p>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/help" className="flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all text-gray-700">
                  <span className="material-symbols-outlined text-sky-500">help_center</span>
                  <span className="text-sm font-medium">Help Center</span>
                </Link>
                <Link href="/dashboard" className="flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all text-gray-700">
                  <span className="material-symbols-outlined text-sky-500">local_library</span>
                  <span className="text-sm font-medium">My Dashboard</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}