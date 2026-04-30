
 
import Link from 'next/link';
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="flex-1 flex justify-start">
      <Link href="/" className="text-2xl font-bold text-[#006591] tracking-tight">
        SkillSphere
      </Link>
    </div>
    <nav className=" md:flex items-center justify-center gap-8 flex-1">
      <Link href="/" className="text-gray-700 hover:text-[#006591] font-medium transition-colors">
        Home
      </Link>
      <Link href="/courses" className="text-gray-700 hover:text-[#006591] font-medium transition-colors">
        Courses
      </Link>
      <Link href="/profile" className="text-gray-700 hover:text-[#006591] font-medium transition-colors">
        My Profile
      </Link>
    </nav>
    <div className="flex-1 flex justify-end items-center gap-4">
      
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="px-5 py-2 text-[#006591] font-semibold hover:bg-gray-100 rounded-lg transition-all">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="px-5 py-2 bg-[#006591] text-white font-semibold rounded-lg hover:brightness-110 transition-all shadow-sm">
              Register
            </button>
          </Link>
        </div>
    </div>

  </div>
</header>
  );
}