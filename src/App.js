import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product } from './Pages/Product';
import shopHomePage from './Pages/shopHomePage';
import shopCategory from './Pages/shopCategory';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={shopHomePage}/>
        <Route path="/mens" element={<shopCategory category="mens"/>}/>
        <Route path="/womens" element={<shopCategory category="womens"/>}/>
        <Route path="/kids" element={<shopCategory category="kids"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<signupLogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
