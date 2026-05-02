
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavLink({ href, children, className, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`${className} ${isActive ? 'text-[#006591] font-bold border-b-2 border-[#006591]' : ''}`} 
      {...props}
    >
      {children}
    </Link>
  );
}