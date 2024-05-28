
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import TabComponent from './pages/TabComponent';
import FromValidation from './pages/FromValidation';
import Slidescomponents from './pages/Slidescomponents';

function App() {
  return (
    <div className='min-h-screen bg-black'>
      <NavBar />
      <Routes>
        <Route path="/" element={<TabComponent />} />
        <Route path="/accordion" element='' />
        <Route path="/slider" element={<Slidescomponents />} />
        <Route path="/from" element={<FromValidation />} />
      </Routes>
    </div>
  );
}

export default App;
