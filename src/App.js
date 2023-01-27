import './App.css';
import { Route, Routes } from 'react-router-dom';
import KidsPage from './pages/KidsPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import NavBar from './components/NavBar';
import CartPage from './pages/ShoppingCart';
import DetailedItem from './pages/DetailedItem';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/detailed/:itemuniqueid" element={<DetailedItem/>} />
      </Routes>
    </>
  );
}

export default App;
