

import './App.css';
import Cart from './Component/Cart/Cart';
import Home from './Component/Layout/Home/Home';
import ContactUs from './Component/Layout/ContactUs/ContactUs';
import Navigation from './Component/Layout/Navigation';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Store from './Component/Layout/Store/Store';
import About from './Component/Layout/About/About';
import ProductDetail from './Component/Card/ProductDetail';
import Auth from './Component/Layout/Auth/Auth';
import AuthcontextProvider from './Context/AuthContext/AuthcontextProvider';


function App() {
  return (
    <BrowserRouter>
    <AuthcontextProvider>
      <div>
        <Navigation />
        <Routes>
        
        <Route index path="/" element={<Home />} /> 
          <Route path="/store" element={<Store />} /> 
          <Route path='/store/:id/:title' element={<ProductDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/authentication" element={<Auth />} /> 
          
         
        </Routes>
      </div>
      </AuthcontextProvider>
    </BrowserRouter>
  );
}

export default App;
