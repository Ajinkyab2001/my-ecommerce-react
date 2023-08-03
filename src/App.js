
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
import AuthContext from './Context/AuthContext/AuthContext';
import { useContext } from 'react';


function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    // <BrowserRouter>
    // <AuthcontextProvider>
      <div>
        <Navigation />
        <Routes>
        
        
        <Route index path="/" element={<Home />} /> 
        {isLoggedIn && <Route path="/store" element={<Store />} /> }
         {isLoggedIn && <Route path='/store/:id/:title' element={<ProductDetail />} /> } 
          {isLoggedIn && <Route path='/about' element={<About />} />}
          {isLoggedIn && <Route path='/contactus' element={<ContactUs />} /> }
          {isLoggedIn && <Route path="/cart" element={<Cart />} />}
          {!isLoggedIn && <Route path="/authentication" element={<Auth />} />} 
          
         
        </Routes>
      </div>
      // </AuthcontextProvider>
    // </BrowserRouter>
  );
}

export default App;
