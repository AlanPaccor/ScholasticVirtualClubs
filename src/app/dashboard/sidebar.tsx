'use client';

import Link from 'next/link';
import {
    FaHome,
    FaUsers,
    FaCalendarAlt,
    FaUserFriends,
    FaBook,
    FaTasks,
    FaComments,
    FaChartLine,
    FaPencilAlt,
    FaEllipsisH,
    FaChartBar,
    FaCog,
    FaChevronDown
  } from 'react-icons/fa';
  
export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-screen border-r border-gray-200">
      <nav className="mt-4">
      <ul>
        <SidebarItem href="/dashboard" icon={<FaHome />} text="Dashboard" active />
        <SidebarItem href="#" icon={<FaUsers />} text="My Clubs" hasSubmenu />
        <SidebarItem href="/events" icon={<FaCalendarAlt />} text="Events" />
        <SidebarItem href="/members" icon={<FaUserFriends />} text="Members" />
        <SidebarItem href="/resources" icon={<FaBook />} text="Resources" />
        <SidebarItem href="/assignments" icon={<FaTasks />} text="Assignments" />
        <SidebarItem href="/communication" icon={<FaComments />} text="Communication" />
        <SidebarItem href="/analytics" icon={<FaChartLine />} text="Analytics" />
        <SidebarItem href="/creator-studio" icon={<FaPencilAlt />} text="Club Studio" />
    </ul>
      </nav>
      <div className="absolute bottom-4 left-4">
        <Link href="/settings" className="flex items-center text-gray-600">
          <FaCog className="mr-2" />
          Settings
        </Link>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

function SidebarItem({ href, icon, text, active = false, hasSubmenu = false }: SidebarItemProps) {
  return (
    <li className={`mb-2 ${active ? 'bg-gray-100' : ''}`}>
      <Link href={href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
        <span className="mr-3">{icon}</span>
        <span>{text}</span>
        {hasSubmenu && <FaChevronDown className="ml-auto" />}
      </Link>
    </li>
  );
}
