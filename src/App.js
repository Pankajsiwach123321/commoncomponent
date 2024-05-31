
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import TabComponent from './pages/TabComponent';
import Slidescomponents from './pages/Slidescomponents';
import FormValidation from './pages/FormValidation';
import AccordionComponents from './pages/AccordionComponents';
import SlideBar from './components/SideBar';
import MoveUp from './pages/MoveUp';
function App() {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
      <div className='flex max-md:flex-col grow'>
        <SlideBar />
        <div className='flex flex-col grow w-full'>
          <NavBar />
          <div className='bg-[#F5F5F5] max-md:pb-12 h-full md:pl-[207px] pt-[124px] md:pe-10 max-md:px-3 grow lg:pl-[301px]'>
            <Routes>
              <Route path="/" element={<TabComponent />} />
              <Route path="/accordion" element={<AccordionComponents />} />
              <Route path="/slider" element={<Slidescomponents />} />
              <Route path="/from" element={<FormValidation />} />
              <Route path="/gsap" element={<MoveUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
