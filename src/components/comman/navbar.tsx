import { ChevronLeft, WandSparkles, GalleryHorizontal, LayoutGrid, Newspaper, Lightbulb, LibraryBig, FileChartColumn, ChartSpline, SquarePen, Calendar1, CircleUserRound } from "lucide-react";
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="h-screen w-full p-5 border-r border-gray-200 flex flex-col">
            {/* Sticky Sidebar Header */}
            <div className="flex justify-between items-center space-x-2 sticky top-0 bg-white z-10">
                <p className="text-3xl primary_color">Posteey</p>
                <Button variant="outline" className="w-10 h-10 flex items-center justify-center rounded-full drop-shadow-md">
                    <ChevronLeft size={24} color="#8f8f8f" />
                </Button>
            </div>

            {/* Scrollable Sidebar Content */}
            <div className="mt-5 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <NavLink to='/Quickpost'>
                    <Button variant="destructive" className="w-full pri_btn my-5">
                        <WandSparkles className="mr-2" /> Quick Post
                    </Button>
                </NavLink>

                <p className='mb-5 text-[14px]'>Content Creation & Management</p>
                <NavLink to='/Dashboard' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><LayoutGrid className="mr-2" /> Dashboard</Button></NavLink>
                <NavLink to='/Postgenerator' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><Newspaper className="mr-2" /> Post Generator</Button></NavLink>
                <NavLink to='/Carouselgen' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><GalleryHorizontal className="mr-2" /> Carousel Generator</Button></NavLink>
                <NavLink to='/Ideagen' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><Lightbulb className="mr-2" /> Idea Generator</Button></NavLink>
                <NavLink to='/Mylibrary' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><LibraryBig className="mr-2" /> My Library</Button></NavLink>
                <NavLink to='/Analytics' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><FileChartColumn className="mr-2" /> Analytics</Button></NavLink>
                <NavLink to='/Viralpost' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><ChartSpline className="mr-2" /> Viral Post</Button></NavLink>

                <p className="my-5 text-[14px]">Drafts & Scheduling</p>
                <NavLink to='/Drafts' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><SquarePen className="mr-2" /> Drafts</Button></NavLink>
                <NavLink to='/Calendar' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><Calendar1 className="mr-2" /> Calendar</Button></NavLink>

                <p className="my-5 text-[14px]">Other</p>
                <NavLink to='/Profile' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><CircleUserRound className="mr-2" /> Profile</Button></NavLink>
            </div>
        </div>
    );
}

export default Navbar;
