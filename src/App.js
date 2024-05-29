
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import TabComponent from './pages/TabComponent';
import Slidescomponents from './pages/Slidescomponents';
import FormValidation from './pages/FormValidation';
import AccordionComponents from './pages/AccordionComponents';
import SlideBar from './components/SideBar';
function App() {
  return (
    <div className='md:min-h-screen flex flex-col bg-white'>
      <div className='flex max-md:flex-col grow'>
        <SlideBar />
        <div className='md:pl-[207px]  max-md:mb-[82px] md:pe-10 max-md:px-3 lg:pl-[301px] grow w-full'>
          <NavBar />
          <Routes>
            <Route path="/" element={<TabComponent />} />
            <Route path="/accordion" element={<AccordionComponents />} />
            <Route path="/slider" element={<Slidescomponents />} />
            <Route path="/from" element={<FormValidation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
