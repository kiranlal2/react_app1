// Desc: Header component
import { ChevronDown, AlignEndHorizontal } from "lucide-react";
import Insta from '@/assets/instagram.svg'

export default function Header() {
  return (
    <header className="flex justify-between items-center z-10 bg-white shadow-sm px-6 py-3">
      
      <h2 className="text-xl font-bold">Create Post</h2>
      {/* Right Section: Actions */}
      <div className="flex items-center space-x-4">
        <button className=" bg-gray-100 text-gray-500 px-4 py-2 rounded-md flex items-center space-x-2">
          <AlignEndHorizontal className="w-5 h-5 mr-2 justify-center items-center" />
          <span className="text-[13px]" >Check the Score</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>

        <button className="flex bg-pink-500 text-gray-500 px-4 py-2 rounded-md">
          <img src={Insta} alt="instagram" className="w-5 h-5 mr-2 justify-center items-center" />
          <span className="text-[13px]"> Instagram</span>
        </button>
      </div>
    </header>
  );
}