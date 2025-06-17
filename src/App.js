import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Bookingpage from './components/Bookingpage';
import ServicesPage from './components/ServicesPage';
import Roomsandsuits from './components/Roomsandsuits';
import RoomDetail from './components/RoomDetails';

function App() {
  return (
    <div> 
      {/* <Homepage /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/booking" element={<Bookingpage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/roomsandsuits" element={<Roomsandsuits />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
