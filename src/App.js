

import './App.css';
import Cart from './Component/Cart/Cart';
import Home from './Component/Layout/Home/Home';
// import Store from './Component/Layout/Store/Store';
import ContactUs from './Component/Layout/ContactUs/ContactUs';
import Navigation from './Component/Layout/Navigation';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Store from './Component/Layout/Store/Store';
// import { Home } from '@mui/icons-material';
import About from './Component/Layout/About/About';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/Store" element={<Store />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route index path="/" element={<Home />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
