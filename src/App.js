
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import TabComponent from './pages/TabComponent';
import Slidescomponents from './pages/Slidescomponents';
import FormValidation from './pages/FormValidation';
import AccordionComponents from './pages/AccordionComponents';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-black'>
      <NavBar  />
      <Routes>
        <Route path="/" element={<TabComponent />} />
        <Route path="/accordion" element={<AccordionComponents />} />
        <Route path="/slider" element={<Slidescomponents />} />
        <Route path="/from" element={<FormValidation />} />
      </Routes>
    </div>
  );
}

export default App;
