

import './App.css';
import Cart from './Component/Cart/Cart';
// import Home from './Component/Layout/Home/Home';
// import Store from './Component/Layout/Store/Store';
import Navigation from './Component/Layout/Navigation';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Store from './Component/Layout/Store/Store';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/Store" element={<Store />} /> 
          <Route path="/cart" element={<Cart />} /> 
          {/* <Route path="/" element={<Home />} />  */}
          {/* <Route path="/" element={<Home />} />  */}
          {/* <Route path="/" element={<Home />} />  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
