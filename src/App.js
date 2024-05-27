
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import TabComponent from './pages/TabComponent';
import FromValidation from './pages/FromValidation';

function App() {
  return (
    <div className='min-h-screen bg-black'>
      <NavBar />
      <Routes>
        <Route path="/" element={<TabComponent />} />
        <Route path="/accordion" element='' />
        <Route path="/slider" element='' />
        <Route path="/from" element={<FromValidation />} />
      </Routes>
    </div>
  );
}

export default App;
