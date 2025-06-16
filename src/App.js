import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Bookingpage from './components/Bookingpage';
import ServicesPage from './components/ServicesPage';


function App() {
  return (
    <div> 
      {/* <Homepage /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/booking" element={<Bookingpage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
