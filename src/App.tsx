import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Quickpost from '@/pages/Quickpost'
import Dashboard from '@/pages/Dashboard'
import Postgenerator from '@/pages/Postgenerator'
import Carouselgenerator from '@/pages/Carouselgen'
import Ideagenerator from '@/pages/Ideagen'
import Mylibrary from '@/pages/Mylibrary'
import Analytics from '@/pages/Analytics'
import Viralpost from '@/pages/Viralpost'
import Drafts from '@/pages/Drafts'
import Calendar from '@/pages/Calandar'
import Profile from '@/pages/Profile'
import Navbar from '@/components/comman/navbar'
import { Error } from '@/pages/error'

function App() {
  return (
    <div>
        <BrowserRouter>
          <div className="flex">
            <Navbar />
            <Routes>
                <Route path="/Quickpost" element={<Quickpost />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Postgenerator" element={<Postgenerator />} />
                <Route path="/Carouselgen" element={<Carouselgenerator />} />
                <Route path="/Ideagen" element={<Ideagenerator />} />
                <Route path="/Mylibrary" element={<Mylibrary />} />
                <Route path="/Analytics" element={<Analytics />} />
                <Route path="/Viralpost" element={<Viralpost />} />
                <Route path="/Drafts" element={<Drafts />} />
                <Route path="/Calandar" element={<Calendar />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  )
};

export default App;