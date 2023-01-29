import './App.css';
import { Route, Routes } from 'react-router-dom';
import KidsPage from './pages/KidsPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import NavBar from './components/NavBar';
import ShoppingCart from './pages/ShoppingCart';
import DetailedItem from './pages/DetailedItem';
import {createContext, useState} from "react"

export const CartQtyContext=createContext()
let dataToStore = JSON.parse(localStorage.getItem('selecteditems')) || [];
function App() {
  const [qtyCart, setQtyCart] = useState(dataToStore.length);
  return (
    <>
      <CartQtyContext.Provider value={[qtyCart,setQtyCart]}>
        <NavBar />
        <Routes>
          <Route path="/" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/detailed/:itemuniqueid" element={<DetailedItem />} />
        </Routes>
      </CartQtyContext.Provider>
    </>
  );
}

export default App;
