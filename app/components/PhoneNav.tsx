import { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  CircleGauge,
  LayoutList,
  NotepadText,
  Settings,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";

interface PhoneNavProps {
  logo: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

function PhoneNav({ logo, isSidebarOpen, setIsSidebarOpen }: PhoneNavProps) {
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isDarkMode = false;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`z-10 w-48 p-4 fixed inset-0 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-stone-100 text-black"
      }`}
    >
      <X
        size={32}
        color="#00B4D8"
        className="opacity-70"
        onClick={() => setIsSidebarOpen(false)}
      />
      <div className="flex justify-between items-center mb-4">
        <Image src={logo} className="w-56 h-24 rounded-lg" alt="Logo" />
      </div>
      <nav className="pl-4 mt-10 flex flex-1 flex-col gap-5">
        <NavLink
          to="/admin"
          label="Dashboard"
          icon={<CircleGauge size={18} />}
          isActive={router.pathname === "/admin"}
          onClick={toggleSidebar}
        />
        <NavLink
          to="/admin/employees"
          label="Employees"
          icon={<Users size={18} />}
          isActive={router.pathname === "/admin/employees"}
          onClick={toggleSidebar}
        />
        <NavLink
          to="/admin/appointments"
          label="Appointments"
          icon={<NotepadText size={18} />}
          isActive={router.pathname === "/admin/appointments"}
          onClick={toggleSidebar}
        />
        <NavLink
          to="/admin/settings"
          label="Settings"
          icon={<Settings size={18} />}
          isActive={router.pathname === "/admin/settings"}
          onClick={toggleSidebar}
        />
        <NavLink
          to="/admin/services"
          label="Services"
          icon={<LayoutList size={18} />}
          isActive={router.pathname === "/admin/services"}
          onClick={toggleSidebar}
        />
      </nav>
    </aside>
  );
}
interface Nav {
  to: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}
function NavLink({ to, label, icon, isActive, onClick }: Nav) {
  return (
    <Link href={to}>
      <a
        className={`flex items-center ${
          isActive ? "text-landing scale-105" : ""
        } hover:text-landing gap-3`}
        onClick={onClick}
      >
        {icon}
        <p className="text-sm">{label}</p>
      </a>
    </Link>
  );
}

export default PhoneNav;
