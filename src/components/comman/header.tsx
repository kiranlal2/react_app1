// Desc: Header component
import { Bell, Settings, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white shadow-xl z-40 px-6 py-3">
      {/* Left Section: Company & Role */}
      <div className="flex items-center space-x-2">
        <div className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
          D
        </div>
        <div>
          <p className="font-semibold">Skysoft Technologies</p>
          <p className="text-sm text-gray-500">Admin</p>
        </div>
        <ChevronUp className="w-4 h-4 text-gray-600 cursor-pointer" />
        <ChevronDown className="w-4 h-4 text-gray-600 cursor-pointer" />
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-4">
        {/* Notification & Settings */}
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />

        {/* Profile Image */}
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg" // Replace with actual profile image URL
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}