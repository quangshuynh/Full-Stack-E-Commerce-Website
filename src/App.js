import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product } from './Pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<shopHomePage/>}/>
        <Route path="/mens" element={<shopCategory category="mens"/>}/>
        <Route path="/womens" element={<shopCategory category="womens"/>}/>
        <Route path="/kids" element={<shopCategory category="kids"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
