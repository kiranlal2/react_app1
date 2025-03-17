import { WandSparkles, GalleryHorizontal, LayoutGrid, Newspaper, Lightbulb, LibraryBig, FileChartColumn, ChartSpline, SquarePen, Calendar1, CircleUserRound } from "lucide-react";
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

function Navbar() {

    // const location = useLocation();

    return (
        <div>
            {/* Sidebar Navigation */}
            <div className="w-5/5 p-5 border-r border-gray-200">
                <p className="sticky text-6xl primary_color">Posteey</p>
                <div className="space-y-2 flex flex-col overscroll-auto">
                    <NavLink to='/Quickpost'><Button variant="destructive" className="w-full pri_btn my-5 "><WandSparkles className="mr-2" /> Quick Post</Button></NavLink>
                    <p className='mb-5'>Content Creation & Management</p>
                    <NavLink to='/Dashboard' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><LayoutGrid className="mr-2" /> Dashboard</Button></NavLink>
                    <NavLink to='/Postgenerator' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><Newspaper className="mr-2" /> Post Generator</Button></NavLink>
                    <NavLink to='/Carouselgen' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><GalleryHorizontal className="mr-2" /> Carousel Generator</Button></NavLink>
                    <NavLink to='/Ideagen' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><Lightbulb className="mr-2" /> Idea Generator</Button></NavLink>
                    <NavLink to='/Mylibrary' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><LibraryBig className="mr-2" /> My Library</Button></NavLink>
                    <NavLink to='/Analytics' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><FileChartColumn className="mr-2" /> Analytics</Button></NavLink>
                    <NavLink to='/Viralpost' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><ChartSpline className="mr-2" /> Viral Post</Button></NavLink>
                    
                    <p className="my-5">Drafts & Scheduling</p>
                    <NavLink to='/Drafts' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><SquarePen className="mr-2" /> Drafts</Button></NavLink>
                    <NavLink to='/Calendar' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><Calendar1 className="mr-2" /> Calendar</Button></NavLink>
                    
                    <p className="py-5">Other</p>
                    <NavLink to='/Profile' className={({isActive}) => isActive ? 'active-link' : ''}><Button variant="ghost" className="w-full sec_btn "><CircleUserRound className="mr-2" /> Profile</Button></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;